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
    "Hadith : définition et sciences du hadith en islam",
  description:
    "Découvrez la définition du hadith en islam, les sciences du hadith (ulum al-hadith), la classification (sahih, hasan, da'if) et les grands compilateurs comme Bukhari et Muslim.",
  openGraph: {
    title:
      "Hadith : définition et sciences du hadith en islam",
    description:
      "Tout savoir sur le hadith : définition, composantes (isnad et matn), classification, sciences du hadith et grands compilateurs. Texte arabe, traduction et explications.",
    url: "https://www.islamreligion.fr/hadith-definition-sciences-islam",
    images: [
      {
        url: "/images/islam-science-savoir-connaissance-livre.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-definition-sciences-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique" },
  { id: "definition-hadith", label: "Qu'est-ce qu'un hadith ?" },
  { id: "sciences-hadith", label: "Les sciences du hadith" },
  { id: "classification", label: "Classification des hadiths" },
  { id: "compilateurs", label: "Les grands compilateurs" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quelle est la définition du hadith en islam ?",
    answer:
      "Le hadith désigne tout ce qui est attribué au Prophète Muhammad ﷺ comme parole (qawl), acte (fi'l), approbation tacite (taqrir) ou description physique et morale (sifa). Il se compose de deux parties : l'isnad (chaîne de transmission) et le matn (texte du hadith). Le hadith constitue la deuxième source de législation en islam après le Coran.",
  },
  {
    question:
      "Quelle est la différence entre un hadith sahih, hasan et da'if ?",
    answer:
      "Un hadith sahih (authentique) remplit cinq conditions : chaîne ininterrompue, rapporteurs fiables et précis, absence d'anomalie (shudhudh) et absence de défaut caché ('illa). Un hadith hasan (bon) remplit les mêmes critères mais avec un degré de précision légèrement inférieur chez un rapporteur. Un hadith da'if (faible) est celui qui ne remplit pas une ou plusieurs de ces conditions, en raison d'une rupture dans la chaîne ou d'un rapporteur peu fiable.",
  },
  {
    question:
      "Qu'est-ce que l'isnad et pourquoi est-il si important ?",
    answer:
      "L'isnad est la chaîne de transmission qui relie le rapporteur final au Prophète ﷺ, en citant chaque transmetteur intermédiaire. L'isnad est fondamental car il permet de vérifier l'authenticité du hadith en examinant la fiabilité de chaque maillon. L'imam Abdullah ibn al-Mubarak a dit : « L'isnad fait partie de la religion ; sans l'isnad, quiconque dirait ce qu'il veut. »",
  },
  {
    question:
      "Qui sont les six grands compilateurs de hadiths (Kutub as-Sitta) ?",
    answer:
      "Les Kutub as-Sitta (les six livres) sont les compilations les plus prestigieuses du hadith sunnite : Sahih al-Bukhari (imam al-Bukhari, m. 256 H), Sahih Muslim (imam Muslim, m. 261 H), Sunan Abu Dawud (imam Abu Dawud, m. 275 H), Jami' at-Tirmidhi (imam at-Tirmidhi, m. 279 H), Sunan an-Nasa'i (imam an-Nasa'i, m. 303 H) et Sunan Ibn Majah (imam Ibn Majah, m. 273 H).",
  },
  {
    question:
      "Qu'est-ce que la science du jarh wa ta'dil ?",
    answer:
      "Le jarh wa ta'dil est la science de la critique et de la validation des rapporteurs de hadiths. Le jarh (critique) consiste à relever les défauts d'un rapporteur (mensonge, mauvaise mémoire, innovation blâmable), tandis que le ta'dil (validation) consiste à attester de sa fiabilité et de son intégrité. Cette science a permis de filtrer les hadiths authentiques des hadiths fabriqués avec une rigueur méthodologique sans précédent dans l'histoire.",
  },
  {
    question:
      "Peut-on utiliser un hadith da'if (faible) en islam ?",
    answer:
      "Les savants divergent sur cette question. L'imam Ahmad et d'autres permettent l'utilisation du hadith da'if dans les vertus des actes (fada'il al-a'mal) sous trois conditions : que la faiblesse ne soit pas sévère, que le hadith s'inscrive dans un principe général établi, et qu'on ne lui attribue pas une authenticité certaine. En revanche, les hadiths da'if ne sont jamais utilisés pour établir des règles juridiques (ahkam). L'imam al-Bukhari et Ibn Hazm n'acceptent que les hadiths sahih et hasan.",
  },
  {
    question:
      "Quelle est la différence entre le hadith et le Coran ?",
    answer:
      "Le Coran est la parole d'Allah révélée mot pour mot au Prophète ﷺ par l'ange Jibril, transmise par voie mutawatir (mass-transmission), dont la récitation est un acte d'adoration. Le hadith est la parole, l'acte ou l'approbation du Prophète ﷺ, transmis principalement par voie ahad (chaînes individuelles), et sa récitation n'a pas le même statut liturgique. Le hadith qudsi est un cas particulier où le sens vient d'Allah mais les mots sont du Prophète ﷺ.",
  },
];

export default function HadithDefinitionSciencesIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-definition-sciences-islam/#article",
        headline:
          "Hadith : définition et sciences du hadith en islam",
        description:
          "Découvrez la définition du hadith en islam, les sciences du hadith (ulum al-hadith), la classification et les grands compilateurs.",
        image: "/images/islam-science-savoir-connaissance-livre.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-definition-sciences-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-definition-sciences-islam/#breadcrumb",
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
            name: "Définition et sciences du hadith",
            item: "https://www.islamreligion.fr/hadith-definition-sciences-islam",
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
          title="Hadith : définition et sciences du hadith en islam"
          subtitle="Comprendre le hadith, ses composantes, sa classification et les sciences développées par les savants musulmans pour préserver la Sunna prophétique."
          imageSrc="/images/islam-science-savoir-connaissance-livre.jpg"
          imageAlt="Sciences du hadith en islam, définition et classification"
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
                  Définition et sciences du hadith
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
                    Le hadith est la deuxième source de législation en islam après le Coran, englobant les paroles, les actes et les approbations du Prophète ﷺ.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les sciences du hadith (<em>ulum al-hadith</em>) constituent un système critique unique au monde pour vérifier l&apos;authenticité des transmissions.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les hadiths sont classés en plusieurs catégories — sahih, hasan, da&apos;if, mawdu&apos; — selon des critères rigoureux définis par les savants.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les six grandes compilations (Kutub as-Sitta) de Bukhari, Muslim, Abu Dawud, Tirmidhi, Nasa&apos;i et Ibn Majah forment le corpus de référence.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique : l&apos;obéissance au Prophète et la préservation du savoir
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder la définition technique du hadith, il est essentiel de comprendre pourquoi les paroles du Prophète ﷺ occupent une place si centrale en islam. Le Coran lui-même ordonne aux croyants d&apos;obéir au Messager et de prendre modèle sur lui. C&apos;est cette injonction divine qui a motivé les savants musulmans à développer un système unique de préservation et de vérification des hadiths.
                </p>

                <HadithCard
                  arabic="وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانتَهُوا وَاتَّقُوا اللَّهَ إِنَّ اللَّهَ شَدِيدُ الْعِقَابِ"
                  text="Prenez ce que le Messager vous donne, et abstenez-vous de ce qu&apos;il vous interdit. Et craignez Allah, car Allah est dur en punition."
                  source="Coran, sourate Al-Hashr (59:7)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset est l&apos;un des fondements les plus clairs de l&apos;autorité prophétique en islam. Il établit que les enseignements du Prophète ﷺ ne sont pas de simples conseils, mais des directives que le croyant doit suivre. C&apos;est précisément pour permettre aux générations suivantes d&apos;appliquer ce verset que les Compagnons, puis les savants, ont veillé à transmettre fidèlement les hadiths.
                </p>

                <HadithCard
                  arabic="لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ لِّمَن كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ وَذَكَرَ اللَّهَ كَثِيرًا"
                  text="Vous avez certes dans le Messager d&apos;Allah un excellent modèle pour quiconque espère en Allah et au Jour dernier, et qui invoque Allah fréquemment."
                  source="Coran, sourate Al-Ahzab (33:21)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fait du Prophète ﷺ le modèle (<em>uswa hasana</em>) par excellence. Pour suivre ce modèle, il faut connaître sa vie, ses paroles, ses actes et ses approbations — et c&apos;est exactement ce que le hadith préserve. Sans le hadith, les musulmans ne sauraient ni comment prier, ni comment accomplir le pèlerinage, ni comment appliquer concrètement les prescriptions coraniques.
                </p>

                <HadithCard
                  arabic="وَمَا يَنطِقُ عَنِ الْهَوَىٰ إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ"
                  text="Et il ne prononce rien sous l&apos;effet de la passion. Ce n&apos;est rien d&apos;autre qu&apos;une révélation inspirée."
                  source="Coran, sourate An-Najm (53:3-4)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset confirme que les paroles du Prophète ﷺ en matière de religion ne relèvent pas de l&apos;opinion personnelle, mais de l&apos;inspiration divine. C&apos;est pourquoi les savants ont toujours considéré la Sunna comme une source de législation faisant autorité, complémentaire au Coran. L&apos;imam Ash-Shafi&apos;i a d&apos;ailleurs consacré son ouvrage <em>Ar-Risala</em> à démontrer cette autorité de la Sunna à partir du Coran lui-même.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Définition du hadith */}
              {/* ============================== */}
              <section id="definition-hadith" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Qu&apos;est-ce qu&apos;un hadith ? Définition et composantes
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le mot &laquo;&nbsp;hadith&nbsp;&raquo; (حديث) signifie littéralement en arabe &laquo;&nbsp;propos&nbsp;&raquo;, &laquo;&nbsp;récit&nbsp;&raquo; ou &laquo;&nbsp;nouvelle&nbsp;&raquo;. Dans la terminologie islamique, il désigne tout ce qui est attribué au Prophète Muhammad ﷺ comme parole (<em>qawl</em>), acte (<em>fi&apos;l</em>), approbation tacite (<em>taqrir</em>) ou description physique et morale (<em>sifa</em>). Le hadith est la deuxième source de législation islamique après le Coran.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Chaque hadith se compose de deux parties essentielles : l&apos;<strong>isnad</strong> (chaîne de transmission) et le <strong>matn</strong> (texte du hadith). L&apos;isnad est la série de rapporteurs qui se transmettent le hadith les uns aux autres jusqu&apos;au Prophète ﷺ. Le matn est le contenu même du hadith, c&apos;est-à-dire la parole, la description de l&apos;acte ou de l&apos;approbation. Les savants du hadith examinent ces deux éléments séparément pour déterminer l&apos;authenticité d&apos;un hadith.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il convient de distinguer le hadith du Coran. Le Coran est la parole d&apos;Allah, révélée mot pour mot, transmise par voie <em>mutawatir</em> (mass-transmission ininterrompue), dont la récitation est un acte d&apos;adoration. Le hadith, quant à lui, est transmis principalement par voie <em>ahad</em> (chaînes individuelles) et ses mots sont ceux du Prophète ﷺ. Un cas particulier est le <em>hadith qudsi</em> (hadith sacré), dont le sens vient d&apos;Allah mais dont les mots sont ceux du Prophète ﷺ.
                </p>

                <HadithBlock
                  number={1}
                  title="Les actes ne valent que par les intentions"
                  narrator="&apos;Umar ibn al-Khattab"
                  arabic="إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوِ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ"
                  translation="Les actes ne valent que par les intentions, et chaque homme n&apos;obtient que ce qu&apos;il a eu l&apos;intention de faire. Celui dont l&apos;émigration a été pour Allah et Son Messager, son émigration est pour Allah et Son Messager. Et celui dont l&apos;émigration a été pour obtenir un bien de ce monde ou pour épouser une femme, son émigration est pour ce vers quoi il a émigré."
                  source="Sahih Al-Bukhari, n°1 — Sahih Muslim, n°1907"
                  grade="sahih"
                  explanation="Ce hadith est considéré par les savants comme l&apos;un des hadiths les plus importants de l&apos;islam. L&apos;imam al-Bukhari a choisi de l&apos;ouvrir son Sahih avec ce hadith, et l&apos;imam An-Nawawi l&apos;a placé en tête de ses Quarante Hadiths. Il illustre parfaitement ce qu&apos;est un hadith sahih : sa chaîne de transmission est solide, ses rapporteurs sont fiables, et son contenu est un principe fondamental de la religion. Ce hadith montre que l&apos;intention est le critère par lequel Allah juge les actes."
                />

                <HadithBlock
                  number={2}
                  title="La religion est le bon conseil"
                  narrator="Tamim ad-Dari"
                  arabic="الدِّينُ النَّصِيحَةُ قُلْنَا لِمَنْ قَالَ لِلَّهِ وَلِكِتَابِهِ وَلِرَسُولِهِ وَلِأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ"
                  translation="La religion, c&apos;est le bon conseil (nasiha). Nous avons dit : envers qui ? Il a répondu : envers Allah, envers Son Livre, envers Son Messager, envers les dirigeants des musulmans et envers l&apos;ensemble des musulmans."
                  source="Sahih Muslim, n°55"
                  grade="sahih"
                  explanation="Ce hadith est un exemple de hadith &laquo;&nbsp;jawami&apos; al-kalim&nbsp;&raquo;, ces paroles concises du Prophète ﷺ qui contiennent un sens très vaste. L&apos;imam An-Nawawi a dit que ce hadith est l&apos;un des piliers de l&apos;islam. Il illustre la richesse du matn (texte) d&apos;un hadith : en une seule phrase, le Prophète ﷺ résume l&apos;essence de la religion. La nasiha envers le Livre d&apos;Allah inclut d&apos;ailleurs l&apos;étude de la Sunna, car c&apos;est elle qui explique le Coran."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces deux hadiths illustrent la nature du hadith prophétique : une parole concise, porteuse d&apos;un enseignement profond, transmise par des chaînes vérifiées. Le premier est un hadith &laquo;&nbsp;fard&nbsp;&raquo; (rapporté par un seul Compagnon à l&apos;origine, &apos;Umar), tandis que le second est également un hadith fard (rapporté uniquement par Tamim ad-Dari). Ces exemples montrent que même un hadith rapporté par un seul Compagnon peut atteindre le degré le plus élevé d&apos;authenticité.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez les sciences du hadith, le mustalah et la méthodologie des savants avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Sciences du hadith   */}
              {/* ============================== */}
              <section id="sciences-hadith" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les sciences du hadith (ulum al-hadith)
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les sciences du hadith (<em>ulum al-hadith</em>) désignent l&apos;ensemble des disciplines développées par les savants musulmans pour étudier, vérifier et classer les hadiths. Ces sciences constituent un système critique sans équivalent dans l&apos;histoire de l&apos;humanité pour la vérification des transmissions orales. Parmi les principales branches :
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  <strong>&apos;Ilm ar-Rijal</strong> (la science des hommes) : cette discipline étudie la biographie de chaque rapporteur de hadith — sa naissance, sa mort, ses professeurs, ses élèves, sa mémoire, sa probité et son intégrité. Des ouvrages monumentaux comme <em>Tahdhib al-Kamal</em> d&apos;al-Mizzi et <em>Tahdhib at-Tahdhib</em> d&apos;Ibn Hajar recensent des milliers de rapporteurs avec un niveau de détail remarquable.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  <strong>Al-Jarh wa at-Ta&apos;dil</strong> (la critique et la validation) : cette science consiste à évaluer chaque rapporteur selon des critères précis. Le <em>jarh</em> relève les défauts (mensonge, mauvaise mémoire, innovation blâmable), tandis que le <em>ta&apos;dil</em> atteste de la fiabilité du rapporteur. Les savants ont établi des niveaux graduels pour le jarh et le ta&apos;dil, du plus élogieux au plus sévère.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  <strong>Mustalah al-Hadith</strong> (la terminologie du hadith) : cette discipline définit les termes techniques utilisés pour classer les hadiths : sahih, hasan, da&apos;if, mawdu&apos;, mursal, munqati&apos;, mudallas, etc. L&apos;ouvrage fondateur dans ce domaine est la <em>Muqaddima</em> d&apos;Ibn as-Salah, qui a servi de base à tous les travaux ultérieurs.
                </p>

                <HadithBlock
                  number={3}
                  title="L&apos;isnad fait partie de la religion"
                  narrator="Abdullah ibn al-Mubarak"
                  arabic="الْإِسْنَادُ مِنَ الدِّينِ وَلَوْلَا الْإِسْنَادُ لَقَالَ مَنْ شَاءَ مَا شَاءَ"
                  translation="L&apos;isnad fait partie de la religion. Sans l&apos;isnad, quiconque dirait ce qu&apos;il veut."
                  source="Muqaddima Sahih Muslim"
                  grade="sahih"
                  explanation="Cette parole célèbre d&apos;Abdullah ibn al-Mubarak (m. 181 H), rapportée par l&apos;imam Muslim dans l&apos;introduction de son Sahih, résume l&apos;importance capitale de la chaîne de transmission. Sans l&apos;isnad, n&apos;importe qui pourrait attribuer au Prophète ﷺ des paroles qu&apos;il n&apos;a jamais prononcées. L&apos;isnad est le système de contrôle qualité qui protège la Sunna de la falsification. Aucune autre civilisation n&apos;a développé un système aussi rigoureux pour la vérification des transmissions."
                />

                <HadithBlock
                  number={4}
                  title="L&apos;examen des chaînes lors des épreuves"
                  narrator="Muhammad ibn Sirin"
                  arabic="لَمْ يَكُونُوا يَسْأَلُونَ عَنِ الْإِسْنَادِ فَلَمَّا وَقَعَتِ الْفِتْنَةُ قَالُوا سَمُّوا لَنَا رِجَالَكُمْ فَيُنْظَرُ إِلَى أَهْلِ السُّنَّةِ فَيُؤْخَذُ حَدِيثُهُمْ وَيُنْظَرُ إِلَى أَهْلِ الْبِدَعِ فَلَا يُؤْخَذُ حَدِيثُهُمْ"
                  translation="Ils ne demandaient pas la chaîne de transmission (isnad). Mais lorsque la fitna survint, ils dirent : citez-nous vos sources. On regardait alors les gens de la Sunna et on acceptait leur hadith, et on regardait les gens de l&apos;innovation et on refusait leur hadith."
                  source="Muqaddima Sahih Muslim"
                  grade="sahih"
                  explanation="Cette parole de Muhammad ibn Sirin (m. 110 H), l&apos;un des grands Tabi&apos;in, explique le contexte historique de la naissance de la science de l&apos;isnad. Au début, les Compagnons se transmettaient les hadiths en toute confiance. Mais après les troubles politiques (fitna) qui ont secoué la communauté musulmane, la fabrication de hadiths à des fins partisanes est devenue un risque réel. C&apos;est alors que les savants ont institutionnalisé la vérification des chaînes de transmission."
                />

                <HadithBlock
                  number={5}
                  title="Mentir sur le Prophète ﷺ"
                  narrator="Abu Hurayra"
                  arabic="مَنْ كَذَبَ عَلَيَّ مُتَعَمِّدًا فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ"
                  translation="Celui qui ment délibérément à mon sujet, qu&apos;il prépare sa place en Enfer."
                  source="Sahih Al-Bukhari, n°110 — Sahih Muslim, n°3"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des rares hadiths mutawatir (rapporté par un si grand nombre de Compagnons qu&apos;il est impossible qu&apos;ils se soient tous accordés sur un mensonge). Plus de soixante-dix Compagnons l&apos;ont rapporté. Il constitue la base de la sévérité des savants envers la fabrication de hadiths. C&apos;est la menace contenue dans ce hadith qui a poussé les muhaddithun à développer des critères aussi stricts pour la vérification des transmissions. Toute la science du hadith peut être vue comme une réponse à cette mise en garde prophétique."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Classification       */}
              {/* ============================== */}
              <section id="classification" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Classification des hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants du hadith ont développé un système de classification détaillé pour évaluer chaque hadith. Cette classification repose sur l&apos;examen de la chaîne de transmission (isnad) et du texte (matn). Les principales catégories sont les suivantes :
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  <strong>Sahih</strong> (authentique) : un hadith dont la chaîne est ininterrompue, dont chaque rapporteur est fiable (<em>thiqa</em>) et précis (<em>dabit</em>), qui ne présente ni anomalie (<em>shudhudh</em>) ni défaut caché (<em>&apos;illa</em>). C&apos;est le degré le plus élevé d&apos;authenticité.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  <strong>Hasan</strong> (bon) : un hadith qui remplit les mêmes conditions que le sahih, mais dont l&apos;un des rapporteurs présente une légère faiblesse dans la précision de sa mémoire. Le hadith hasan est une preuve valable en jurisprudence islamique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  <strong>Da&apos;if</strong> (faible) : un hadith qui ne remplit pas les conditions du sahih ou du hasan, en raison d&apos;une rupture dans la chaîne, de la faiblesse d&apos;un rapporteur ou d&apos;une anomalie dans le texte. Les types de faiblesse sont nombreux : <em>mursal</em> (chaîne où le Compagnon est omis), <em>munqati&apos;</em> (chaîne interrompue), <em>mudallas</em> (chaîne où un rapporteur cache son véritable informateur).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  <strong>Mawdu&apos;</strong> (fabriqué) : un hadith dont on a prouvé qu&apos;il a été inventé et faussement attribué au Prophète ﷺ. C&apos;est la catégorie la plus grave. Les savants comme Ibn al-Jawzi ont compilé des ouvrages entiers consacrés aux hadiths fabriqués (<em>Al-Mawdu&apos;at</em>).
                </p>

                <HadithBlock
                  number={6}
                  title="Exemple de hadith sahih : la pureté est la moitié de la foi"
                  narrator="Abu Malik al-Ash&apos;ari"
                  arabic="الطُّهُورُ شَطْرُ الْإِيمَانِ وَالْحَمْدُ لِلَّهِ تَمْلَأُ الْمِيزَانَ وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلَآَنِ أَوْ تَمْلَأُ مَا بَيْنَ السَّمَاوَاتِ وَالْأَرْضِ"
                  translation="La pureté est la moitié de la foi. &laquo;&nbsp;Al-hamdulillah&nbsp;&raquo; remplit la balance. &laquo;&nbsp;Subhan Allah wa al-hamdulillah&nbsp;&raquo; remplissent — ou remplit — ce qu&apos;il y a entre les cieux et la terre."
                  source="Sahih Muslim, n°223"
                  grade="sahih"
                  explanation="Ce hadith illustre un hadith sahih par excellence : sa chaîne de transmission est solide, chaque rapporteur est reconnu fiable, et son contenu est cohérent avec les enseignements coraniques sur la pureté et le dhikr. L&apos;imam Muslim l&apos;a inclus dans son Sahih, ce qui signifie qu&apos;il a vérifié qu&apos;il remplit toutes les conditions d&apos;authenticité. Ce hadith enseigne que la pureté rituelle n&apos;est pas un simple geste physique mais un acte de foi à part entière."
                />

                <HadithBlock
                  number={7}
                  title="Exemple de hadith hasan : la bonne parole est une aumône"
                  narrator="Abu Dharr"
                  arabic="تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ وَأَمْرُكَ بِالْمَعْرُوفِ وَنَهْيُكَ عَنِ الْمُنْكَرِ صَدَقَةٌ وَإِرْشَادُكَ الرَّجُلَ فِي أَرْضِ الضَّلَالِ لَكَ صَدَقَةٌ"
                  translation="Ton sourire à ton frère est une aumône. Commander le bien et interdire le mal est une aumône. Guider un homme égaré sur son chemin est pour toi une aumône."
                  source="Jami&apos; at-Tirmidhi, n°1956"
                  grade="hasan"
                  explanation="Ce hadith a été classé hasan par l&apos;imam at-Tirmidhi. Le grade hasan signifie que le hadith est acceptable comme preuve, même si l&apos;un de ses rapporteurs présente une légère faiblesse dans la précision. Les savants utilisent ce hadith pour démontrer que la charité en islam ne se limite pas à l&apos;argent : chaque bonne action, même un sourire, est une forme de sadaqa. Le fait qu&apos;il soit hasan et non sahih ne diminue en rien sa valeur juridique et morale."
                />

                <HadithBlock
                  number={8}
                  title="Exemple de hadith da&apos;if : la recherche du savoir en Chine"
                  narrator="Anas ibn Malik"
                  arabic="اطْلُبُوا الْعِلْمَ وَلَوْ بِالصِّينِ"
                  translation="Recherchez le savoir, fût-ce jusqu&apos;en Chine."
                  source="Rapporté par al-Bayhaqi dans Shu&apos;ab al-Iman"
                  grade="daif"
                  explanation="Ce hadith est très répandu dans la culture musulmane, mais les spécialistes du hadith l&apos;ont classé comme da&apos;if (faible). L&apos;imam al-Bayhaqi l&apos;a rapporté mais sa chaîne contient Abu &apos;Atika Tarif ibn Salman, un rapporteur considéré comme faible par les critiques du hadith. L&apos;imam Ibn Hibban et d&apos;autres l&apos;ont déclaré faible. Ce hadith illustre bien la différence entre la popularité d&apos;un hadith et son authenticité : un hadith peut être largement diffusé tout en étant faible du point de vue de sa chaîne de transmission."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois exemples illustrent concrètement le système de classification des hadiths. Le musulman doit connaître le grade d&apos;un hadith avant de l&apos;utiliser comme preuve. Les hadiths sahih et hasan sont acceptés dans la jurisprudence, tandis que le hadith da&apos;if fait l&apos;objet de divergences entre les savants quant à son utilisation dans les vertus des actes (<em>fada&apos;il al-a&apos;mal</em>). Le hadith mawdu&apos; (fabriqué) est catégoriquement rejeté et il est interdit de le rapporter sauf pour mettre en garde contre lui.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Grands compilateurs  */}
              {/* ============================== */}
              <section id="compilateurs" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les grands compilateurs de hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La compilation systématique des hadiths a atteint son apogée aux IIe et IIIe siècles de l&apos;hégire. Six compilations sont devenues les références incontournables du hadith sunnite, connues sous le nom de <strong>Kutub as-Sitta</strong> (les six livres). Chaque compilateur a appliqué ses propres critères de sélection, ce qui explique les différences entre ces recueils.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  <strong>L&apos;imam al-Bukhari</strong> (194-256 H) a compilé le <em>Al-Jami&apos; as-Sahih</em>, considéré comme le livre le plus authentique après le Coran. Il a sélectionné environ 7 275 hadiths (avec répétitions) parmi plus de 600 000 qu&apos;il connaissait, appliquant les critères les plus stricts. <strong>L&apos;imam Muslim</strong> (206-261 H) a compilé son <em>Sahih</em> avec des critères légèrement différents mais tout aussi rigoureux, rassemblant environ 7 563 hadiths. Ces deux ouvrages sont les plus hautement considérés.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  <strong>Abu Dawud</strong> (202-275 H) a compilé ses <em>Sunan</em> en se concentrant sur les hadiths à portée juridique (<em>ahkam</em>). <strong>At-Tirmidhi</strong> (209-279 H) a innové en mentionnant le grade de chaque hadith et les avis des juristes. <strong>An-Nasa&apos;i</strong> (215-303 H) est réputé pour ses conditions de sélection très strictes, certains savants plaçant ses <em>Sunan</em> juste après les deux Sahih. <strong>Ibn Majah</strong> (209-273 H) a complété le sixième recueil, bien que certains savants aient préféré le <em>Muwatta&apos;</em> de l&apos;imam Malik à sa place.
                </p>

                <HadithBlock
                  number={9}
                  title="Ce que Bukhari a sélectionné parmi des centaines de milliers"
                  narrator="Abu Hurayra"
                  arabic="مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ"
                  translation="Celui qui jeûne le mois de Ramadan avec foi et en espérant la récompense (d&apos;Allah), ses péchés passés lui seront pardonnés."
                  source="Sahih Al-Bukhari, n°38 — Sahih Muslim, n°760"
                  grade="sahih"
                  explanation="Ce hadith fait partie des hadiths que Bukhari et Muslim ont tous deux sélectionnés (muttafaq &apos;alayh), ce qui lui confère le plus haut degré d&apos;authenticité. Il illustre le type de hadiths que l&apos;imam al-Bukhari recherchait : une chaîne irréprochable et un contenu à la fois juridique et spirituel. L&apos;imam al-Bukhari effectuait une prière de deux rak&apos;at (istikharah) avant d&apos;inclure chaque hadith dans son recueil, montrant le sérieux et la piété qu&apos;il mettait dans cette entreprise."
                />

                <HadithBlock
                  number={10}
                  title="La méthodologie de Tirmidhi : préciser le grade"
                  narrator="Abu Hurayra"
                  arabic="إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ"
                  translation="Allah ne regarde pas vos apparences ni vos richesses, mais Il regarde vos cœurs et vos actes."
                  source="Sahih Muslim, n°2564 — Jami&apos; at-Tirmidhi, n°3955"
                  grade="sahih"
                  explanation="Ce hadith se trouve à la fois dans le Sahih de Muslim et dans le Jami&apos; d&apos;at-Tirmidhi. La particularité de la méthode de l&apos;imam at-Tirmidhi est qu&apos;il commentait chaque hadith en précisant son grade (sahih, hasan, da&apos;if) et en mentionnant les avis des différentes écoles juridiques. Cette approche pédagogique a fait de son Jami&apos; un outil précieux pour les étudiants en sciences du hadith. Ce hadith enseigne que le jugement divin porte sur l&apos;intériorité de l&apos;homme, non sur les apparences."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-delà des Kutub as-Sitta, d&apos;autres compilations majeures méritent d&apos;être mentionnées : le <em>Muwatta&apos;</em> de l&apos;imam Malik (le plus ancien recueil organisé), le <em>Musnad</em> de l&apos;imam Ahmad (le plus volumineux, avec plus de 27 000 hadiths), le <em>Sahih</em> d&apos;Ibn Hibban, le <em>Mustadrak</em> d&apos;al-Hakim, et les <em>Sunan</em> d&apos;ad-Daraqutni. Chacun de ces ouvrages a contribué à la préservation et à la transmission de la Sunna prophétique.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur les sciences du hadith
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants du hadith ont laissé des œuvres fondamentales qui continuent de guider les étudiants en sciences islamiques. Voici quelques-unes de leurs contributions les plus marquantes.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith sahih est celui dont la chaîne de transmission est ininterrompue, rapporté par un transmetteur intègre et précis d&apos;un autre transmetteur intègre et précis, jusqu&apos;à son terme, sans anomalie ni défaut caché. Le hadith hasan est semblable, sauf que la précision de l&apos;un de ses rapporteurs est légèrement moindre.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn as-Salah, <em>Muqaddima fi &apos;Ulum al-Hadith</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;J&apos;ai rassemblé dans ces Quarante Hadiths les fondements de la religion, que les savants ont décrits comme étant le pivot de l&apos;islam, ou la moitié de l&apos;islam, ou le tiers, et d&apos;autres expressions similaires. Je me suis engagé à ne retenir que des hadiths sahih, dont la plupart se trouvent dans les Sahih de Bukhari et Muslim.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Introduction aux Quarante Hadiths</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La connaissance du hadith est une science vaste dont les ramifications sont nombreuses. Elle englobe la connaissance des rapporteurs, des chaînes, des défauts cachés, des hadiths étranges, et la distinction entre l&apos;authentique et le fabriqué. Celui qui s&apos;y engage doit consacrer sa vie à cette quête.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Nuzhatu an-Nazar fi Tawdihi Nukhbat al-Fikar</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces citations montrent que les sciences du hadith ne sont pas un domaine figé : elles ont évolué sur plusieurs siècles, chaque génération de savants ajoutant des précisions et des raffinements. De la <em>Muqaddima</em> d&apos;Ibn as-Salah (m. 643 H) à la <em>Nukhba</em> d&apos;Ibn Hajar (m. 852 H), en passant par les travaux d&apos;An-Nawawi (m. 676 H), c&apos;est un héritage intellectuel d&apos;une richesse exceptionnelle qui s&apos;est constitué.
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
                  L&apos;étude des sciences du hadith ne se limite pas au domaine académique. Elle a des implications directes pour la pratique religieuse et la vie quotidienne du musulman :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Vérifier avant de transmettre
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le musulman doit s&apos;assurer de l&apos;authenticité d&apos;un hadith avant de le citer ou de le partager. Attribuer au Prophète ﷺ des paroles qu&apos;il n&apos;a pas prononcées est un péché grave, comme le rappelle le hadith &laquo;&nbsp;qu&apos;il prépare sa place en Enfer&nbsp;&raquo;.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Connaître les sources de sa religion
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Comprendre la différence entre un hadith sahih, hasan et da&apos;if permet au musulman de fonder sa pratique sur des bases solides et d&apos;éviter les hadiths fabriqués qui circulent sur les réseaux sociaux.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Apprécier le travail des savants
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les muhaddithun ont consacré leur vie à préserver la Sunna. L&apos;imam al-Bukhari a examiné plus de 600 000 hadiths pour n&apos;en retenir que 7 275. Cette rigueur doit inspirer le respect et la gratitude envers les savants du hadith.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne pas rejeter un hadith authentique
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Rejeter un hadith sahih sans argument scientifique valable est une attitude dangereuse. Le Coran ordonne d&apos;obéir au Prophète ﷺ, et le hadith sahih est le véhicule de ses enseignements. Seuls les savants qualifiés peuvent émettre un jugement sur le grade d&apos;un hadith.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Étudier les sciences du hadith avec des professeurs qualifiés
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les sciences du hadith sont un domaine technique qui nécessite une formation structurée. L&apos;autodidaxie dans ce domaine peut mener à des erreurs graves. Il est recommandé d&apos;étudier avec des savants reconnus et de suivre un cursus progressif.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Comprendre que le hadith complète le Coran
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Sans le hadith, les musulmans ne sauraient pas comment prier, jeûner, accomplir le pèlerinage ou payer la zakat. Le hadith détaille ce que le Coran prescrit de manière globale. Rejeter la Sunna revient à se priver de la clé d&apos;interprétation du Livre d&apos;Allah.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths dans leur langue originale et maîtrisez la terminologie des sciences du hadith."
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
                  title="Sahih al-Bukhari : le recueil le plus authentique"
                  description="Découvrez les hadiths du Sahih al-Bukhari avec texte arabe, traduction française et explications détaillées."
                  href="/hadith-bukhari-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Sahih Muslim : la rigueur méthodologique"
                  description="Les hadiths authentiques du Sahih Muslim, deuxième recueil le plus fiable après Bukhari."
                  href="/hadith-authentique-muslim-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les hadiths du Prophète Muhammad ﷺ : fondements et collections"
                  description="Vue d&apos;ensemble des enseignements prophétiques et de leur place dans la religion musulmane."
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
