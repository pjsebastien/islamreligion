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
    "Hadiths sur la fornication (zina) en islam : interdiction et prévention",
  description:
    "Découvrez les hadiths authentiques sur la fornication (zina) en islam : gravité du péché, formes de zina, moyens de prévention, repentir. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths sur la fornication (zina) en islam : interdiction et prévention",
    description:
      "Les hadiths authentiques sur la zina en islam : interdiction coranique, gravité du péché, prévention par le regard et le jeûne, et voie du repentir selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-fornication-zina-islam",
    images: [
      {
        url: "/images/priere-islam-doua-mosquee-silhouette.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-fornication-zina-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique de la zina" },
  { id: "gravite-zina", label: "La gravité de la zina" },
  { id: "formes-zina", label: "Les formes de zina" },
  { id: "prevention", label: "La prévention de la zina" },
  { id: "repentir", label: "Le repentir après la zina" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur la fornication (zina) en islam ?",
    answer:
      "Les hadiths les plus importants sur la zina incluent celui rapporté par Abu Hurayra sur les parts de zina assignées à chaque fils d\u2019Adam (Bukhari 6243), celui d\u2019Abdullah ibn Mas\u2019ud sur les plus grands péchés auprès d\u2019Allah (Bukhari 6811), et celui d\u2019Ibn Abbas sur le regard comme première flèche empoisonnée d\u2019Iblis (Tabarani). Ces hadiths couvrent la gravité du péché, ses différentes formes et les moyens de s\u2019en préserver.",
  },
  {
    question:
      "Quelles sont les différentes formes de zina selon les hadiths ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a enseigné que la zina ne se limite pas au rapport charnel. Les yeux commettent la zina par le regard, les oreilles par l\u2019écoute, la langue par la parole, les mains par le toucher, les pieds par la marche vers l\u2019illicite. Toutes ces formes sont des préludes à la zina majeure, que le c\u0153ur désire et que les parties intimes confirment ou infirment (Bukhari 6243).",
  },
  {
    question:
      "Comment se protéger de la fornication selon la Sunna ?",
    answer:
      "Le Prophète a prescrit plusieurs moyens de prévention : baisser le regard (conformément au verset d\u2019An-Nur 30), se marier pour celui qui en a les moyens, et jeûner pour celui qui n\u2019en a pas les moyens car le jeûne réduit les pulsions (Bukhari 5066). Les savants ajoutent l\u2019évitement de la mixité non encadrée, le dhikr, et l\u2019occupation dans les actes d\u2019adoration.",
  },
  {
    question:
      "Le repentir est-il accepté après avoir commis la zina en islam ?",
    answer:
      "Oui, le repentir sincère (tawba nasuh) est accepté par Allah pour tout péché, y compris la zina. Le Prophète a dit qu\u2019Allah tend Sa main la nuit pour que le pécheur du jour se repente, et le jour pour que le pécheur de la nuit se repente (Muslim 2759). L\u2019histoire de la femme de la tribu Ghamidiyya montre qu\u2019un repentir sincère peut effacer le péché au point que le Prophète a dit qu\u2019elle a fait un repentir tel que s\u2019il était réparti sur soixante-dix habitants de Médine, il leur aurait suffi (Muslim 1695).",
  },
  {
    question:
      "Pourquoi l\u2019islam interdit-il si sévèrement la fornication ?",
    answer:
      "L\u2019islam interdit la zina pour protéger cinq fondements essentiels : la religion, la vie, la raison, la descendance et l\u2019honneur. La fornication détruit la cellule familiale, brouille les lignées, propage les maladies, engendre des enfants sans cadre stable et corrompt le tissu social. Le Coran ordonne de ne pas s\u2019approcher de la zina (Al-Isra 32), ce qui inclut l\u2019interdiction de tout ce qui y mène.",
  },
  {
    question:
      "Les hadiths sur la zina s\u2019appliquent-ils aux musulmans d\u2019aujourd\u2019hui ?",
    answer:
      "Oui, les enseignements prophétiques sur la zina sont intemporels et d\u2019autant plus pertinents à l\u2019ère numérique. Les savants contemporains appliquent les mêmes principes aux nouvelles formes de tentation : pornographie en ligne, conversations inappropriées sur les réseaux sociaux, rencontres non encadrées. Les moyens de prévention (baisser le regard, jeûner, se marier) restent les mêmes, adaptés au contexte moderne.",
  },
];

export default function HadithFornicationZinaIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-fornication-zina-islam/#article",
        headline:
          "Hadiths sur la fornication (zina) en islam : interdiction et prévention",
        description:
          "Découvrez les hadiths authentiques sur la fornication (zina) en islam : gravité du péché, formes de zina, moyens de prévention et voie du repentir.",
        image: "/images/priere-islam-doua-mosquee-silhouette.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-fornication-zina-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-fornication-zina-islam/#breadcrumb",
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
            name: "Fornication (zina)",
            item: "https://www.islamreligion.fr/hadith-fornication-zina-islam",
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
          title="Hadiths sur la fornication (zina) en islam"
          subtitle="Les enseignements prophétiques sur l&apos;interdiction de la zina, ses formes, les moyens de prévention et la voie du repentir selon la Sunna authentique."
          imageSrc="/images/priere-islam-doua-mosquee-silhouette.jpg"
          imageAlt="Hadiths sur la fornication zina en islam, prévention et repentir"
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
                  Fornication (zina)
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
                    La zina est l&apos;un des plus grands péchés en islam, interdite par le Coran et la Sunna avec la plus grande fermeté.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ a enseigné que la zina ne se limite pas au rapport charnel : le regard, le toucher, la parole et la marche vers l&apos;illicite en sont des formes préliminaires.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    L&apos;islam prescrit des moyens concrets de prévention : baisser le regard, jeûner, se marier et s&apos;éloigner des situations de tentation.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La porte du repentir reste ouverte pour celui qui a commis la zina, à condition d&apos;un retour sincère vers Allah.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique de l&apos;interdiction de la zina
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths, il est indispensable de rappeler que l&apos;interdiction de la zina est d&apos;abord une injonction coranique. Allah n&apos;a pas seulement interdit l&apos;acte de fornication : Il a ordonné de ne pas s&apos;en approcher, ce qui englobe tout ce qui peut y conduire. Cette interdiction vise à protéger l&apos;honneur, la descendance, la cellule familiale et l&apos;ensemble du tissu social.
                </p>

                <HadithCard
                  arabic="وَلَا تَقْرَبُوا الزِّنَا إِنَّهُ كَانَ فَاحِشَةً وَسَاءَ سَبِيلًا"
                  text="Et n&apos;approchez pas la fornication. En vérité, c&apos;est une turpitude et quel mauvais chemin !"
                  source="Coran, sourate Al-Isra (17:32)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset est fondamental dans la compréhension de l&apos;interdiction de la zina. L&apos;expression &laquo;&nbsp;n&apos;approchez pas&nbsp;&raquo; (<em>la taqrabou</em>) est plus forte qu&apos;une simple interdiction. Elle signifie qu&apos;il faut s&apos;éloigner de tout ce qui peut conduire à la zina : le regard insistant, l&apos;isolement avec une personne de l&apos;autre sexe, les conversations ambiguës. Les savants qualifient la zina de <em>fahisha</em> (turpitude), un terme réservé aux péchés les plus graves. Le chemin qui y mène est qualifié de &laquo;&nbsp;mauvais&nbsp;&raquo; (<em>sa&apos;a sabila</em>), car il conduit à la destruction de la famille, du lignage et de la société.
                </p>

                <HadithCard
                  arabic="الزَّانِيَةُ وَالزَّانِي فَاجْلِدُوا كُلَّ وَاحِدٍ مِّنْهُمَا مِائَةَ جَلْدَةٍ وَلَا تَأْخُذْكُم بِهِمَا رَأْفَةٌ فِي دِينِ اللَّهِ"
                  text="La fornicatrice et le fornicateur, fouettez chacun d&apos;eux de cent coups de fouet. Et que nulle compassion pour eux ne vous retienne s&apos;agissant de la religion d&apos;Allah."
                  source="Coran, sourate An-Nur (24:2)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset établit la sanction légale (<em>hadd</em>) pour la fornication entre personnes non mariées. La sévérité de la peine témoigne de la gravité que l&apos;islam accorde à ce péché. L&apos;injonction de ne pas laisser la compassion interférer avec l&apos;application de la loi divine souligne que cette sanction vise la protection de la société tout entière. Les savants précisent que cette peine n&apos;est applicable que dans un cadre juridique strict, avec des conditions de preuves extrêmement rigoureuses (quatre témoins oculaires ou aveu volontaire). C&apos;est sur cette base coranique que le Prophète ﷺ a construit ses enseignements détaillés sur la prévention et la gravité de la zina.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Gravité de la zina   */}
              {/* ============================== */}
              <section id="gravite-zina" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La gravité de la zina selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les hadiths prophétiques détaillent la gravité de la fornication et la classent parmi les péchés majeurs (<em>kaba&apos;ir</em>). Le Prophète ﷺ a mis en garde sa communauté contre ce péché avec une insistance particulière, le plaçant aux côtés du shirk (associationnisme) et du meurtre dans la hiérarchie des fautes les plus graves.
                </p>

                <HadithBlock
                  number={1}
                  title="Les plus grands péchés auprès d&apos;Allah"
                  narrator="Abdullah ibn Mas&apos;ud"
                  arabic="سَأَلْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَيُّ الذَّنْبِ أَعْظَمُ؟ قَالَ: أَنْ تَجْعَلَ لِلَّهِ نِدًّا وَهُوَ خَلَقَكَ. قُلْتُ: ثُمَّ أَيُّ؟ قَالَ: أَنْ تَقْتُلَ وَلَدَكَ خَشْيَةَ أَنْ يَطْعَمَ مَعَكَ. قُلْتُ: ثُمَّ أَيُّ؟ قَالَ: أَنْ تُزَانِيَ حَلِيلَةَ جَارِكَ"
                  translation="J&apos;ai demandé au Messager d&apos;Allah ﷺ : quel est le plus grand péché ? Il a dit : que tu donnes à Allah un associé alors que c&apos;est Lui qui t&apos;a créé. J&apos;ai dit : puis lequel ? Il a dit : que tu tues ton enfant de peur qu&apos;il ne mange avec toi. J&apos;ai dit : puis lequel ? Il a dit : que tu commettes l&apos;adultère avec la femme de ton voisin."
                  source="Sahih Al-Bukhari, n°6811 — Sahih Muslim, n°86"
                  grade="sahih"
                  explanation="Ce hadith classe la zina au troisième rang des péchés les plus graves, après le shirk et le meurtre de son enfant. La mention spécifique de la femme du voisin aggrave encore le péché, car elle combine la trahison de la confiance du voisinage avec la fornication elle-même. Les savants en déduisent que la gravité de la zina augmente selon les circonstances : avec une femme mariée, c&apos;est plus grave qu&apos;avec une célibataire ; avec la femme du voisin, c&apos;est encore plus grave ; pendant le Ramadan ou dans un lieu sacré, la faute est amplifiée."
                />

                <HadithBlock
                  number={2}
                  title="La foi quitte le fornicateur"
                  narrator="Abu Hurayra"
                  arabic="لَا يَزْنِي الزَّانِي حِينَ يَزْنِي وَهُوَ مُؤْمِنٌ، وَلَا يَسْرِقُ السَّارِقُ حِينَ يَسْرِقُ وَهُوَ مُؤْمِنٌ، وَلَا يَشْرَبُ الْخَمْرَ حِينَ يَشْرَبُهَا وَهُوَ مُؤْمِنٌ"
                  translation="Le fornicateur ne commet pas la fornication tout en étant croyant au moment où il la commet, le voleur ne vole pas tout en étant croyant au moment où il vole, et le buveur de vin ne boit pas tout en étant croyant au moment où il boit."
                  source="Sahih Al-Bukhari, n°6810 — Sahih Muslim, n°57"
                  grade="sahih"
                  explanation="Ce hadith est d&apos;une gravité considérable. Il indique que la foi complète quitte le cœur du croyant au moment où il commet la zina. Les savants d&apos;Ahl as-Sunna précisent que cela ne signifie pas que le fornicateur sort de l&apos;islam, mais que la foi parfaite (<em>iman kamil</em>) l&apos;abandonne temporairement. L&apos;imam An-Nawawi explique que c&apos;est la plénitude de la foi qui disparaît, pas son fondement. Ce hadith sert d&apos;avertissement puissant : la zina n&apos;est pas un péché &laquo;&nbsp;mineur&nbsp;&raquo; que l&apos;on peut prendre à la légère."
                />

                <HadithBlock
                  number={3}
                  title="Le châtiment dans la tombe pour le fornicateur"
                  narrator="Samura ibn Jundub"
                  arabic="أَتَيْنَا عَلَى مِثْلِ التَّنُّورِ، فَإِذَا فِيهِ لَغَطٌ وَأَصْوَاتٌ، فَاطَّلَعْنَا فِيهِ فَإِذَا فِيهِ رِجَالٌ وَنِسَاءٌ عُرَاةٌ، وَإِذَا هُمْ يَأْتِيهِمْ لَهَبٌ مِنْ أَسْفَلَ مِنْهُمْ، فَإِذَا أَتَاهُمْ ذَلِكَ اللَّهَبُ ضَوْضَوْا. قُلْتُ: مَا هَؤُلَاءِ؟ قَالَ: هَؤُلَاءِ الزُّنَاةُ وَالزَّوَانِي"
                  translation="Nous sommes arrivés près d&apos;une construction semblable à un four, d&apos;où provenaient du vacarme et des cris. Nous avons regardé à l&apos;intérieur et il y avait des hommes et des femmes nus, et une flamme montait vers eux par le bas. Quand la flamme les atteignait, ils criaient. J&apos;ai demandé : qui sont ceux-là ? Il a répondu : ce sont les fornicateurs et les fornicatrices."
                  source="Sahih Al-Bukhari, n°7047"
                  grade="sahih"
                  explanation="Ce hadith fait partie du long récit du rêve prophétique dans lequel le Prophète ﷺ a vu différents types de châtiments dans le barzakh (vie intermédiaire entre la mort et la Résurrection). La description des fornicateurs dans un four d&apos;où montent des flammes est un avertissement sévère. Les savants précisent que ce châtiment concerne ceux qui meurent sans repentir. Ce hadith a pour fonction de dissuader par la crainte d&apos;Allah (<em>khawf</em>), un pilier essentiel de la foi qui doit accompagner l&apos;espérance (<em>raja&apos;</em>)."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths dressent un tableau sans équivoque de la gravité de la zina en islam. Elle figure parmi les péchés capitaux, elle affaiblit la foi et elle entraîne un châtiment dans l&apos;au-delà. Cette sévérité n&apos;a pas pour but de désespérer les croyants, mais de les inciter à la vigilance et à la prévention. Pour approfondir la question du repentir et de la miséricorde divine, consultez notre article sur les{" "}
                  <Link href="/hadith-pardon-repentir-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le pardon et le repentir en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Formes de zina       */}
              {/* ============================== */}
              <section id="formes-zina" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les formes de zina : regard, toucher et parole
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des enseignements les plus importants du Prophète ﷺ est que la zina ne se réduit pas au rapport sexuel. Elle commence bien en amont, par le regard, la parole, le toucher et la démarche vers l&apos;illicite. Cette vision élargie de la zina permet au croyant de comprendre que la chasteté est un processus global qui engage tous les membres du corps.
                </p>

                <HadithBlock
                  number={4}
                  title="Les parts de zina assignées au fils d&apos;Adam"
                  narrator="Abu Hurayra"
                  arabic="كُتِبَ عَلَى ابْنِ آدَمَ نَصِيبُهُ مِنَ الزِّنَا مُدْرِكٌ ذَلِكَ لَا مَحَالَةَ، فَالْعَيْنَانِ زِنَاهُمَا النَّظَرُ، وَالْأُذُنَانِ زِنَاهُمَا الِاسْتِمَاعُ، وَاللِّسَانُ زِنَاهُ الْكَلَامُ، وَالْيَدُ زِنَاهَا الْبَطْشُ، وَالرِّجْلُ زِنَاهَا الْخُطَا، وَالْقَلْبُ يَهْوَى وَيَتَمَنَّى، وَيُصَدِّقُ ذَلِكَ الْفَرْجُ أَوْ يُكَذِّبُهُ"
                  translation="Il a été prescrit au fils d&apos;Adam sa part de zina qu&apos;il atteindra inévitablement. La zina des yeux est le regard, la zina des oreilles est l&apos;écoute, la zina de la langue est la parole, la zina de la main est le toucher, la zina du pied est la marche, le cœur désire et souhaite, et les parties intimes confirment ou infirment cela."
                  source="Sahih Al-Bukhari, n°6243 — Sahih Muslim, n°2657"
                  grade="sahih"
                  explanation="Ce hadith est fondamental pour comprendre la conception islamique de la chasteté. Le Prophète ﷺ enseigne que chaque membre du corps a sa propre forme de zina. Le regard insistant sur ce qui est interdit, l&apos;écoute de conversations obscènes, les paroles de séduction illicites, le toucher d&apos;une personne étrangère, la marche vers un lieu de débauche : tout cela constitue une forme de zina. Le cœur est le lieu du désir, et les parties intimes sont l&apos;aboutissement ou le rejet de ce processus. Ce hadith invite le croyant à garder chacun de ses membres, en commençant par le regard."
                />

                <HadithBlock
                  number={5}
                  title="Le regard, première flèche empoisonnée d&apos;Iblis"
                  narrator="Hudhayfa"
                  arabic="النَّظْرَةُ سَهْمٌ مِنْ سِهَامِ إِبْلِيسَ مَسْمُومَةٌ، فَمَنْ تَرَكَهَا مِنْ خَوْفِ اللَّهِ أَثَابَهُ اللَّهُ إِيمَانًا يَجِدُ حَلَاوَتَهُ فِي قَلْبِهِ"
                  translation="Le regard est une flèche empoisonnée parmi les flèches d&apos;Iblis. Celui qui l&apos;abandonne par crainte d&apos;Allah, Allah le récompensera par une foi dont il trouvera la douceur dans son cœur."
                  source="Al-Mustadrak d&apos;Al-Hakim, n°7875 — At-Tabarani, Al-Kabir"
                  grade="hasan"
                  explanation="Ce hadith utilise la métaphore puissante de la flèche empoisonnée pour décrire le regard interdit. Le poison agit progressivement : un premier regard attise la curiosité, un deuxième enflamme le désir, un troisième affaiblit la volonté. Le Prophète ﷺ enseigne cependant que celui qui détourne son regard par crainte d&apos;Allah reçoit en récompense une douceur de foi (<em>halawat al-iman</em>) dans son cœur. Ce hadith montre que le combat contre les tentations n&apos;est pas seulement une privation : c&apos;est un investissement spirituel dont le rendement est la sérénité intérieure."
                />

                <HadithBlock
                  number={6}
                  title="L&apos;isolement avec une femme étrangère"
                  narrator="Ibn &apos;Abbas"
                  arabic="لَا يَخْلُوَنَّ رَجُلٌ بِامْرَأَةٍ إِلَّا وَمَعَهَا ذُو مَحْرَمٍ"
                  translation="Qu&apos;un homme ne s&apos;isole jamais avec une femme (étrangère) sauf en présence d&apos;un mahram (proche parent inépousable)."
                  source="Sahih Al-Bukhari, n°5233 — Sahih Muslim, n°1341"
                  grade="sahih"
                  explanation="Ce hadith établit une règle préventive fondamentale : l&apos;interdiction de la khalwa (isolement) entre un homme et une femme non mahram. Cette règle ne procède pas d&apos;une méfiance envers les individus, mais d&apos;une sagesse prophétique qui reconnaît la faiblesse humaine face à la tentation. Les savants étendent cette interdiction à toute situation d&apos;isolement, y compris dans un bureau fermé, une voiture ou un espace privé. La présence d&apos;un mahram ou d&apos;un groupe de personnes supprime le caractère de khalwa."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths montrent que l&apos;islam adopte une approche préventive de la chasteté. Plutôt que de se contenter d&apos;interdire l&apos;acte final, la Sunna identifie chaque étape du processus qui y mène et établit des barrières à chaque niveau. Le regard, la parole, le toucher et l&apos;isolement sont autant de portes que le croyant doit garder pour préserver sa chasteté.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh, les règles de la chasteté et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Prévention           */}
              {/* ============================== */}
              <section id="prevention" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La prévention de la zina : baisser le regard et jeûner
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam ne se contente pas d&apos;interdire la zina : il prescrit des moyens concrets pour s&apos;en prémunir. Le Prophète ﷺ a indiqué deux voies principales de prévention : le mariage pour celui qui en a les moyens, et le jeûne pour celui qui ne peut pas se marier. À ces deux moyens s&apos;ajoutent la discipline du regard et l&apos;occupation dans les actes d&apos;adoration.
                </p>

                <HadithBlock
                  number={7}
                  title="Ô jeunes gens, mariez-vous !"
                  narrator="Abdullah ibn Mas&apos;ud"
                  arabic="يَا مَعْشَرَ الشَّبَابِ مَنِ اسْتَطَاعَ مِنْكُمُ الْبَاءَةَ فَلْيَتَزَوَّجْ فَإِنَّهُ أَغَضُّ لِلْبَصَرِ وَأَحْصَنُ لِلْفَرْجِ، وَمَنْ لَمْ يَسْتَطِعْ فَعَلَيْهِ بِالصَّوْمِ فَإِنَّهُ لَهُ وِجَاءٌ"
                  translation="Ô jeunes gens ! Celui d&apos;entre vous qui en a les moyens, qu&apos;il se marie, car c&apos;est plus propice à baisser le regard et à préserver la chasteté. Et celui qui n&apos;en a pas les moyens, qu&apos;il jeûne, car le jeûne lui sera un bouclier."
                  source="Sahih Al-Bukhari, n°5066 — Sahih Muslim, n°1400"
                  grade="sahih"
                  explanation="Ce hadith est la prescription prophétique par excellence en matière de prévention de la zina. Le Prophète ﷺ s&apos;adresse spécifiquement aux jeunes, période où les pulsions sont les plus fortes. Il propose deux solutions : le mariage, qui canalise le désir de manière licite, et le jeûne, qui le réduit physiquement et spirituellement. Le terme &laquo;&nbsp;wija&apos;&nbsp;&raquo; signifie littéralement &laquo;&nbsp;castration&nbsp;&raquo; au sens figuré, c&apos;est-à-dire que le jeûne atténue le désir. Les savants déduisent de ce hadith que faciliter le mariage des jeunes est une responsabilité communautaire."
                />

                <HadithBlock
                  number={8}
                  title="Détourne ton regard"
                  narrator="Jarir ibn Abdullah"
                  arabic="سَأَلْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنْ نَظَرِ الْفُجَاءَةِ فَأَمَرَنِي أَنْ أَصْرِفَ بَصَرِي"
                  translation="J&apos;ai interrogé le Messager d&apos;Allah ﷺ au sujet du regard involontaire (soudain). Il m&apos;a ordonné de détourner mon regard."
                  source="Sahih Muslim, n°2159"
                  grade="sahih"
                  explanation="Ce hadith distingue deux types de regard : le regard involontaire (<em>nazrat al-fuja&apos;a</em>), qui survient sans intention et qui est pardonné, et le regard délibéré qui suit, qui est interdit. Le Prophète ﷺ ordonne de détourner le regard après le premier coup d&apos;œil involontaire. Les savants en déduisent que le premier regard est pardonné car il échappe au contrôle, mais que le second regard est un choix conscient et constitue une forme de zina des yeux. Cette distinction montre la justice de la législation islamique : elle ne punit que les actes volontaires."
                />

                <HadithBlock
                  number={9}
                  title="Le jeûne comme bouclier contre les passions"
                  narrator="Abu Hurayra"
                  arabic="الصِّيَامُ جُنَّةٌ فَلَا يَرْفُثْ وَلَا يَصْخَبْ، فَإِنِ امْرُؤٌ قَاتَلَهُ أَوْ شَاتَمَهُ فَلْيَقُلْ إِنِّي صَائِمٌ"
                  translation="Le jeûne est un bouclier. Que le jeûneur ne prononce pas de paroles obscènes et ne fasse pas de vacarme. Si quelqu&apos;un le combat ou l&apos;insulte, qu&apos;il dise : je suis en état de jeûne."
                  source="Sahih Al-Bukhari, n°1904 — Sahih Muslim, n°1151"
                  grade="sahih"
                  explanation="Ce hadith complète le précédent sur le jeûne comme moyen de prévention. Le terme &laquo;&nbsp;junna&nbsp;&raquo; (bouclier) indique que le jeûne protège le croyant sur plusieurs fronts : il réduit les pulsions physiques, il élève la conscience spirituelle et il habitue à la maîtrise de soi. L&apos;interdiction des paroles obscènes (<em>rafath</em>) pendant le jeûne renforce cette discipline globale. Les savants recommandent le jeûne du lundi et du jeudi, les trois jours blancs de chaque mois et le jeûne de Dawud (un jour sur deux) pour ceux qui cherchent à renforcer leur chasteté."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La prévention de la zina repose sur un double mécanisme : l&apos;éloignement des tentations et le renforcement de la volonté. Le mariage satisfait le désir de manière licite, le jeûne l&apos;atténue, et la discipline du regard coupe la chaîne de la tentation à sa source. Ces trois moyens forment un programme complet que le croyant peut adapter à sa situation personnelle.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Repentir             */}
              {/* ============================== */}
              <section id="repentir" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le repentir après la zina : la miséricorde divine
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si l&apos;islam est ferme dans son interdiction de la zina, il est tout aussi clair sur l&apos;ouverture de la porte du repentir. Le Prophète ﷺ a enseigné qu&apos;aucun péché n&apos;est trop grand pour la miséricorde d&apos;Allah, à condition que le repentir soit sincère, accompagné de regret et d&apos;une résolution ferme de ne plus recommencer. Ce message est essentiel pour ne pas tomber dans le désespoir.
                </p>

                <HadithBlock
                  number={10}
                  title="Allah tend Sa main jour et nuit pour le repentant"
                  narrator="Abu Musa al-Ash&apos;ari"
                  arabic="إِنَّ اللَّهَ عَزَّ وَجَلَّ يَبْسُطُ يَدَهُ بِاللَّيْلِ لِيَتُوبَ مُسِيءُ النَّهَارِ، وَيَبْسُطُ يَدَهُ بِالنَّهَارِ لِيَتُوبَ مُسِيءُ اللَّيْلِ، حَتَّى تَطْلُعَ الشَّمْسُ مِنْ مَغْرِبِهَا"
                  translation="Allah Azza wa Jall tend Sa main la nuit pour que le pécheur du jour se repente, et Il tend Sa main le jour pour que le pécheur de la nuit se repente, et ce jusqu&apos;à ce que le soleil se lève de son couchant."
                  source="Sahih Muslim, n°2759"
                  grade="sahih"
                  explanation="Ce hadith est un message d&apos;espoir immense pour celui qui a commis la zina ou tout autre péché. Allah ne ferme jamais la porte du repentir tant que l&apos;heure finale n&apos;est pas venue. L&apos;image de la main tendue exprime l&apos;empressement divin à pardonner. Le Prophète ﷺ enseigne que le temps du repentir est illimité durant la vie terrestre : il n&apos;y a pas de délai de prescription pour la miséricorde divine. Les savants insistent sur les conditions du repentir sincère (<em>tawba nasuh</em>) : le regret, l&apos;arrêt immédiat du péché et la résolution ferme de ne plus y revenir."
                />

                <HadithBlock
                  number={11}
                  title="Un repentir qui aurait suffi à soixante-dix personnes"
                  narrator="Burayda"
                  arabic="لَقَدْ تَابَتْ تَوْبَةً لَوْ قُسِمَتْ بَيْنَ سَبْعِينَ مِنْ أَهْلِ الْمَدِينَةِ لَوَسِعَتْهُمْ، وَهَلْ وَجَدْتَ أَفْضَلَ مِنْ أَنْ جَادَتْ بِنَفْسِهَا لِلَّهِ عَزَّ وَجَلَّ"
                  translation="Elle a fait un repentir tel que s&apos;il était réparti entre soixante-dix habitants de Médine, il leur aurait suffi. Et as-tu trouvé mieux que le fait qu&apos;elle se soit offerte (en repentir) à Allah Azza wa Jall ?"
                  source="Sahih Muslim, n°1695"
                  grade="sahih"
                  explanation="Ce hadith concerne la femme de la tribu Ghamidiyya qui est venue avouer volontairement sa faute au Prophète ﷺ. Celui-ci a tenté à plusieurs reprises de la renvoyer, lui laissant la possibilité de ne pas avouer. Elle a insisté, poussée par un repentir profond. Après l&apos;application de la peine, le Prophète ﷺ a prononcé ces paroles remarquables, attestant de la grandeur de son repentir. Les savants tirent de ce récit que le repentir sincère efface le péché et élève le rang du repentant auprès d&apos;Allah, et qu&apos;il n&apos;est pas nécessaire de s&apos;accuser publiquement pour que le repentir soit accepté."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces deux hadiths équilibrent le discours sur la zina : la gravité du péché ne doit jamais conduire au désespoir. La miséricorde d&apos;Allah est plus vaste que tout péché, et le repentir sincère est toujours accepté. Le croyant doit maintenir cet équilibre entre la crainte (<em>khawf</em>) qui le retient du péché et l&apos;espérance (<em>raja&apos;</em>) qui le pousse vers le pardon divin.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur la zina et les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur la zina. Leurs explications permettent de mieux saisir la portée juridique, morale et spirituelle de ces enseignements prophétiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La parole d&apos;Allah &laquo;&nbsp;n&apos;approchez pas la zina&nbsp;&raquo; est plus éloquente que s&apos;Il avait dit &laquo;&nbsp;ne commettez pas la zina&nbsp;&raquo;, car elle interdit tous les moyens et les préludes qui y conduisent. Celui qui s&apos;approche de la limite finit par la franchir.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam Al-Qurtubi, <em>Al-Jami&apos; li Ahkam al-Qur&apos;an</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith sur les parts de zina du fils d&apos;Adam montre que la chasteté n&apos;est pas uniquement une affaire de parties intimes. C&apos;est une discipline qui engage l&apos;ensemble du corps : les yeux, les oreilles, la langue, les mains, les pieds et le cœur. Garder sa chasteté, c&apos;est garder tous ses membres.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le regard est le messager de la fornication. Celui qui libère son regard sème dans son cœur des désirs qu&apos;il sera incapable de récolter. Baisser le regard est la clé de la sérénité du cœur et de la lumière de la clairvoyance spirituelle.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Rawdat al-Muhibbin</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La sagesse de l&apos;interdiction de la khalwa (isolement) est que Shaytan est le troisième lorsqu&apos;un homme et une femme étrangère sont seuls. Ce n&apos;est pas une accusation portée contre les individus, mais une reconnaissance de la faiblesse humaine et une protection prescrite par miséricorde.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que l&apos;approche islamique de la zina est à la fois juridique, morale et spirituelle. Les savants ne se contentent pas de rappeler l&apos;interdiction : ils expliquent la sagesse (<em>hikma</em>) derrière chaque règle, la dimension préventive de chaque prescription et la voie du retour vers Allah pour celui qui a failli.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Leçons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques pour le croyant
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour la vie du musulman soucieux de préserver sa chasteté :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Comprendre la gravité de la zina pour renforcer la crainte d&apos;Allah
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La zina est classée parmi les trois péchés les plus graves après le shirk et le meurtre. Prendre conscience de cette gravité est le premier rempart contre la tentation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Garder son regard pour garder son cœur
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le regard est la première étape vers la zina. Détourner ses yeux dès le premier coup d&apos;œil involontaire est une discipline quotidienne qui protège le cœur et renforce la foi.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Éviter les situations de khalwa et de tentation
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Ne jamais s&apos;isoler avec une personne de l&apos;autre sexe non mahram. À l&apos;ère numérique, cela inclut les conversations privées en ligne et les échanges ambigus sur les réseaux sociaux.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Faciliter le mariage pour les jeunes
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les familles et la communauté ont la responsabilité de faciliter le mariage des jeunes. Le Prophète ﷺ a désigné le mariage comme le premier moyen de prévention de la zina.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Jeûner régulièrement pour discipliner les pulsions
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le jeûne surérogatoire (lundi, jeudi, jours blancs) est un bouclier prescrit par le Prophète ﷺ. Il réduit les pulsions physiques et élève la conscience spirituelle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne jamais désespérer de la miséricorde d&apos;Allah
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Celui qui a commis la zina dispose toujours de la porte du repentir. Un retour sincère vers Allah, accompagné de regret et de résolution, efface le péché et peut même élever le rang du repentant.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur le mariage en islam : guide complet"
                  description="Les enseignements prophétiques sur le choix du conjoint, les droits des époux et la bienveillance conjugale."
                  href="/hadith-mariage-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le pardon et le repentir en islam"
                  description="La miséricorde divine, les conditions du repentir sincère et les hadiths sur le pardon d&apos;Allah."
                  href="/hadith-pardon-repentir-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
