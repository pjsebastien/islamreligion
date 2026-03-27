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
    "Hadiths authentiques : Sahih Muslim et critères d'authenticité en islam",
  description:
    "Découvrez le Sahih Muslim, la méthodologie de l'imam Muslim et les critères d'authenticité des hadiths en islam. Hadiths célèbres avec texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths authentiques : Sahih Muslim et critères d'authenticité en islam",
    description:
      "Le Sahih Muslim, biographie de l'imam Muslim, critères d'authenticité des hadiths et hadiths célèbres avec texte arabe et traduction française.",
    url: "https://www.islamreligion.fr/hadith-authentique-muslim-islam",
    images: [
      {
        url: "/images/coran-chapelet-tasbih-islam-livre-sacre.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-authentique-muslim-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique" },
  { id: "biographie-imam-muslim", label: "Biographie de l'imam Muslim" },
  { id: "methodologie-sahih-muslim", label: "La méthodologie du Sahih Muslim" },
  { id: "hadiths-celebres", label: "Les hadiths célèbres du Sahih Muslim" },
  { id: "criteres-authenticite", label: "Les critères d'authenticité" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Qu'est-ce que le Sahih Muslim et pourquoi est-il important ?",
    answer:
      "Le Sahih Muslim est le recueil de hadiths compilé par l\u2019imam Muslim ibn al-Hajjaj (821-875). Il est considéré comme le deuxième recueil le plus authentique après le Sahih al-Bukhari. Il contient environ 7 275 hadiths (dont environ 3 033 sans répétitions) rigoureusement sélectionnés parmi 300 000 hadiths étudiés par l\u2019imam Muslim. Son organisation thématique claire en fait une référence pour les savants et les étudiants en sciences islamiques.",
  },
  {
    question:
      "Quelle est la différence entre le Sahih Muslim et le Sahih al-Bukhari ?",
    answer:
      "Les deux recueils partagent un niveau d\u2019authenticité très élevé, mais diffèrent dans leur méthodologie. Al-Bukhari exige que les rapporteurs consécutifs se soient rencontrés de manière prouvée, tandis que Muslim accepte la contemporanéité comme suffisante. En revanche, Muslim excelle dans l\u2019organisation thématique : il regroupe toutes les variantes d\u2019un même hadith au même endroit, ce qui facilite l\u2019étude. Les savants considèrent al-Bukhari comme plus authentique dans l\u2019ensemble, mais Muslim comme mieux organisé.",
  },
  {
    question:
      "Quels sont les cinq critères d'authenticité d'un hadith sahih ?",
    answer:
      "Un hadith est qualifié de sahih (authentique) s\u2019il remplit cinq conditions : 1) une chaîne de transmission continue (ittisal as-sanad), 2) des rapporteurs intègres (adalah), 3) des rapporteurs précis dans leur mémorisation (dabt), 4) l\u2019absence d\u2019anomalie (shudhudh) contredisant des sources plus fiables, 5) l\u2019absence de défaut caché (illa). Si l\u2019un de ces critères fait défaut, le hadith est classé dans une catégorie inférieure.",
  },
  {
    question:
      "Qu'est-ce que le hadith Jibril et pourquoi est-il si célèbre ?",
    answer:
      "Le hadith Jibril (Muslim, n°8) rapporte la venue de l\u2019ange Gabriel sous forme humaine auprès du Prophète \u2018alayhi salatu wa salam. Il lui posa des questions sur l\u2019islam (les cinq piliers), l\u2019iman (les six piliers de la foi) et l\u2019ihsan (l\u2019excellence dans l\u2019adoration). Ce hadith est considéré comme la \u00ab mère de la Sunna \u00bb car il résume l\u2019ensemble de la religion en un seul récit. Les savants l\u2019utilisent comme base pour structurer l\u2019enseignement de l\u2019islam.",
  },
  {
    question:
      "L'imam Muslim a-t-il étudié avec al-Bukhari ?",
    answer:
      "Oui, l\u2019imam Muslim a rencontré al-Bukhari et l\u2019a considéré comme son maître. Il a assisté à ses cours et l\u2019a profondément respecté. Toutefois, Muslim a développé sa propre méthodologie, notamment dans l\u2019organisation de son recueil et dans certains critères de la chaîne de transmission. Cette relation maître-élève montre la continuité de la science du hadith et la rigueur intellectuelle de cette tradition savante.",
  },
  {
    question:
      "Tous les hadiths du Sahih Muslim sont-ils authentiques ?",
    answer:
      "La communauté des savants (ijma) s\u2019accorde sur le fait que tous les hadiths contenus dans le Sahih Muslim sont authentiques (sahih). Quelques hadiths ont fait l\u2019objet de discussions marginales parmi les spécialistes, mais l\u2019immense majorité des savants du hadith, passés et contemporains, confirment l\u2019authenticité de l\u2019ensemble du recueil. C\u2019est pourquoi le Sahih Muslim, avec le Sahih al-Bukhari, est considéré comme le recueil le plus fiable après le Coran.",
  },
  {
    question:
      "Qu'est-ce que l'isnad (chaîne de transmission) d'un hadith ?",
    answer:
      "L\u2019isnad est la chaîne de rapporteurs qui relie le compilateur du hadith jusqu\u2019au Prophète \u2018alayhi salatu wa salam. Chaque maillon de cette chaîne est un savant identifié dont la biographie, la fiabilité et la mémoire ont été étudiées. L\u2019isnad est une spécificité de la civilisation islamique : aucune autre tradition savante dans l\u2019histoire n\u2019a développé un système aussi rigoureux de vérification des sources orales. L\u2019imam Muslim accordait une attention particulière à la qualité de l\u2019isnad dans son Sahih.",
  },
];

export default function HadithAuthentiqueMuslimIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-authentique-muslim-islam/#article",
        headline:
          "Hadiths authentiques : Sahih Muslim et critères d'authenticité en islam",
        description:
          "Découvrez le Sahih Muslim, la méthodologie de l'imam Muslim et les critères d'authenticité des hadiths en islam.",
        image: "/images/coran-chapelet-tasbih-islam-livre-sacre.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-authentique-muslim-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-authentique-muslim-islam/#breadcrumb",
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
            name: "Sahih Muslim et critères d'authenticité",
            item: "https://www.islamreligion.fr/hadith-authentique-muslim-islam",
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
          title="Hadiths authentiques : Sahih Muslim et critères d&apos;authenticité"
          subtitle="Découvrez le Sahih Muslim, la vie de l&apos;imam Muslim, sa méthodologie rigoureuse, les hadiths célèbres de son recueil et les critères d&apos;authenticité en sciences du hadith."
          imageSrc="/images/coran-chapelet-tasbih-islam-livre-sacre.jpg"
          imageAlt="Sahih Muslim, hadiths authentiques et critères d'authenticité en islam"
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
                  Sahih Muslim
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
                    Le Sahih Muslim est le deuxième recueil de hadiths le plus authentique en islam, compilé avec une rigueur exceptionnelle par l&apos;imam Muslim ibn al-Hajjaj au IXe siècle.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Un hadith authentique (sahih) doit remplir cinq critères stricts : chaîne continue, rapporteurs intègres, mémorisation précise, absence d&apos;anomalie et absence de défaut caché.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    L&apos;imam Muslim a sélectionné environ 7 275 hadiths parmi 300 000 qu&apos;il avait étudiés, soit un taux de sélection de moins de 2,5 %.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le hadith Jibril, contenu dans le Sahih Muslim, est considéré comme la &laquo;&nbsp;mère de la Sunna&nbsp;&raquo; car il résume les trois dimensions de la religion : islam, iman et ihsan.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique : la vérification des informations
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;étudier le Sahih Muslim et les critères d&apos;authenticité des hadiths, il est essentiel de comprendre que l&apos;exigence de vérification des sources est d&apos;abord une injonction coranique. Allah a ordonné aux croyants de vérifier toute information avant de l&apos;accepter, posant ainsi les fondements de la science du hadith (<em>ulum al-hadith</em>) qui se développera dans les siècles suivants.
                </p>

                <HadithCard
                  arabic="يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا أَن تُصِيبُوا قَوْمًا بِجَهَالَةٍ فَتُصْبِحُوا عَلَىٰ مَا فَعَلْتُمْ نَادِمِينَ"
                  text="Ô vous qui avez cru ! Si un pervers vous apporte une nouvelle, vérifiez-la, de crainte que vous ne portiez atteinte à des gens par ignorance et que vous ne regrettiez par la suite ce que vous avez fait."
                  source="Coran, sourate Al-Hujurat (49:6)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondateur est considéré par les savants comme la base coranique de la science de la critique des rapporteurs (<em>ilm al-jarh wa at-ta&apos;dil</em>). Il établit le principe que toute information doit être vérifiée en examinant la fiabilité de celui qui la transmet. C&apos;est exactement ce que feront les savants du hadith comme l&apos;imam Muslim : examiner chaque rapporteur de la chaîne de transmission pour s&apos;assurer de son intégrité et de sa précision.
                </p>

                <HadithCard
                  arabic="وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ إِنَّ السَّمْعَ وَالْبَصَرَ وَالْفُؤَادَ كُلُّ أُولَٰئِكَ كَانَ عَنْهُ مَسْئُولًا"
                  text="Et ne poursuis pas ce dont tu n&apos;as aucune connaissance. L&apos;ouïe, la vue et le cœur : sur tout cela, en vérité, on sera interrogé."
                  source="Coran, sourate Al-Isra (17:36)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset renforce l&apos;obligation de rigueur intellectuelle. Le musulman ne doit pas transmettre ou accepter une information sans vérification. C&apos;est cette éthique de la vérification qui a conduit des savants comme l&apos;imam Muslim à voyager pendant des décennies, à étudier la biographie de milliers de rapporteurs et à ne retenir que les hadiths répondant aux critères les plus stricts d&apos;authenticité.
                </p>
              </section>

              {/* ======================================= */}
              {/* SECTION : Biographie de l'imam Muslim   */}
              {/* ======================================= */}
              <section id="biographie-imam-muslim" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Biographie de l&apos;imam Muslim ibn al-Hajjaj
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Abu al-Husayn Muslim ibn al-Hajjaj al-Qushayri an-Naysaburi est né en 206 de l&apos;Hégire (environ 821 après J.-C.) à Nishapur, dans l&apos;actuel Iran. Il grandit dans un environnement de savoir religieux et commença l&apos;étude du hadith dès l&apos;âge de douze ans. Sa quête du savoir le conduisit à voyager à travers le monde islamique pendant plus de quinze années : il visita le Hedjaz, l&apos;Égypte, l&apos;Irak et le Sham (Grande Syrie), collectant des hadiths auprès de centaines de maîtres.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Sa rencontre avec l&apos;imam al-Bukhari à Nishapur fut un tournant dans sa vie intellectuelle. Muslim reconnut en Bukhari un maître inégalé dans la science du hadith et assista à ses cours. Cependant, Muslim développa sa propre approche méthodologique, privilégiant une organisation thématique plus systématique que celle de Bukhari. Il étudia également auprès de grands savants comme Ahmad ibn Hanbal, Ishaq ibn Rahawayh et Yahya ibn Yahya an-Naysaburi.
                </p>

                <HadithBlock
                  number={1}
                  title="L&apos;importance de l&apos;isnad selon le Prophète ﷺ"
                  narrator="Abu Hurayra"
                  arabic="يَكُونُ فِي آخِرِ الزَّمَانِ دَجَّالُونَ كَذَّابُونَ يَأْتُونَكُمْ مِنَ الأَحَادِيثِ بِمَا لَمْ تَسْمَعُوا أَنْتُمْ وَلاَ آبَاؤُكُمْ فَإِيَّاكُمْ وَإِيَّاهُمْ لاَ يُضِلُّونَكُمْ وَلاَ يَفْتِنُونَكُمْ"
                  translation="Il y aura à la fin des temps des imposteurs et des menteurs qui vous apporteront des hadiths que ni vous ni vos pères n&apos;aurez entendus. Prenez garde à eux afin qu&apos;ils ne vous égarent ni ne vous tentent."
                  source="Sahih Muslim, n°7 (introduction)"
                  grade="sahih"
                  explanation="L&apos;imam Muslim a placé ce hadith dans l&apos;introduction de son Sahih pour justifier l&apos;importance de la vérification des hadiths. Le Prophète ﷺ a lui-même prévenu de l&apos;apparition de faussaires qui inventeraient des paroles en les lui attribuant. Ce hadith montre que la science du hadith répond à un besoin annoncé par le Prophète ﷺ. Il est la raison d&apos;être du travail monumental de savants comme Muslim, qui ont consacré leur vie à distinguer le vrai du faux dans la transmission prophétique."
                />

                <HadithBlock
                  number={2}
                  title="La chaîne de transmission fait partie de la religion"
                  narrator="Muhammad ibn Sirin"
                  arabic="إِنَّ هَذَا الْعِلْمَ دِينٌ فَانْظُرُوا عَمَّنْ تَأْخُذُونَ دِينَكُمْ"
                  translation="Cette science est une religion, alors regardez de qui vous prenez votre religion."
                  source="Sahih Muslim, introduction"
                  grade="sahih"
                  explanation="Cette parole d&apos;Ibn Sirin, rapportée par Muslim dans son introduction, résume toute la philosophie de la science du hadith. Elle signifie que la transmission des hadiths n&apos;est pas une affaire anodine : c&apos;est une question religieuse qui engage la responsabilité du transmetteur devant Allah. Muslim l&apos;a placée dans son introduction pour expliquer pourquoi il a été si rigoureux dans la sélection de ses rapporteurs. Seuls les rapporteurs dont l&apos;intégrité morale et la précision de mémorisation étaient établies ont été retenus dans son Sahih."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;imam Muslim décéda en 261 de l&apos;Hégire (875 après J.-C.) à Nishapur, à l&apos;âge de cinquante-cinq ans. Il laissa derrière lui un héritage intellectuel colossal, dont le Sahih Muslim reste la pièce maîtresse. Les savants rapportent qu&apos;il mit environ quinze années à compiler son recueil, sélectionnant environ 7 275 hadiths (avec répétitions) parmi les 300 000 qu&apos;il avait mémorisés et étudiés au cours de ses voyages.
                </p>
              </section>

              {/* ============================================= */}
              {/* SECTION : La méthodologie du Sahih Muslim     */}
              {/* ============================================= */}
              <section id="methodologie-sahih-muslim" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La méthodologie du Sahih Muslim
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La méthodologie de l&apos;imam Muslim dans son Sahih se distingue par plusieurs caractéristiques remarquables. Contrairement à al-Bukhari qui répartit les variantes d&apos;un même hadith dans différents chapitres, Muslim regroupe toutes les versions (<em>turuq</em>) d&apos;un hadith au même endroit. Cette approche facilite considérablement l&apos;étude comparée des différentes chaînes de transmission et des variations textuelles.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Sahih Muslim est organisé en 54 livres (<em>kitab</em>) couvrant l&apos;ensemble des thèmes religieux : la foi, la purification, la prière, la zakat, le jeûne, le pèlerinage, le mariage, les transactions commerciales, la justice, le jihad, les vertus des Compagnons, le destin, les signes de la fin des temps, et bien d&apos;autres. Chaque livre est subdivisé en chapitres (<em>bab</em>) dont les titres, bien que plus sobres que ceux de Bukhari, indiquent clairement le sujet traité.
                </p>

                <HadithBlock
                  number={3}
                  title="Les actes ne valent que par les intentions"
                  narrator="Umar ibn al-Khattab"
                  arabic="إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوِ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ"
                  translation="Les actes ne valent que par les intentions, et chacun n&apos;aura que ce qu&apos;il a eu l&apos;intention de faire. Celui dont l&apos;émigration est pour Allah et Son Messager, son émigration est pour Allah et Son Messager. Et celui dont l&apos;émigration est pour un bien mondain qu&apos;il veut obtenir ou une femme qu&apos;il veut épouser, son émigration est pour ce vers quoi il a émigré."
                  source="Sahih Muslim, n°1907"
                  grade="sahih"
                  explanation="Ce hadith, l&apos;un des plus célèbres de la Sunna, est rapporté par Muslim et Bukhari. Il pose le principe fondamental de l&apos;intention (niyya) dans l&apos;islam : aucun acte n&apos;a de valeur auprès d&apos;Allah sans une intention sincère. Les savants l&apos;ont qualifié de &laquo; tiers de la science &raquo; car il s&apos;applique à tous les domaines de la pratique religieuse. L&apos;imam Muslim l&apos;a inclus dans le chapitre de l&apos;émirat (al-imara), illustrant que même l&apos;acte le plus noble — l&apos;émigration — perd sa valeur si l&apos;intention n&apos;est pas pure."
                />

                <HadithBlock
                  number={4}
                  title="L&apos;interdiction de rapporter tout ce qu&apos;on entend"
                  narrator="Abu Hurayra"
                  arabic="كَفَى بِالْمَرْءِ كَذِبًا أَنْ يُحَدِّثَ بِكُلِّ مَا سَمِعَ"
                  translation="Il suffit à un homme comme mensonge de rapporter tout ce qu&apos;il entend."
                  source="Sahih Muslim, introduction"
                  grade="sahih"
                  explanation="Ce hadith, placé par Muslim dans son introduction, avertit contre la transmission aveugle des informations. Il ne suffit pas d&apos;avoir entendu quelque chose pour la transmettre : il faut vérifier sa véracité. Ce principe est au cœur de la méthodologie du Sahih Muslim. L&apos;imam Muslim a appliqué cette règle avec une rigueur extrême, rejetant tout hadith dont la chaîne de transmission comportait le moindre doute. Ce hadith est aussi une leçon universelle sur la responsabilité de la parole, particulièrement pertinente à l&apos;ère des réseaux sociaux."
                />

                <HadithBlock
                  number={5}
                  title="L&apos;islam est bâti sur cinq piliers"
                  narrator="Ibn Umar"
                  arabic="بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ وَإِقَامِ الصَّلاَةِ وَإِيتَاءِ الزَّكَاةِ وَالْحَجِّ وَصَوْمِ رَمَضَانَ"
                  translation="L&apos;islam est bâti sur cinq (piliers) : l&apos;attestation qu&apos;il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah et que Muhammad est le Messager d&apos;Allah, l&apos;accomplissement de la prière, l&apos;acquittement de la zakat, le pèlerinage et le jeûne du mois de Ramadan."
                  source="Sahih Muslim, n°16"
                  grade="sahih"
                  explanation="Ce hadith fondamental définit les cinq piliers de l&apos;islam. Muslim l&apos;a placé au début de son recueil, dans le Livre de la foi (Kitab al-Iman), montrant que la pratique religieuse repose sur ces cinq actes fondamentaux. L&apos;ordre des piliers est significatif : la shahada (attestation de foi) vient en premier car elle est la condition de validité de tous les autres actes. Les savants notent que Muslim a inversé l&apos;ordre du pèlerinage et du jeûne par rapport à la version de Bukhari, illustrant les variations légitimes dans la transmission orale."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Une particularité notable du Sahih Muslim est sa préface (<em>muqaddima</em>), dans laquelle l&apos;imam Muslim expose sa méthodologie, défend l&apos;importance de l&apos;isnad et critique ceux qui transmettent des hadiths sans vérification. Cette introduction est elle-même une source précieuse pour comprendre les principes de la science du hadith au IIIe siècle de l&apos;Hégire. Muslim y expose également les raisons qui l&apos;ont poussé à compiler son recueil : répondre au besoin des musulmans de disposer d&apos;un corpus fiable et accessible de hadiths authentiques.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences du hadith"
                description="Étudiez la méthodologie du hadith, les critères d&apos;authenticité et les grandes collections avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================================= */}
              {/* SECTION : Les hadiths célèbres               */}
              {/* ============================================= */}
              <section id="hadiths-celebres" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les hadiths célèbres du Sahih Muslim
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Sahih Muslim contient certains des hadiths les plus célèbres et les plus fondamentaux de la Sunna. Ces hadiths, transmis avec des chaînes de transmission irréprochables, constituent la base de la jurisprudence, de la théologie et de la spiritualité islamiques. Voici une sélection des hadiths les plus marquants du recueil.
                </p>

                <HadithBlock
                  number={6}
                  title="Le hadith de Jibril : la mère de la Sunna"
                  narrator="Umar ibn al-Khattab"
                  arabic="بَيْنَمَا نَحْنُ عِنْدَ رَسُولِ اللَّهِ صلى الله عليه وسلم ذَاتَ يَوْمٍ إِذْ طَلَعَ عَلَيْنَا رَجُلٌ شَدِيدُ بَيَاضِ الثِّيَابِ شَدِيدُ سَوَادِ الشَّعَرِ لاَ يُرَى عَلَيْهِ أَثَرُ السَّفَرِ وَلاَ يَعْرِفُهُ مِنَّا أَحَدٌ"
                  translation="Alors que nous étions assis auprès du Messager d&apos;Allah ﷺ un jour, un homme aux vêtements d&apos;une blancheur éclatante et aux cheveux d&apos;un noir intense se présenta à nous. On ne voyait sur lui aucune trace de voyage et aucun d&apos;entre nous ne le connaissait."
                  source="Sahih Muslim, n°8"
                  grade="sahih"
                  explanation="Ce hadith, connu sous le nom de &laquo; hadith de Jibril &raquo;, est l&apos;un des textes les plus importants de toute la Sunna. Il rapporte la venue de l&apos;ange Gabriel sous forme humaine, qui questionna le Prophète ﷺ sur l&apos;islam (les cinq piliers), l&apos;iman (les six piliers de la foi) et l&apos;ihsan (adorer Allah comme si tu Le voyais). Les savants l&apos;ont qualifié de &laquo; mère de la Sunna &raquo; (umm as-sunna) car il résume l&apos;ensemble de la religion en un seul récit. An-Nawawi l&apos;a placé comme deuxième hadith dans ses Quarante hadiths, soulignant son importance capitale."
                />

                <HadithBlock
                  number={7}
                  title="La religion est le bon conseil (nasiha)"
                  narrator="Tamim ad-Dari"
                  arabic="الدِّينُ النَّصِيحَةُ قُلْنَا لِمَنْ قَالَ لِلَّهِ وَلِكِتَابِهِ وَلِرَسُولِهِ وَلأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ"
                  translation="La religion, c&apos;est le bon conseil (nasiha). Nous avons demandé : envers qui ? Il a répondu : envers Allah, envers Son Livre, envers Son Messager, envers les dirigeants des musulmans et envers l&apos;ensemble des musulmans."
                  source="Sahih Muslim, n°55"
                  grade="sahih"
                  explanation="Ce hadith définit la religion par le concept de nasiha, qui englobe la sincérité, le conseil bienveillant et la loyauté. La nasiha envers Allah signifie croire en Lui sincèrement et Lui obéir. La nasiha envers le Coran signifie le lire, le méditer et le mettre en pratique. La nasiha envers le Prophète ﷺ signifie suivre sa Sunna. La nasiha envers les dirigeants signifie leur obéir dans le bien et les conseiller. La nasiha envers les musulmans signifie leur vouloir du bien. Ce hadith montre que l&apos;islam est une religion fondée sur la bienveillance mutuelle."
                />

                <HadithBlock
                  number={8}
                  title="Celui qui innove dans notre affaire ce qui n&apos;en fait pas partie"
                  narrator="Aisha"
                  arabic="مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْهُ فَهُوَ رَدٌّ"
                  translation="Celui qui innove dans notre affaire (la religion) ce qui n&apos;en fait pas partie, cela est rejeté."
                  source="Sahih Muslim, n°1718"
                  grade="sahih"
                  explanation="Ce hadith est un pilier de la jurisprudence islamique. Il établit le principe selon lequel toute innovation religieuse qui n&apos;a pas de fondement dans le Coran et la Sunna est rejetée. Les savants des quatre écoles utilisent ce hadith pour évaluer la validité des pratiques religieuses. L&apos;imam Muslim l&apos;a inclus dans le Livre des jugements (Kitab al-Aqdiya), montrant qu&apos;il s&apos;applique aussi au domaine juridique : tout jugement non fondé sur les sources est invalide. An-Nawawi a qualifié ce hadith de &laquo; grand fondement de l&apos;islam &raquo;."
                />

                <HadithBlock
                  number={9}
                  title="Allah ne regarde ni vos corps ni vos apparences"
                  narrator="Abu Hurayra"
                  arabic="إِنَّ اللَّهَ لاَ يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ"
                  translation="Allah ne regarde ni vos apparences ni vos biens, mais Il regarde vos cœurs et vos actes."
                  source="Sahih Muslim, n°2564"
                  grade="sahih"
                  explanation="Ce hadith, propre au Sahih Muslim, est d&apos;une profondeur spirituelle remarquable. Il enseigne que la valeur d&apos;un être humain auprès d&apos;Allah ne réside ni dans son apparence physique ni dans sa richesse matérielle, mais dans la pureté de son cœur et la qualité de ses actes. Ce hadith est un remède contre l&apos;orgueil, le matérialisme et le jugement superficiel. Il rappelle que le véritable succès est intérieur et que la piété du cœur est le critère ultime de valeur auprès d&apos;Allah. Les soufis comme les juristes s&apos;appuient sur ce hadith pour souligner l&apos;importance de l&apos;intention sincère."
                />
              </section>

              {/* ============================================= */}
              {/* SECTION : Les critères d'authenticité         */}
              {/* ============================================= */}
              <section id="criteres-authenticite" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les critères d&apos;authenticité d&apos;un hadith
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La science du hadith (<em>ulum al-hadith</em>) a établi des critères précis pour évaluer l&apos;authenticité d&apos;un hadith. Un hadith est qualifié de &laquo;&nbsp;sahih&nbsp;&raquo; (authentique) lorsqu&apos;il remplit cinq conditions essentielles, définies par les grands spécialistes comme Ibn as-Salah, An-Nawawi et Ibn Hajar al-Asqalani. Ces critères s&apos;appliquent à la fois à la chaîne de transmission (<em>isnad</em>) et au texte (<em>matn</em>) du hadith.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  <strong>Les cinq conditions du hadith sahih sont :</strong> (1) la continuité de la chaîne de transmission (<em>ittisal as-sanad</em>), c&apos;est-à-dire que chaque rapporteur a effectivement reçu le hadith de celui qui le précède ; (2) l&apos;intégrité morale des rapporteurs (<em>adalah</em>), signifiant qu&apos;ils sont musulmans, pubères, sains d&apos;esprit et exempts de perversité ; (3) la précision de mémorisation (<em>dabt</em>), garantissant que le rapporteur transmet le hadith fidèlement ; (4) l&apos;absence d&apos;anomalie (<em>shudhudh</em>), c&apos;est-à-dire que le hadith ne contredit pas une version rapportée par un rapporteur plus fiable ; (5) l&apos;absence de défaut caché (<em>illa</em>), un défaut subtil que seuls les experts peuvent détecter.
                </p>

                <HadithBlock
                  number={10}
                  title="Le menteur sur le Prophète ﷺ"
                  narrator="Abu Hurayra"
                  arabic="مَنْ كَذَبَ عَلَىَّ مُتَعَمِّدًا فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ"
                  translation="Celui qui ment délibérément sur moi, qu&apos;il prépare sa place en Enfer."
                  source="Sahih Muslim, n°3"
                  grade="sahih"
                  explanation="Ce hadith, rapporté par Muslim dans son introduction, est considéré comme mutawatir (transmis par un si grand nombre de rapporteurs à chaque génération qu&apos;il est impossible de le contester). Il montre la gravité du mensonge attribué au Prophète ﷺ et explique pourquoi les savants du hadith ont été si rigoureux dans leur travail de vérification. Ce hadith est la motivation première de toute la science de la critique des rapporteurs : chaque mensonge attribué au Prophète ﷺ est un crime religieux dont les conséquences sont l&apos;Enfer."
                />

                <HadithBlock
                  number={11}
                  title="Fais-toi craindre Allah où que tu sois"
                  narrator="Abu Dharr et Mu&apos;adh ibn Jabal"
                  arabic="اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ"
                  translation="Crains Allah où que tu sois, fais suivre la mauvaise action par une bonne action qui l&apos;effacera, et comporte-toi envers les gens avec un bon caractère."
                  source="Sahih Muslim, n°2750"
                  grade="sahih"
                  explanation="Ce hadith réunit les trois dimensions de la pratique religieuse : la relation avec Allah (la taqwa), la relation avec soi-même (le repentir par les bonnes actions) et la relation avec les autres (le bon caractère). Les savants le considèrent comme l&apos;un des hadiths les plus complets de la Sunna. An-Nawawi l&apos;a inclus dans ses Quarante hadiths (hadith n°18) en raison de sa portée universelle. L&apos;imam Muslim l&apos;a rapporté dans le chapitre du repentir, montrant que la miséricorde divine est accessible à quiconque se repent sincèrement et améliore son comportement."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La classification des hadiths ne se limite pas au &laquo;&nbsp;sahih&nbsp;&raquo;. Les savants distinguent également le hadith &laquo;&nbsp;hasan&nbsp;&raquo; (bon), dont les rapporteurs ont une mémorisation légèrement inférieure mais restent fiables ; le hadith &laquo;&nbsp;da&apos;if&nbsp;&raquo; (faible), qui ne remplit pas toutes les conditions ; et le hadith &laquo;&nbsp;mawdu&apos;&nbsp;&raquo; (inventé), qui est un faux attribué au Prophète ﷺ. L&apos;imam Muslim n&apos;a inclus dans son Sahih que des hadiths répondant aux critères les plus stricts d&apos;authenticité, ce qui en fait une référence incontournable pour les savants de toutes les époques.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le Sahih Muslim
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Sahih Muslim a fait l&apos;objet de nombreux commentaires par les plus grands savants de l&apos;islam. Le commentaire le plus célèbre est celui de l&apos;imam An-Nawawi, intitulé <em>Al-Minhaj fi Sharh Sahih Muslim</em>, qui reste la référence incontournable pour l&apos;étude de ce recueil.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le Sahih Muslim est le livre le plus authentique après le Sahih al-Bukhari. Muslim a excellé dans l&apos;organisation de son recueil et dans le regroupement des variantes d&apos;un même hadith en un seul endroit, ce qui en fait un outil précieux pour le savant et l&apos;étudiant.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Al-Minhaj fi Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Muslim a suivi une méthode qui lui est propre dans la condition de la contemporanéité des rapporteurs. Il n&apos;exige pas la preuve de la rencontre effective comme le fait al-Bukhari, mais se contente de la possibilité de rencontre. Cette différence méthodologique n&apos;affecte pas la fiabilité de son recueil, car les autres conditions sont maintenues avec la plus grande rigueur.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Sharh Nukhbat al-Fikar</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le Sahih Muslim et le Sahih al-Bukhari sont les deux livres les plus authentiques après le Livre d&apos;Allah. La communauté des savants s&apos;accorde sur l&apos;acceptation de leurs hadiths et sur l&apos;obligation d&apos;agir selon eux. Celui qui remet en cause un hadith de ces deux recueils doit apporter une preuve solide et ne peut le faire par simple opinion personnelle.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Taymiyya, <em>Majmu al-Fatawa</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces témoignages des plus grands savants de l&apos;islam confirment la place éminente du Sahih Muslim dans le patrimoine intellectuel musulman. Le commentaire d&apos;An-Nawawi, rédigé au VIIe siècle de l&apos;Hégire, est encore aujourd&apos;hui enseigné dans les universités islamiques du monde entier. Il explique le sens des hadiths, précise les règles juridiques qui en découlent et contextualise les enseignements prophétiques dans le cadre global de la science islamique.
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
                  L&apos;étude du Sahih Muslim et des critères d&apos;authenticité des hadiths offre des enseignements concrets pour le musulman contemporain :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Vérifier les sources avant de transmettre
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Coran et la Sunna imposent la vérification des informations. Avant de partager un hadith, assurez-vous qu&apos;il est authentique en consultant les recueils reconnus comme le Sahih Muslim et le Sahih al-Bukhari.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Comprendre la rigueur de la science du hadith
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        L&apos;imam Muslim a examiné 300 000 hadiths pour n&apos;en retenir que 7 275. Cette rigueur exceptionnelle montre que la Sunna n&apos;est pas un corpus accepté sans examen, mais le fruit d&apos;un travail critique sans précédent dans l&apos;histoire.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Accorder la priorité à l&apos;intention dans chaque acte
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le hadith des intentions (Muslim, n°1907) enseigne que la valeur d&apos;un acte dépend de son intention. Avant chaque action, le musulman doit purifier son intention et la diriger vers la satisfaction d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne pas juger les gens sur les apparences
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le hadith &laquo;&nbsp;Allah ne regarde ni vos apparences ni vos biens&nbsp;&raquo; (Muslim, n°2564) rappelle que la vraie valeur d&apos;une personne réside dans la pureté de son cœur et la qualité de ses actes, non dans son statut social ou son apparence.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Pratiquer le bon conseil (nasiha) envers tous
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le hadith de la nasiha (Muslim, n°55) définit la religion comme un bon conseil sincère envers Allah, Son Livre, Son Messager, les dirigeants et l&apos;ensemble des musulmans. Le musulman doit cultiver cette bienveillance à tous les niveaux.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Étudier les sciences islamiques auprès de savants qualifiés
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        L&apos;imam Muslim a voyagé pendant quinze ans pour apprendre auprès des meilleurs maîtres. Cet exemple montre que la science religieuse ne s&apos;acquiert pas seul mais auprès de savants dont la chaîne de transmission remonte aux premières générations.
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
                  description="Comprenez les hadiths du Sahih Muslim dans leur langue originale et approfondissez votre connaissance des sciences islamiques."
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
                  title="Les hadiths du Sahih al-Bukhari : le recueil le plus authentique"
                  description="Découvrez le Sahih al-Bukhari, sa méthodologie et ses hadiths les plus célèbres."
                  href="/hadith-bukhari-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Qu&apos;est-ce qu&apos;un hadith ? Définition et sciences du hadith"
                  description="Comprendre la définition du hadith, les différentes catégories et la méthodologie de classification."
                  href="/hadith-definition-sciences-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les hadiths du Prophète Muhammad ﷺ : fondements et collections"
                  description="Découvrez l&apos;histoire des grandes collections de hadiths et les critères d&apos;authenticité."
                  href="/hadith-prophete-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
