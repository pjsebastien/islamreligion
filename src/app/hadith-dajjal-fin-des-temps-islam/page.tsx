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
    "Hadiths sur le Dajjal et la fin des temps en islam : les signes majeurs",
  description:
    "Découvrez les hadiths authentiques sur le Dajjal (l&apos;Antéchrist) et la fin des temps en islam : description, signes précurseurs, protection par sourate Al-Kahf, descente de Issa. Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths sur le Dajjal et la fin des temps en islam : les signes majeurs",
    description:
      "Les hadiths authentiques sur le Dajjal et les signes de la fin des temps : description physique, signes précurseurs, moyens de protection et descente de Issa (Jésus).",
    url: "https://www.islamreligion.fr/hadith-dajjal-fin-des-temps-islam",
    images: [
      {
        url: "/images/croissant-lune-dore-etoiles-symbole-islam.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-dajjal-fin-des-temps-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique de la fin des temps" },
  { id: "description-dajjal", label: "Qui est le Dajjal ?" },
  { id: "signes-precurseurs", label: "Les signes précurseurs de sa venue" },
  { id: "protection-dajjal", label: "Se protéger du Dajjal" },
  { id: "descente-issa", label: "La descente de Issa et la fin du Dajjal" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Qui est le Dajjal en islam et pourquoi est-il considéré comme la plus grande épreuve ?",
    answer:
      "Le Dajjal (al-Masih ad-Dajjal) est l\u2019Antéchrist dans la tradition islamique. Le Prophète \u2018alayhi salatu wa salam a averti qu\u2019il n\u2019y a pas de fitna (épreuve) plus grande entre la création d\u2019Adam et l\u2019Heure que le Dajjal (Sahih Muslim 2946). Il est décrit comme un homme borgne qui prétendra être Dieu, accomplira des prodiges trompeurs et séduira de nombreuses personnes avant d\u2019être tué par Issa (Jésus), paix sur lui.",
  },
  {
    question:
      "Quels sont les hadiths les plus importants sur le Dajjal ?",
    answer:
      "Les hadiths les plus importants incluent celui de Nawwas ibn Sam\u2019an dans Sahih Muslim (n°2937) qui donne une description détaillée du Dajjal et de sa durée sur terre, celui d\u2019An-Nawwas rapportant la descente de Issa qui le tuera à la porte de Ludd (Muslim 2937), et celui d\u2019Abu Hurayra sur la récitation de sourate Al-Kahf comme protection (Muslim 809). Ces hadiths couvrent la description, la protection et la fin du Dajjal.",
  },
  {
    question:
      "Comment se protéger du Dajjal selon les hadiths ?",
    answer:
      "Le Prophète ﷺ a enseigné plusieurs moyens de protection : réciter les dix premiers versets de sourate Al-Kahf (Sahih Muslim 809), chercher refuge auprès d\u2019Allah contre la fitna du Dajjal dans chaque prière (Bukhari 1377), s\u2019éloigner de lui et fuir vers les villes de La Mecque et Médine où il ne pourra pas entrer (Bukhari 1881), et s\u2019attacher fermement à la foi sincère en Allah.",
  },
  {
    question:
      "Quel est le lien entre sourate Al-Kahf et le Dajjal ?",
    answer:
      "Le Prophète ﷺ a recommandé de mémoriser les dix premiers versets de sourate Al-Kahf comme protection contre le Dajjal (Sahih Muslim 809). Les savants expliquent que cette sourate aborde quatre épreuves majeures — la foi, la richesse, la science et le pouvoir — qui sont les mêmes tentations que le Dajjal utilisera pour égarer les gens. La réciter chaque vendredi est une sunna recommandée.",
  },
  {
    question:
      "Issa (Jésus) va-t-il tuer le Dajjal selon les hadiths ?",
    answer:
      "Oui, les hadiths authentiques confirment que Issa ibn Maryam (Jésus fils de Marie), paix sur lui, descendra du ciel, rejoindra les musulmans et tuera le Dajjal à la porte de Ludd (en Palestine). Le hadith de Nawwas ibn Sam\u2019an dans Sahih Muslim (n°2937) décrit en détail cette scène : le Dajjal fondra comme le sel dans l\u2019eau en voyant Issa, qui le rattrapera et le tuera.",
  },
  {
    question:
      "Quels sont les signes précurseurs de la venue du Dajjal ?",
    answer:
      "Parmi les signes mentionnés dans les hadiths authentiques : la multiplication de l\u2019ignorance et la disparition de la science religieuse (Bukhari 80), la généralisation du mensonge et de la tromperie, les grandes guerres (malahim), la conquête de Constantinople, et l\u2019apparition de grands menteurs prétendant être des prophètes. Le hadith de Hudayfa dans Sahih Muslim mentionne également la fumée (ad-Dukhan) et d\u2019autres signes majeurs.",
  },
  {
    question:
      "Le Dajjal est-il mentionné dans le Coran ?",
    answer:
      "Le Dajjal n\u2019est pas nommé explicitement dans le Coran, mais les savants considèrent que plusieurs versets font allusion à lui et aux épreuves de la fin des temps. Les versets sur les signes de l\u2019Heure (sourate Muhammad 47:18, sourate Al-Anbiya 21:96-97) et sur les grandes épreuves sont mis en relation avec les hadiths détaillés sur le Dajjal. C\u2019est dans la Sunna authentique que l\u2019on trouve les descriptions les plus précises.",
  },
];

export default function HadithDajjalFinDesTempsIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-dajjal-fin-des-temps-islam/#article",
        headline:
          "Hadiths sur le Dajjal et la fin des temps en islam : les signes majeurs",
        description:
          "Découvrez les hadiths authentiques sur le Dajjal et la fin des temps en islam : description, signes précurseurs, protection et descente de Issa.",
        image: "/images/croissant-lune-dore-etoiles-symbole-islam.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-dajjal-fin-des-temps-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-dajjal-fin-des-temps-islam/#breadcrumb",
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
            name: "Le Dajjal et la fin des temps",
            item: "https://www.islamreligion.fr/hadith-dajjal-fin-des-temps-islam",
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
          title="Hadiths sur le Dajjal et la fin des temps en islam"
          subtitle="Les enseignements prophétiques sur l&apos;Antéchrist, les signes de l&apos;Heure, les moyens de protection et la descente de Issa (Jésus) selon la Sunna authentique."
          imageSrc="/images/croissant-lune-dore-etoiles-symbole-islam.jpg"
          imageAlt="Hadiths sur le Dajjal et la fin des temps en islam, signes majeurs"
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
                  Le Dajjal et la fin des temps
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
                    Le Dajjal est la plus grande épreuve que l&apos;humanité connaîtra entre la création d&apos;Adam et le Jour du Jugement, selon le Prophète ﷺ.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La récitation des dix premiers versets de sourate Al-Kahf constitue une protection authentique contre sa fitna.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Issa ibn Maryam (Jésus), paix sur lui, descendra du ciel et mettra fin au règne du Dajjal en le tuant à la porte de Ludd.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La connaissance des signes de la fin des temps renforce la foi du croyant et l&apos;incite à se préparer spirituellement.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique de la fin des temps
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths sur le Dajjal, il convient de rappeler que le Coran pose les fondements de l&apos;eschatologie islamique. Allah y mentionne les signes de l&apos;Heure, la résurrection et le jugement dernier. Bien que le Dajjal ne soit pas nommé explicitement dans le Coran, plusieurs versets évoquent les épreuves de la fin des temps sur lesquelles s&apos;appuient les hadiths du Prophète ﷺ.
                </p>

                <HadithCard
                  arabic="فَهَلْ يَنظُرُونَ إِلَّا السَّاعَةَ أَن تَأْتِيَهُم بَغْتَةً فَقَدْ جَاءَ أَشْرَاطُهَا فَأَنَّىٰ لَهُمْ إِذَا جَاءَتْهُمْ ذِكْرَاهُمْ"
                  text="Qu&apos;attendent-ils sinon que l&apos;Heure leur vienne à l&apos;improviste ? Or ses signes avant-coureurs sont déjà venus. À quoi leur servira leur rappel quand elle sera venue ?"
                  source="Coran, sourate Muhammad (47:18)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset établit que l&apos;Heure a des signes avant-coureurs (<em>ashrat</em>) qui la précèdent. Les savants de l&apos;exégèse (tafsir) classent ces signes en signes mineurs et signes majeurs. Le Dajjal fait partie des signes majeurs, tout comme la descente de Issa, la sortie de Ya&apos;juj et Ma&apos;juj (Gog et Magog) et le lever du soleil depuis l&apos;Occident. Le Coran incite le croyant à prendre ces avertissements au sérieux avant qu&apos;il ne soit trop tard.
                </p>

                <HadithCard
                  arabic="حَتَّىٰ إِذَا فُتِحَتْ يَأْجُوجُ وَمَأْجُوجُ وَهُم مِّن كُلِّ حَدَبٍ يَنسِلُونَ ۝ وَاقْتَرَبَ الْوَعْدُ الْحَقُّ فَإِذَا هِيَ شَاخِصَةٌ أَبْصَارُ الَّذِينَ كَفَرُوا"
                  text="Jusqu&apos;à ce que soient relâchés les Ya&apos;juj et Ma&apos;juj, et qu&apos;ils se précipitent de chaque hauteur. La vraie promesse s&apos;approchera alors, et voilà que les regards des mécréants se figeront."
                  source="Coran, sourate Al-Anbiya (21:96-97)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce passage coranique place la sortie de Ya&apos;juj et Ma&apos;juj parmi les événements majeurs de la fin des temps, au même titre que le Dajjal. Les hadiths authentiques complètent ce cadre coranique en donnant des descriptions précises et des moyens de protection que le Prophète ﷺ a enseignés à sa communauté.
                </p>
              </section>

              {/* ====================================== */}
              {/* SECTION : Description du Dajjal        */}
              {/* ====================================== */}
              <section id="description-dajjal" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Qui est le Dajjal ? Description physique et nature
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a donné une description détaillée du Dajjal afin que les croyants puissent le reconnaître et ne pas être trompés par ses prodiges. Le terme <em>Dajjal</em> vient de la racine arabe <em>d-j-l</em> qui signifie couvrir, enduire, tromper. Il est appelé <em>al-Masih ad-Dajjal</em> (le faux messie) par opposition à <em>al-Masih Issa ibn Maryam</em> (le vrai Messie, Jésus fils de Marie).
                </p>

                <HadithBlock
                  number={1}
                  title="La plus grande fitna entre Adam et l&apos;Heure"
                  narrator="Imran ibn Husayn"
                  arabic="مَا بَيْنَ خَلْقِ آدَمَ إِلَى قِيَامِ السَّاعَةِ خَلْقٌ أَكْبَرُ مِنَ الدَّجَّالِ"
                  translation="Il n&apos;y a pas de création (épreuve) plus grande entre la création d&apos;Adam et l&apos;avènement de l&apos;Heure que le Dajjal."
                  source="Sahih Muslim, n°2946"
                  grade="sahih"
                  explanation="Ce hadith situe le Dajjal au sommet des épreuves de l&apos;histoire humaine. Chaque prophète, depuis Nuh (Noé) jusqu&apos;à Muhammad ﷺ, a mis en garde sa communauté contre le Dajjal. L&apos;ampleur de cette fitna tient à la capacité du Dajjal à accomplir des prodiges surnaturels — faire tomber la pluie, ressusciter les morts en apparence — qui tromperont ceux dont la foi est faible. Le Prophète ﷺ a tenu à préparer sa communauté en détaillant ses caractéristiques."
                />

                <HadithBlock
                  number={2}
                  title="Le Dajjal est borgne, et votre Seigneur ne l&apos;est pas"
                  narrator="Ibn &apos;Umar"
                  arabic="إِنَّ اللَّهَ لَا يَخْفَى عَلَيْكُمْ، إِنَّ اللَّهَ لَيْسَ بِأَعْوَرَ، وَإِنَّ الْمَسِيحَ الدَّجَّالَ أَعْوَرُ عَيْنِ الْيُمْنَى، كَأَنَّ عَيْنَهُ عِنَبَةٌ طَافِيَةٌ"
                  translation="Allah ne vous est pas caché. Allah n&apos;est certes pas borgne, tandis que le Masih ad-Dajjal est borgne de l&apos;oeil droit, et son oeil ressemble à un grain de raisin flottant."
                  source="Sahih Al-Bukhari, n°7407 — Sahih Muslim, n°2933"
                  grade="sahih"
                  explanation="Le Prophète ﷺ oppose ici la perfection d&apos;Allah à l&apos;imperfection manifeste du Dajjal. Celui qui prétendra être Dieu portera sur son propre corps la preuve de son mensonge : un oeil défaillant. La comparaison avec un &laquo; grain de raisin flottant &raquo; (<em>&apos;inaba tafiya</em>) décrit un oeil saillant, sans éclat, mort. Ce signe physique est le premier indice que les croyants devront reconnaître pour ne pas tomber dans sa tromperie."
                />

                <HadithBlock
                  number={3}
                  title="Écrit entre ses yeux : kafir"
                  narrator="Anas ibn Malik"
                  arabic="مَا مِنْ نَبِيٍّ إِلَّا وَقَدْ أَنْذَرَ أُمَّتَهُ الْأَعْوَرَ الْكَذَّابَ، أَلَا إِنَّهُ أَعْوَرُ وَإِنَّ رَبَّكُمْ لَيْسَ بِأَعْوَرَ، وَإِنَّ بَيْنَ عَيْنَيْهِ مَكْتُوبٌ كَافِرٌ"
                  translation="Il n&apos;est pas un prophète qui n&apos;ait averti sa communauté contre le borgne menteur. Il est borgne, et votre Seigneur n&apos;est pas borgne. Et entre ses yeux est écrit : kafir (mécréant)."
                  source="Sahih Al-Bukhari, n°7131 — Sahih Muslim, n°2933"
                  grade="sahih"
                  explanation="Ce hadith ajoute un signe supplémentaire : l&apos;inscription &laquo; kafir &raquo; (mécréant) entre les yeux du Dajjal. Le Prophète ﷺ a précisé que tout croyant, qu&apos;il sache lire ou non, pourra lire cette inscription. Les savants expliquent qu&apos;il s&apos;agit d&apos;une perception spirituelle accordée par Allah aux croyants sincères. Ce hadith souligne également l&apos;universalité de l&apos;avertissement : chaque prophète sans exception a mis en garde sa communauté contre le Dajjal."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths dressent un portrait clair du Dajjal : un être borgne, menteur, portant la marque de sa mécréance sur son front. Ces signes physiques permettront aux croyants de ne pas se laisser tromper par ses prodiges. Pour approfondir les signes majeurs et mineurs de la fin des temps, consultez notre article sur{" "}
                  <Link href="/dajjal-signes-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    le Dajjal et les signes en islam
                  </Link>.
                </p>
              </section>

              {/* ====================================== */}
              {/* SECTION : Signes précurseurs           */}
              {/* ====================================== */}
              <section id="signes-precurseurs" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les signes précurseurs de la venue du Dajjal
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ n&apos;a pas seulement décrit le Dajjal : il a aussi mentionné les signes qui précéderont sa sortie. Ces événements servent d&apos;avertissement pour la communauté et permettent aux croyants de se préparer spirituellement à cette épreuve majeure.
                </p>

                <HadithBlock
                  number={4}
                  title="La disparition de la science et la multiplication de l&apos;ignorance"
                  narrator="Anas ibn Malik"
                  arabic="إِنَّ مِنْ أَشْرَاطِ السَّاعَةِ أَنْ يُرْفَعَ الْعِلْمُ وَيَثْبُتَ الْجَهْلُ وَيُشْرَبَ الْخَمْرُ وَيَظْهَرَ الزِّنَا"
                  translation="Parmi les signes de l&apos;Heure : la science sera enlevée, l&apos;ignorance s&apos;installera, l&apos;alcool sera bu (en abondance) et la fornication se répandra."
                  source="Sahih Al-Bukhari, n°80 — Sahih Muslim, n°2671"
                  grade="sahih"
                  explanation="Ce hadith décrit l&apos;environnement moral et intellectuel qui précédera les grands signes de la fin des temps, dont le Dajjal. La disparition de la science religieuse rend les gens vulnérables aux tromperies : c&apos;est précisément dans un contexte d&apos;ignorance généralisée que le Dajjal pourra séduire les masses. Les savants soulignent que &laquo; la science sera enlevée &raquo; signifie la mort des savants sans relève, et non la disparition des livres."
                />

                <HadithBlock
                  number={5}
                  title="Trente grands menteurs avant l&apos;Heure"
                  narrator="Abu Hurayra"
                  arabic="لَا تَقُومُ السَّاعَةُ حَتَّى يُبْعَثَ دَجَّالُونَ كَذَّابُونَ قَرِيبٌ مِنْ ثَلَاثِينَ، كُلُّهُمْ يَزْعُمُ أَنَّهُ رَسُولُ اللَّهِ"
                  translation="L&apos;Heure ne viendra pas avant que ne soient envoyés des dajjals (imposteurs) menteurs, au nombre d&apos;environ trente, chacun prétendant être le messager d&apos;Allah."
                  source="Sahih Al-Bukhari, n°3609 — Sahih Muslim, n°2923"
                  grade="sahih"
                  explanation="Ce hadith distingue les petits dajjals — des imposteurs qui prétendront à la prophétie — du grand Dajjal. L&apos;histoire islamique a effectivement connu de nombreux faux prophètes, à commencer par Musaylima du vivant même du Prophète ﷺ. Ces petits dajjals sont des signes précurseurs du grand Dajjal. Leur multiplication annonce un climat de confusion et de mensonge généralisé, terrain fertile pour la plus grande supercherie."
                />

                <HadithBlock
                  number={6}
                  title="Les grandes guerres précéderont la sortie du Dajjal"
                  narrator="Abu Hurayra"
                  arabic="لَا تَقُومُ السَّاعَةُ حَتَّى يَنْزِلَ الرُّومُ بِالْأَعْمَاقِ أَوْ بِدَابِقٍ"
                  translation="L&apos;Heure ne viendra pas avant que les Romains ne campent à al-A&apos;maq ou à Dabiq."
                  source="Sahih Muslim, n°2897"
                  grade="sahih"
                  explanation="Ce hadith place de grandes batailles (malahim) parmi les événements qui précéderont la sortie du Dajjal. Dans la chronologie eschatologique islamique, ces grandes guerres entre les musulmans et les armées ennemies se produiront avant l&apos;apparition du Dajjal. Dabiq et al-A&apos;maq sont des localités en Syrie, ce qui situe géographiquement ces événements au Sham (Grande Syrie), région centrale de l&apos;eschatologie islamique."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez la aqida (croyance), les signes de la fin des temps et les fondements de la foi avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Protection            */}
              {/* ============================== */}
              <section id="protection-dajjal" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Se protéger du Dajjal : sourate Al-Kahf et invocations
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ n&apos;a pas effrayé sa communauté sans lui donner les moyens de se protéger. Il a enseigné des actes d&apos;adoration précis qui constituent un bouclier contre la fitna du Dajjal. La récitation de sourate Al-Kahf et les invocations dans la prière occupent une place centrale parmi ces moyens de protection.
                </p>

                <HadithBlock
                  number={7}
                  title="Les dix premiers versets de sourate Al-Kahf"
                  narrator="Abu ad-Darda&apos;"
                  arabic="مَنْ حَفِظَ عَشْرَ آيَاتٍ مِنْ أَوَّلِ سُورَةِ الْكَهْفِ عُصِمَ مِنَ الدَّجَّالِ"
                  translation="Celui qui mémorise les dix premiers versets de sourate Al-Kahf sera protégé du Dajjal."
                  source="Sahih Muslim, n°809"
                  grade="sahih"
                  explanation="Ce hadith établit un lien direct entre la sourate Al-Kahf et la protection contre le Dajjal. Les savants, dont l&apos;imam An-Nawawi, expliquent que les épreuves mentionnées dans cette sourate — l&apos;épreuve de la foi (les gens de la caverne), de la richesse (le propriétaire des deux jardins), de la science (Musa et al-Khadr) et du pouvoir (Dhul-Qarnayn) — correspondent aux tentations que le Dajjal utilisera. Mémoriser et comprendre cette sourate prépare le croyant à résister à ces mêmes épreuves."
                />

                <HadithBlock
                  number={8}
                  title="Chercher refuge contre quatre choses dans la prière"
                  narrator="Abu Hurayra"
                  arabic="إِذَا تَشَهَّدَ أَحَدُكُمْ فَلْيَسْتَعِذْ بِاللَّهِ مِنْ أَرْبَعٍ، يَقُولُ: اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ"
                  translation="Lorsque l&apos;un de vous fait le tashahhud, qu&apos;il cherche refuge auprès d&apos;Allah contre quatre choses en disant : Ô Allah, je cherche refuge auprès de Toi contre le châtiment de l&apos;Enfer, contre le châtiment de la tombe, contre les épreuves de la vie et de la mort, et contre le mal de l&apos;épreuve du Masih Dajjal."
                  source="Sahih Al-Bukhari, n°1377 — Sahih Muslim, n°588"
                  grade="sahih"
                  explanation="Ce hadith montre l&apos;importance de la fitna du Dajjal : le Prophète ﷺ a ordonné de chercher refuge contre elle dans chaque prière, au même niveau que le châtiment de la tombe et de l&apos;Enfer. Cette invocation quotidienne — répétée dans chaque salat — ancre dans le coeur du croyant la conscience de cette épreuve et le maintien de la vigilance spirituelle. Les quatre demandes de protection couvrent les épreuves de l&apos;au-delà (Enfer et tombe) et celles d&apos;ici-bas (vie, mort et Dajjal)."
                />

                <HadithBlock
                  number={9}
                  title="Le Dajjal ne pourra pas entrer à Médine"
                  narrator="Abu Hurayra"
                  arabic="عَلَى أَنْقَابِ الْمَدِينَةِ مَلَائِكَةٌ لَا يَدْخُلُهَا الطَّاعُونُ وَلَا الدَّجَّالُ"
                  translation="Aux entrées de Médine se trouvent des anges : ni la peste ni le Dajjal n&apos;y entreront."
                  source="Sahih Al-Bukhari, n°1881 — Sahih Muslim, n°1379"
                  grade="sahih"
                  explanation="Ce hadith révèle un moyen de protection géographique : Médine et La Mecque sont des sanctuaires gardés par les anges où le Dajjal ne pourra pas pénétrer. Le Prophète ﷺ a ainsi rassuré les habitants de ces deux villes saintes. Les savants précisent que le Dajjal tremblera en s&apos;approchant de Médine et que les anges le repousseront. Cela confère à ces deux cités un statut unique dans l&apos;eschatologie islamique."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces moyens de protection montrent que l&apos;islam ne laisse pas le croyant démuni face aux épreuves de la fin des temps. La récitation régulière de sourate Al-Kahf, l&apos;invocation dans la prière et l&apos;attachement aux villes saintes sont des actes concrets qui renforcent la foi. Pour découvrir d&apos;autres invocations prophétiques, consultez notre page sur les{" "}
                  <Link href="/signes-fin-monde-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    signes de la fin du monde en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Descente de Issa     */}
              {/* ============================== */}
              <section id="descente-issa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La descente de Issa (Jésus) et la fin du Dajjal
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des piliers de l&apos;eschatologie islamique est la descente de Issa ibn Maryam (Jésus fils de Marie), paix sur lui, à la fin des temps. Contrairement à la croyance chrétienne, l&apos;islam enseigne que Issa n&apos;est pas mort sur la croix : Allah l&apos;a élevé vers Lui et il redescendra pour accomplir sa mission, dont la plus importante est la mise à mort du Dajjal.
                </p>

                <HadithBlock
                  number={10}
                  title="Issa tuera le Dajjal à la porte de Ludd"
                  narrator="Nawwas ibn Sam&apos;an"
                  arabic="فَبَيْنَمَا هُوَ كَذَلِكَ إِذْ بَعَثَ اللَّهُ الْمَسِيحَ ابْنَ مَرْيَمَ فَيَنْزِلُ عِنْدَ الْمَنَارَةِ الْبَيْضَاءِ شَرْقِيَّ دِمَشْقَ بَيْنَ مَهْرُودَتَيْنِ وَاضِعًا كَفَّيْهِ عَلَى أَجْنِحَةِ مَلَكَيْنِ... فَيَطْلُبُهُ حَتَّى يُدْرِكَهُ بِبَابِ لُدٍّ فَيَقْتُلُهُ"
                  translation="Tandis qu&apos;il (le Dajjal) en sera ainsi, Allah enverra le Messie fils de Marie. Il descendra près du minaret blanc à l&apos;est de Damas, vêtu de deux étoffes safranées, posant ses mains sur les ailes de deux anges... Il le poursuivra jusqu&apos;à le rattraper à la porte de Ludd, et il le tuera."
                  source="Sahih Muslim, n°2937"
                  grade="sahih"
                  explanation="Ce long hadith de Nawwas ibn Sam&apos;an est l&apos;un des récits les plus détaillés sur la fin du Dajjal. Il décrit la descente de Issa à Damas, son arrivée au milieu des musulmans en prière, puis sa poursuite et sa mise à mort du Dajjal à Ludd (ville de Palestine actuelle). Le Dajjal fondra comme le sel dans l&apos;eau en voyant Issa, mais celui-ci le tuera malgré tout. Ce hadith montre que la victoire finale appartient à la vérité et à la foi sincère."
                />

                <HadithBlock
                  number={11}
                  title="Issa gouvernera avec justice"
                  narrator="Abu Hurayra"
                  arabic="وَالَّذِي نَفْسِي بِيَدِهِ لَيُوشِكَنَّ أَنْ يَنْزِلَ فِيكُمُ ابْنُ مَرْيَمَ حَكَمًا عَدْلًا فَيَكْسِرَ الصَّلِيبَ وَيَقْتُلَ الْخِنْزِيرَ وَيَضَعَ الْجِزْيَةَ وَيَفِيضَ الْمَالُ حَتَّى لَا يَقْبَلَهُ أَحَدٌ"
                  translation="Par Celui qui détient mon âme, il est imminent que le fils de Marie descende parmi vous en juge équitable. Il brisera la croix, tuera le porc, abolira la jizya et les biens se répandront au point que personne ne les acceptera."
                  source="Sahih Al-Bukhari, n°2476 — Sahih Muslim, n°155"
                  grade="sahih"
                  explanation="Ce hadith complète le tableau de la mission de Issa après la mort du Dajjal. Il ne descendra pas comme prophète apportant une nouvelle législation, mais comme juge appliquant la loi de Muhammad ﷺ. Briser la croix signifie corriger la croyance erronée en la crucifixion. Tuer le porc et abolir la jizya marquent l&apos;unification de l&apos;humanité sous la vérité. La prospérité sera telle que nul n&apos;aura besoin d&apos;aumône, signe d&apos;une ère de justice absolue."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La descente de Issa et la défaite du Dajjal représentent le triomphe de la vérité sur le mensonge. Ces hadiths renforcent la conviction du croyant que, quelle que soit l&apos;ampleur de l&apos;épreuve, la victoire finale appartient à Allah et à Ses serviteurs sincères.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le Dajjal et la fin des temps
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur le Dajjal. Leurs explications permettent de mieux comprendre la portée théologique et pratique de ces enseignements prophétiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Les hadiths sur le Dajjal sont mutawatir (transmis par tant de voies qu&apos;il est impossible de les nier). Y croire fait partie de la foi aux signes de l&apos;Heure. Celui qui nie la venue du Dajjal contredit la Sunna authentique et le consensus des savants de Ahl as-Sunna.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La recommandation du Prophète ﷺ de réciter sourate Al-Kahf est liée au fait que cette sourate traite des quatre épreuves fondamentales que le Dajjal incarnera : l&apos;épreuve de la foi, de la richesse, de la science et du pouvoir. Celui qui maîtrise les leçons de cette sourate sera armé contre la plus grande fitna.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Kathir, <em>Al-Bidaya wa an-Nihaya</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;L&apos;étude des signes de la fin des temps n&apos;est pas un luxe intellectuel : c&apos;est une obligation pour le croyant afin de se préparer, de renforcer sa foi et de ne pas être pris au dépourvu. Le Prophète ﷺ a détaillé ces signes précisément pour que sa communauté soit la mieux préparée.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que les hadiths sur le Dajjal ne relèvent pas du folklore ou de la curiosité : ils font partie intégrante de la aqida (croyance) musulmane. Les quatre écoles de jurisprudence et les théologiens de Ahl as-Sunna sont unanimes sur la réalité de la venue du Dajjal et la descente de Issa, paix sur lui.
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
                  L&apos;ensemble des hadiths présentés permet de dégager des leçons concrètes pour le croyant face aux épreuves de la fin des temps :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Renforcer sa foi et sa science religieuse
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Dajjal séduira ceux dont la foi est faible et la science insuffisante. Rechercher la connaissance religieuse authentique est le premier rempart contre toute forme de tromperie et de déviation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Réciter sourate Al-Kahf chaque vendredi
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La mémorisation et la récitation régulière des dix premiers versets de sourate Al-Kahf est une sunna prophétique et un moyen de protection confirmé contre la fitna du Dajjal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne jamais négliger l&apos;invocation dans la prière
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Chercher refuge auprès d&apos;Allah contre la fitna du Dajjal dans chaque tashahhud est un acte quotidien qui ancre la vigilance spirituelle dans le coeur du croyant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Développer l&apos;esprit critique face aux tromperies
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les hadiths sur les trente dajjals menteurs enseignent à ne pas suivre aveuglément ceux qui prétendent à un statut divin ou prophétique. Le croyant doit vérifier, questionner et revenir aux sources authentiques.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Garder confiance en la victoire de la vérité
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La fin du Dajjal aux mains de Issa, paix sur lui, rappelle que le mensonge, aussi puissant qu&apos;il paraisse, est toujours vaincu par la vérité. Cette conviction nourrit l&apos;espérance du croyant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Transmettre ces enseignements aux générations futures
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Chaque prophète a averti sa communauté contre le Dajjal. Le croyant a le devoir d&apos;enseigner à ses enfants et à son entourage les signes de cette épreuve et les moyens de s&apos;en prémunir.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur le Dajjal et la fin des temps dans leur langue originale et approfondissez votre connaissance de la aqida islamique."
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
                  title="Le Dajjal et les signes majeurs en islam"
                  description="Approfondissez votre connaissance des signes de la fin des temps et du Dajjal selon les sources authentiques."
                  href="/dajjal-signes-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les signes de la fin du monde en islam"
                  description="Découvrez les signes mineurs et majeurs de l&apos;Heure selon le Coran et la Sunna authentique."
                  href="/signes-fin-monde-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
