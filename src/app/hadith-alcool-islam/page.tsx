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
    "Hadiths sur l'alcool en islam : interdiction et sagesse",
  description:
    "Découvrez les hadiths authentiques sur l'interdiction de l'alcool en islam : interdiction progressive, malédiction des dix catégories, tout enivrant est haram, repentir du buveur. Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths sur l'alcool en islam : interdiction et sagesse",
    description:
      "Les hadiths authentiques sur l'alcool en islam : interdiction progressive, malédiction, tout enivrant est haram et la porte du repentir selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-alcool-islam",
    images: [
      {
        url: "/images/grande-mosquee-blanche-minarets-islam-architecture.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-alcool-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique de l'interdiction" },
  { id: "interdiction-progressive", label: "L'interdiction progressive" },
  { id: "malediction-alcool", label: "La malédiction liée à l'alcool" },
  { id: "tout-enivrant-haram", label: "Tout enivrant est haram" },
  { id: "repentir-buveur", label: "Le repentir du buveur" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Pourquoi l'alcool est-il interdit en islam ?",
    answer:
      "L\u2019alcool est interdit en islam car Allah le désigne comme une abomination faisant partie de l\u2019œuvre du diable (Coran 5:90). Les hadiths expliquent que tout enivrant est khamr, et tout khamr est haram (Muslim 2003). L\u2019interdiction vise à protéger la raison (\u2019aql), qui est l\u2019un des cinq objectifs fondamentaux de la charia, ainsi qu\u2019à préserver la santé, la dignité et les liens sociaux du croyant.",
  },
  {
    question:
      "L'interdiction de l'alcool a-t-elle été révélée en une seule fois ?",
    answer:
      "Non, l\u2019interdiction de l\u2019alcool a été progressive, en trois étapes. D\u2019abord, le Coran a signalé que l\u2019alcool comporte un péché plus grand que son utilité (2:219). Puis il a interdit de prier en état d\u2019ivresse (4:43). Enfin, la révélation de la sourate Al-Ma\u2019ida (5:90-91) a prononcé l\u2019interdiction totale et définitive. Les Compagnons ont alors immédiatement vidé leurs récipients d\u2019alcool.",
  },
  {
    question:
      "Quelles sont les dix catégories maudites liées à l'alcool ?",
    answer:
      "Selon le hadith rapporté par Anas ibn Malik (Tirmidhi 1295), le Prophète \u2018alayhi salatu wa salam a maudit dix catégories de personnes liées à l\u2019alcool : celui qui le presse, celui qui demande qu\u2019on le presse, celui qui le boit, celui qui le transporte, celui à qui il est transporté, celui qui le sert, celui qui le vend, celui qui profite de son prix, celui qui l\u2019achète et celui pour qui il est acheté.",
  },
  {
    question:
      "Une petite quantité d'alcool est-elle permise en islam ?",
    answer:
      "Non. Le Prophète \u2018alayhi salatu wa salam a clairement établi que ce dont une grande quantité enivre, même une petite quantité en est interdite (Abu Dawud 3681, Tirmidhi 1865). Cette règle élimine toute ambiguïté : il n\u2019y a pas de seuil minimal autorisé. Les boissons faiblement alcoolisées, les cocktails dilués ou les plats cuisinés à l\u2019alcool entrent dans cette interdiction selon la majorité des savants.",
  },
  {
    question:
      "Le buveur d'alcool peut-il se repentir en islam ?",
    answer:
      "Oui, la porte du repentir (tawba) est ouverte pour tout pécheur, y compris le buveur d\u2019alcool. Le Prophète \u2018alayhi salatu wa salam a interdit de maudire un homme puni pour ivresse en disant : \u00ab Ne l\u2019aidez pas contre lui-même, car il aime Allah et Son Messager \u00bb (Bukhari 6780). Le repentir sincère, accompagné de l\u2019abandon définitif du péché, efface les fautes passées selon le consensus des savants.",
  },
  {
    question:
      "Les hadiths sur l'alcool s'appliquent-ils aux drogues modernes ?",
    answer:
      "Oui. Le Prophète \u2018alayhi salatu wa salam a dit : \u00ab Tout enivrant est khamr, et tout khamr est haram \u00bb (Muslim 2003). Les savants appliquent cette règle par analogie (qiyas) à toute substance qui altère la raison : drogues, stupéfiants, substances psychoactives. L\u2019imam An-Nawawi et Ibn Taymiyya ont explicitement inclus le haschich et les substances similaires dans cette interdiction.",
  },
];

export default function HadithAlcoolIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-alcool-islam/#article",
        headline:
          "Hadiths sur l'alcool en islam : interdiction et sagesse",
        description:
          "Découvrez les hadiths authentiques sur l'interdiction de l'alcool en islam : interdiction progressive, malédiction, tout enivrant est haram et repentir.",
        image: "/images/grande-mosquee-blanche-minarets-islam-architecture.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-alcool-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-alcool-islam/#breadcrumb",
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
            name: "Alcool en islam",
            item: "https://www.islamreligion.fr/hadith-alcool-islam",
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
          title="Hadiths sur l'alcool en islam"
          subtitle="Les enseignements prophétiques sur l'interdiction de l'alcool : révélation progressive, malédiction des acteurs de la chaîne, tout enivrant est haram et la porte du repentir selon la Sunna authentique."
          imageSrc="/images/grande-mosquee-blanche-minarets-islam-architecture.jpg"
          imageAlt="Hadiths sur l'alcool en islam, interdiction et sagesse prophétique"
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
                  Alcool en islam
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
                    L&apos;interdiction de l&apos;alcool a été révélée progressivement, en trois étapes, pour accompagner les Compagnons dans l&apos;abandon de cette habitude.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ a maudit dix catégories de personnes liées à l&apos;alcool : du producteur au consommateur, en passant par le vendeur et le transporteur.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Tout enivrant est khamr et tout khamr est haram, quelle que soit la quantité consommée ou la nature de la substance.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La porte du repentir reste ouverte pour le buveur d&apos;alcool, et le Prophète ﷺ a interdit de maudire celui qui se repent.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique de l&apos;interdiction de l&apos;alcool
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths, il est essentiel de comprendre le cadre coranique de l&apos;interdiction de l&apos;alcool (<em>khamr</em>). Le Coran a traité cette question avec une pédagogie remarquable, accompagnant les croyants dans un processus d&apos;abandon progressif. Les versets de la sourate Al-Ma&apos;ida constituent le point d&apos;aboutissement de cette révélation graduelle, posant l&apos;interdiction définitive sur laquelle s&apos;appuient ensuite les hadiths du Prophète ﷺ.
                </p>

                <HadithCard
                  arabic="يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنصَابُ وَالْأَزْلَامُ رِجْسٌ مِّنْ عَمَلِ الشَّيْطَانِ فَاجْتَنِبُوهُ لَعَلَّكُمْ تُفْلِحُونَ ۝ إِنَّمَا يُرِيدُ الشَّيْطَانُ أَن يُوقِعَ بَيْنَكُمُ الْعَدَاوَةَ وَالْبَغْضَاءَ فِي الْخَمْرِ وَالْمَيْسِرِ وَيَصُدَّكُمْ عَن ذِكْرِ اللَّهِ وَعَنِ الصَّلَاةِ فَهَلْ أَنتُم مُّنتَهُونَ"
                  text="Ô les croyants ! Le vin, le jeu de hasard, les pierres dressées et les flèches de divination ne sont qu&apos;une abomination, œuvre du Diable. Écartez-vous en, afin que vous réussissiez. Le Diable ne veut que jeter parmi vous, à travers le vin et le jeu de hasard, l&apos;inimitié et la haine, et vous détourner de l&apos;invocation d&apos;Allah et de la prière. Allez-vous donc y mettre fin ?"
                  source="Coran, sourate Al-Ma&apos;ida (5:90-91)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces deux versets sont le pilier de l&apos;interdiction de l&apos;alcool en islam. Allah qualifie le khamr de <em>rijs</em> (abomination, souillure) et l&apos;attribue à l&apos;œuvre du diable. Le verset énumère ensuite les conséquences concrètes de l&apos;alcool : l&apos;inimitié entre les gens, la haine, et surtout l&apos;éloignement du rappel d&apos;Allah et de la prière. La question finale — &laquo;&nbsp;Allez-vous donc y mettre fin ?&nbsp;&raquo; — est une injonction sous forme interrogative, ce qui renforce l&apos;obligation. Les Compagnons ont immédiatement répondu : &laquo;&nbsp;Nous avons cessé, nous avons cessé !&nbsp;&raquo; Les hadiths qui suivent précisent et détaillent les modalités de cette interdiction.
                </p>
              </section>

              {/* ========================================== */}
              {/* SECTION : L'interdiction progressive       */}
              {/* ========================================== */}
              <section id="interdiction-progressive" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;interdiction progressive de l&apos;alcool dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des aspects les plus remarquables de l&apos;interdiction de l&apos;alcool en islam est sa progressivité. Allah n&apos;a pas interdit le khamr d&apos;un seul coup dans une société où la consommation d&apos;alcool était profondément enracinée. Les hadiths suivants documentent cette transition graduelle et la réaction exemplaire des Compagnons à chaque étape de la révélation.
                </p>

                <HadithBlock
                  number={1}
                  title="La révélation de l&apos;interdiction et la réaction des Compagnons"
                  narrator="Anas ibn Malik"
                  arabic="كُنْتُ أَسْقِي أَبَا عُبَيْدَةَ بْنَ الْجَرَّاحِ وَأَبَا طَلْحَةَ الْأَنْصَارِيَّ وَأُبَيَّ بْنَ كَعْبٍ شَرَابًا مِنْ فَضِيخٍ وَتَمْرٍ، فَجَاءَهُمْ آتٍ فَقَالَ: إِنَّ الْخَمْرَ قَدْ حُرِّمَتْ. فَقَالَ أَبُو طَلْحَةَ: يَا أَنَسُ، قُمْ إِلَى هَذِهِ الْجِرَارِ فَاكْسِرْهَا. فَقُمْتُ إِلَى مِهْرَاسٍ لَنَا فَضَرَبْتُهَا بِأَسْفَلِهِ حَتَّى تَكَسَّرَتْ"
                  translation="Je servais à boire à Abu Ubayda ibn al-Jarrah, Abu Talha al-Ansari et Ubayy ibn Ka&apos;b une boisson faite de dattes fraîches et de dattes sèches. Quelqu&apos;un vint et dit : l&apos;alcool a été interdit ! Abu Talha dit : Ô Anas, lève-toi et brise ces jarres. Je me levai et les frappai avec le fond d&apos;un mortier jusqu&apos;à ce qu&apos;elles se brisent."
                  source="Sahih Al-Bukhari, n°2464 — Sahih Muslim, n°1980"
                  grade="sahih"
                  explanation="Ce hadith illustre la soumission immédiate et totale des Compagnons à l&apos;ordre divin. Ils n&apos;ont pas attendu de finir ce qu&apos;ils avaient, ni demandé un délai : dès l&apos;annonce de l&apos;interdiction, les jarres ont été brisées et l&apos;alcool a coulé dans les rues de Médine. Anas ibn Malik était jeune serviteur au moment des faits, et son témoignage est un document historique précieux sur la réaction de la première communauté musulmane."
                />

                <HadithBlock
                  number={2}
                  title="Omar et la demande d&apos;une explication claire"
                  narrator="Omar ibn al-Khattab"
                  arabic="اللَّهُمَّ بَيِّنْ لَنَا فِي الْخَمْرِ بَيَانًا شَافِيًا، فَنَزَلَتْ الْآيَةُ الَّتِي فِي الْبَقَرَةِ: يَسْأَلُونَكَ عَنِ الْخَمْرِ وَالْمَيْسِرِ... فَدُعِيَ عُمَرُ فَقُرِئَتْ عَلَيْهِ، فَقَالَ: اللَّهُمَّ بَيِّنْ لَنَا فِي الْخَمْرِ بَيَانًا شَافِيًا، فَنَزَلَتْ الْآيَةُ الَّتِي فِي النِّسَاءِ... فَدُعِيَ عُمَرُ فَقُرِئَتْ عَلَيْهِ، فَقَالَ: اللَّهُمَّ بَيِّنْ لَنَا فِي الْخَمْرِ بَيَانًا شَافِيًا، فَنَزَلَتْ الْآيَةُ الَّتِي فِي الْمَائِدَةِ... فَقَالَ: انْتَهَيْنَا انْتَهَيْنَا"
                  translation="Omar dit : Ô Allah, donne-nous une explication claire au sujet de l&apos;alcool. Alors fut révélé le verset de la sourate Al-Baqara : &laquo; Ils t&apos;interrogent sur le vin et le jeu de hasard... &raquo; Omar fut appelé et on lui lut le verset, puis il dit : Ô Allah, donne-nous une explication claire au sujet de l&apos;alcool. Alors fut révélé le verset de la sourate An-Nisa... On lui lut le verset, puis il dit : Ô Allah, donne-nous une explication claire. Alors fut révélé le verset de la sourate Al-Ma&apos;ida... Et il dit : Nous avons cessé, nous avons cessé !"
                  source="Sunan Abu Dawud, n°3670 — Jami&apos; at-Tirmidhi, n°3049"
                  grade="sahih"
                  explanation="Ce hadith retrace les trois étapes de la révélation sur l&apos;alcool à travers les invocations d&apos;Omar ibn al-Khattab. La première étape (Al-Baqara 2:219) mentionne le péché plus grand que l&apos;utilité. La deuxième (An-Nisa 4:43) interdit la prière en état d&apos;ivresse. La troisième (Al-Ma&apos;ida 5:90-91) prononce l&apos;interdiction totale. La réponse finale d&apos;Omar — &laquo; Nous avons cessé ! &raquo; — marque l&apos;obéissance sans réserve. Ce processus graduel est un modèle de pédagogie divine pour le changement social."
                />

                <HadithBlock
                  number={3}
                  title="L&apos;alcool versé dans les rues de Médine"
                  narrator="Anas ibn Malik"
                  arabic="لَقَدْ أُنْزِلَ تَحْرِيمُ الْخَمْرِ وَمَا بِالْمَدِينَةِ شَرَابٌ يُعْجَبُ بِهِ إِلَّا فَضِيخٌ. وَلَقَدْ حَرُمَتِ الْخَمْرُ وَإِنَّ خَمْرَهُمْ يَوْمَئِذٍ لَلْفَضِيخُ. وَقَالَ: لَقَدْ حُرِّمَتِ الْخَمْرُ حِينَ حُرِّمَتْ وَإِنَّهُمْ لَيَشْرَبُونَهَا"
                  translation="Lorsque l&apos;interdiction de l&apos;alcool fut révélée, il n&apos;y avait pas de boisson plus appréciée à Médine que le fadikh (boisson de dattes fraîches). Et lorsque l&apos;alcool fut interdit, leur alcool de l&apos;époque était le fadikh. Il dit : l&apos;alcool fut interdit alors qu&apos;ils en buvaient encore."
                  source="Sahih Muslim, n°1982"
                  grade="sahih"
                  explanation="Ce hadith précise le contexte social de l&apos;interdiction. Les habitants de Médine consommaient principalement du fadikh, une boisson fermentée à base de dattes, et non du vin de raisin comme les Arabes du nord. Ce détail est juridiquement important : il montre que le khamr ne désigne pas uniquement le vin de raisin, mais toute boisson enivrante. Les Compagnons ont abandonné leur boisson préférée du jour au lendemain, illustrant la force de leur foi."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths documentent un moment historique unique dans l&apos;histoire de la civilisation : une société entière qui abandonne l&apos;alcool en un jour. Pour mieux comprendre la méthodologie prophétique et l&apos;importance des hadiths, consultez notre article sur les{" "}
                  <Link href="/hadith-prophete-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths du Prophète Muhammad ﷺ
                  </Link>.
                </p>
              </section>

              {/* ========================================== */}
              {/* SECTION : La malédiction liée à l'alcool  */}
              {/* ========================================== */}
              <section id="malediction-alcool" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La malédiction liée à l&apos;alcool : les dix catégories
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ ne s&apos;est pas contenté d&apos;interdire la consommation de l&apos;alcool : il a étendu la malédiction à toute la chaîne de production, de distribution et de consommation. Cette approche globale montre que l&apos;islam traite le problème de l&apos;alcool de manière systémique, en ciblant non seulement le buveur, mais tous les acteurs qui rendent possible cette consommation.
                </p>

                <HadithBlock
                  number={4}
                  title="Les dix catégories maudites liées à l&apos;alcool"
                  narrator="Anas ibn Malik"
                  arabic="لَعَنَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فِي الْخَمْرِ عَشَرَةً: عَاصِرَهَا، وَمُعْتَصِرَهَا، وَشَارِبَهَا، وَحَامِلَهَا، وَالْمَحْمُولَةَ إِلَيْهِ، وَسَاقِيَهَا، وَبَائِعَهَا، وَآكِلَ ثَمَنِهَا، وَالْمُشْتَرِيَ لَهَا، وَالْمُشْتَرَاةَ لَهُ"
                  translation="Le Messager d&apos;Allah ﷺ a maudit au sujet de l&apos;alcool dix catégories de personnes : celui qui le presse, celui qui demande qu&apos;on le presse, celui qui le boit, celui qui le transporte, celui à qui il est transporté, celui qui le sert, celui qui le vend, celui qui profite de son prix, celui qui l&apos;achète et celui pour qui il est acheté."
                  source="Jami&apos; at-Tirmidhi, n°1295 — Sunan Ibn Majah, n°3381"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus complets sur l&apos;interdiction de l&apos;alcool. La malédiction prophétique (la&apos;na) touche toute la filière : le producteur (presseur), le commanditaire, le consommateur, le logisticien (transporteur), le destinataire, le serveur, le commerçant, le bénéficiaire financier, l&apos;acheteur et le bénéficiaire final. Cette liste exhaustive ferme toute porte à la participation, même indirecte, au commerce de l&apos;alcool. Les savants en déduisent l&apos;interdiction de travailler dans un bar, de transporter de l&apos;alcool professionnellement ou d&apos;investir dans des entreprises de boissons alcoolisées."
                />

                <HadithBlock
                  number={5}
                  title="L&apos;interdiction de vendre de l&apos;alcool"
                  narrator="Jabir ibn Abdillah"
                  arabic="إِنَّ اللَّهَ وَرَسُولَهُ حَرَّمَ بَيْعَ الْخَمْرِ وَالْمَيْتَةِ وَالْخِنْزِيرِ وَالْأَصْنَامِ"
                  translation="Allah et Son Messager ont interdit la vente de l&apos;alcool, de la bête morte, du porc et des idoles."
                  source="Sahih Al-Bukhari, n°2236 — Sahih Muslim, n°1581"
                  grade="sahih"
                  explanation="Ce hadith place l&apos;alcool au même rang que les trois autres choses dont la vente est catégoriquement interdite : la bête morte (non abattue rituellement), le porc et les idoles. Le rapprochement avec les idoles est particulièrement significatif : il suggère que l&apos;alcool, comme les idoles, est un instrument du diable qui détourne de la voie d&apos;Allah. Les juristes s&apos;appuient sur ce hadith pour interdire tout profit tiré du commerce de l&apos;alcool, y compris pour les musulmans vivant dans des pays non-musulmans."
                />

                <HadithBlock
                  number={6}
                  title="Le khamr est la mère des turpitudes"
                  narrator="Abdallah ibn Abbas"
                  arabic="اجْتَنِبُوا الْخَمْرَ فَإِنَّهَا مِفْتَاحُ كُلِّ شَرٍّ"
                  translation="Évitez l&apos;alcool, car il est la clé de tout mal."
                  source="Mustadrak al-Hakim, n°7231 — Al-Bayhaqi dans Shu&apos;ab al-Iman"
                  grade="sahih"
                  explanation="Ce hadith qualifie l&apos;alcool de &laquo;&nbsp;clé de tout mal&nbsp;&raquo; (<em>miftah kulli sharr</em>). Cette métaphore puissante indique que l&apos;alcool n&apos;est pas seulement un péché en soi, mais qu&apos;il ouvre la porte à d&apos;autres péchés : violence, fornication, mensonge, négligence de la prière. Les savants expliquent que l&apos;alcool altère la raison (<em>&apos;aql</em>), qui est le gardien de la conscience morale. Une fois cette barrière levée, tous les autres péchés deviennent possibles. C&apos;est pourquoi la préservation de la raison est l&apos;un des cinq objectifs fondamentaux (<em>maqasid</em>) de la charia."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh des interdits, les règles alimentaires et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Tout enivrant haram  */}
              {/* ============================== */}
              <section id="tout-enivrant-haram" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Tout enivrant est haram : une règle sans exception
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Certains contemporains du Prophète ﷺ ont tenté de limiter l&apos;interdiction au seul vin de raisin. Les hadiths suivants dissipent toute ambiguïté : tout ce qui enivre est khamr, quelle que soit sa source ou sa quantité. Cette règle universelle s&apos;applique à toute substance altérant la raison, de l&apos;alcool de dattes aux drogues modernes.
                </p>

                <HadithBlock
                  number={7}
                  title="Tout enivrant est khamr, et tout khamr est haram"
                  narrator="Ibn Omar"
                  arabic="كُلُّ مُسْكِرٍ خَمْرٌ، وَكُلُّ مُسْكِرٍ حَرَامٌ"
                  translation="Tout enivrant est khamr, et tout enivrant est haram."
                  source="Sahih Muslim, n°2003"
                  grade="sahih"
                  explanation="Ce hadith est la règle fondamentale en matière d&apos;interdiction des substances enivrantes. Le Prophète ﷺ utilise le terme englobant &laquo;&nbsp;muskir&nbsp;&raquo; (tout ce qui enivre) pour l&apos;assimiler au khamr, puis prononce l&apos;interdiction catégorique. Cette double affirmation ferme la porte à toute interprétation restrictive : il n&apos;est pas possible de prétendre qu&apos;une boisson enivrante faite de miel, de dattes ou de céréales échappe à l&apos;interdiction. Les quatre écoles juridiques s&apos;appuient unanimement sur ce hadith."
                />

                <HadithBlock
                  number={8}
                  title="Ce dont une grande quantité enivre, même une petite quantité est interdite"
                  narrator="Jabir ibn Abdillah"
                  arabic="مَا أَسْكَرَ كَثِيرُهُ فَقَلِيلُهُ حَرَامٌ"
                  translation="Ce dont une grande quantité enivre, même une petite quantité en est interdite."
                  source="Sunan Abu Dawud, n°3681 — Jami&apos; at-Tirmidhi, n°1865"
                  grade="sahih"
                  explanation="Ce hadith complète le précédent en éliminant l&apos;argument de la faible quantité. Certaines personnes pourraient arguer qu&apos;un verre ne les enivre pas. Le Prophète ﷺ coupe court à ce raisonnement : si la substance a le potentiel d&apos;enivrer en grande quantité, alors même une gorgée en est interdite. Cette règle est d&apos;une importance capitale dans le contexte moderne, où de nombreuses boissons contiennent de faibles pourcentages d&apos;alcool. Les savants contemporains l&apos;appliquent aux boissons dites &laquo;&nbsp;sans alcool&nbsp;&raquo; qui contiennent en réalité un taux résiduel d&apos;alcool."
                />

                <HadithBlock
                  number={9}
                  title="L&apos;alcool n&apos;est pas un remède"
                  narrator="Tariq ibn Suwayd al-Ju&apos;fi"
                  arabic="سَأَلْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنِ الْخَمْرِ، فَنَهَانِي عَنْهَا، فَقُلْتُ: إِنَّمَا أَصْنَعُهَا لِلدَّوَاءِ، فَقَالَ: إِنَّهُ لَيْسَ بِدَوَاءٍ، وَلَكِنَّهُ دَاءٌ"
                  translation="J&apos;ai interrogé le Messager d&apos;Allah ﷺ au sujet de l&apos;alcool et il me l&apos;a interdit. J&apos;ai dit : je ne le prépare que comme remède. Il a répondu : ce n&apos;est pas un remède, c&apos;est un mal."
                  source="Sahih Muslim, n°1984"
                  grade="sahih"
                  explanation="Ce hadith ferme la porte de l&apos;argument médical. Le Prophète ﷺ refuse catégoriquement que l&apos;alcool soit utilisé comme médicament, le qualifiant lui-même de maladie (<em>da&apos;</em>), et non de remède (<em>dawa&apos;</em>). Les juristes en déduisent qu&apos;il n&apos;est pas permis de se soigner par l&apos;alcool, sauf en cas de nécessité absolue (<em>darura</em>) où la vie est en danger et aucune alternative n&apos;existe, selon les conditions strictes posées par les savants."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths établissent un cadre complet et sans ambiguïté. L&apos;interdiction touche toute substance enivrante, quelle que soit la quantité, la source ou le prétexte invoqué. Pour en savoir plus sur les enseignements prophétiques liés aux interdits, consultez notre article sur les{" "}
                  <Link href="/hadith-fornication-zina-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la fornication (zina) en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Le repentir du buveur */}
              {/* ============================== */}
              <section id="repentir-buveur" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le repentir du buveur d&apos;alcool
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si l&apos;islam est ferme dans l&apos;interdiction de l&apos;alcool, il est tout aussi généreux dans l&apos;ouverture de la porte du repentir. Le Prophète ﷺ a interdit de désespérer le pécheur et a montré que la miséricorde divine reste accessible à celui qui se repent sincèrement. Ces hadiths rappellent que l&apos;objectif de l&apos;interdiction n&apos;est pas la condamnation, mais la réforme et le retour à Allah.
                </p>

                <HadithBlock
                  number={10}
                  title="Ne maudissez pas celui qui est puni pour ivresse"
                  narrator="Abu Hurayra"
                  arabic="أُتِيَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ بِرَجُلٍ قَدْ شَرِبَ، فَقَالَ: اضْرِبُوهُ. ثُمَّ أُتِيَ بِهِ الثَّانِيَةَ فَضُرِبَ، ثُمَّ أُتِيَ بِهِ، فَقَالَ رَجُلٌ مِنَ الْقَوْمِ: أَخْزَاهُ اللَّهُ! فَقَالَ النَّبِيُّ: لَا تَقُولُوا هَكَذَا، لَا تُعِينُوا عَلَيْهِ الشَّيْطَانَ"
                  translation="On amena au Prophète ﷺ un homme qui avait bu de l&apos;alcool. Il dit : frappez-le (la peine légale). Puis on le lui amena une deuxième fois et il fut frappé. Puis on le lui amena encore, et un homme parmi les gens dit : qu&apos;Allah le maudisse ! Le Prophète ﷺ dit : ne dites pas cela, n&apos;aidez pas le diable contre lui."
                  source="Sahih Al-Bukhari, n°6780"
                  grade="sahih"
                  explanation="Ce hadith est d&apos;une profondeur remarquable. Le Prophète ﷺ applique la peine légale, car l&apos;interdiction est claire, mais il interdit aux musulmans de maudire le coupable. Maudire le pécheur, c&apos;est l&apos;enfoncer dans le péché et &laquo;&nbsp;aider le diable contre lui&nbsp;&raquo;. Ce hadith montre l&apos;équilibre de l&apos;islam entre la justice (application de la loi) et la miséricorde (préservation de la dignité du pécheur). Dans une autre version (Bukhari 6781), le Prophète ﷺ ajoute : &laquo;&nbsp;Il aime Allah et Son Messager&nbsp;&raquo;, montrant qu&apos;un pécheur n&apos;est pas nécessairement dépourvu de foi."
                />

                <HadithBlock
                  number={11}
                  title="Allah accepte le repentir du buveur d&apos;alcool"
                  narrator="Abu Hurayra"
                  arabic="مُدْمِنُ الْخَمْرِ إِنْ تَابَ تَابَ اللَّهُ عَلَيْهِ، فَإِنْ عَادَ... فَإِنْ تَابَ تَابَ اللَّهُ عَلَيْهِ، فَإِنْ عَادَ فِي الرَّابِعَةِ كَانَ حَقًّا عَلَى اللَّهِ أَنْ يَسْقِيَهُ مِنْ طِينَةِ الْخَبَالِ. قِيلَ: وَمَا طِينَةُ الْخَبَالِ؟ قَالَ: عُصَارَةُ أَهْلِ النَّارِ"
                  translation="Le buveur invétéré d&apos;alcool, s&apos;il se repent, Allah accepte son repentir. S&apos;il récidive... puis se repent, Allah accepte son repentir. S&apos;il récidive une quatrième fois, il sera en droit qu&apos;Allah lui fasse boire de la tinat al-khabal. On demanda : qu&apos;est-ce que la tinat al-khabal ? Il répondit : le pus des gens de l&apos;Enfer."
                  source="Sunan Ibn Majah, n°3377 — Musnad Ahmad, n°9720"
                  grade="sahih"
                  explanation="Ce hadith illustre à la fois la miséricorde et l&apos;avertissement divins. Allah accepte le repentir du buveur une première, une deuxième, puis une troisième fois. Mais celui qui persiste après ces chances répétées s&apos;expose au châtiment de la tinat al-khabal, décrit comme le pus des damnés de l&apos;Enfer. Les savants soulignent que ce hadith n&apos;est pas une limitation du repentir à trois fois, car la porte de la tawba reste ouverte tant que l&apos;agonie de la mort n&apos;a pas commencé. Il s&apos;agit plutôt d&apos;un avertissement sévère contre la récidive volontaire et le mépris de la miséricorde divine."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur l&apos;alcool et les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont unanimement commenté l&apos;interdiction de l&apos;alcool. Leurs explications permettent de saisir la portée juridique, sanitaire et spirituelle de ces enseignements prophétiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le consensus (ijma&apos;) des savants est établi sur le fait que tout enivrant est haram, quelle que soit sa matière première : raisin, dattes, blé, orge, miel ou autre. Quiconque en boit une quantité, grande ou petite, commet un péché majeur.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;L&apos;alcool est interdit en raison de sa nature même, et non simplement en raison de ses effets. C&apos;est pourquoi la petite quantité qui n&apos;enivre pas est également interdite. L&apos;interdiction porte sur la substance, non sur l&apos;état d&apos;ivresse seul.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Allah a interdit l&apos;alcool pour préserver les cinq nécessités fondamentales (daruriyyat) : la religion, la raison, l&apos;honneur, la vie et les biens. L&apos;alcool les menace toutes : il détourne de la religion, anéantit la raison, expose l&apos;honneur, nuit à la santé et dilapide les biens.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam Ash-Shatibi, <em>Al-Muwafaqat</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que l&apos;interdiction de l&apos;alcool n&apos;est pas une simple règle alimentaire : elle s&apos;inscrit dans le cadre plus large des objectifs de la charia (<em>maqasid ash-shari&apos;a</em>). Chaque hadith cité dans cet article est utilisé par les fuqaha des quatre écoles pour déduire des règles pratiques sur la consommation, le commerce et la détention de l&apos;alcool.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Lecons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques des hadiths sur l&apos;alcool
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des enseignements concrets pour le musulman dans sa vie quotidienne :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        L&apos;interdiction est totale et sans exception
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Toute substance enivrante est haram, quelle que soit sa source (raisin, dattes, céréales), sa quantité (même une gorgée) ou son prétexte (médical, social, culinaire). Le Prophète ﷺ a fermé toutes les portes de contournement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Éviter toute participation à la filière de l&apos;alcool
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La malédiction touche dix catégories, du producteur au consommateur. Le musulman doit éviter de travailler dans le commerce de l&apos;alcool, de le transporter, de le servir ou d&apos;investir dans des entreprises qui en tirent profit.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Comprendre la sagesse derrière l&apos;interdiction
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        L&apos;alcool est la &laquo;&nbsp;clé de tout mal&nbsp;&raquo;. Il menace la raison, la santé, l&apos;honneur, les biens et les liens sociaux. L&apos;interdiction est un acte de miséricorde divine, pas une privation arbitraire.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La progressivité comme méthode de changement
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        L&apos;interdiction en trois étapes est un modèle pour tout changement social. Pour aider quelqu&apos;un à quitter l&apos;alcool, la pédagogie et la patience sont plus efficaces que la brutalité.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne jamais désespérer de la miséricorde d&apos;Allah
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a interdit de maudire le buveur puni et a rappelé qu&apos;Allah accepte le repentir de celui qui revient sincèrement. Le pécheur ne doit pas être rejeté mais accompagné vers la réforme.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Vigilance face aux substances modernes
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La règle &laquo;&nbsp;tout enivrant est khamr&nbsp;&raquo; s&apos;étend aux drogues, stupéfiants et toute substance psychoactive. Le musulman doit être vigilant face aux nouvelles formes d&apos;ivresse que la société contemporaine normalise.
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
                  description="Comprenez les hadiths sur l&apos;alcool dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur le bon comportement en islam"
                  description="Les enseignements prophétiques sur les bonnes manières, la douceur et la bienveillance envers autrui."
                  href="/hadith-bon-comportement-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la fornication (zina) en islam"
                  description="Les hadiths authentiques sur l&apos;interdiction de la fornication et les moyens de préserver sa chasteté."
                  href="/hadith-fornication-zina-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
