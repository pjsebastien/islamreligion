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
  title: "Les 40 hadiths d'An-Nawawi : texte arabe, traduction et explication",
  description:
    "Découvrez les 40 hadiths de l'imam An-Nawawi avec texte arabe original, traduction française et explication détaillée. Les hadiths fondamentaux que tout musulman doit connaître.",
  openGraph: {
    title: "Les 40 hadiths d'An-Nawawi : texte arabe, traduction et explication",
    description:
      "Les 40 hadiths de l'imam An-Nawawi : texte arabe, traduction française, source et commentaire. Les fondements de l'islam en 40 paroles prophétiques.",
    url: "https://www.islamreligion.fr/hadith-40-nawawi-islam",
    images: [
      {
        url: "/images/coran-ouvert-chapelet-bois-islam-versets.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-40-nawawi-islam",
  },
};

const tocItems = [
  { id: "imam-nawawi", label: "Qui est l'imam An-Nawawi ?" },
  { id: "contexte-coranique", label: "Contexte coranique" },
  { id: "hadiths-fondamentaux", label: "Hadiths fondamentaux (1-10)" },
  { id: "hadiths-ethique", label: "Hadiths sur l'éthique (11-20)" },
  { id: "hadiths-piete", label: "Hadiths sur la piété (21-30)" },
  { id: "hadiths-spiritualite", label: "Hadiths sur la spiritualité (31-40)" },
  { id: "enseignements", label: "Enseignements pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Pourquoi l'imam An-Nawawi a-t-il choisi exactement 40 hadiths ?",
    answer:
      "L'imam An-Nawawi s'est appuyé sur un hadith du Prophète ﷺ qui dit : 'Quiconque mémorise 40 hadiths pour ma communauté concernant les affaires de sa religion, Allah le ressuscitera au Jour du Jugement parmi les savants et les juristes.' Bien que ce hadith soit considéré comme faible par les spécialistes, de nombreux savants se sont inspirés de ce nombre pour compiler des recueils thématiques. An-Nawawi a en réalité rassemblé 42 hadiths, mais l'ouvrage est traditionnellement désigné comme les 40 hadiths.",
  },
  {
    question: "Les 40 hadiths d'An-Nawawi sont-ils tous authentiques ?",
    answer:
      "La grande majorité des hadiths sélectionnés par An-Nawawi sont classés comme sahih (authentiques), tirés principalement des recueils de Bukhari et Muslim. Quelques-uns sont classés hasan (bons) et proviennent d'autres collections comme le Jami' at-Tirmidhi. An-Nawawi a délibérément choisi des hadiths dont l'authenticité est établie par les grands savants du hadith, ce qui confère à sa compilation une fiabilité exceptionnelle.",
  },
  {
    question: "Comment memoriser les 40 hadiths d'An-Nawawi ?",
    answer:
      "Les savants recommandent une approche progressive : commencez par un hadith par semaine, lisez le texte arabe avec la traduction, comprenez l'explication, puis répétez-le quotidiennement. Il est conseillé de mémoriser le texte arabe original, car c'est la langue dans laquelle le Prophète ﷺ s'est exprimé. Vous pouvez aussi écouter des récitations audio, écrire les hadiths à la main et les réviser régulièrement avec un partenaire d'étude.",
  },
  {
    question: "Quelle est la difference entre les 40 hadiths d'An-Nawawi et le Riyad as-Salihin ?",
    answer:
      "Les deux ouvrages sont de l'imam An-Nawawi, mais ils diffèrent par leur objectif et leur taille. Les 40 hadiths sont une sélection concise de hadiths fondamentaux couvrant les bases de l'islam, destinés à la mémorisation. Le Riyad as-Salihin (les Jardins des Vertueux) est un recueil beaucoup plus vaste contenant environ 1900 hadiths organisés par thèmes, couvrant tous les aspects de la vie du musulman.",
  },
  {
    question: "A quel age peut-on commencer a etudier les 40 hadiths ?",
    answer:
      "Les 40 hadiths d'An-Nawawi sont accessibles dès l'enfance. De nombreuses écoles coraniques commencent leur enseignement avec les enfants à partir de 7-8 ans, en adaptant les explications à leur niveau de compréhension. Pour les adultes débutants en islam, c'est l'un des premiers ouvrages recommandés car il offre une vue d'ensemble des principes fondamentaux de la religion dans un format compact et structuré.",
  },
  {
    question: "Les 40 hadiths d'An-Nawawi couvrent-ils tous les aspects de l'islam ?",
    answer:
      "An-Nawawi a conçu sa compilation pour couvrir les fondements essentiels de l'islam. Chaque hadith est, selon ses propres mots, 'une base importante de la religion'. Les 42 hadiths traitent des piliers de l'islam, de la foi, de l'éthique, de la jurisprudence, de la spiritualité et du comportement social. Bien qu'ils ne couvrent pas chaque détail, ils constituent un socle complet que les savants considèrent comme un condensé de la religion.",
  },
];

export default function Hadith40NawawiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.islamreligion.fr/hadith-40-nawawi-islam/#article",
        url: "https://www.islamreligion.fr/hadith-40-nawawi-islam",
        name: "Les 40 hadiths d'An-Nawawi : texte arabe, traduction et explication",
        headline: "Les 40 hadiths d'An-Nawawi : texte arabe, traduction et explication",
        description:
          "Découvrez les 40 hadiths de l'imam An-Nawawi avec texte arabe original, traduction française et explication détaillée.",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        image: {
          "@type": "ImageObject",
          url: "https://www.islamreligion.fr/images/coran-ouvert-chapelet-bois-islam-versets.jpg",
        },
        author: {
          "@type": "Organization",
          name: "Islam Religion",
          url: "https://www.islamreligion.fr",
        },
        publisher: {
          "@type": "Organization",
          name: "Islam Religion",
          url: "https://www.islamreligion.fr",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.islamreligion.fr/hadith-40-nawawi-islam/#breadcrumb",
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
            name: "Les 40 hadiths d'An-Nawawi",
            item: "https://www.islamreligion.fr/hadith-40-nawawi-islam",
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
          title="Les 40 hadiths d&apos;An-Nawawi : les fondements de l&apos;islam"
          subtitle="Découvrez les 40 hadiths essentiels compilés par l'imam An-Nawawi, avec texte arabe original, traduction française et explication détaillée. Les paroles prophétiques fondamentales que tout musulman doit connaître."
          imageSrc="/images/coran-ouvert-chapelet-bois-islam-versets.jpg"
          imageAlt="Coran ouvert avec chapelet en bois, symbolisant l'étude des hadiths d'An-Nawawi"
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
                <span className="text-foreground">Les 40 hadiths d&apos;An-Nawawi</span>
              </nav>

              {/* ============================================ */}
              {/* A RETENIR */}
              {/* ============================================ */}
              <div className="mb-12 rounded-2xl border border-secondary/30 bg-gradient-to-br from-secondary/5 to-accent p-6 lg:p-8">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-primary">
                  <svg className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  À retenir
                </h2>
                <ul className="ml-5 space-y-2 text-base leading-relaxed text-foreground list-disc marker:text-secondary">
                  <li>Les <strong>40 hadiths d&apos;An-Nawawi</strong> sont une compilation de hadiths fondamentaux couvrant les bases de l&apos;islam, sélectionnés par l&apos;imam An-Nawawi au VII<sup>e</sup> siècle de l&apos;Hégire.</li>
                  <li>Chaque hadith traite d&apos;un <strong>principe fondamental</strong> de la religion : les piliers de l&apos;islam, la foi, l&apos;éthique, la piété et la spiritualité.</li>
                  <li>La quasi-totalité des hadiths sont <strong>authentiques (sahih)</strong>, tirés principalement des recueils de Bukhari et Muslim.</li>
                  <li>Cet ouvrage est le <strong>premier recueil recommandé</strong> pour tout musulman souhaitant approfondir sa connaissance des paroles prophétiques.</li>
                </ul>
              </div>

              {/* ============================================ */}
              {/* QUI EST L'IMAM AN-NAWAWI ? */}
              {/* ============================================ */}
              <section id="imam-nawawi" className="scroll-mt-24">
                <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
                  Qui est l&apos;imam An-Nawawi ?
                </h2>

                <p className="text-lg leading-relaxed text-foreground">
                  L&apos;imam <strong>Muhyi ad-Din Abu Zakariya Yahya ibn Sharaf An-Nawawi</strong> (631-676 H / 1233-1277) est l&apos;un des plus grands savants de l&apos;histoire islamique. Né dans le village de Nawa, près de Damas en Syrie, il a consacré sa vie entière à l&apos;étude et à l&apos;enseignement des sciences islamiques. Malgré une vie courte de seulement 45 ans, il a laissé un héritage intellectuel immense qui continue d&apos;influencer les musulmans du monde entier.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  An-Nawawi était un savant de l&apos;école juridique <strong>shafi&apos;ite</strong>. Il est l&apos;auteur de nombreux ouvrages majeurs, parmi lesquels le <em>Riyad as-Salihin</em> (les Jardins des Vertueux), le <em>Sharh Sahih Muslim</em> (commentaire du Sahih Muslim), le <em>Kitab al-Adhkar</em> (le Livre des Invocations) et bien sûr les célèbres <strong>40 hadiths</strong>. Sa méthodologie rigoureuse et sa capacité à synthétiser les connaissances en font une référence incontournable.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  La compilation des 40 hadiths répond à une intention précise : rassembler dans un seul ouvrage les hadiths qui constituent les <strong>fondements de la religion</strong>. An-Nawawi explique dans son introduction que chaque hadith sélectionné est &laquo;&nbsp;une base importante parmi les bases de la religion, que les savants ont décrit comme étant l&apos;axe autour duquel tourne l&apos;islam&nbsp;&raquo;. En réalité, le recueil contient 42 hadiths, mais il est traditionnellement désigné sous le nom des &laquo;&nbsp;40 hadiths&nbsp;&raquo;.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  L&apos;imam An-Nawawi était connu pour son ascétisme, sa piété et son dévouement total à la science. Il n&apos;a jamais accepté de salaire pour son enseignement et vivait de manière très modeste. Son engagement pour la vérité l&apos;a conduit à s&apos;opposer au dirigeant de l&apos;époque lorsque celui-ci voulait imposer des taxes injustes aux habitants de Damas. Cette intégrité lui a valu le respect unanime des musulmans à travers les siècles.
                </p>
              </section>

              {/* ============================================ */}
              {/* CONTEXTE CORANIQUE */}
              {/* ============================================ */}
              <section id="contexte-coranique" className="mt-16 scroll-mt-24">
                <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique : l&apos;obligation de suivre le Prophète ﷺ
                </h2>

                <p className="text-lg leading-relaxed text-foreground">
                  L&apos;importance des hadiths dans la vie du musulman est fondée sur de nombreux versets du Coran qui ordonnent de suivre le Prophète Muhammad ﷺ et d&apos;obéir à ses enseignements. La Sunna prophétique n&apos;est pas un complément optionnel du Coran, mais bien une <strong>source législative indispensable</strong> qui explique, précise et complète la révélation divine.
                </p>

                <HadithCard
                  arabic="وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانتَهُوا"
                  text="Prenez ce que le Messager vous donne, et abstenez-vous de ce qu'il vous interdit."
                  source="Coran, sourate Al-Hashr (59:7)"
                />

                <p className="text-lg leading-relaxed text-foreground">
                  Ce verset établit clairement l&apos;autorité prophétique en matière de législation. Tout ce que le Prophète ﷺ a ordonné ou interdit fait partie de la religion. Les hadiths sont le véhicule par lequel ces enseignements nous sont parvenus à travers les générations, grâce au travail minutieux des savants du hadith.
                </p>

                <HadithCard
                  arabic="لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ"
                  text="Vous avez certes dans le Messager d'Allah un excellent modèle."
                  source="Coran, sourate Al-Ahzab (33:21)"
                />

                <p className="text-lg leading-relaxed text-foreground">
                  Le Coran désigne le Prophète ﷺ comme le <strong>modèle parfait</strong> pour les croyants. Connaître sa Sunna à travers les hadiths est donc une nécessité pour tout musulman qui souhaite se rapprocher d&apos;Allah. Les 40 hadiths d&apos;An-Nawawi offrent une porte d&apos;entrée idéale vers cet héritage prophétique inestimable, en rassemblant les paroles les plus fondamentales du Prophète ﷺ.
                </p>

                <HadithCard
                  arabic="وَمَا يَنطِقُ عَنِ الْهَوَىٰ إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ"
                  text="Et il ne prononce rien sous l'effet de la passion. Ce n'est rien d'autre qu'une révélation inspirée."
                  source="Coran, sourate An-Najm (53:3-4)"
                />
              </section>

              {/* ============================================ */}
              {/* HADITHS FONDAMENTAUX (1-10) */}
              {/* ============================================ */}
              <section id="hadiths-fondamentaux" className="mt-16 scroll-mt-24">
                <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
                  Les hadiths fondamentaux (1-10)
                </h2>

                <p className="mb-8 text-lg leading-relaxed text-foreground">
                  Les dix premiers hadiths de la compilation d&apos;An-Nawawi posent les <strong>bases doctrinales de l&apos;islam</strong>. Ils traitent de l&apos;intention, des piliers de la foi, de la création humaine et de l&apos;innovation religieuse. Ce sont les hadiths les plus étudiés dans les cercles de science islamique, et de nombreux savants les considèrent comme le socle indispensable de la connaissance religieuse.
                </p>

                <HadithBlock
                  number={1}
                  title="Les actes ne valent que par les intentions"
                  narrator="&apos;Umar ibn al-Khattab"
                  arabic="إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوِ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ"
                  translation="Les actes ne valent que par les intentions, et chacun n'aura que ce qu'il a eu comme intention. Celui dont l'émigration a été pour Allah et Son Messager, son émigration est pour Allah et Son Messager. Et celui dont l'émigration a été pour obtenir un bien de ce monde ou pour épouser une femme, son émigration sera pour ce vers quoi il a émigré."
                  source="Sahih Al-Bukhari, n°1 — Sahih Muslim, n°1907"
                  grade="sahih"
                  explanation="Ce hadith est considéré comme le fondement de toute action en islam. Il enseigne que la valeur d'un acte dépend entièrement de l'intention qui le motive. Une même action — comme la prière, le jeûne ou la charité — peut être un acte d'adoration récompensé par Allah ou un simple geste mondain, selon la niya (intention) de celui qui l'accomplit. Les savants ont placé ce hadith en tête de leurs ouvrages pour rappeler la primauté de la sincérité. L'imam Al-Bukhari a ouvert son Sahih avec ce hadith, et l'imam Ash-Shafi'i a dit qu'il entre dans soixante-dix chapitres du fiqh."
                />

                <HadithBlock
                  number={2}
                  title="L'islam, la foi et l'excellence (hadith de Jibril)"
                  narrator="&apos;Umar ibn al-Khattab"
                  arabic="أَنَّ رَجُلًا أَتَى النَّبِيَّ ﷺ فَقَالَ: يَا رَسُولَ اللهِ مَا الْإِسْلَامُ؟ قَالَ: أَنْ تَشْهَدَ أَنْ لَا إِلَٰهَ إِلَّا اللهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللهِ، وَتُقِيمَ الصَّلَاةَ، وَتُؤْتِيَ الزَّكَاةَ، وَتَصُومَ رَمَضَانَ، وَتَحُجَّ الْبَيْتَ إِنِ اسْتَطَعْتَ إِلَيْهِ سَبِيلًا. قَالَ: مَا الْإِيمَانُ؟ قَالَ: أَنْ تُؤْمِنَ بِاللهِ، وَمَلَائِكَتِهِ، وَكُتُبِهِ، وَرُسُلِهِ، وَالْيَوْمِ الْآخِرِ، وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ. قَالَ: مَا الْإِحْسَانُ؟ قَالَ: أَنْ تَعْبُدَ اللهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ"
                  translation="Un homme vint au Prophète ﷺ et demanda : 'Qu'est-ce que l'islam ?' Il répondit : 'Que tu témoignes qu'il n'y a de divinité digne d'adoration qu'Allah et que Muhammad est le Messager d'Allah, que tu accomplisses la prière, que tu acquittes la zakat, que tu jeûnes le Ramadan et que tu fasses le pèlerinage si tu en as la capacité.' Il demanda : 'Qu'est-ce que la foi ?' Il répondit : 'Que tu croies en Allah, en Ses anges, en Ses livres, en Ses messagers, au Jour dernier et au destin, bon ou mauvais.' Il demanda : 'Qu'est-ce que l'excellence ?' Il répondit : 'Que tu adores Allah comme si tu Le voyais, car si tu ne Le vois pas, Lui te voit.'"
                  source="Sahih Muslim, n°8"
                  grade="sahih"
                  explanation="Connu sous le nom de 'hadith de Jibril', ce hadith est l'un des plus importants de toute la tradition islamique. Il définit les trois dimensions de la religion : l'islam (la soumission par les actes), l'iman (la foi intérieure) et l'ihsan (l'excellence spirituelle). L'ange Jibril (Gabriel) est venu sous forme humaine pour enseigner aux Compagnons leur religion. Ce hadith est une véritable synthèse de l'ensemble du din (mode de vie islamique). Les savants le considèrent comme 'la mère de la Sunna', tout comme la Fatiha est 'la mère du Coran'."
                />

                <HadithBlock
                  number={3}
                  title="L'islam est bâti sur cinq piliers"
                  narrator="Ibn &apos;Umar"
                  arabic="بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ"
                  translation="L'islam est bâti sur cinq (piliers) : l'attestation qu'il n'y a de divinité digne d'adoration qu'Allah et que Muhammad est le Messager d'Allah, l'accomplissement de la prière, l'acquittement de la zakat, le pèlerinage à la Maison (sacrée) et le jeûne du Ramadan."
                  source="Sahih Al-Bukhari, n°8 — Sahih Muslim, n°16"
                  grade="sahih"
                  explanation="Ce hadith fondamental énumère les cinq piliers sur lesquels repose l'édifice de l'islam. La métaphore de la construction est éloquente : sans ces piliers, l'édifice de la foi s'écroule. Chaque pilier représente une dimension de l'adoration : la parole (shahada), le corps (prière), les biens (zakat), l'endurance (jeûne) et le voyage (pèlerinage). Ces cinq obligations constituent le minimum requis de chaque musulman et forment la base de la pratique religieuse quotidienne."
                />

                <HadithBlock
                  number={4}
                  title="La création de l'un d'entre vous"
                  narrator="Abdallah ibn Mas&apos;ud"
                  arabic="إِنَّ أَحَدَكُمْ يُجْمَعُ خَلْقُهُ فِي بَطْنِ أُمِّهِ أَرْبَعِينَ يَوْمًا نُطْفَةً، ثُمَّ يَكُونُ عَلَقَةً مِثْلَ ذَٰلِكَ، ثُمَّ يَكُونُ مُضْغَةً مِثْلَ ذَٰلِكَ، ثُمَّ يُرْسَلُ إِلَيْهِ الْمَلَكُ فَيَنْفُخُ فِيهِ الرُّوحَ، وَيُؤْمَرُ بِأَرْبَعِ كَلِمَاتٍ: بِكَتْبِ رِزْقِهِ وَأَجَلِهِ وَعَمَلِهِ وَشَقِيٌّ أَوْ سَعِيدٌ"
                  translation="Certes, la création de chacun d'entre vous est rassemblée dans le ventre de sa mère pendant quarante jours sous forme de goutte, puis il devient un caillot de sang pendant une durée similaire, puis une bouchée de chair pendant une durée similaire. Ensuite, un ange est envoyé qui insuffle en lui l'âme et reçoit l'ordre d'inscrire quatre choses : sa subsistance, la durée de sa vie, ses oeuvres, et s'il sera bienheureux ou malheureux."
                  source="Sahih Al-Bukhari, n°3208 — Sahih Muslim, n°2643"
                  grade="sahih"
                  explanation="Ce hadith aborde la question fondamentale du destin (al-qadar) et des étapes de la création humaine. Il enseigne que le développement embryonnaire passe par des phases distinctes — un fait que la science moderne a confirmé — et que le destin de chaque être est écrit avant sa naissance. Cependant, cela n'annule pas le libre arbitre : le musulman doit agir et fournir des efforts tout en acceptant le décret divin. Ce hadith invite à la confiance en Allah et à l'humilité face à Sa science absolue."
                />

                <HadithBlock
                  number={5}
                  title="Quiconque innove dans notre affaire"
                  narrator="Aisha"
                  arabic="مَنْ أَحْدَثَ فِي أَمْرِنَا هَٰذَا مَا لَيْسَ مِنْهُ فَهُوَ رَدٌّ"
                  translation="Quiconque introduit dans notre affaire (la religion) ce qui n'en fait pas partie, cela sera rejete."
                  source="Sahih Al-Bukhari, n°2697 — Sahih Muslim, n°1718"
                  grade="sahih"
                  explanation="Ce hadith est le fondement du rejet de l'innovation religieuse (bid'a) en islam. Il établit un principe clair : toute pratique religieuse qui n'a pas de base dans le Coran et la Sunna est rejetée, même si son auteur avait de bonnes intentions. Ce hadith protège la religion de toute altération et préserve l'authenticité du message prophétique. Les savants l'utilisent comme critère pour évaluer la conformité des pratiques religieuses. L'imam An-Nawawi considère ce hadith comme l'un des piliers de l'islam."
                />

                <HadithBlock
                  number={6}
                  title="Le licite et l&apos;illicite sont clairs"
                  narrator="An-Nu&apos;man ibn Bashir"
                  arabic="إِنَّ الْحَلَالَ بَيِّنٌ وَإِنَّ الْحَرَامَ بَيِّنٌ وَبَيْنَهُمَا أُمُورٌ مُشْتَبِهَاتٌ لَا يَعْلَمُهُنَّ كَثِيرٌ مِنَ النَّاسِ، فَمَنِ اتَّقَى الشُّبُهَاتِ فَقَدِ اسْتَبْرَأَ لِدِينِهِ وَعِرْضِهِ"
                  translation="Le licite est clair et l&apos;illicite est clair, et entre les deux il y a des choses ambiguës que beaucoup de gens ne connaissent pas. Celui qui se prémunit contre les ambiguïtés a préservé sa religion et son honneur."
                  source="Sahih Al-Bukhari, n°52 — Sahih Muslim, n°1599"
                  grade="sahih"
                  explanation="Ce hadith pose les bases de la jurisprudence islamique (fiqh). Il distingue trois catégories : le clairement licite, le clairement illicite, et une zone grise (shubuhat). La piété consiste à éviter les zones ambiguës par précaution. Le Prophète ﷺ compare cela à un berger qui fait paître son troupeau près d&apos;un terrain interdit : il risque d&apos;y pénétrer."
                />

                <HadithBlock
                  number={7}
                  title="La religion c&apos;est le bon conseil"
                  narrator="Tamim ad-Dari"
                  arabic="الدِّينُ النَّصِيحَةُ، قُلْنَا: لِمَنْ؟ قَالَ: لِلَّهِ، وَلِكِتَابِهِ، وَلِرَسُولِهِ، وَلِأَئِمَّةِ الْمُسْلِمِينَ، وَعَامَّتِهِمْ"
                  translation="La religion, c&apos;est le bon conseil (nassiha). Nous avons dit : Envers qui ? Il a dit : Envers Allah, envers Son Livre, envers Son Messager, envers les dirigeants des musulmans et envers l&apos;ensemble des musulmans."
                  source="Sahih Muslim, n°55"
                  grade="sahih"
                  explanation="Ce hadith résume l&apos;islam en un seul mot : nassiha (le conseil sincère). Le bon conseil envers Allah signifie la sincérité dans l&apos;adoration. Envers le Coran, c&apos;est le lire, le méditer et l&apos;appliquer. Envers le Prophète, c&apos;est suivre sa Sunna. Envers les dirigeants, c&apos;est les conseiller avec sagesse."
                />

                <HadithBlock
                  number={8}
                  title="L&apos;inviolabilité du sang du musulman"
                  narrator="Ibn Mas&apos;ud"
                  arabic="لَا يَحِلُّ دَمُ امْرِئٍ مُسْلِمٍ يَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَنِّي رَسُولُ اللَّهِ إِلَّا بِإِحْدَى ثَلَاثٍ"
                  translation="Il n&apos;est pas permis de verser le sang d&apos;un musulman qui atteste qu&apos;il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah et que je suis le Messager d&apos;Allah, sauf dans trois cas."
                  source="Sahih Al-Bukhari, n°6484 — Sahih Muslim, n°1676"
                  grade="sahih"
                  explanation="Ce hadith établit le caractère sacré de la vie humaine en islam. La vie du musulman est inviolable par défaut. Ce principe de sacralité de la vie est l&apos;un des cinq objectifs supérieurs de la charia (maqasid ash-shari&apos;a). Les savants soulignent que seule l&apos;autorité judiciaire compétente peut appliquer ces exceptions."
                />

                <HadithBlock
                  number={9}
                  title="Ce que je vous interdis, évitez-le"
                  narrator="Abu Hurayra"
                  arabic="مَا نَهَيْتُكُمْ عَنْهُ فَاجْتَنِبُوهُ، وَمَا أَمَرْتُكُمْ بِهِ فَأْتُوا مِنْهُ مَا اسْتَطَعْتُمْ"
                  translation="Ce que je vous interdis, évitez-le. Et ce que je vous ordonne, faites-en ce que vous pouvez."
                  source="Sahih Al-Bukhari, n°7288 — Sahih Muslim, n°1337"
                  grade="sahih"
                  explanation="Ce hadith pose un principe juridique fondamental : les interdits sont absolus (pas de marge), tandis que les obligations sont conditionnées par la capacité. Allah ne charge pas une âme au-delà de ce qu&apos;elle peut supporter. Cette règle de facilité (taysir) est l&apos;une des caractéristiques de la législation islamique."
                />

                <HadithBlock
                  number={10}
                  title="Allah est Bon et n&apos;accepte que le bon"
                  narrator="Abu Hurayra"
                  arabic="إِنَّ اللَّهَ تَعَالَى طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا"
                  translation="Allah le Très-Haut est Bon et n&apos;accepte que le bon. Et certes, Allah a ordonné aux croyants ce qu&apos;Il a ordonné aux messagers."
                  source="Sahih Muslim, n°1015"
                  grade="sahih"
                  explanation="Ce hadith établit un lien direct entre la pureté de la subsistance et l&apos;acceptation des actes d&apos;adoration. Celui qui se nourrit de gains illicites verra ses invocations rejetées. C&apos;est un rappel de l&apos;importance du halal dans tous les aspects de la vie : alimentation, revenus, transactions."
                />
              </section>

              {/* ============================================ */}
              {/* HADITHS SUR L'ETHIQUE (11-20) */}
              {/* ============================================ */}
              <section id="hadiths-ethique" className="mt-16 scroll-mt-24">
                <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
                  Les hadiths sur l&apos;éthique (11-20)
                </h2>

                <p className="mb-8 text-lg leading-relaxed text-foreground">
                  Les hadiths suivants traitent des <strong>règles éthiques et morales</strong> qui régissent la vie du musulman. Ils abordent la distinction entre le licite et l&apos;illicite, le bon conseil, le respect de la vie humaine, la maîtrise de la colère et la pureté de la subsistance. Ces enseignements forment le cadre moral dans lequel le croyant doit évoluer au quotidien.
                </p>

                <HadithBlock
                  number={11}
                  title="Laisse ce qui te met dans le doute"
                  narrator="Al-Hasan ibn &apos;Ali"
                  arabic="دَعْ مَا يَرِيبُكَ إِلَى مَا لَا يَرِيبُكَ، فَإِنَّ الصِّدْقَ طُمَأْنِينَةٌ وَإِنَّ الْكَذِبَ رِيبَةٌ"
                  translation="Laisse ce qui te met dans le doute pour ce qui ne te met pas dans le doute, car la vérité est sérénité et le mensonge est suspicion."
                  source="Jami&apos; at-Tirmidhi, n°2518 — Sunan An-Nasa&apos;i, n°5711"
                  grade="sahih"
                  explanation="Ce hadith du petit-fils du Prophète ﷺ pose une règle pratique universelle : face à un choix douteux, le croyant choisit systématiquement la voie la plus sûre. Ce principe de précaution (wara&apos;) s&apos;applique à tous les domaines de la vie. La tranquillité du coeur est un indicateur fiable : quand on hésite sur la licéité d&apos;une chose, il est préférable de s&apos;en abstenir."
                />

                <HadithBlock
                  number={12}
                  title="Fait partie du bel islam de délaisser ce qui ne le concerne pas"
                  narrator="Abu Hurayra"
                  arabic="مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ"
                  translation="Fait partie du bel islam d&apos;une personne de délaisser ce qui ne la concerne pas."
                  source="Jami&apos; at-Tirmidhi, n°2317 — Ibn Majah, n°3976"
                  grade="hasan"
                  explanation="Ce hadith concis enseigne une règle d&apos;or pour la vie en société : ne pas se mêler de ce qui ne nous regarde pas. Cela inclut les commérages, la curiosité malsaine, les questions indiscrètes et l&apos;immixtion dans la vie privée d&apos;autrui. Le &apos;bel islam&apos; (husn al-islam) désigne un niveau élevé de pratique religieuse où le croyant concentre son énergie sur ce qui lui est bénéfique dans ce monde et dans l&apos;au-delà."
                />

                <HadithBlock
                  number={13}
                  title="Aucun d&apos;entre vous ne croit tant qu&apos;il n&apos;aime pour son frère"
                  narrator="Anas ibn Malik"
                  arabic="لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ"
                  translation="Aucun d&apos;entre vous ne croit véritablement tant qu&apos;il n&apos;aime pas pour son frère ce qu&apos;il aime pour lui-même."
                  source="Sahih Al-Bukhari, n°13 — Sahih Muslim, n°45"
                  grade="sahih"
                  explanation="Ce hadith établit un principe fondamental d&apos;altruisme et de fraternité en islam. La foi complète ne se limite pas aux actes d&apos;adoration individuels : elle exige de dépasser l&apos;égoïsme et de vouloir pour autrui le même bien que pour soi-même. Certains savants comme An-Nawawi précisent que cela inclut aussi le fait de détester pour son frère ce qu&apos;on déteste pour soi-même."
                />

                <HadithBlock
                  number={14}
                  title="Ne vous mettez pas en colère"
                  narrator="Abu Hurayra"
                  arabic="أَنَّ رَجُلًا قَالَ لِلنَّبِيِّ ﷺ أَوْصِنِي، قَالَ: لَا تَغْضَبْ، فَرَدَّدَ مِرَارًا، قَالَ: لَا تَغْضَبْ"
                  translation="Un homme dit au Prophète ﷺ : 'Conseille-moi.' Il répondit : 'Ne te mets pas en colère.' L'homme répéta sa demande plusieurs fois, et le Prophète ﷺ répondit à chaque fois : 'Ne te mets pas en colère.'"
                  source="Sahih Al-Bukhari, n°6116"
                  grade="sahih"
                  explanation="La répétition de ce conseil unique montre à quel point la maîtrise de la colère est essentielle en islam. La colère est la racine de nombreux péchés : les paroles blessantes, la violence, la rupture des liens familiaux et l'injustice. Le Prophète ﷺ a enseigné des remèdes pratiques contre la colère : changer de position (s'asseoir si l'on est debout, se coucher si l'on est assis), faire les ablutions, se taire et chercher refuge auprès d'Allah contre Satan. Le véritable fort n'est pas celui qui terrasse les autres, mais celui qui se maîtrise dans la colère."
                />

                <HadithBlock
                  number={15}
                  title="Que celui qui croit en Allah et au Jour dernier dise du bien ou se taise"
                  narrator="Abu Hurayra"
                  arabic="مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ جَارَهُ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ ضَيْفَهُ"
                  translation="Que celui qui croit en Allah et au Jour dernier dise du bien ou qu&apos;il se taise. Que celui qui croit en Allah et au Jour dernier honore son voisin. Et que celui qui croit en Allah et au Jour dernier honore son hôte."
                  source="Sahih Al-Bukhari, n°6018 — Sahih Muslim, n°47"
                  grade="sahih"
                  explanation="Ce hadith lie directement la foi à trois comportements concrets et quotidiens. Premièrement, la maîtrise de la parole : chaque mot prononcé est enregistré par les anges, et le silence est préféré aux paroles nuisibles ou inutiles. Deuxièmement, le respect du voisin : l&apos;islam accorde une grande importance aux droits du voisinage. Troisièmement, la générosité envers l&apos;hôte, qui fait partie des valeurs fondamentales de la civilisation islamique."
                />

                <HadithBlock
                  number={16}
                  title="Ne vous enviez pas, ne vous détestez pas"
                  narrator="Abu Hurayra"
                  arabic="لَا تَحَاسَدُوا، وَلَا تَنَاجَشُوا، وَلَا تَبَاغَضُوا، وَلَا تَدَابَرُوا، وَلَا يَبِعْ بَعْضُكُمْ عَلَى بَيْعِ بَعْضٍ، وَكُونُوا عِبَادَ اللَّهِ إِخْوَانًا"
                  translation="Ne vous enviez pas les uns les autres, ne surenchérissez pas pour tromper, ne vous détestez pas, ne vous tournez pas le dos, ne vendez pas les uns sur les transactions des autres, et soyez des serviteurs d&apos;Allah, des frères."
                  source="Sahih Muslim, n°2564"
                  grade="sahih"
                  explanation="Ce hadith énumère les comportements qui détruisent le tissu social de la communauté musulmane : l&apos;envie, la tromperie commerciale, la haine et la rupture des liens. Il conclut par l&apos;injonction d&apos;être des frères, ce qui résume tout le programme de la fraternité islamique."
                />

                <HadithBlock
                  number={17}
                  title="La bienfaisance est prescrite en toute chose"
                  narrator="Shaddad ibn Aws"
                  arabic="إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ"
                  translation="Allah a prescrit la bienfaisance (ihsan) en toute chose. Lorsque vous tuez (un animal), tuez de la meilleure maniere, et lorsque vous egorgez, egorgez de la meilleure maniere. Que l&apos;un de vous aiguise sa lame et fasse en sorte que sa bete ne souffre pas."
                  source="Sahih Muslim, n°1955"
                  grade="sahih"
                  explanation="Ce hadith enseigne que l&apos;excellence (ihsan) doit accompagner chaque acte, même ceux qui semblent les plus ordinaires. Le Prophète ﷺ prend l&apos;exemple de l&apos;abattage rituel pour montrer que même dans un acte impliquant la mort, la miséricorde et la perfection du geste sont requises. Ce principe s&apos;étend à toute action du musulman."
                />

                <HadithBlock
                  number={18}
                  title="Crains Allah où que tu sois"
                  narrator="Abu Dharr et Mu&apos;adh ibn Jabal"
                  arabic="اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ"
                  translation="Crains Allah où que tu sois. Fais suivre la mauvaise action par une bonne action, elle l&apos;effacera. Et comporte-toi avec les gens avec un bon caractère."
                  source="Jami&apos; at-Tirmidhi, n°1987"
                  grade="hasan"
                  explanation="Ce hadith donne trois conseils complets pour la vie : la taqwa (conscience d&apos;Allah) en toute circonstance, le repentir immédiat après une faute par une bonne action qui l&apos;efface, et le bon comportement envers les gens. Ces trois principes couvrent la relation avec Allah, avec soi-même et avec les autres."
                />

                <HadithBlock
                  number={19}
                  title="Sache qu&apos;Allah te protège"
                  narrator="Ibn &apos;Abbas"
                  arabic="احْفَظِ اللَّهَ يَحْفَظْكَ، احْفَظِ اللَّهَ تَجِدْهُ تُجَاهَكَ. إِذَا سَأَلْتَ فَاسْأَلِ اللَّهَ، وَإِذَا اسْتَعَنْتَ فَاسْتَعِنْ بِاللَّهِ"
                  translation="Preserve (les commandements d&apos;)Allah, Il te preservera. Preserve (les commandements d&apos;)Allah, tu Le trouveras devant toi. Quand tu demandes, demande a Allah. Et quand tu cherches de l&apos;aide, cherche l&apos;aide d&apos;Allah."
                  source="Jami&apos; at-Tirmidhi, n°2516"
                  grade="sahih"
                  explanation="Ce hadith enseigne au jeune Ibn &apos;Abbas les fondements du tawhid pratique : compter uniquement sur Allah, Lui demander directement, et savoir que la protection divine est conditionnée par l&apos;obéissance. Si la communauté entière se rassemblait pour te nuire, elle ne pourrait te nuire que par ce qu&apos;Allah a déjà écrit pour toi."
                />

                <HadithBlock
                  number={20}
                  title="La pudeur fait partie de la foi"
                  narrator="Abu Mas&apos;ud"
                  arabic="إِنَّ مِمَّا أَدْرَكَ النَّاسُ مِنْ كَلَامِ النُّبُوَّةِ الْأُولَى: إِذَا لَمْ تَسْتَحِي فَاصْنَعْ مَا شِئْتَ"
                  translation="Parmi ce que les gens ont retenu des paroles des premiers prophetes : &laquo;&nbsp;Si tu n&apos;as pas de pudeur, fais ce que tu veux.&nbsp;&raquo;"
                  source="Sahih Al-Bukhari, n°3483"
                  grade="sahih"
                  explanation="La pudeur (al-haya&apos;) est une valeur universelle enseignée par tous les prophètes. L&apos;expression &laquo;&nbsp;fais ce que tu veux&nbsp;&raquo; n&apos;est pas une permission mais un avertissement : celui qui perd toute pudeur finit par commettre n&apos;importe quel acte répréhensible."
                />
              </section>

              {/* ============================================ */}
              {/* CTA FORMATION */}
              {/* ============================================ */}
              <ArticleCTA
                variant="formation"
                title="Approfondissez votre connaissance des hadiths"
                description="Apprenez l'arabe pour lire les hadiths dans leur langue originale et comprendre les subtilités que la traduction ne peut rendre."
                href="/apprendre-larabe"
                linkText="Découvrir la formation"
              />

              {/* ============================================ */}
              {/* HADITHS SUR LA PIETE (21-30) */}
              {/* ============================================ */}
              <section id="hadiths-piete" className="mt-16 scroll-mt-24">
                <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
                  Les hadiths sur la piété (21-30)
                </h2>

                <p className="mb-8 text-lg leading-relaxed text-foreground">
                  Cette troisième série de hadiths traite de la <strong>piété intérieure et du perfectionnement moral</strong>. Ils enseignent la droiture, l&apos;abandon de ce qui est futile, l&apos;amour fraternel, le principe de précaution et la maîtrise de la parole. Ces hadiths forment un programme de développement personnel fondé sur la conscience d&apos;Allah (<em>taqwa</em>).
                </p>

                <HadithBlock
                  number={21}
                  title="Dis 'je crois en Allah' puis sois droit"
                  narrator="Sufyan ibn Abdallah"
                  arabic="قُلْتُ: يَا رَسُولَ اللَّهِ، قُلْ لِي فِي الْإِسْلَامِ قَوْلًا لَا أَسْأَلُ عَنْهُ أَحَدًا غَيْرَكَ. قَالَ: قُلْ آمَنْتُ بِاللَّهِ ثُمَّ اسْتَقِمْ"
                  translation="J'ai dit : 'Ô Messager d'Allah, dis-moi en islam une parole que je ne demanderai à personne d'autre que toi.' Il répondit : 'Dis : Je crois en Allah, puis sois droit.'"
                  source="Sahih Muslim, n°38"
                  grade="sahih"
                  explanation="Ce hadith résume tout le programme de vie du musulman en deux mots : croire et être droit. La foi (iman) est le fondement, et la droiture (istiqama) est sa manifestation concrète. L'istiqama signifie rester constant sur le chemin d'Allah, sans excès ni négligence. Le Compagnon a demandé un conseil si complet qu'il n'aurait plus besoin de questionner personne d'autre, et le Prophète ﷺ lui a donné la réponse la plus concise et la plus profonde possible."
                />

                <HadithBlock
                  number={22}
                  title="L&apos;inviolabilité du sang du musulman"
                  narrator="Ibn Mas&apos;ud"
                  arabic="لَا يَحِلُّ دَمُ امْرِئٍ مُسْلِمٍ يَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَنِّي رَسُولُ اللَّهِ إِلَّا بِإِحْدَى ثَلَاثٍ: الثَّيِّبُ الزَّانِي، وَالنَّفْسُ بِالنَّفْسِ، وَالتَّارِكُ لِدِينِهِ الْمُفَارِقُ لِلْجَمَاعَةِ"
                  translation="Il n&apos;est pas permis de verser le sang d&apos;un musulman qui atteste qu&apos;il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah et que je suis le Messager d&apos;Allah, sauf dans trois cas : la personne mariée qui commet l&apos;adultère, vie pour vie (en cas de meurtre), et celui qui abandonne sa religion et quitte la communauté."
                  source="Sahih Al-Bukhari, n°6484 — Sahih Muslim, n°1676"
                  grade="sahih"
                  explanation="Ce hadith établit le caractère sacré de la vie humaine en islam. La vie du musulman est inviolable par défaut, et seuls trois cas exceptionnels, soumis à des procédures juridiques strictes, peuvent lever cette protection. Ce principe de sacralité de la vie est l&apos;un des cinq objectifs supérieurs de la charia (maqasid ash-shari&apos;a). Les savants soulignent que l&apos;application de ces sanctions relève exclusivement de l&apos;autorité judiciaire compétente."
                />

                <HadithBlock
                  number={23}
                  title="La purification est la moitié de la foi"
                  narrator="Abu Malik al-Ash&apos;ari"
                  arabic="الطُّهُورُ شَطْرُ الْإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلَأُ الْمِيزَانَ، وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلَآنِ مَا بَيْنَ السَّمَاوَاتِ وَالْأَرْضِ"
                  translation="La purification est la moitié de la foi. &apos;Al-hamdulillah&apos; remplit la balance, et &apos;SubhanAllah wal-hamdulillah&apos; remplissent ce qu&apos;il y a entre les cieux et la terre."
                  source="Sahih Muslim, n°223"
                  grade="sahih"
                  explanation="Ce hadith souligne l&apos;importance de la pureté en islam, tant physique que spirituelle. La purification (tahara) est une condition de validité de la prière et représente symboliquement la moitié de la foi. Le hadith enseigne également la valeur immense du dhikr (rappel d&apos;Allah) : de simples paroles de louange et de glorification remplissent la balance des bonnes actions le Jour du Jugement."
                />

                <HadithBlock
                  number={24}
                  title="La chaîne d&apos;or de la bienfaisance"
                  narrator="Abu Dharr"
                  arabic="قَالَ اللَّهُ تَعَالَى: يَا عِبَادِي، إِنِّي حَرَّمْتُ الظُّلْمَ عَلَى نَفْسِي وَجَعَلْتُهُ بَيْنَكُمْ مُحَرَّمًا فَلَا تَظَالَمُوا"
                  translation="Allah le Très-Haut a dit : &apos;Ô Mes serviteurs, Je Me suis interdit l&apos;injustice et Je l&apos;ai rendue interdite entre vous, alors ne soyez pas injustes les uns envers les autres.&apos;"
                  source="Sahih Muslim, n°2577"
                  grade="sahih"
                  explanation="Ce hadith qudsi est l&apos;un des plus importants de toute la tradition islamique. Allah y déclare que l&apos;injustice est interdite, même pour Lui-même, et qu&apos;elle est donc à fortiori interdite entre les êtres humains. Ce hadith couvre ensuite la guidance, le pardon, la subsistance et la générosité divine. Il se conclut par un rappel que seules les oeuvres comptent et que la miséricorde d&apos;Allah est infinie pour celui qui Le cherche."
                />

                <HadithBlock
                  number={25}
                  title="Les portes du bien"
                  narrator="Abu Hurayra"
                  arabic="كُلُّ سُلَامَى مِنَ النَّاسِ عَلَيْهِ صَدَقَةٌ كُلَّ يَوْمٍ تَطْلُعُ فِيهِ الشَّمْسُ"
                  translation="Chaque articulation du corps humain doit une charité chaque jour où le soleil se lève. Être équitable entre deux personnes est une charité, aider un homme avec sa monture est une charité, la bonne parole est une charité, chaque pas vers la prière est une charité, et enlever un obstacle du chemin est une charité."
                  source="Sahih Al-Bukhari, n°2989 — Sahih Muslim, n°1009"
                  grade="sahih"
                  explanation="Ce hadith enseigne que la gratitude pour la santé (360 articulations) s&apos;exprime par des actes de bienfaisance quotidiens. Le Prophète ﷺ énumère des actes simples et accessibles à tous : la parole aimable, l&apos;entraide, la marche vers la mosquée. La charité en islam n&apos;est pas réservée aux riches : un sourire, un mot gentil ou le retrait d&apos;un obstacle du chemin sont autant de formes de sadaqa."
                />

                <HadithBlock
                  number={26}
                  title="Ne pas nuire ni causer de tort"
                  narrator="Abu Sa&apos;id al-Khudri"
                  arabic="لَا ضَرَرَ وَلَا ضِرَارَ"
                  translation="Pas de préjudice ni de réciprocité dans le préjudice."
                  source="Sunan Ibn Majah, n°2341 — Muwatta Malik, n°1435"
                  grade="hasan"
                  explanation="Ce hadith court mais fondamental établit l&apos;une des cinq grandes règles de la jurisprudence islamique. Il interdit de causer du tort à autrui (darar) et de répondre au tort par le tort (dirar). Ce principe est la base de la protection des droits d&apos;autrui en islam et s&apos;applique dans tous les domaines : voisinage, commerce, environnement et relations sociales."
                />

                <HadithBlock
                  number={27}
                  title="La vertu est le bon caractère"
                  narrator="An-Nawwas ibn Sam&apos;an"
                  arabic="الْبِرُّ حُسْنُ الْخُلُقِ، وَالْإِثْمُ مَا حَاكَ فِي نَفْسِكَ وَكَرِهْتَ أَنْ يَطَّلِعَ عَلَيْهِ النَّاسُ"
                  translation="La vertu (al-birr) est le bon caractère. Et le péché est ce qui te trouble intérieurement et que tu détestes que les gens en aient connaissance."
                  source="Sahih Muslim, n°2553"
                  grade="sahih"
                  explanation="Ce hadith offre une définition simple et profonde de la vertu et du péché. La vertu n&apos;est pas seulement dans les actes rituels mais dans le bon caractère au quotidien. Le péché se reconnaît au malaise intérieur qu&apos;il provoque et à la honte qu&apos;on ressent à l&apos;idée que les autres le sachent. Cette conscience morale innée (fitra) est un guide intérieur donné par Allah."
                />

                <HadithBlock
                  number={28}
                  title="Écoutez et obéissez"
                  narrator="Abu Najih al-&apos;Irbad ibn Sariya"
                  arabic="أُوصِيكُمْ بِتَقْوَى اللَّهِ عَزَّ وَجَلَّ وَالسَّمْعِ وَالطَّاعَةِ وَإِنْ تَأَمَّرَ عَلَيْكُمْ عَبْدٌ"
                  translation="Je vous recommande la crainte d&apos;Allah, l&apos;écoute et l&apos;obéissance, même si c&apos;est un esclave qui vous gouverne. Celui d&apos;entre vous qui vivra verra de grandes divergences. Attachez-vous à ma Sunna et à la sunna des califes bien guidés."
                  source="Sunan Abu Dawud, n°4607 — Jami&apos; at-Tirmidhi, n°2676"
                  grade="sahih"
                  explanation="Ce hadith a été prononcé lors d&apos;un sermon d&apos;adieu qui a fait pleurer les Compagnons. Il contient la prescription de s&apos;attacher fermement à la Sunna, surtout en temps de divisions et de divergences. La référence aux &laquo;&nbsp;califes bien guidés&nbsp;&raquo; désigne Abu Bakr, &apos;Umar, &apos;Uthman et &apos;Ali. Le Prophète ﷺ a prédit les divergences et a fourni la solution : revenir aux sources authentiques."
                />

                <HadithBlock
                  number={29}
                  title="Indique-moi une action qui me fait entrer au Paradis"
                  narrator="Mu&apos;adh ibn Jabal"
                  arabic="أَلَا أَدُلُّكَ عَلَى رَأْسِ الْأَمْرِ وَعَمُودِهِ وَذِرْوَةِ سَنَامِهِ؟ رَأْسُ الْأَمْرِ الْإِسْلَامُ، وَعَمُودُهُ الصَّلَاةُ، وَذِرْوَةُ سَنَامِهِ الْجِهَادُ"
                  translation="Ne vais-je pas t&apos;indiquer la tête de l&apos;affaire, son pilier et son sommet ? La tête de l&apos;affaire est l&apos;islam, son pilier est la prière, et son sommet est l&apos;effort dans la voie d&apos;Allah."
                  source="Jami&apos; at-Tirmidhi, n°2616"
                  grade="hasan"
                  explanation="Ce hadith utilise la métaphore du chameau pour décrire la structure de la religion : la tête (sans laquelle il n&apos;y a pas de vie) est l&apos;islam, le pilier central (sans lequel tout s&apos;écroule) est la prière, et le sommet (le point le plus élevé) est le jihad, qui désigne ici tout effort fourni dans la voie d&apos;Allah. Le hadith se conclut par l&apos;importance de maîtriser sa langue."
                />

                <HadithBlock
                  number={30}
                  title="Allah a fixé des obligations, ne les négligez pas"
                  narrator="Abu Tha&apos;laba al-Khushani"
                  arabic="إِنَّ اللَّهَ تَعَالَى فَرَضَ فَرَائِضَ فَلَا تُضَيِّعُوهَا، وَحَدَّ حُدُودًا فَلَا تَعْتَدُوهَا، وَحَرَّمَ أَشْيَاءَ فَلَا تَنْتَهِكُوهَا، وَسَكَتَ عَنْ أَشْيَاءَ رَحْمَةً بِكُمْ غَيْرَ نِسْيَانٍ فَلَا تَبْحَثُوا عَنْهَا"
                  translation="Allah a imposé des obligations, ne les négligez pas. Il a fixé des limites, ne les transgressez pas. Il a interdit des choses, ne les violez pas. Et Il a tu certaines choses par miséricorde envers vous, sans oubli, alors ne les recherchez pas."
                  source="Rapporte par Ad-Daraqutni et d&apos;autres"
                  grade="hasan"
                  explanation="Ce hadith classe les choses en quatre catégories : les obligations (à accomplir), les limites (à ne pas franchir), les interdits (à éviter) et les choses sur lesquelles Allah a gardé le silence (à ne pas questionner excessivement). La dernière catégorie montre la miséricorde divine : ce qu&apos;Allah n&apos;a pas mentionné est laissé permis par défaut, et il ne convient pas d&apos;être excessivement rigoureux."
                />
              </section>

              {/* ============================================ */}
              {/* HADITHS SUR LA SPIRITUALITE (31-40) */}
              {/* ============================================ */}
              <section id="hadiths-spiritualite" className="mt-16 scroll-mt-24">
                <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
                  Les hadiths sur la spiritualité (31-40)
                </h2>

                <p className="mb-8 text-lg leading-relaxed text-foreground">
                  Les derniers hadiths de la compilation traitent de la <strong>dimension spirituelle et de la relation intime avec Allah</strong>. Ils abordent le détachement de ce monde, le chemin vers le Paradis, la proximité divine, le respect des aînés et la pudeur. Ces hadiths invitent le croyant à élever son regard au-delà du matériel pour atteindre l&apos;excellence spirituelle (<em>ihsan</em>).
                </p>

                <HadithBlock
                  number={31}
                  title="Sois dans ce monde comme un étranger"
                  narrator="Ibn &apos;Umar"
                  arabic="كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ"
                  translation="Sois dans ce monde comme un étranger ou un voyageur de passage."
                  source="Sahih Al-Bukhari, n°6416"
                  grade="sahih"
                  explanation="Ce hadith enseigne le détachement du monde matériel (zuhd), qui est l'une des stations les plus élevées de la spiritualité islamique. L'étranger ne s'attache pas au pays qu'il traverse, et le voyageur ne prend que le nécessaire pour son voyage. De même, le croyant doit considérer ce monde comme une étape temporaire vers l'au-delà éternel. Ibn 'Umar ajoutait : 'Quand tu es le soir, n'attends pas le matin, et quand tu es le matin, n'attends pas le soir.' Ce hadith n'interdit pas de profiter licitement de la vie, mais invite à ne pas en faire une fin en soi."
                />

                <HadithBlock
                  number={32}
                  title="Le Paradis est entouré de choses désagréables"
                  narrator="Abu Hurayra"
                  arabic="حُفَّتِ الْجَنَّةُ بِالْمَكَارِهِ وَحُفَّتِ النَّارُ بِالشَّهَوَاتِ"
                  translation="Le Paradis est entouré de choses désagréables et l'Enfer est entouré de désirs (tentations)."
                  source="Sahih Al-Bukhari, n°6487 — Sahih Muslim, n°2822"
                  grade="sahih"
                  explanation="Ce hadith utilise une métaphore saisissante pour décrire la réalité du cheminement spirituel. Le chemin vers le Paradis passe par des épreuves, des sacrifices et la résistance aux tentations : se lever pour la prière de l'aube, jeûner sous la chaleur, dépenser ses biens en charité. À l'inverse, le chemin vers l'Enfer est pavé de plaisirs immédiats et de désirs non maîtrisés. Ce hadith encourage la patience et la persévérance face aux difficultés de l'obéissance à Allah."
                />

                <HadithBlock
                  number={33}
                  title="Quiconque montre de l'hostilité envers un de Mes alliés"
                  narrator="Abu Hurayra"
                  arabic="إِنَّ اللَّهَ تَعَالَى قَالَ: مَنْ عَادَى لِي وَلِيًّا فَقَدْ آذَنْتُهُ بِالْحَرْبِ، وَمَا تَقَرَّبَ إِلَيَّ عَبْدِي بِشَيْءٍ أَحَبَّ إِلَيَّ مِمَّا افْتَرَضْتُ عَلَيْهِ، وَمَا يَزَالُ عَبْدِي يَتَقَرَّبُ إِلَيَّ بِالنَّوَافِلِ حَتَّى أُحِبَّهُ"
                  translation="Allah le Très-Haut a dit : 'Quiconque montre de l'hostilité envers un de Mes alliés, Je lui déclare la guerre. Mon serviteur ne se rapproche pas de Moi par une chose plus aimée de Moi que ce que Je lui ai imposé. Et Mon serviteur ne cesse de se rapprocher de Moi par les oeuvres surérogatoires jusqu'à ce que Je l'aime.'"
                  source="Sahih Al-Bukhari, n°6502"
                  grade="sahih"
                  explanation="Ce hadith qudsi (parole divine rapportée par le Prophète ﷺ) décrit le cheminement vers la proximité d'Allah en deux étapes. La première étape est l'accomplissement des obligations (fara'id) : la prière, le jeûne, la zakat. La seconde est l'ajout des actes surérogatoires (nawafil) : prières volontaires, jeûnes optionnels, charité supplémentaire. Lorsque le serviteur atteint ce niveau, Allah devient son protecteur et le guide dans toutes ses actions. Ce hadith est l'un des plus importants en matière de spiritualité islamique."
                />

                <HadithBlock
                  number={34}
                  title="N'est pas des nôtres celui qui ne respecte pas nos anciens"
                  narrator="Anas"
                  arabic="لَيْسَ مِنَّا مَنْ لَمْ يَرْحَمْ صَغِيرَنَا وَيُوَقِّرْ كَبِيرَنَا"
                  translation="N'est pas des nôtres celui qui n'est pas miséricordieux envers nos jeunes et ne respecte pas nos anciens."
                  source="Jami&apos; at-Tirmidhi, n°1919"
                  grade="hasan"
                  explanation="Ce hadith établit les règles de base du vivre-ensemble dans la communauté musulmane. La miséricorde envers les jeunes (enfants, adolescents) se manifeste par la douceur, la patience et l'éducation bienveillante. Le respect des anciens se traduit par la déférence, l'écoute et la reconnaissance de leur expérience et de leur savoir. Le Prophète ﷺ appliquait ce principe lui-même : il embrassait les enfants, jouait avec eux, et se levait pour accueillir les personnes âgées. Cette double exigence crée un équilibre social harmonieux."
                />

                <HadithBlock
                  number={35}
                  title="Allah est Bon et n&apos;accepte que le bon"
                  narrator="Abu Hurayra"
                  arabic="إِنَّ اللَّهَ تَعَالَى طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا، وَإِنَّ اللَّهَ أَمَرَ الْمُؤْمِنِينَ بِمَا أَمَرَ بِهِ الْمُرْسَلِينَ"
                  translation="Allah le Très-Haut est Bon et n&apos;accepte que le bon. Et certes, Allah a ordonné aux croyants ce qu&apos;Il a ordonné aux messagers, en disant : &apos;Ô Messagers ! Mangez des bonnes choses et faites le bien.&apos;"
                  source="Sahih Muslim, n°1015"
                  grade="sahih"
                  explanation="Ce hadith établit un lien direct entre la pureté de la subsistance et l&apos;acceptation des actes d&apos;adoration. Allah étant Pur et Bon (at-Tayyib), Il n&apos;accepte que ce qui est pur et bon. Celui qui se nourrit de gains illicites verra ses invocations rejetées, même s&apos;il lève les mains vers le ciel avec ferveur. Ce hadith est un rappel puissant de l&apos;importance du halal dans tous les aspects de la vie."
                />

                <HadithBlock
                  number={36}
                  title="Celui qui soulage un croyant d&apos;une difficulte"
                  narrator="Abu Hurayra"
                  arabic="مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ"
                  translation="Celui qui soulage un croyant d&apos;une difficulte de ce monde, Allah le soulagera d&apos;une difficulte parmi celles du Jour de la Resurrection."
                  source="Sahih Muslim, n°2699"
                  grade="sahih"
                  explanation="Ce hadith établit un principe de réciprocité divine : la récompense est à la mesure de l&apos;acte. Soulager autrui, faciliter ses affaires, dissimuler ses défauts — tout cela est récompensé proportionnellement dans l&apos;au-delà. C&apos;est une puissante motivation pour l&apos;entraide et la solidarité communautaire."
                />

                <HadithBlock
                  number={37}
                  title="Allah a inscrit les bonnes et les mauvaises actions"
                  narrator="Ibn &apos;Abbas"
                  arabic="إِنَّ اللَّهَ كَتَبَ الْحَسَنَاتِ وَالسَّيِّئَاتِ ثُمَّ بَيَّنَ ذَٰلِكَ، فَمَنْ هَمَّ بِحَسَنَةٍ فَلَمْ يَعْمَلْهَا كَتَبَهَا اللَّهُ لَهُ عِنْدَهُ حَسَنَةً كَامِلَةً"
                  translation="Allah a inscrit les bonnes et les mauvaises actions, puis Il les a détaillées. Celui qui a l&apos;intention de faire une bonne action sans la réaliser, Allah lui inscrit une bonne action complète. S&apos;il la réalise, Allah lui inscrit de dix à sept cents bonnes actions, voire davantage."
                  source="Sahih Al-Bukhari, n°6491 — Sahih Muslim, n°131"
                  grade="sahih"
                  explanation="Ce hadith montre l&apos;immense générosité d&apos;Allah dans la comptabilisation des actes. La simple intention d&apos;une bonne action est déjà récompensée, tandis qu&apos;une mauvaise intention non exécutée n&apos;est pas comptée contre le serviteur. Et la bonne action réalisée est multipliée au minimum par dix. Cette générosité divine illustre la miséricorde d&apos;Allah qui devance Sa colère."
                />

                <HadithBlock
                  number={38}
                  title="N&apos;est pas des nôtres celui qui ne respecte pas nos anciens"
                  narrator="Anas ibn Malik"
                  arabic="لَيْسَ مِنَّا مَنْ لَمْ يَرْحَمْ صَغِيرَنَا وَيُوَقِّرْ كَبِيرَنَا"
                  translation="N&apos;est pas des nôtres celui qui n&apos;est pas miséricordieux envers nos jeunes et ne respecte pas nos anciens."
                  source="Jami&apos; at-Tirmidhi, n°1919"
                  grade="hasan"
                  explanation="Ce hadith établit les règles du vivre-ensemble dans la communauté musulmane. La miséricorde envers les jeunes se manifeste par la douceur, la patience et l&apos;éducation bienveillante. Le respect des anciens se traduit par la déférence, l&apos;écoute et la reconnaissance de leur expérience. Le Prophète ﷺ incarnait ce principe : il embrassait les enfants et se levait pour accueillir les personnes âgées."
                />

                <HadithBlock
                  number={39}
                  title="Allah a pardonné à ma communauté l&apos;erreur et l&apos;oubli"
                  narrator="Ibn &apos;Abbas"
                  arabic="إِنَّ اللَّهَ تَجَاوَزَ عَنْ أُمَّتِي الْخَطَأَ وَالنِّسْيَانَ وَمَا اسْتُكْرِهُوا عَلَيْهِ"
                  translation="Allah a pardonné à ma communauté l&apos;erreur involontaire, l&apos;oubli et ce qu&apos;on les a contraints de faire."
                  source="Sunan Ibn Majah, n°2045"
                  grade="hasan"
                  explanation="Ce hadith illustre la miséricorde divine dans la législation islamique. Trois excuses libèrent le musulman de toute responsabilité : l&apos;erreur commise sans intention, l&apos;oubli involontaire, et la contrainte. Ce principe est un pilier de la jurisprudence islamique et montre que l&apos;islam ne surcharge pas ses fidèles au-delà de leur capacité."
                />

                <HadithBlock
                  number={40}
                  title="Si tu n&apos;as pas de pudeur, fais ce que tu veux"
                  narrator="Abu Mas&apos;ud"
                  arabic="إِنَّ مِمَّا أَدْرَكَ النَّاسُ مِنْ كَلَامِ النُّبُوَّةِ الْأُولَى: إِذَا لَمْ تَسْتَحِي فَاصْنَعْ مَا شِئْتَ"
                  translation="Parmi ce que les gens ont retenu des paroles des premiers prophètes : &apos;Si tu n&apos;as pas de pudeur, fais ce que tu veux.&apos;"
                  source="Sahih Al-Bukhari, n°3483"
                  grade="sahih"
                  explanation="Ce hadith clôture la compilation en soulignant que la pudeur (al-haya&apos;) est une valeur universelle enseignée par tous les prophètes depuis les origines de l&apos;humanité. L&apos;expression &apos;fais ce que tu veux&apos; n&apos;est pas une permission mais un avertissement : celui qui perd toute pudeur finit par commettre n&apos;importe quel acte répréhensible. La pudeur en islam est une vertu protectrice qui préserve la dignité, l&apos;honneur et la moralité."
                />
              </section>

              {/* ============================================ */}
              {/* ENSEIGNEMENTS ET LECONS PRATIQUES */}
              {/* ============================================ */}
              <section id="enseignements" className="mt-16 scroll-mt-24">
                <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
                  Enseignements et leçons pratiques
                </h2>

                <p className="mb-8 text-lg leading-relaxed text-foreground">
                  Les 40 hadiths d&apos;An-Nawawi ne sont pas un simple exercice de mémorisation. Chaque hadith contient des <strong>leçons pratiques applicables au quotidien</strong>. Voici les principaux enseignements à retenir de cette compilation inestimable.
                </p>

                <div className="space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5 lg:p-6">
                    <h3 className="mb-2 text-lg font-semibold text-primary">
                      1. La sincérité de l&apos;intention avant toute action
                    </h3>
                    <p className="text-base leading-relaxed text-foreground">
                      Le hadith n°1 enseigne que chaque acte doit être motivé par une intention pure tournée vers Allah. Avant de prier, de jeûner, d&apos;étudier ou même de travailler, le musulman doit purifier son intention. Un acte accompli pour plaire aux gens ou par habitude perd sa valeur spirituelle. La niya transforme les actes quotidiens en actes d&apos;adoration.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5 lg:p-6">
                    <h3 className="mb-2 text-lg font-semibold text-primary">
                      2. La connaissance des fondements de la foi
                    </h3>
                    <p className="text-base leading-relaxed text-foreground">
                      Les hadiths de Jibril et des cinq piliers rappellent que l&apos;islam repose sur des fondements clairs et structurés. Le musulman doit connaître les trois dimensions de sa religion : l&apos;islam (les actes extérieurs), l&apos;iman (la foi intérieure) et l&apos;ihsan (l&apos;excellence). Cette connaissance est le socle sur lequel se construit toute la pratique religieuse.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5 lg:p-6">
                    <h3 className="mb-2 text-lg font-semibold text-primary">
                      3. La prudence face aux zones grises
                    </h3>
                    <p className="text-base leading-relaxed text-foreground">
                      Plusieurs hadiths (n°6 et n°14) invitent le croyant à éviter les situations ambiguës. Dans un monde où les tentations sont nombreuses et les limites parfois floues, le principe de précaution spirituelle (wara&apos;) protège le croyant. Quand on doute de la licéité d&apos;une chose, il est plus sage de s&apos;en abstenir.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5 lg:p-6">
                    <h3 className="mb-2 text-lg font-semibold text-primary">
                      4. La maîtrise de la parole et de la colère
                    </h3>
                    <p className="text-base leading-relaxed text-foreground">
                      Le Prophète ﷺ insiste à travers plusieurs hadiths sur la maîtrise de la langue et de la colère. La parole peut construire ou détruire, guérir ou blesser. Le silence est une vertu quand la parole risque de nuire. De même, la colère est la porte de nombreux péchés, et sa maîtrise est un signe de force véritable.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5 lg:p-6">
                    <h3 className="mb-2 text-lg font-semibold text-primary">
                      5. L&apos;altruisme et la fraternité
                    </h3>
                    <p className="text-base leading-relaxed text-foreground">
                      Le hadith n°13 fait de l&apos;altruisme une condition de la foi complète. Le musulman ne peut pas se contenter d&apos;adorer Allah individuellement : il doit aussi vouloir pour les autres ce qu&apos;il veut pour lui-même. Cet enseignement est le fondement de la solidarité communautaire, de la charité et de la bienveillance envers autrui.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5 lg:p-6">
                    <h3 className="mb-2 text-lg font-semibold text-primary">
                      6. Le détachement du monde matériel
                    </h3>
                    <p className="text-base leading-relaxed text-foreground">
                      Le hadith n°31 invite le croyant à considérer ce monde comme un lieu de passage et non une destination finale. Cela ne signifie pas abandonner les responsabilités terrestres, mais ne pas en faire une obsession. Le zuhd (détachement) consiste à utiliser les biens de ce monde sans s&apos;y attacher, en gardant le regard tourné vers l&apos;au-delà.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5 lg:p-6">
                    <h3 className="mb-2 text-lg font-semibold text-primary">
                      7. La progression vers la proximité divine
                    </h3>
                    <p className="text-base leading-relaxed text-foreground">
                      Le hadith qudsi n°33 trace une feuille de route claire pour se rapprocher d&apos;Allah : d&apos;abord accomplir les obligations, puis multiplier les actes surérogatoires. Ce cheminement progressif est à la portée de chacun. Les prières obligatoires sont le minimum, et les prières surérogatoires, le dhikr, le jeûne volontaire et la charité supplémentaire sont les moyens d&apos;atteindre l&apos;amour divin.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5 lg:p-6">
                    <h3 className="mb-2 text-lg font-semibold text-primary">
                      8. La pureté de la subsistance
                    </h3>
                    <p className="text-base leading-relaxed text-foreground">
                      Le hadith n°10 rappelle qu&apos;Allah n&apos;accepte que ce qui est pur et licite. Cela concerne la nourriture, les revenus, les transactions et tous les aspects de la vie matérielle. Le musulman doit veiller à ce que chaque bouchée qu&apos;il mange et chaque dirham qu&apos;il gagne soient halal, car c&apos;est une condition pour que ses invocations soient exaucées et ses actes d&apos;adoration acceptés.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* AFFILIATE FORM */}
              {/* ============================================ */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe pour lire les hadiths"
                  description="Maîtrisez la langue arabe pour comprendre les paroles du Prophète ﷺ dans leur langue originale."
                  preselect="arabe"
                />
              </div>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} />

              {/* ============================================ */}
              {/* MAILLAGE INTERNE */}
              {/* ============================================ */}
              <section className="mt-16 border-t border-border pt-12">
                <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
                  Continuez votre lecture
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Link
                    href="/hadith-du-jour"
                    className="group rounded-xl border border-border bg-accent p-5 transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <p className="font-semibold text-primary group-hover:text-primary">
                      Hadith du jour
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Un hadith authentique chaque jour avec texte arabe, traduction et explication.
                    </p>
                  </Link>
                  <Link
                    href="/hadith-prophete-islam"
                    className="group rounded-xl border border-border bg-accent p-5 transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <p className="font-semibold text-primary group-hover:text-primary">
                      Hadiths du Prophète ﷺ
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Explorez les paroles prophétiques classées par thème et par collection.
                    </p>
                  </Link>
                  <Link
                    href="/hadith-mariage-islam"
                    className="group rounded-xl border border-border bg-accent p-5 transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <p className="font-semibold text-primary group-hover:text-primary">
                      Hadiths sur le mariage
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Les enseignements prophétiques sur le couple et la vie conjugale en islam.
                    </p>
                  </Link>
                  <Link
                    href="/doua-islam"
                    className="group rounded-xl border border-border bg-accent p-5 transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <p className="font-semibold text-primary group-hover:text-primary">
                      Doua en islam
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Découvrez les invocations prophétiques pour chaque moment de la vie.
                    </p>
                  </Link>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
