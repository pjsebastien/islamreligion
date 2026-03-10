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
    "Hadiths sur le dégradé et la coiffure en islam : ce que dit la Sunna",
  description:
    "Découvrez les hadiths authentiques sur le dégradé (fade) et la coiffure en islam : al-qaza&apos;, cheveux du Prophète ﷺ, teinture au henné, tashabbuh. Texte arabe, traduction et avis des savants.",
  openGraph: {
    title:
      "Hadiths sur le dégradé et la coiffure en islam : ce que dit la Sunna",
    description:
      "Les hadiths authentiques sur le dégradé et la coiffure en islam : al-qaza&apos;, description des cheveux du Prophète ﷺ, entretien de la chevelure et avis des savants sur les coupes modernes.",
    url: "https://www.islamreligion.fr/hadith-degrade-coiffure-islam",
    images: [
      {
        url: "/images/arches-mosquee-moucharabieh-lumiere-doree.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-degrade-coiffure-islam",
  },
};

const tocItems = [
  { id: "qaza-interdit", label: "Al-qaza\u2019 : le rasage partiel interdit" },
  { id: "cheveux-prophete", label: "Les cheveux du Prophète \uFDFA" },
  { id: "entretien-cheveux", label: "L\u2019entretien et le soin des cheveux" },
  { id: "teinture-henne", label: "La teinture au henné et le changement de couleur" },
  { id: "tashabbuh", label: "Le tashabbuh : l\u2019imitation interdite" },
  { id: "savants", label: "Avis des savants sur le dégradé moderne" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Le dégradé (fade) est-il haram en islam ?",
    answer:
      "La question du dégradé fait l\u2019objet de divergences entre les savants. Ceux qui l\u2019interdisent s\u2019appuient sur les hadiths interdisant al-qaza\u2019 (raser une partie de la tête en laissant le reste). Ceux qui le permettent estiment que le dégradé (fade) n\u2019est pas un rasage partiel mais un raccourcissement progressif, ce qui diffère d\u2019al-qaza\u2019. Le cheikh Ibn Uthaymin a considéré que si la différence de longueur est légère et progressive, cela ne relève pas d\u2019al-qaza\u2019.",
  },
  {
    question:
      "Qu\u2019est-ce que al-qaza\u2019 interdit dans les hadiths ?",
    answer:
      "Al-qaza\u2019 consiste à raser certaines parties de la tête et à en laisser d\u2019autres non rasées. Le Prophète \uFDFA l\u2019a explicitement interdit dans un hadith rapporté par Ibn \u2019Umar (Bukhari 5921, Muslim 2120). Les savants s\u2019accordent sur l\u2019interdiction de cette pratique, qu\u2019ils classent comme makruh tahrim (interdit) ou haram selon les écoles.",
  },
  {
    question:
      "Comment étaient les cheveux du Prophète Muhammad \uFDFA ?",
    answer:
      "D\u2019après les hadiths d\u2019Anas ibn Malik et d\u2019Aisha, les cheveux du Prophète \uFDFA descendaient entre ses oreilles et ses épaules (Bukhari 5905). Il ne les laissait ni trop longs ni trop courts, et prenait grand soin de les peigner et de les huiler. Sa chevelure était parfois décrite atteignant le lobe de l\u2019oreille (Bukhari 5903).",
  },
  {
    question:
      "Est-il permis de teindre ses cheveux en islam ?",
    answer:
      "Oui, le Prophète \uFDFA a encouragé la teinture des cheveux blancs avec du henné et du katam pour se distinguer des gens du Livre qui ne teignaient pas leurs cheveux (Muslim 2103). En revanche, la teinture en noir pur est interdite selon le hadith de Jabir (Muslim 2102), sauf divergence de certains savants.",
  },
  {
    question:
      "Le Prophète \uFDFA prenait-il soin de ses cheveux ?",
    answer:
      "Oui, le Prophète \uFDFA était très soigneux avec ses cheveux. Il les peignait régulièrement, les huilait et ordonnait à celui qui a des cheveux de les honorer (Abu Dawud 4163). Aisha rapporte qu\u2019il aimait commencer par le côté droit pour se peigner comme pour toute chose (Bukhari 168).",
  },
  {
    question:
      "Peut-on imiter les coiffures des non-musulmans ?",
    answer:
      "Le Prophète \uFDFA a interdit le tashabbuh, c\u2019est-à-dire l\u2019imitation des non-musulmans dans ce qui leur est spécifique : \u00ab Celui qui imite un peuple fait partie d\u2019eux \u00bb (Abu Dawud 4031). Si une coiffure est spécifiquement associée à une culture non musulmane ou à un mode de vie contraire à l\u2019islam, les savants la déconseillent ou l\u2019interdisent.",
  },
  {
    question:
      "Quelle est la différence entre al-qaza\u2019 et le dégradé ?",
    answer:
      "Al-qaza\u2019 consiste à raser complètement certaines zones de la tête tout en laissant d\u2019autres intactes, créant un contraste net. Le dégradé (fade) consiste à raccourcir progressivement les cheveux du bas vers le haut, sans raser totalement aucune zone. Certains savants voient une différence claire entre les deux ; d\u2019autres estiment que si le dégradé est très prononcé (skin fade), il rejoint al-qaza\u2019.",
  },
  {
    question:
      "Est-il obligatoire de se raser la tête entièrement ou de tout laisser pousser ?",
    answer:
      "Non, il n\u2019est pas obligatoire de se raser entièrement la tête ni de tout laisser pousser. Le Prophète \uFDFA a dit : \u00ab Rasez tout ou laissez tout \u00bb (Abu Dawud 4195), ce qui signifie que si l\u2019on rase, on doit raser uniformément, et si l\u2019on laisse pousser, on doit laisser pousser uniformément. L\u2019interdit porte sur le rasage partiel (al-qaza\u2019), non sur le choix entre raser ou laisser.",
  },
];

export default function HadithDegradeCoiffureIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-degrade-coiffure-islam/#article",
        headline:
          "Hadiths sur le dégradé et la coiffure en islam : ce que dit la Sunna",
        description:
          "Découvrez les hadiths authentiques sur le dégradé (fade) et la coiffure en islam : al-qaza\u2019, cheveux du Prophète, teinture au henné, tashabbuh et avis des savants.",
        image: "/images/arches-mosquee-moucharabieh-lumiere-doree.jpg",
        datePublished: "2026-05-09",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-degrade-coiffure-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-degrade-coiffure-islam/#breadcrumb",
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
            name: "Hadiths sur le dégradé et la coiffure",
            item: "https://www.islamreligion.fr/hadith-degrade-coiffure-islam",
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
          title="Hadiths sur le dégradé et la coiffure en islam"
          subtitle="Les enseignements prophétiques sur al-qaza&apos;, l&apos;entretien des cheveux, la teinture et les avis des savants sur les coupes modernes comme le dégradé (fade)."
          imageSrc="/images/arches-mosquee-moucharabieh-lumiere-doree.jpg"
          imageAlt="Hadiths sur le dégradé et la coiffure en islam, enseignements prophétiques"
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
                  Hadiths sur le dégradé et la coiffure
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
                    Le Prophète ﷺ a interdit al-qaza&apos; : raser une partie de la tête en laissant le reste, une pratique unanimement réprouvée par les savants.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La Sunna enseigne soit de raser entièrement la tête, soit de laisser pousser les cheveux uniformément, en prenant soin de les peigner et de les huiler.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le dégradé (fade) moderne fait l&apos;objet de divergences : certains savants l&apos;assimilent à al-qaza&apos;, d&apos;autres le distinguent car il s&apos;agit d&apos;un raccourcissement progressif.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    L&apos;imitation des non-musulmans (tashabbuh) dans les coiffures qui leur sont spécifiques est interdite par le Prophète ﷺ.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Al-Qaza interdit     */}
              {/* ============================== */}
              <section id="qaza-interdit" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Al-qaza&apos; : le rasage partiel interdit
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le terme arabe <em>al-qaza&apos;</em> (القزع) désigne le fait de raser certaines parties de la tête tout en laissant d&apos;autres parties non rasées. Le Prophète ﷺ a explicitement interdit cette pratique dans plusieurs hadiths authentiques. C&apos;est la base textuelle sur laquelle les savants s&apos;appuient pour évaluer les coupes de cheveux modernes, y compris le dégradé.
                </p>

                <HadithBlock
                  number={1}
                  title="L&apos;interdiction d&apos;al-qaza&apos;"
                  narrator="Ibn &apos;Umar"
                  arabic="أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَهَى عَنِ الْقَزَعِ"
                  translation="Le Messager d&apos;Allah ﷺ a interdit al-qaza&apos; (le rasage partiel de la tête)."
                  source="Sahih Al-Bukhari, n°5921 — Sahih Muslim, n°2120"
                  grade="sahih"
                  explanation="Ce hadith est la référence principale sur l&apos;interdiction du rasage partiel. Nafi&apos;, le rapporteur, a précisé qu&apos;al-qaza&apos; consiste à raser des parties de la tête d&apos;un enfant en laissant d&apos;autres parties. Les savants ont étendu cette interdiction aux adultes. L&apos;imam An-Nawawi a classé cette pratique parmi les actes makruh (détestables), tandis que d&apos;autres savants comme Ibn al-Qayyim l&apos;ont jugée haram. L&apos;unanimité existe sur le caractère réprouvé de cette pratique."
                />

                <HadithBlock
                  number={2}
                  title="Rasez tout ou laissez tout"
                  narrator="Ibn &apos;Umar"
                  arabic="أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ رَأَى صَبِيًّا قَدْ حُلِقَ بَعْضُ رَأْسِهِ وَتُرِكَ بَعْضُهُ فَنَهَاهُمْ عَنْ ذَلِكَ وَقَالَ: احْلِقُوهُ كُلَّهُ أَوِ اتْرُكُوهُ كُلَّهُ"
                  translation="Le Prophète ﷺ vit un garçon dont une partie de la tête avait été rasée et une autre laissée. Il leur interdit cela et dit : &laquo;&nbsp;Rasez-le entièrement ou laissez-le entièrement.&nbsp;&raquo;"
                  source="Sunan Abu Dawud, n°4195"
                  grade="sahih"
                  explanation="Ce hadith complète le précédent en donnant la règle pratique : l&apos;uniformité. Le Prophète ﷺ ne laisse pas de zone grise : soit on rase la tête intégralement, soit on laisse tous les cheveux. Cette injonction montre que le problème d&apos;al-qaza&apos; n&apos;est pas le rasage en soi, mais le déséquilibre et la disparité entre les parties de la tête. C&apos;est ce principe que les savants contemporains appliquent pour évaluer les coupes modernes."
                />

                <HadithBlock
                  number={3}
                  title="L&apos;interdiction détaillée par Nafi&apos;"
                  narrator="Ibn &apos;Umar"
                  arabic="نَهَى رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنِ الْقَزَعِ قَالَ: قُلْتُ لِنَافِعٍ: وَمَا الْقَزَعُ؟ قَالَ: يُحْلَقُ بَعْضُ رَأْسِ الصَّبِيِّ وَيُتْرَكُ بَعْضٌ"
                  translation="Le Messager d&apos;Allah ﷺ a interdit al-qaza&apos;. J&apos;ai dit à Nafi&apos; : qu&apos;est-ce qu&apos;al-qaza&apos; ? Il répondit : c&apos;est raser une partie de la tête de l&apos;enfant et en laisser une autre."
                  source="Sahih Muslim, n°2120"
                  grade="sahih"
                  explanation="Cette version du hadith apporte la définition linguistique d&apos;al-qaza&apos; par Nafi&apos;, le célèbre élève d&apos;Ibn &apos;Umar. La précision est importante car elle montre que les compagnons eux-mêmes ont cherché à définir exactement ce que recouvre cette interdiction. Les juristes s&apos;appuient sur cette définition pour déterminer si une coupe de cheveux entre ou non dans le cadre d&apos;al-qaza&apos;."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths établissent un principe clair : le musulman ne doit pas raser des parties de sa tête en laissant d&apos;autres intactes. La question qui se pose pour les coupes modernes est de savoir si le dégradé (fade), qui raccourcit progressivement sans raser totalement, entre dans cette catégorie. Nous y reviendrons dans la section consacrée aux avis des savants.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Cheveux du Prophète  */}
              {/* ============================== */}
              <section id="cheveux-prophete" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les cheveux du Prophète ﷺ
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les hadiths décrivent avec précision l&apos;apparence et la coiffure du Prophète ﷺ. Ces descriptions ne sont pas de simples anecdotes : elles servent de modèle pour le musulman qui souhaite suivre la Sunna dans son apparence. Le Prophète ﷺ avait une chevelure soignée et d&apos;une longueur intermédiaire.
                </p>

                <HadithBlock
                  number={4}
                  title="Les cheveux entre les oreilles et les épaules"
                  narrator="Anas ibn Malik"
                  arabic="كَانَ شَعَرُ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِلَى أَنْصَافِ أُذُنَيْهِ"
                  translation="Les cheveux du Messager d&apos;Allah ﷺ allaient jusqu&apos;à la moitié de ses oreilles."
                  source="Sahih Al-Bukhari, n°5903"
                  grade="sahih"
                  explanation="Ce hadith décrit la longueur habituelle des cheveux du Prophète ﷺ. La précision &laquo; moitié des oreilles &raquo; indique une longueur modérée, ni très courte ni très longue. Les savants expliquent que la longueur variait selon les périodes, car d&apos;autres hadiths mentionnent des cheveux atteignant les épaules, notamment lorsqu&apos;il ne les avait pas coupés depuis un moment."
                />

                <HadithBlock
                  number={5}
                  title="Les cheveux entre les oreilles et les épaules"
                  narrator="Aisha"
                  arabic="كَانَ شَعَرُ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَوْقَ الْوَفْرَةِ وَدُونَ الْجُمَّةِ"
                  translation="Les cheveux du Messager d&apos;Allah ﷺ étaient au-dessus de la wafra (au lobe de l&apos;oreille) et en dessous de la jumma (aux épaules)."
                  source="Sunan Abu Dawud, n°4187 — Jami&apos; at-Tirmidhi, n°1755"
                  grade="hasan"
                  explanation="Ce hadith d&apos;Aisha précise la longueur des cheveux du Prophète ﷺ en utilisant deux termes techniques arabes. La <em>wafra</em> désigne des cheveux atteignant le lobe de l&apos;oreille, la <em>jumma</em> des cheveux atteignant les épaules. Le Prophète ﷺ se situait entre les deux, ce qui correspondait à la norme de la virilité arabe de son époque. Les savants en déduisent que les cheveux longs sont permis pour les hommes, tant qu&apos;ils sont entretenus."
                />

                <HadithBlock
                  number={6}
                  title="Le Prophète ﷺ avait parfois les cheveux en quatre tresses"
                  narrator="Umm Hani&apos;"
                  arabic="قَدِمَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مَكَّةَ وَلَهُ أَرْبَعُ غَدَائِرَ"
                  translation="Le Prophète ﷺ arriva à La Mecque avec quatre tresses."
                  source="Sunan Abu Dawud, n°4191 — Jami&apos; at-Tirmidhi, n°1781"
                  grade="hasan"
                  explanation="Ce hadith montre que le Prophète ﷺ portait parfois ses cheveux en tresses, notamment durant les voyages. Cela indique que le soin des cheveux et leur arrangement sont permis pour les hommes. Les savants utilisent ce hadith pour affirmer que la diversité des coiffures masculines est permise tant qu&apos;elle ne contrevient pas aux interdictions (al-qaza&apos;, tashabbuh). Les quatre tresses servaient à maintenir les cheveux propres et ordonnés durant le voyage."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Entretien cheveux    */}
              {/* ============================== */}
              <section id="entretien-cheveux" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;entretien et le soin des cheveux dans la Sunna
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ accordait une grande importance à l&apos;hygiène et à l&apos;apparence. Loin de négliger son aspect physique, il encourageait les musulmans à prendre soin de leur chevelure et à se présenter de manière soignée. Les hadiths suivants illustrent cette éthique de propreté et de dignité.
                </p>

                <HadithBlock
                  number={7}
                  title="Celui qui a des cheveux, qu&apos;il les honore"
                  narrator="Abu Hurayra"
                  arabic="مَنْ كَانَ لَهُ شَعَرٌ فَلْيُكْرِمْهُ"
                  translation="Celui qui a des cheveux, qu&apos;il les honore (en prenne soin)."
                  source="Sunan Abu Dawud, n°4163"
                  grade="hasan"
                  explanation="Ce hadith pose un principe général : prendre soin de ses cheveux est un devoir pour le musulman. Le verbe &laquo; yukrimhu &raquo; (honorer) englobe le lavage, le peignage, l&apos;huilage et la coupe régulière. Les savants en déduisent que négliger ses cheveux au point de paraître sale ou désordonné est contraire à la Sunna. Ce hadith encourage donc l&apos;entretien, tout en laissant la liberté du style tant que les interdits sont respectés."
                />

                <HadithBlock
                  number={8}
                  title="Le peignage et le soin de la chevelure"
                  narrator="Aisha"
                  arabic="كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يُحِبُّ التَّيَمُّنَ فِي تَنَعُّلِهِ وَتَرَجُّلِهِ وَطُهُورِهِ وَفِي شَأْنِهِ كُلِّهِ"
                  translation="Le Prophète ﷺ aimait commencer par la droite pour se chausser, se peigner, faire ses ablutions et dans toutes ses affaires."
                  source="Sahih Al-Bukhari, n°168"
                  grade="sahih"
                  explanation="Ce hadith mentionne le peignage (<em>tarajjul</em>) parmi les habitudes quotidiennes du Prophète ﷺ. Le fait qu&apos;il commençait par le côté droit montre l&apos;attention portée même aux détails de la toilette. Les savants utilisent ce hadith pour encourager les musulmans à se peigner régulièrement et à entretenir leur apparence, conformément à la Sunna de propreté et de dignité."
                />

                <HadithBlock
                  number={9}
                  title="L&apos;interdiction de négliger son apparence"
                  narrator="Jabir ibn &apos;Abdillah"
                  arabic="أَتَانَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَرَأَى رَجُلًا شَعِثًا قَدْ تَفَرَّقَ شَعَرُهُ فَقَالَ: أَمَا كَانَ يَجِدُ هَذَا مَا يُسَكِّنُ بِهِ شَعَرَهُ"
                  translation="Le Messager d&apos;Allah ﷺ vint nous rendre visite et vit un homme aux cheveux ébouriffés et en désordre. Il dit : &laquo;&nbsp;Celui-ci ne trouvait-il pas de quoi discipliner ses cheveux ?&nbsp;&raquo;"
                  source="Sunan Abu Dawud, n°4062"
                  grade="hasan"
                  explanation="Ce hadith montre que le Prophète ﷺ désapprouvait la négligence de l&apos;apparence. Il ne s&apos;agit pas d&apos;imposer un style particulier, mais de maintenir un minimum de soin et de propreté. Les savants en concluent que l&apos;islam valorise une apparence soignée et ordonnée, ce qui inclut le soin de la coiffure. Cette exigence de dignité extérieure s&apos;inscrit dans le concept plus large de la <em>fitra</em> (disposition naturelle)."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh de l&apos;apparence, la fitra et les règles de la Sunna avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Teinture et henné    */}
              {/* ============================== */}
              <section id="teinture-henne" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La teinture au henné et le changement de couleur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La question de la teinture des cheveux est un volet important du fiqh de l&apos;apparence en islam. Le Prophète ﷺ a encouragé la teinture au henné et au katam, tout en interdisant la teinture en noir pur. Ces hadiths sont étroitement liés au thème de la coiffure, car ils définissent les limites du changement d&apos;apparence capillaire.
                </p>

                <HadithBlock
                  number={10}
                  title="Changez la couleur des cheveux blancs"
                  narrator="Abu Hurayra"
                  arabic="إِنَّ الْيَهُودَ وَالنَّصَارَى لَا يَصْبُغُونَ فَخَالِفُوهُمْ"
                  translation="Les juifs et les chrétiens ne teignent pas (leurs cheveux blancs). Distinguez-vous d&apos;eux."
                  source="Sahih Al-Bukhari, n°5899 — Sahih Muslim, n°2103"
                  grade="sahih"
                  explanation="Ce hadith ordonne aux musulmans de se distinguer des gens du Livre en teignant les cheveux blancs. Le Prophète ﷺ recommandait le henné (rougeâtre) et le katam (plante donnant une couleur sombre tirant sur le brun). La majorité des savants considèrent cette teinture comme recommandée (mustahabb), pas obligatoire. L&apos;objectif est double : la distinction identitaire et le soin de l&apos;apparence."
                />

                <HadithBlock
                  number={11}
                  title="L&apos;interdiction de la teinture en noir"
                  narrator="Jabir ibn &apos;Abdillah"
                  arabic="جِيءَ بِأَبِي قُحَافَةَ يَوْمَ فَتْحِ مَكَّةَ وَرَأْسُهُ وَلِحْيَتُهُ كَالثَّغَامَةِ بَيَاضًا فَقَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: غَيِّرُوا هَذَا بِشَيْءٍ وَاجْتَنِبُوا السَّوَادَ"
                  translation="On amena Abu Quhafa (le père d&apos;Abu Bakr) le jour de la conquête de La Mecque, et sa tête et sa barbe étaient blanches comme la plante thughama. Le Messager d&apos;Allah ﷺ dit : &laquo;&nbsp;Changez cela avec quelque chose, mais évitez le noir.&nbsp;&raquo;"
                  source="Sahih Muslim, n°2102"
                  grade="sahih"
                  explanation="Ce hadith confirme l&apos;encouragement à teindre les cheveux blancs, tout en posant une limite : ne pas utiliser le noir pur. Les savants divergent sur la nature de cette interdiction (haram ou makruh), mais la majorité penche pour l&apos;interdiction stricte (haram) de la teinture en noir, sauf pour les combattants au jihad selon certains avis. Le henné, le katam et les teintes brunes ou rougeâtres restent les options recommandées."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Tashabbuh           */}
              {/* ============================== */}
              <section id="tashabbuh" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le tashabbuh : l&apos;imitation interdite
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le concept de <em>tashabbuh</em> (التشبه) — l&apos;imitation des non-musulmans dans ce qui leur est spécifique — est un principe fondamental qui s&apos;applique directement à la question des coiffures. Le Prophète ﷺ a mis en garde contre l&apos;adoption de pratiques vestimentaires ou capillaires propres à d&apos;autres communautés.
                </p>

                <HadithBlock
                  number={12}
                  title="Celui qui imite un peuple fait partie d&apos;eux"
                  narrator="Ibn &apos;Umar"
                  arabic="مَنْ تَشَبَّهَ بِقَوْمٍ فَهُوَ مِنْهُمْ"
                  translation="Celui qui imite un peuple fait partie d&apos;eux."
                  source="Sunan Abu Dawud, n°4031"
                  grade="hasan"
                  explanation="Ce hadith est la référence majeure sur le tashabbuh. Les savants l&apos;appliquent aux coiffures lorsque celles-ci sont spécifiquement associées à des cultures, des sous-cultures ou des modes de vie contraires à l&apos;islam. L&apos;imam Ahmad, Abu Dawud et d&apos;autres ont rapporté ce hadith. Ibn Taymiyya lui a consacré un ouvrage entier (<em>Iqtida al-Sirat al-Mustaqim</em>) dans lequel il explique que l&apos;imitation extérieure influence les convictions intérieures. Le tashabbuh ne concerne pas ce qui est universel (comme un vêtement fonctionnel), mais ce qui est un marqueur identitaire d&apos;un autre peuple."
                />

                <HadithBlock
                  number={13}
                  title="Se distinguer des polythéistes"
                  narrator="Ibn &apos;Umar"
                  arabic="خَالِفُوا الْمُشْرِكِينَ وَفِّرُوا اللِّحَى وَأَحْفُوا الشَّوَارِبَ"
                  translation="Distinguez-vous des polythéistes : laissez pousser les barbes et taillez les moustaches."
                  source="Sahih Al-Bukhari, n°5892 — Sahih Muslim, n°259"
                  grade="sahih"
                  explanation="Ce hadith illustre le principe de distinction dans l&apos;apparence. Le Prophète ﷺ lie le port de la barbe à la volonté de se différencier des non-musulmans. Les savants appliquent ce même principe aux coiffures : si une coupe est spécifiquement identifiée à un groupe ou une mode contraire à l&apos;islam, elle relève du tashabbuh. Toutefois, ce hadith concerne la barbe et non directement les cheveux ; il est cité ici pour montrer la logique générale du tashabbuh dans l&apos;apparence."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Avis des savants     */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Avis des savants sur le dégradé moderne
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le dégradé (fade) est une coupe de cheveux contemporaine qui consiste à raccourcir progressivement les cheveux sur les côtés et l&apos;arrière, en créant une transition douce vers le haut de la tête. Les savants contemporains ont été interrogés sur cette pratique et ont émis des avis nuancés.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Al-qaza&apos; consiste à raser certains endroits de la tête et à en laisser d&apos;autres. Si le raccourcissement est léger et progressif, de sorte que le résultat paraît uniforme et qu&apos;il n&apos;y a pas de disparité flagrante, alors cela ne relève pas d&apos;al-qaza&apos;. Mais si le rasage est net sur les côtés tandis que le haut est laissé long, c&apos;est du qaza&apos; interdit.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Cheikh Ibn Uthaymin, <em>Fatawa Nur &apos;ala ad-Darb</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;L&apos;interdiction d&apos;al-qaza&apos; vise le cas où il y a une différence nette et visible entre les parties rasées et les parties laissées. Le dégradé qui crée une transition progressive ne correspond pas à la définition classique d&apos;al-qaza&apos;, à condition que la partie inférieure ne soit pas rasée à blanc (skin fade). Dans le doute, il est préférable de s&apos;abstenir.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Comité permanent des fatwas (Al-Lajna ad-Da&apos;ima), Fatwa n°21778
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Ce qui est interdit, c&apos;est de raser une partie de la tête et de laisser le reste. Si l&apos;on coupe les cheveux à différentes longueurs de manière à ce que le résultat soit harmonieux et progressif, la majorité des savants ne considèrent pas cela comme al-qaza&apos;. Cependant, si le but est d&apos;imiter des modes contraires aux valeurs islamiques, le tashabbuh s&apos;ajoute comme cause d&apos;interdiction.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le qaza&apos; est de raser des endroits de la tête et d&apos;en laisser d&apos;autres ; ceci est détestable (makruh) sans divergence. Quant à raccourcir les cheveux uniformément, c&apos;est permis. Et quant à les raccourcir avec des longueurs différentes de manière progressive, les gens de science divergent, et la prudence est de l&apos;éviter.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Tuhfat al-Mawdud</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En résumé, les savants distinguent trois cas : (1) le rasage partiel net (al-qaza&apos;), unanimement interdit ; (2) le raccourcissement progressif modéré (dégradé léger), majoritairement permis ; (3) le skin fade avec rasage à blanc sur les côtés, plus controversé et considéré comme al-qaza&apos; par plusieurs savants. Le musulman soucieux de sa pratique optera pour la prudence en consultant un savant de confiance.
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
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des principes clairs pour le musulman concernant sa coiffure et son apparence capillaire :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Éviter al-qaza&apos; sous toutes ses formes
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le rasage partiel de la tête — raser certaines zones en laissant d&apos;autres intactes — est interdit par le Prophète ﷺ. Cela inclut les coupes où les côtés sont rasés à blanc tandis que le dessus est laissé long.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Prendre soin de ses cheveux
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a ordonné à celui qui a des cheveux de les honorer. Peigner, laver et entretenir sa chevelure fait partie de la Sunna et de la fitra.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Rechercher l&apos;uniformité
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La règle prophétique est claire : &laquo;&nbsp;Rasez tout ou laissez tout.&nbsp;&raquo; Le musulman doit viser l&apos;harmonie dans sa coupe de cheveux, sans contraste excessif entre les parties.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Éviter l&apos;imitation (tashabbuh)
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Adopter des coiffures spécifiquement associées à des cultures ou modes de vie contraires à l&apos;islam est interdit. Le musulman doit préserver son identité tout en restant soigné.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Teindre les cheveux blancs avec du henné
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La teinture au henné et au katam est une sunna recommandée pour les cheveux blancs. La teinture en noir pur est interdite selon la majorité des savants.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Consulter les savants en cas de doute
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le dégradé moderne fait l&apos;objet de divergences savantes. En cas de doute, le musulman doit consulter un savant de confiance et privilégier la prudence, conformément au hadith : &laquo;&nbsp;Laisse ce qui te fait douter pour ce qui ne te fait pas douter.&nbsp;&raquo;
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur la coiffure et l&apos;apparence dans leur langue originale et approfondissez votre connaissance de la Sunna."
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
                  title="Hadiths sur la barbe en islam : enseignements et avis des savants"
                  description="Les hadiths authentiques sur le port de la barbe, son entretien et les avis des quatre écoles juridiques."
                  href="/hadith-barbe-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le tatouage et l&apos;apparence en islam"
                  description="Les interdictions prophétiques sur le tatouage, l&apos;épilation et les modifications corporelles."
                  href="/hadith-tattoo-apparence-islam"
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
