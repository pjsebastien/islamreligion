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
    "Hadiths sur la tristesse en islam : paroles prophétiques sur le chagrin et la consolation",
  description:
    "Découvrez les hadiths authentiques sur la tristesse en islam : invocations contre l&apos;anxiété, patience dans le chagrin, expiation des péchés par les épreuves. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths sur la tristesse en islam : paroles prophétiques sur le chagrin et la consolation",
    description:
      "Les hadiths authentiques sur la tristesse en islam : du&apos;a contre l&apos;anxiété, patience face au chagrin, soulagement après la difficulté et récompense divine pour le croyant éprouvé.",
    url: "https://www.islamreligion.fr/hadith-tristesse-islam",
    images: [
      {
        url: "/images/mains-priere-doua-islam-invocation.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-tristesse-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique de la tristesse" },
  { id: "expiation-peches", label: "La tristesse expie les péchés" },
  { id: "invocations", label: "Invocations contre la tristesse" },
  { id: "patience-chagrin", label: "La patience dans le chagrin" },
  { id: "epreuves-croyant", label: "Le croyant face aux épreuves" },
  { id: "soulagement", label: "Le soulagement après la difficulté" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur la tristesse en islam ?",
    answer:
      "Les hadiths les plus importants sur la tristesse incluent celui rapporté par Abu Sa\u2019id al-Khudri sur l\u2019expiation des péchés par toute affliction (Bukhari 5641), la du\u2019a du Prophète contre le souci et la tristesse (Bukhari 6369), et le hadith de Mus\u2019ab ibn Sa\u2019d sur l\u2019épreuve proportionnelle à la foi (Tirmidhi 2398). Ces hadiths couvrent les fondements de la vision islamique du chagrin : purification, invocation et patience.",
  },
  {
    question:
      "Quelle est la du\u2019a du Prophète contre la tristesse et l\u2019anxiété ?",
    answer:
      "La du\u2019a la plus connue est : \u00ab Allahumma inni a\u2019udhu bika min al-hammi wal-hazani, wal-\u2019ajzi wal-kasali, wal-bukhli wal-jubni, wa dal\u2019i d-dayni wa ghalabati r-rijal \u00bb (Bukhari 6369). Elle demande la protection d\u2019Allah contre le souci, la tristesse, l\u2019incapacité, la paresse, l\u2019avarice, la lâcheté, le poids des dettes et la domination des hommes.",
  },
  {
    question: "La tristesse est-elle un péché en islam ?",
    answer:
      "Non, la tristesse n\u2019est pas un péché en islam. Le Prophète lui-même a connu la tristesse, notamment lors de l\u2019année de la tristesse (\u2019am al-huzn) après la perte de Khadija et d\u2019Abu Talib. L\u2019islam enseigne que la tristesse est une émotion naturelle qui peut même être source de purification des péchés. Ce qui est demandé au croyant, c\u2019est de ne pas se laisser submerger et de chercher refuge auprès d\u2019Allah.",
  },
  {
    question:
      "Comment le Prophète Muhammad a-t-il vécu la tristesse ?",
    answer:
      "Le Prophète a vécu des épreuves intenses : la perte de six de ses enfants de son vivant, le décès de son épouse Khadija et de son oncle Abu Talib la même année, les persécutions des Quraysh et la mort de nombreux compagnons. Il pleurait lors de ces épreuves et disait : \u00ab L\u2019\u0153il pleure, le c\u0153ur est triste, mais nous ne disons que ce qui plaît à notre Seigneur \u00bb (Bukhari 1303).",
  },
  {
    question: "Est-il permis de pleurer en islam ?",
    answer:
      "Oui, pleurer est permis et même naturel en islam. Le Prophète a pleuré à la mort de son fils Ibrahim et a dit que c\u2019est une miséricorde qu\u2019Allah place dans le c\u0153ur de Ses serviteurs. Ce qui est interdit, c\u2019est la lamentation excessive (niyaha) qui consiste à se frapper, déchirer ses vêtements ou crier de manière incontrôlée. Les pleurs silencieux et les larmes sont une marque de sensibilité, non de faiblesse.",
  },
  {
    question:
      "Que faire quand on est triste selon les enseignements islamiques ?",
    answer:
      "Les hadiths recommandent plusieurs remèdes : réciter les invocations prophétiques contre la tristesse, multiplier le dhikr (rappel d\u2019Allah), lire le Coran, accomplir la prière, se confier à des proches de confiance et patienter en espérant la récompense d\u2019Allah. Le Prophète a aussi enseigné que la du\u2019a d\u2019Abdallah ibn Mas\u2019ud dissipe la tristesse et la remplace par la joie (Ahmad 3712).",
  },
  {
    question: "Pourquoi les croyants sont-ils les plus éprouvés ?",
    answer:
      "Le Prophète a dit : \u00ab Les gens les plus éprouvés sont les prophètes, puis les meilleurs parmi les gens, puis les meilleurs \u00bb (Tirmidhi 2398). Les savants expliquent que l\u2019épreuve est proportionnelle à la foi car elle est un honneur et une élévation de degré. Plus le croyant est proche d\u2019Allah, plus il est purifié par les épreuves, comme l\u2019or est purifié par le feu.",
  },
  {
    question: "La tristesse peut-elle être un signe de faiblesse de foi ?",
    answer:
      "Non, la tristesse en soi n\u2019est pas un signe de faiblesse de foi. Les prophètes eux-mêmes ont connu la tristesse : Ya\u2019qub a pleuré jusqu\u2019à perdre la vue à cause de la séparation d\u2019avec Yusuf. Ce qui distingue le croyant, c\u2019est sa réaction face à la tristesse : il patiente, invoque Allah, accepte le décret divin et garde espoir en la miséricorde d\u2019Allah, tout en ressentant la douleur naturelle de l\u2019épreuve.",
  },
];

export default function HadithTristesseIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-tristesse-islam/#article",
        headline:
          "Hadiths sur la tristesse en islam : paroles prophétiques sur le chagrin et la consolation",
        description:
          "Découvrez les hadiths authentiques sur la tristesse en islam : invocations contre l\u2019anxiété, patience dans le chagrin, expiation des péchés par les épreuves.",
        image: "/images/mains-priere-doua-islam-invocation.jpg",
        datePublished: "2026-05-04",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-tristesse-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-tristesse-islam/#breadcrumb",
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
            name: "Hadiths sur la tristesse",
            item: "https://www.islamreligion.fr/hadith-tristesse-islam",
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
          title="Hadiths sur la tristesse en islam"
          subtitle="Les enseignements prophétiques sur le chagrin, la patience face aux épreuves, les invocations contre la tristesse et la consolation divine selon la Sunna authentique."
          imageSrc="/images/mains-priere-doua-islam-invocation.jpg"
          imageAlt="Hadiths sur la tristesse en islam, invocations et patience"
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
                  Hadiths sur la tristesse
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
                    La tristesse n&apos;est pas un péché en islam : le Prophète ﷺ lui-même a connu le chagrin et a pleuré lors de la perte de ses proches.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Toute affliction, même la piqûre d&apos;une épine, est une cause d&apos;expiation des péchés pour le croyant qui patiente.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ a enseigné des invocations spécifiques contre la tristesse et l&apos;anxiété, à réciter quotidiennement.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Après chaque difficulté vient un soulagement : c&apos;est une promesse divine répétée dans le Coran et confirmée par la Sunna.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique de la tristesse en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Coran aborde la tristesse avec une profondeur remarquable. Allah reconnaît la douleur humaine, console Ses serviteurs et leur promet le soulagement. Plusieurs versets posent les fondements sur lesquels s&apos;appuient les hadiths du Prophète ﷺ concernant le chagrin et la patience.
                </p>

                <HadithCard
                  arabic="فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا"
                  text="Car certes, avec la difficulté vient la facilité. Certes, avec la difficulté vient la facilité."
                  source="Coran, sourate Ash-Sharh (94:5-6)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La répétition de cette promesse divine souligne sa certitude absolue. Les savants notent qu&apos;Allah a utilisé le défini pour &laquo;&nbsp;la difficulté&nbsp;&raquo; (<em>al-&apos;usr</em>) et l&apos;indéfini pour &laquo;&nbsp;une facilité&nbsp;&raquo; (<em>yusran</em>), ce qui signifie, selon la règle linguistique arabe, qu&apos;une seule difficulté ne peut vaincre deux facilités.
                </p>

                <HadithCard
                  arabic="وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ"
                  text="Ne vous laissez pas abattre, ne vous affligez pas alors que vous êtes les supérieurs, si vous êtes de vrais croyants."
                  source="Coran, sourate Al-Imran (3:139)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset, révélé après la défaite d&apos;Uhud, montre qu&apos;Allah ne reproche pas aux croyants de ressentir la tristesse, mais les exhorte à ne pas s&apos;y noyer. La foi est présentée comme un rempart contre le désespoir. La tristesse est reconnue comme une réalité humaine, mais elle ne doit pas devenir un état permanent qui paralyse le croyant.
                </p>

                <HadithCard
                  arabic="أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ"
                  text="N&apos;est-ce pas par le rappel d&apos;Allah que les coeurs se tranquillisent ?"
                  source="Coran, sourate Ar-Ra&apos;d (13:28)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondamental établit le dhikr comme remède souverain contre la tristesse. Les hadiths que nous allons découvrir détaillent les formes concrètes de ce rappel : invocations spécifiques, patience, acceptation du décret divin et espoir en la miséricorde d&apos;Allah.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Expiation des péchés */}
              {/* ============================== */}
              <section id="expiation-peches" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La tristesse expie les péchés du croyant
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des enseignements les plus consolants de la Sunna est que la tristesse et les afflictions du croyant ne sont jamais vaines. Chaque douleur, aussi minime soit-elle, est une cause de purification et d&apos;expiation des péchés. Le Prophète ﷺ a affirmé ce principe à plusieurs reprises.
                </p>

                <HadithBlock
                  number={1}
                  title="Toute affliction est une expiation"
                  narrator="Abu Sa&apos;id al-Khudri et Abu Hurayra"
                  arabic="مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلَا وَصَبٍ وَلَا هَمٍّ وَلَا حُزْنٍ وَلَا أَذًى وَلَا غَمٍّ حَتَّى الشَّوْكَةِ يُشَاكُهَا إِلَّا كَفَّرَ اللَّهُ بِهَا مِنْ خَطَايَاهُ"
                  translation="Aucune fatigue, maladie, souci, tristesse, gêne ou chagrin n&apos;atteint le musulman, pas même une épine qui le pique, sans qu&apos;Allah ne lui efface par cela une partie de ses péchés."
                  source="Sahih Al-Bukhari, n°5641 — Sahih Muslim, n°2573"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus consolants de toute la Sunna. Le Prophète ﷺ énumère six types d&apos;afflictions — de la plus grave à la plus légère — et conclut par l&apos;image de l&apos;épine pour montrer que rien n&apos;est perdu. Le terme &laquo; huzn &raquo; (tristesse) est explicitement mentionné. Les savants expliquent que cette expiation est automatique pour le croyant qui patiente, sans qu&apos;il ait besoin de la rechercher. Ce hadith transforme la vision du croyant sur ses souffrances : elles deviennent un moyen de purification."
                />

                <HadithBlock
                  number={2}
                  title="Les larmes du Prophète ﷺ à la mort de son fils Ibrahim"
                  narrator="Anas ibn Malik"
                  arabic="إِنَّ الْعَيْنَ تَدْمَعُ وَالْقَلْبَ يَحْزَنُ وَلَا نَقُولُ إِلَّا مَا يَرْضَى رَبُّنَا وَإِنَّا بِفِرَاقِكَ يَا إِبْرَاهِيمُ لَمَحْزُونُونَ"
                  translation="L&apos;oeil pleure, le coeur est triste, mais nous ne disons que ce qui plaît à notre Seigneur. Et nous sommes, par ta séparation, ô Ibrahim, certes affligés."
                  source="Sahih Al-Bukhari, n°1303 — Sahih Muslim, n°2315"
                  grade="sahih"
                  explanation="Ce hadith est un témoignage poignant de la tristesse du Prophète ﷺ à la mort de son fils Ibrahim. Il montre que la tristesse et les larmes sont des réactions naturelles et permises. La phrase &laquo; nous ne disons que ce qui plaît à notre Seigneur &raquo; établit la limite : la tristesse ne doit pas conduire à des paroles de révolte contre le décret divin. Le Prophète ﷺ donne ici l&apos;exemple parfait de l&apos;équilibre entre l&apos;émotion humaine et la soumission à Allah."
                />

                <HadithBlock
                  number={3}
                  title="La fièvre purifie les péchés comme le soufflet purifie le fer"
                  narrator="Jabir ibn Abdillah"
                  arabic="قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لِأُمِّ السَّائِبِ أَوْ أُمِّ الْمُسَيَّبِ: لَا تَسُبِّي الْحُمَّى فَإِنَّهَا تُذْهِبُ خَطَايَا ابْنِ آدَمَ كَمَا يُذْهِبُ الْكِيرُ خَبَثَ الْحَدِيدِ"
                  translation="Le Messager d&apos;Allah ﷺ a dit à Umm as-Sa&apos;ib : &laquo; Ne maudis pas la fièvre, car elle efface les péchés du fils d&apos;Adam comme le soufflet efface les impuretés du fer. &raquo;"
                  source="Sahih Muslim, n°2575"
                  grade="sahih"
                  explanation="Ce hadith utilise la métaphore du forgeron pour illustrer le processus de purification par l&apos;épreuve. De même que le fer doit être chauffé pour être débarrassé de ses impuretés, le croyant est purifié par les afflictions. Le Prophète ﷺ corrige la réaction naturelle de maudire la maladie et invite à y voir une miséricorde cachée. Ce principe s&apos;étend à toutes les formes de tristesse et de douleur."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths établissent un principe fondamental : la souffrance du croyant n&apos;est jamais vaine aux yeux d&apos;Allah. Pour approfondir la notion d&apos;épreuve et de patience dans la Sunna, consultez notre article sur les{" "}
                  <Link href="/hadith-patience-epreuves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la patience face aux épreuves
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Invocations          */}
              {/* ============================== */}
              <section id="invocations" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations prophétiques contre la tristesse
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ n&apos;a pas seulement consolé les croyants par des paroles générales : il leur a enseigné des invocations précises à réciter lorsque la tristesse les envahit. Ces du&apos;a sont des remèdes spirituels transmis par la Révélation et la guidance prophétique.
                </p>

                <HadithBlock
                  number={4}
                  title="La du&apos;a contre le souci et la tristesse"
                  narrator="Anas ibn Malik"
                  arabic="اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ"
                  translation="Ô Allah, je cherche refuge auprès de Toi contre le souci et la tristesse, l&apos;incapacité et la paresse, l&apos;avarice et la lâcheté, le poids des dettes et la domination des hommes."
                  source="Sahih Al-Bukhari, n°6369"
                  grade="sahih"
                  explanation="Cette invocation est l&apos;une des plus célèbres de la Sunna. Le Prophète ﷺ la récitait fréquemment. Elle associe le souci (al-hamm, tourné vers l&apos;avenir) et la tristesse (al-hazan, tournée vers le passé), couvrant ainsi les deux dimensions temporelles de l&apos;affliction. Les savants notent que ces huit maux sont regroupés par paires complémentaires. Chercher refuge auprès d&apos;Allah signifie reconnaître son impuissance et s&apos;en remettre à Sa puissance."
                />

                <HadithBlock
                  number={5}
                  title="L&apos;invocation qui dissipe la tristesse"
                  narrator="Abdallah ibn Mas&apos;ud"
                  arabic="مَا أَصَابَ أَحَدًا قَطُّ هَمٌّ وَلَا حَزَنٌ فَقَالَ اللَّهُمَّ إِنِّي عَبْدُكَ وَابْنُ عَبْدِكَ وَابْنُ أَمَتِكَ نَاصِيَتِي بِيَدِكَ مَاضٍ فِيَّ حُكْمُكَ عَدْلٌ فِيَّ قَضَاؤُكَ أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ سَمَّيْتَ بِهِ نَفْسَكَ أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِنْدَكَ أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجَلَاءَ حُزْنِي وَذَهَابَ هَمِّي إِلَّا أَذْهَبَ اللَّهُ هَمَّهُ وَحَزَنَهُ وَأَبْدَلَهُ مَكَانَهُ فَرَحًا"
                  translation="Aucune personne n&apos;est frappée de souci ou de tristesse et dit : &laquo; Ô Allah, je suis Ton serviteur, fils de Ton serviteur, fils de Ta servante. Mon toupet est dans Ta main. Ton jugement s&apos;accomplit sur moi. Ton décret à mon égard est juste. Je Te demande par chaque nom qui T&apos;appartient, par lequel Tu T&apos;es nommé, que Tu as révélé dans Ton Livre, que Tu as enseigné à l&apos;une de Tes créatures, ou que Tu as gardé dans la science de l&apos;invisible auprès de Toi, de faire du Coran le printemps de mon coeur, la lumière de ma poitrine, la dissipation de ma tristesse et la disparition de mon souci &raquo;, sans qu&apos;Allah ne dissipe son souci et sa tristesse et ne les remplace par la joie."
                  source="Musnad Ahmad, n°3712 — authentifié par Al-Albani"
                  grade="sahih"
                  explanation="Cette du&apos;a est considérée par les savants comme l&apos;une des plus puissantes contre la tristesse. Elle commence par la reconnaissance de la servitude envers Allah, puis l&apos;acceptation totale de Son décret, avant de demander que le Coran devienne source de joie. L&apos;expression &laquo; le printemps de mon coeur &raquo; est remarquable : le printemps est la saison du renouveau après l&apos;hiver. Le Prophète ﷺ garantit que quiconque récite cette invocation avec sincérité verra sa tristesse remplacée par la joie."
                />

                <HadithBlock
                  number={6}
                  title="L&apos;invocation de détresse : la ilaha illa Anta"
                  narrator="Sa&apos;d ibn Abi Waqqas"
                  arabic="دَعْوَةُ ذِي النُّونِ إِذْ دَعَا وَهُوَ فِي بَطْنِ الْحُوتِ لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ فَإِنَّهُ لَمْ يَدْعُ بِهَا رَجُلٌ مُسْلِمٌ فِي شَيْءٍ قَطُّ إِلَّا اسْتَجَابَ اللَّهُ لَهُ"
                  translation="L&apos;invocation de Dhun-Nun (Yunus) lorsqu&apos;il invoqua dans le ventre du poisson : &laquo; Il n&apos;y a de divinité que Toi, gloire à Toi, j&apos;ai certes été parmi les injustes &raquo; — aucun musulman n&apos;invoque par elle pour quoi que ce soit sans qu&apos;Allah ne lui réponde."
                  source="Jami&apos; at-Tirmidhi, n°3505"
                  grade="sahih"
                  explanation="Cette invocation de Yunus (Jonas), paix sur lui, est un remède universel pour toute détresse. Le prophète Yunus l&apos;a prononcée dans les ténèbres les plus profondes — le ventre de la baleine, les profondeurs de la mer, l&apos;obscurité de la nuit — et Allah l&apos;a sauvé. Le Prophète Muhammad ﷺ garantit que cette du&apos;a est toujours exaucée. Les savants y voient la combinaison parfaite : le tawhid (unicité d&apos;Allah), le tasbih (glorification) et l&apos;aveu de ses propres fautes."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez les invocations prophétiques, le dhikr et les fondements de la patience en islam avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Patience              */}
              {/* ============================== */}
              <section id="patience-chagrin" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La patience dans le chagrin selon la Sunna
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La patience (<em>sabr</em>) est la réponse que l&apos;islam prescrit face à la tristesse. Elle ne signifie pas l&apos;insensibilité, mais la maîtrise de soi et la confiance en Allah malgré la douleur. Le Prophète ﷺ a enseigné que la vraie patience se manifeste au premier choc de l&apos;épreuve.
                </p>

                <HadithBlock
                  number={7}
                  title="La patience se manifeste au premier choc"
                  narrator="Anas ibn Malik"
                  arabic="إِنَّمَا الصَّبْرُ عِنْدَ الصَّدْمَةِ الْأُولَى"
                  translation="La patience (véritable) se manifeste au premier choc (de l&apos;épreuve)."
                  source="Sahih Al-Bukhari, n°1283 — Sahih Muslim, n°926"
                  grade="sahih"
                  explanation="Le Prophète ﷺ a prononcé ces paroles en voyant une femme pleurer sur une tombe. Ce hadith enseigne que la vraie patience n&apos;est pas celle qui vient après coup, lorsque la douleur s&apos;est atténuée avec le temps — cela, tout le monde en est capable. La patience méritoire est celle qui s&apos;exerce au moment même de l&apos;épreuve, quand la douleur est la plus vive. C&apos;est à cet instant que le croyant se distingue par sa soumission au décret d&apos;Allah."
                />

                <HadithBlock
                  number={8}
                  title="La récompense de celui qui perd un être cher"
                  narrator="Abu Hurayra"
                  arabic="يَقُولُ اللَّهُ تَعَالَى مَا لِعَبْدِي الْمُؤْمِنِ عِنْدِي جَزَاءٌ إِذَا قَبَضْتُ صَفِيَّهُ مِنْ أَهْلِ الدُّنْيَا ثُمَّ احْتَسَبَهُ إِلَّا الْجَنَّةُ"
                  translation="Allah le Très-Haut dit : &laquo; Je n&apos;ai d&apos;autre récompense pour Mon serviteur croyant, lorsque Je reprends l&apos;âme de celui qu&apos;il aime parmi les gens de ce monde et qu&apos;il patiente en espérant la récompense, que le Paradis. &raquo;"
                  source="Sahih Al-Bukhari, n°6424"
                  grade="sahih"
                  explanation="Ce hadith qudsi (parole divine rapportée par le Prophète ﷺ) est d&apos;une consolation immense. Allah Lui-même promet le Paradis à celui qui perd un être cher et patiente en espérant la récompense divine (ihtisab). Le terme &laquo; safiyyahu &raquo; désigne l&apos;être le plus cher au coeur : un enfant, un parent, un conjoint, un ami intime. La condition est double : patienter et espérer la récompense d&apos;Allah, ce qui transforme la douleur en acte d&apos;adoration."
                />

                <HadithBlock
                  number={9}
                  title="Ce bas monde est une prison pour le croyant"
                  narrator="Abu Hurayra"
                  arabic="الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ"
                  translation="Ce bas monde est une prison pour le croyant et un paradis pour le mécréant."
                  source="Sahih Muslim, n°2956"
                  grade="sahih"
                  explanation="Ce hadith ne signifie pas que le croyant doit vivre dans la misère, mais que ce monde, comparé au Paradis qui l&apos;attend, est comme une prison face à la liberté éternelle. Pour le croyant, les restrictions de ce monde (interdictions, épreuves, obligations) sont temporaires. Pour celui qui ne croit pas, ce monde est le meilleur qu&apos;il connaîtra. Les savants expliquent que ce hadith console le croyant en lui rappelant que les difficultés d&apos;ici-bas sont le prix d&apos;une félicité sans fin dans l&apos;au-delà."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Épreuves du croyant  */}
              {/* ============================== */}
              <section id="epreuves-croyant" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le croyant face aux épreuves : les plus testés
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam enseigne que l&apos;épreuve n&apos;est pas un signe de colère divine, mais souvent un signe d&apos;élection et d&apos;amour. Le Prophète ﷺ a expliqué que les plus éprouvés sont les plus proches d&apos;Allah, et que l&apos;année de la tristesse qu&apos;il a lui-même vécue illustre cette réalité.
                </p>

                <HadithBlock
                  number={10}
                  title="Les gens les plus éprouvés sont les prophètes"
                  narrator="Mus&apos;ab ibn Sa&apos;d"
                  arabic="أَشَدُّ النَّاسِ بَلَاءً الْأَنْبِيَاءُ ثُمَّ الْأَمْثَلُ فَالْأَمْثَلُ يُبْتَلَى الرَّجُلُ عَلَى حَسَبِ دِينِهِ فَإِنْ كَانَ فِي دِينِهِ صُلْبًا اشْتَدَّ بَلَاؤُهُ وَإِنْ كَانَ فِي دِينِهِ رِقَّةٌ ابْتُلِيَ عَلَى حَسَبِ دِينِهِ فَمَا يَبْرَحُ الْبَلَاءُ بِالْعَبْدِ حَتَّى يَتْرُكَهُ يَمْشِي عَلَى الْأَرْضِ وَمَا عَلَيْهِ خَطِيئَةٌ"
                  translation="Les gens les plus éprouvés sont les prophètes, puis les meilleurs après eux, puis les meilleurs. L&apos;homme est éprouvé selon (la force de) sa religion. Si sa religion est solide, son épreuve est intensifiée. Si sa religion est faible, il est éprouvé selon (le niveau de) sa religion. L&apos;épreuve ne cesse d&apos;atteindre le serviteur jusqu&apos;à le laisser marcher sur terre sans aucun péché."
                  source="Jami&apos; at-Tirmidhi, n°2398 — Ibn Majah, n°4023"
                  grade="sahih"
                  explanation="Ce hadith renverse la perspective humaine sur la souffrance. L&apos;épreuve n&apos;est pas un châtiment mais un honneur proportionnel à la foi. Les prophètes, qui sont les meilleurs des hommes, sont les plus éprouvés. Le hadith se termine par une promesse extraordinaire : l&apos;épreuve continue jusqu&apos;à ce que le serviteur soit entièrement purifié de ses péchés. Les savants y voient la preuve que la tristesse et l&apos;épreuve sont des moyens d&apos;élévation spirituelle."
                />

                <HadithBlock
                  number={11}
                  title="Quand Allah aime un serviteur, Il l&apos;éprouve"
                  narrator="Anas ibn Malik"
                  arabic="إِنَّ عِظَمَ الْجَزَاءِ مَعَ عِظَمِ الْبَلَاءِ وَإِنَّ اللَّهَ إِذَا أَحَبَّ قَوْمًا ابْتَلَاهُمْ فَمَنْ رَضِيَ فَلَهُ الرِّضَا وَمَنْ سَخِطَ فَلَهُ السَّخَطُ"
                  translation="La grandeur de la récompense va avec la grandeur de l&apos;épreuve. Et lorsqu&apos;Allah aime un peuple, Il l&apos;éprouve. Celui qui agrée (l&apos;épreuve) obtiendra l&apos;agrément (d&apos;Allah), et celui qui s&apos;irrite obtiendra la colère (d&apos;Allah)."
                  source="Jami&apos; at-Tirmidhi, n°2396"
                  grade="hasan"
                  explanation="Ce hadith établit un lien direct entre l&apos;amour d&apos;Allah et l&apos;épreuve. Il présente deux réactions possibles face à la tristesse : l&apos;agrément (rida) et l&apos;irritation (sakhat). Celui qui accepte l&apos;épreuve avec patience et confiance en Allah obtient Son agrément éternel. Celui qui se révolte et s&apos;irrite perd la récompense et encourt la colère divine. Le croyant est donc invité à choisir sa réponse, car c&apos;est elle qui détermine son destin."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Soulagement          */}
              {/* ============================== */}
              <section id="soulagement" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le soulagement après la difficulté
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam ne laisse jamais le croyant sans espoir. Après avoir enseigné la patience et les invocations, le Prophète ﷺ a affirmé avec certitude que le soulagement accompagne toujours la difficulté. Cette promesse divine est un pilier de la résilience du croyant face à la tristesse.
                </p>

                <HadithBlock
                  number={12}
                  title="Avec la difficulté vient le soulagement"
                  narrator="Abdallah ibn Abbas"
                  arabic="وَاعْلَمْ أَنَّ النَّصْرَ مَعَ الصَّبْرِ وَأَنَّ الْفَرَجَ مَعَ الْكَرْبِ وَأَنَّ مَعَ الْعُسْرِ يُسْرًا"
                  translation="Et sache que la victoire accompagne la patience, que le soulagement accompagne l&apos;affliction, et qu&apos;avec la difficulté vient la facilité."
                  source="Musnad Ahmad, n°2803 — authentifié par An-Nawawi"
                  grade="sahih"
                  explanation="Ce hadith est extrait d&apos;un long conseil du Prophète ﷺ au jeune Ibn Abbas. Il contient trois principes : la victoire est le fruit de la patience, le soulagement est indissociable de l&apos;affliction, et la facilité accompagne toujours la difficulté. Le mot &laquo; avec &raquo; (ma&apos;a) est significatif : le soulagement n&apos;arrive pas seulement après la difficulté, il l&apos;accompagne. Les savants y voient la preuve que même au coeur de l&apos;épreuve, des signes de facilité sont présents pour celui qui sait les voir."
                />

                <HadithBlock
                  number={13}
                  title="Les pleurs par crainte d&apos;Allah"
                  narrator="Abu Hurayra"
                  arabic="سَبْعَةٌ يُظِلُّهُمُ اللَّهُ فِي ظِلِّهِ يَوْمَ لَا ظِلَّ إِلَّا ظِلُّهُ ... وَرَجُلٌ ذَكَرَ اللَّهَ خَالِيًا فَفَاضَتْ عَيْنَاهُ"
                  translation="Sept personnes seront sous l&apos;ombre d&apos;Allah le Jour où il n&apos;y aura d&apos;ombre que la Sienne : [...] et un homme qui a évoqué Allah dans la solitude et dont les yeux ont débordé de larmes."
                  source="Sahih Al-Bukhari, n°1423 — Sahih Muslim, n°1031"
                  grade="sahih"
                  explanation="Ce hadith montre que les larmes ne sont pas toujours un signe de faiblesse : lorsqu&apos;elles coulent par crainte et amour d&apos;Allah, elles sont un signe de foi profonde récompensé par une protection divine au Jour du Jugement. Le fait qu&apos;elles coulent &laquo; dans la solitude &raquo; garantit la sincérité de l&apos;émotion. Les savants incluent dans ces larmes celles versées par le croyant qui, dans sa tristesse, se tourne vers Allah avec humilité et espoir."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur la tristesse et les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur la tristesse. Leurs explications permettent de mieux saisir la portée spirituelle et pratique de ces enseignements prophétiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La tristesse n&apos;est pas un objectif en soi et Allah ne l&apos;a pas ordonnée. Mais elle est inévitable, comme la faim et la soif. Le croyant est récompensé pour sa patience face à elle, non pour l&apos;avoir recherchée. L&apos;objectif est la patience et le recours à Allah.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Taymiyya, <em>Majmu&apos; al-Fatawa</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith &laquo; l&apos;oeil pleure et le coeur est triste &raquo; prouve que la tristesse du coeur et les larmes de l&apos;oeil ne contredisent pas la patience. Ce qui contredit la patience, c&apos;est la lamentation, les cris et les paroles de révolte contre le décret divin.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La du&apos;a d&apos;Ibn Mas&apos;ud contre la tristesse contient les plus grands fondements du tawhid : la servitude envers Allah, la soumission à Son décret, la reconnaissance de Sa justice et le recours à Ses noms. Celui qui la comprend et la récite avec sincérité trouvera la guérison de son coeur.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Zad al-Ma&apos;ad</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que les hadiths sur la tristesse ne sont pas de simples recommandations morales : ils constituent un véritable programme thérapeutique spirituel. Les savants distinguent clairement entre la tristesse naturelle (permise) et le désespoir (interdit), entre les larmes de patience et les lamentations de révolte.
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
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour le croyant confronté à la tristesse :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Accepter la tristesse comme une émotion naturelle
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ lui-même a pleuré et ressenti le chagrin. La tristesse n&apos;est ni un péché ni un signe de faiblesse de foi. C&apos;est une réalité humaine qu&apos;Allah reconnaît et pour laquelle Il récompense la patience.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Voir dans l&apos;épreuve une purification des péchés
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Chaque affliction, même la plus minime, efface des péchés. Le croyant qui patiente transforme sa douleur en source de récompense et de purification devant Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Réciter les invocations prophétiques quotidiennement
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les du&apos;a du Prophète ﷺ contre la tristesse sont des remèdes spirituels éprouvés. Les réciter régulièrement, et non seulement en temps de crise, est une protection préventive contre l&apos;anxiété et le chagrin.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Patienter dès le premier choc de l&apos;épreuve
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La vraie patience est celle qui se manifeste au moment même de l&apos;épreuve, pas après coup. C&apos;est à cet instant que le croyant montre sa confiance en Allah et mérite la plus grande récompense.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Garder espoir : le soulagement accompagne la difficulté
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La promesse divine est certaine : après chaque difficulté vient une facilité. Le croyant ne doit jamais désespérer de la miséricorde d&apos;Allah, même dans les moments les plus sombres.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Comprendre que l&apos;épreuve est proportionnelle à la foi
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les plus éprouvés sont les plus proches d&apos;Allah. La tristesse intense peut être un signe d&apos;élection divine, à condition de répondre par la patience, l&apos;invocation et l&apos;espoir en la récompense d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      7
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Faire du Coran le remède du coeur
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La du&apos;a d&apos;Ibn Mas&apos;ud demande à Allah de faire du Coran &laquo;&nbsp;le printemps du coeur&nbsp;&raquo;. La lecture et la méditation du Coran sont le remède souverain contre la tristesse, comme le confirment le verset de la sourate Ar-Ra&apos;d et de nombreux hadiths.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur la tristesse et les invocations dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur la patience face aux épreuves en islam"
                  description="Découvrez les enseignements prophétiques sur la patience, la persévérance et la récompense des épreuves."
                  href="/hadith-patience-epreuves-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le pardon et le repentir en islam"
                  description="Les paroles du Prophète ﷺ sur la miséricorde divine, le repentir sincère et le pardon d&apos;Allah."
                  href="/hadith-pardon-repentir-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la colère en islam"
                  description="Les enseignements prophétiques sur la maîtrise de la colère, la douceur et le contrôle de soi."
                  href="/hadith-colere-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
