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
    "Hadiths sur la richesse et la subsistance (rizq) en islam : guide complet",
  description:
    "Découvrez les hadiths authentiques sur la richesse et le rizq en islam : subsistance écrite avant la naissance, tawakkul, gains licites, gratitude, liens de parenté et contentement selon la Sunna.",
  openGraph: {
    title:
      "Hadiths sur la richesse et la subsistance (rizq) en islam : guide complet",
    description:
      "Les hadiths authentiques sur le rizq en islam : provision divine, travail licite, tawakkul, gratitude et contentement selon la Sunna du Prophète ﷺ.",
    url: "https://www.islamreligion.fr/hadith-richesse-rizq-islam",
    images: [
      {
        url: "/images/croissant-lune-dore-etoiles-symbole-islam.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-richesse-rizq-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique du rizq" },
  { id: "rizq-predestine", label: "Le rizq est écrit avant la naissance" },
  { id: "tawakkul", label: "Le tawakkul (confiance en Allah)" },
  { id: "travail-halal", label: "Le travail et le gain licite" },
  { id: "gratitude-liens", label: "Gratitude et liens de parenté" },
  { id: "richesse-ame", label: "La vraie richesse est celle de l\u2019âme" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Que signifie le rizq en islam ?",
    answer:
      "Le rizq (رزق) désigne en islam toute forme de subsistance et de provision qu\u2019Allah accorde à Ses créatures. Il ne se limite pas à l\u2019argent : il englobe la nourriture, la santé, le savoir, les enfants, la foi et même le temps. Les savants distinguent le rizq matériel (argent, biens) du rizq spirituel (guidance, sérénité, piété). Selon le Coran et la Sunna, c\u2019est Allah seul qui pourvoit (Ar-Razzaq), et le rizq de chaque être est écrit avant sa naissance.",
  },
  {
    question:
      "Le rizq est-il déjà écrit ou peut-on l\u2019augmenter ?",
    answer:
      "Les deux sont vrais selon les textes islamiques. Le rizq est prédéterminé par Allah avant la naissance, comme l\u2019indique le hadith de Ibn Mas\u2019ud (Bukhari 3332). Cependant, d\u2019autres hadiths montrent que certaines actions peuvent augmenter le rizq : maintenir les liens de parenté (Bukhari 5986), faire l\u2019istighfar (demander pardon à Allah), être reconnaissant (Coran 14:7) et faire du\u2019a. Les savants concilient ces textes en expliquant qu\u2019Allah, dans Sa science éternelle, a décrété le rizq en tenant compte de ces causes.",
  },
  {
    question:
      "Quels sont les hadiths les plus importants sur la richesse en islam ?",
    answer:
      "Parmi les hadiths essentiels sur la richesse : le hadith d\u2019Abu Hurayra \u00ab La richesse ne réside pas dans l\u2019abondance des biens, mais la vraie richesse est la richesse de l\u2019âme \u00bb (Bukhari 6446), le hadith sur le tawakkul comparant le croyant aux oiseaux (Tirmidhi 2344), le hadith sur les liens de parenté qui élargissent le rizq (Bukhari 5986), et le hadith sur le meilleur gain étant celui de la main du travailleur (Ahmad 8393).",
  },
  {
    question:
      "L\u2019islam encourage-t-il le travail et la recherche du rizq ?",
    answer:
      "Oui, l\u2019islam encourage fortement le travail honnête et la recherche active du rizq. Le Prophète ﷺ a dit que le meilleur gain est celui de la main du travailleur (Ahmad 8393). Il a valorisé le fait de manger du fruit de son propre travail, citant le prophète Dawud qui vivait du travail de ses mains (Bukhari 2072). Le tawakkul en islam ne signifie pas la passivité, mais l\u2019effort accompagné de la confiance en Allah.",
  },
  {
    question:
      "Comment augmenter son rizq selon la Sunna ?",
    answer:
      "La Sunna mentionne plusieurs moyens d\u2019augmenter le rizq : maintenir les liens de parenté (Bukhari 5986), faire l\u2019istighfar (demander le pardon d\u2019Allah), être reconnaissant envers Allah (Coran 14:7), donner en sadaqa et en zakat, invoquer Allah avec les du\u2019as prophétiques, craindre Allah (taqwa), et placer sa confiance en Lui (tawakkul). Le Prophète ﷺ enseignait des invocations spécifiques pour demander le rizq, comme \u00ab Allahumma inni as\u2019aluka \u2019ilman nafi\u2019an wa rizqan tayyiban \u00bb.",
  },
  {
    question:
      "Que dit l\u2019islam sur la richesse matérielle ?",
    answer:
      "L\u2019islam ne condamne pas la richesse en soi. De grands compagnons comme Abdurrahman ibn Awf et Uthman ibn Affan étaient très riches et sont parmi les dix promis au Paradis. L\u2019islam condamne en revanche l\u2019attachement excessif aux biens, l\u2019avarice, le gain illicite et l\u2019oubli d\u2019Allah à cause de la richesse. Le Prophète ﷺ a dit : \u00ab Il n\u2019y a pas de mal à être riche pour celui qui craint Allah \u00bb (Ibn Majah 2141).",
  },
  {
    question:
      "Quelle est la différence entre le tawakkul et la passivité ?",
    answer:
      "Le tawakkul est la confiance en Allah après avoir accompli les efforts nécessaires, tandis que la passivité (tawakul) est l\u2019abandon de l\u2019effort. Le Prophète ﷺ l\u2019a illustré avec l\u2019exemple des oiseaux qui sortent chaque matin le ventre vide et rentrent rassasiés (Tirmidhi 2344) : les oiseaux ne restent pas dans leur nid, ils sortent chercher leur nourriture. De même, Omar ibn al-Khattab a dit : \u00ab Que personne ne reste assis sans chercher le rizq en disant \u2018Ô Allah accorde-moi\u2019, car le ciel ne fait pas pleuvoir de l\u2019or et de l\u2019argent. \u00bb",
  },
  {
    question:
      "Quelles invocations (du\u2019as) le Prophète faisait-il pour le rizq ?",
    answer:
      "Le Prophète ﷺ faisait plusieurs invocations pour le rizq. Parmi les plus connues : \u00ab Allahumma inni as\u2019aluka \u2019ilman nafi\u2019an wa rizqan tayyiban wa \u2019amalan mutaqabbalan \u00bb (Ô Allah, je Te demande un savoir utile, une subsistance bonne et une œuvre acceptée) — rapporté par Ibn Majah 925. Il invoquait aussi : \u00ab Allahumma-kfini bi halalik \u2019an haramik, wa aghnini bi fadlik \u2019amman siwak \u00bb (Ô Allah, accorde-moi suffisance par le licite et éloigne-moi du haram, enrichis-moi par Ta grâce) — rapporté par Tirmidhi 3563.",
  },
];

export default function HadithRichesseRizqIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-richesse-rizq-islam/#article",
        headline:
          "Hadiths sur la richesse et la subsistance (rizq) en islam : guide complet",
        description:
          "Découvrez les hadiths authentiques sur la richesse et le rizq en islam : subsistance écrite avant la naissance, tawakkul, gains licites, gratitude et contentement.",
        image: "/images/croissant-lune-dore-etoiles-symbole-islam.jpg",
        datePublished: "2026-04-26",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-richesse-rizq-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-richesse-rizq-islam/#breadcrumb",
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
            name: "Hadiths sur la richesse et le rizq",
            item: "https://www.islamreligion.fr/hadith-richesse-rizq-islam",
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
          title="Hadiths sur la richesse et la subsistance (rizq) en islam"
          subtitle="Les enseignements prophétiques sur la provision divine, le travail licite, le tawakkul, la gratitude et le contentement selon la Sunna authentique."
          imageSrc="/images/croissant-lune-dore-etoiles-symbole-islam.jpg"
          imageAlt="Hadiths sur la richesse et le rizq en islam, enseignements prophétiques"
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
                  Hadiths sur la richesse et le rizq
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
                    Le rizq de chaque être humain est écrit avant sa naissance, mais certaines actions comme les liens de parenté et l&apos;istighfar peuvent l&apos;augmenter.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le tawakkul (confiance en Allah) ne signifie pas la passivité : le Prophète ﷺ a encouragé le travail et la recherche active du rizq licite.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La vraie richesse selon le Prophète ﷺ n&apos;est pas l&apos;abondance des biens, mais la richesse de l&apos;âme et le contentement (qana&apos;a).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La gratitude (shukr) envers Allah pour Ses bienfaits est une cause d&apos;augmentation de la subsistance selon le Coran et la Sunna.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique du rizq en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths, il est essentiel de rappeler que la notion de rizq est profondément enracinée dans le Coran. Allah Se désigne Lui-même comme <em>Ar-Razzaq</em> (le Grand Pourvoyeur), affirmant que toute subsistance provient de Lui. Plusieurs versets posent les fondements sur lesquels s&apos;appuient ensuite les hadiths du Prophète ﷺ.
                </p>

                <HadithCard
                  arabic="وَمَا مِن دَابَّةٍ فِي الْأَرْضِ إِلَّا عَلَى اللَّهِ رِزْقُهَا وَيَعْلَمُ مُسْتَقَرَّهَا وَمُسْتَوْدَعَهَا كُلٌّ فِي كِتَابٍ مُّبِينٍ"
                  text="Il n&apos;y a point de bête sur terre dont la subsistance n&apos;incombe à Allah. Il connaît son gîte et son dépôt. Tout est dans un Livre explicite."
                  source="Coran, sourate Hud (11:6)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondamental établit un principe universel : Allah garantit le rizq de toute créature vivante. Cette garantie divine ne signifie pas l&apos;absence d&apos;effort, mais elle rassure le croyant sur le fait que sa subsistance est assurée par Celui qui connaît toutes choses. Les savants soulignent que ce verset englobe toutes les créatures, de la fourmi au plus grand des êtres.
                </p>

                <HadithCard
                  arabic="وَلَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ"
                  text="Si vous êtes reconnaissants, très certainement Je vous donnerai davantage. Et si vous êtes ingrats, Mon châtiment est certes sévère."
                  source="Coran, sourate Ibrahim (14:7)"
                />

                <HadithCard
                  arabic="وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ"
                  text="Et quiconque craint Allah, Il lui trouvera une issue et lui accordera des biens par des voies qu&apos;il ne soupçonnait pas."
                  source="Coran, sourate At-Talaq (65:2-3)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces versets établissent deux causes majeures d&apos;augmentation du rizq : la gratitude (<em>shukr</em>) et la crainte d&apos;Allah (<em>taqwa</em>). Le Coran promet que celui qui remercie Allah recevra davantage, et que celui qui Le craint sera pourvu de manières inattendues. C&apos;est sur cette base coranique que le Prophète ﷺ a construit ses enseignements pratiques sur la subsistance et la richesse.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Rizq prédéterminé    */}
              {/* ============================== */}
              <section id="rizq-predestine" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le rizq est écrit avant la naissance
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des enseignements fondamentaux de l&apos;islam est que la subsistance de chaque être humain est décrétée par Allah avant même sa naissance. Cette croyance libère le croyant de l&apos;angoisse existentielle liée à la recherche des biens matériels et le pousse à placer sa confiance en Allah tout en fournissant les efforts nécessaires.
                </p>

                <HadithBlock
                  number={1}
                  title="La création de l&apos;être humain et la prédétermination du rizq"
                  narrator="Abdullah ibn Mas&apos;ud"
                  arabic="إِنَّ أَحَدَكُمْ يُجْمَعُ خَلْقُهُ فِي بَطْنِ أُمِّهِ أَرْبَعِينَ يَوْمًا نُطْفَةً، ثُمَّ يَكُونُ عَلَقَةً مِثْلَ ذَلِكَ، ثُمَّ يَكُونُ مُضْغَةً مِثْلَ ذَلِكَ، ثُمَّ يُرْسَلُ إِلَيْهِ الْمَلَكُ فَيَنْفُخُ فِيهِ الرُّوحَ وَيُؤْمَرُ بِأَرْبَعِ كَلِمَاتٍ: بِكَتْبِ رِزْقِهِ وَأَجَلِهِ وَعَمَلِهِ وَشَقِيٌّ أَوْ سَعِيدٌ"
                  translation="La création de chacun de vous est rassemblée dans le ventre de sa mère pendant quarante jours sous forme de goutte, puis il devient un caillot de sang pendant une durée similaire, puis un morceau de chair pendant une durée similaire. Puis un ange lui est envoyé, il y insuffle l&apos;âme et reçoit l&apos;ordre d&apos;écrire quatre choses : sa subsistance (rizq), son terme (ajal), ses œuvres et s&apos;il sera malheureux ou heureux."
                  source="Sahih Al-Bukhari, n°3332 — Sahih Muslim, n°2643"
                  grade="sahih"
                  explanation="Ce hadith majeur constitue l&apos;un des fondements de la croyance au destin (qadar) en islam. Le rizq fait partie des quatre éléments écrits avant la naissance. Cela ne signifie pas que l&apos;homme ne doit pas agir : il signifie que le résultat final est entre les mains d&apos;Allah. Les savants expliquent que cette prédétermination inclut les causes (efforts, du&apos;as, liens de parenté) qui mènent au rizq. Le croyant agit avec sérénité, sachant que ce qui lui est destiné ne le manquera pas."
                />

                <HadithBlock
                  number={2}
                  title="Le rizq qui t&apos;est destiné viendra à toi"
                  narrator="Jabir ibn Abdullah"
                  arabic="أَيُّهَا النَّاسُ اتَّقُوا اللَّهَ وَأَجْمِلُوا فِي الطَّلَبِ فَإِنَّ نَفْسًا لَنْ تَمُوتَ حَتَّى تَسْتَوْفِيَ رِزْقَهَا وَإِنْ أَبْطَأَ عَنْهَا فَاتَّقُوا اللَّهَ وَأَجْمِلُوا فِي الطَّلَبِ خُذُوا مَا حَلَّ وَدَعُوا مَا حَرُمَ"
                  translation="Ô gens, craignez Allah et soyez modérés dans votre recherche (des biens). Car aucune âme ne mourra avant d&apos;avoir reçu l&apos;intégralité de sa subsistance, même si celle-ci tarde à venir. Craignez donc Allah et soyez modérés dans votre recherche : prenez ce qui est licite et délaissez ce qui est illicite."
                  source="Sunan Ibn Majah, n°2144"
                  grade="sahih"
                  explanation="Ce hadith apporte une précision capitale : chaque âme recevra l&apos;intégralité de son rizq avant de mourir. Cette certitude doit libérer le croyant de la tentation du gain illicite. Le Prophète ﷺ ordonne la modération dans la quête des biens et pose une règle claire : prendre le halal, délaisser le haram. L&apos;imam Ibn Rajab commente que le retard du rizq est parfois une épreuve destinée à tester la patience et la droiture du croyant."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces deux hadiths établissent un équilibre fondamental : le rizq est garanti par Allah, mais le croyant doit le chercher par des voies licites. La prédétermination n&apos;est pas une invitation à la passivité, mais une source de sérénité qui accompagne l&apos;effort.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Tawakkul             */}
              {/* ============================== */}
              <section id="tawakkul" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le tawakkul : la confiance en Allah pour le rizq
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le tawakkul est l&apos;une des plus hautes stations spirituelles en islam. Il consiste à placer sa confiance totale en Allah après avoir accompli les efforts nécessaires. Les hadiths suivants illustrent cette attitude face à la recherche de la subsistance, en montrant qu&apos;elle est indissociable de l&apos;action.
                </p>

                <HadithBlock
                  number={3}
                  title="Si vous vous en remettiez véritablement à Allah"
                  narrator="Umar ibn al-Khattab"
                  arabic="لَوْ أَنَّكُمْ تَتَوَكَّلُونَ عَلَى اللَّهِ حَقَّ تَوَكُّلِهِ لَرَزَقَكُمْ كَمَا يَرْزُقُ الطَّيْرَ تَغْدُو خِمَاصًا وَتَرُوحُ بِطَانًا"
                  translation="Si vous vous en remettiez véritablement à Allah comme il se doit, Il vous accorderait votre subsistance comme Il la donne aux oiseaux : ils sortent le matin le ventre vide et rentrent le soir rassasiés."
                  source="Jami&apos; at-Tirmidhi, n°2344"
                  grade="sahih"
                  explanation="Ce hadith est la référence par excellence sur le tawakkul. Le Prophète ﷺ utilise l&apos;image des oiseaux pour enseigner deux vérités simultanées : les oiseaux ont confiance en Allah (tawakkul), mais ils ne restent pas dans leur nid — ils sortent chercher leur nourriture. Le vrai tawakkul est donc l&apos;effort accompagné de la confiance en Allah, non la passivité. L&apos;imam Ahmad a commenté ce hadith en disant que le tawakkul ne dispense pas de prendre les causes, mais interdit de s&apos;y attacher au point d&apos;oublier le Pourvoyeur."
                />

                <HadithBlock
                  number={4}
                  title="Attache ta chamelle puis place ta confiance en Allah"
                  narrator="Anas ibn Malik"
                  arabic="قَالَ رَجُلٌ: يَا رَسُولَ اللَّهِ أَعْقِلُهَا وَأَتَوَكَّلُ أَوْ أُطْلِقُهَا وَأَتَوَكَّلُ؟ قَالَ: اعْقِلْهَا وَتَوَكَّلْ"
                  translation="Un homme dit : Ô Messager d&apos;Allah, dois-je attacher ma chamelle et m&apos;en remettre à Allah, ou la laisser libre et m&apos;en remettre à Allah ? Il répondit : Attache-la et place ta confiance en Allah."
                  source="Jami&apos; at-Tirmidhi, n°2517"
                  grade="hasan"
                  explanation="Ce hadith résume de manière concise et pratique la conception islamique du tawakkul. Le Prophète ﷺ refuse le faux choix entre l&apos;effort et la confiance en Allah : les deux sont indissociables. En matière de rizq, cela signifie qu&apos;il faut travailler, planifier et économiser (attacher sa chamelle), tout en sachant que le résultat appartient à Allah (tawakkul). Ce hadith réfute à la fois le matérialisme pur et la passivité spirituelle."
                />

                <HadithBlock
                  number={5}
                  title="Du&apos;a pour le rizq bon et pur"
                  narrator="Umm Salama"
                  arabic="كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا صَلَّى الصُّبْحَ حِينَ يُسَلِّمُ يَقُولُ: اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا"
                  translation="Le Prophète ﷺ, lorsqu&apos;il terminait la prière du matin et donnait le salam, disait : Ô Allah, je Te demande un savoir utile, une subsistance bonne (et pure) et une œuvre acceptée."
                  source="Sunan Ibn Majah, n°925"
                  grade="sahih"
                  explanation="Cette invocation quotidienne du Prophète ﷺ après la prière du Fajr est un trésor de concision. Il demande trois choses essentielles : un savoir qui profite (pas un savoir stérile), un rizq &laquo; tayyib &raquo; (bon, pur, licite) et une œuvre acceptée par Allah. Le qualificatif &laquo; tayyib &raquo; pour le rizq est fondamental : le Prophète ﷺ ne demande pas l&apos;abondance mais la pureté. Cette du&apos;a enseigne que la qualité du rizq importe plus que sa quantité, et que le croyant doit commencer chaque journée en invoquant Allah pour sa subsistance."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh des transactions, la croyance au destin et la spiritualité islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Travail et gain halal */}
              {/* ============================== */}
              <section id="travail-halal" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le travail et le gain licite (halal) dans la Sunna
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam valorise le travail honnête comme l&apos;un des moyens les plus nobles de gagner sa subsistance. Le Prophète ﷺ a lui-même été berger et commerçant avant la révélation, et il a encouragé sa communauté à travailler de ses mains et à rechercher le gain licite.
                </p>

                <HadithBlock
                  number={6}
                  title="Le meilleur gain est celui de la main du travailleur"
                  narrator="Rifa&apos;a ibn Rafi&apos;"
                  arabic="سُئِلَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَيُّ الْكَسْبِ أَطْيَبُ؟ قَالَ: عَمَلُ الرَّجُلِ بِيَدِهِ وَكُلُّ بَيْعٍ مَبْرُورٍ"
                  translation="On demanda au Prophète ﷺ : quel est le meilleur gain ? Il répondit : le travail de l&apos;homme de ses propres mains, et toute transaction commerciale honnête."
                  source="Musnad Ahmad, n°17265 — authentifié par Al-Hakim"
                  grade="sahih"
                  explanation="Ce hadith place le travail manuel et le commerce honnête au sommet des gains licites. Le Prophète ﷺ valorise l&apos;effort physique et l&apos;échange commercial éthique. Le terme &laquo; mabrur &raquo; (honnête, béni) qualifie une transaction sans tromperie, sans usure et sans vices cachés. Les savants y voient la preuve que l&apos;islam encourage l&apos;activité économique tant qu&apos;elle respecte les règles de la Charia. Ce hadith réfute l&apos;idée que le musulman pieux devrait se détourner du monde matériel."
                />

                <HadithBlock
                  number={7}
                  title="Le Prophète Dawud mangeait du travail de ses mains"
                  narrator="Al-Miqdam ibn Ma&apos;dikarib"
                  arabic="مَا أَكَلَ أَحَدٌ طَعَامًا قَطُّ خَيْرًا مِنْ أَنْ يَأْكُلَ مِنْ عَمَلِ يَدِهِ وَإِنَّ نَبِيَّ اللَّهِ دَاوُدَ عَلَيْهِ السَّلَامُ كَانَ يَأْكُلُ مِنْ عَمَلِ يَدِهِ"
                  translation="Personne n&apos;a jamais mangé de nourriture meilleure que celle acquise par le travail de ses propres mains. Et certes, le Prophète de Dieu, Dawud (David), paix sur lui, mangeait du fruit du travail de ses mains."
                  source="Sahih Al-Bukhari, n°2072"
                  grade="sahih"
                  explanation="Le Prophète ﷺ cite ici l&apos;exemple du prophète Dawud (paix sur lui), qui fabriquait des cottes de mailles malgré son statut de roi et de prophète. Ce hadith enseigne que le travail n&apos;est pas une dégradation mais un honneur, même pour les plus élevés en rang. Il encourage le musulman à ne pas dépendre d&apos;autrui pour sa subsistance et à trouver dans le travail une source de dignité. Les savants comme Ibn Hajar commentent que ce hadith concerne autant le travail artisanal que toute activité productive."
                />

                <HadithBlock
                  number={8}
                  title="La main supérieure est meilleure que la main inférieure"
                  narrator="Abdullah ibn &apos;Umar"
                  arabic="الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى، وَالْيَدُ الْعُلْيَا هِيَ الْمُنْفِقَةُ وَالسُّفْلَى هِيَ السَّائِلَةُ"
                  translation="La main supérieure est meilleure que la main inférieure. La main supérieure est celle qui donne et la main inférieure est celle qui demande."
                  source="Sahih Al-Bukhari, n°1429 — Sahih Muslim, n°1033"
                  grade="sahih"
                  explanation="Ce hadith encourage l&apos;autonomie financière et la générosité. La &laquo; main supérieure &raquo; (celle qui donne) est supérieure à la &laquo; main inférieure &raquo; (celle qui mendie). Le Prophète ﷺ enseigne que le croyant doit s&apos;efforcer d&apos;être en position de donner plutôt que de recevoir. Cela implique de travailler, d&apos;épargner et de se suffire à soi-même avant de demander aux autres. Ce hadith est souvent cité en lien avec ceux sur la sadaqa pour montrer que le don suppose d&apos;abord la capacité de gagner."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths sur le travail et le gain licite montrent que l&apos;islam encourage une vie économique active et éthique. Pour approfondir la dimension de la générosité et de la dépense dans le chemin d&apos;Allah, consultez notre article sur les{" "}
                  <Link href="/hadith-sadaqa-charite-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la sadaqa et la charité en islam
                  </Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION : Gratitude et liens de parenté      */}
              {/* ============================================ */}
              <section id="gratitude-liens" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Gratitude et liens de parenté : des causes d&apos;augmentation du rizq
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les textes islamiques mentionnent des causes spécifiques qui attirent la bénédiction divine et augmentent le rizq. Parmi les plus citées : le maintien des liens de parenté (<em>silat ar-rahim</em>), la gratitude (<em>shukr</em>) et la demande de pardon (<em>istighfar</em>). Les hadiths suivants détaillent ces moyens.
                </p>

                <HadithBlock
                  number={9}
                  title="Les liens de parenté élargissent la subsistance"
                  narrator="Anas ibn Malik"
                  arabic="مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ وَيُنْسَأَ لَهُ فِي أَثَرِهِ فَلْيَصِلْ رَحِمَهُ"
                  translation="Celui qui aime que sa subsistance soit élargie et que sa vie soit prolongée, qu&apos;il maintienne les liens de parenté."
                  source="Sahih Al-Bukhari, n°5986 — Sahih Muslim, n°2557"
                  grade="sahih"
                  explanation="Ce hadith établit un lien direct entre le maintien des liens familiaux et l&apos;élargissement du rizq. Le terme &laquo; yubsata &raquo; (soit élargi) indique une augmentation en quantité et en bénédiction (baraka). Les savants expliquent cette &laquo; augmentation &raquo; de deux manières : soit une augmentation réelle du rizq dans le décret divin (qui inclut les causes), soit une baraka placée dans les biens existants qui les rend plus profitables. L&apos;imam An-Nawawi ajoute que ce hadith prouve que la piété a des effets concrets sur la vie matérielle."
                />

                <HadithBlock
                  number={10}
                  title="L&apos;istighfar (demande de pardon) attire le rizq"
                  narrator="Abdullah ibn Abbas"
                  arabic="مَنْ لَزِمَ الِاسْتِغْفَارَ جَعَلَ اللَّهُ لَهُ مِنْ كُلِّ ضِيقٍ مَخْرَجًا وَمِنْ كُلِّ هَمٍّ فَرَجًا وَرَزَقَهُ مِنْ حَيْثُ لَا يَحْتَسِبُ"
                  translation="Celui qui s&apos;attache à l&apos;istighfar (la demande de pardon), Allah lui trouvera une issue à chaque difficulté, un soulagement à chaque souci, et lui accordera une subsistance par des voies qu&apos;il ne soupçonnait pas."
                  source="Sunan Abu Dawud, n°1518"
                  grade="hasan"
                  explanation="Ce hadith lie la demande de pardon à trois bienfaits : une issue aux difficultés, un soulagement des soucis et un rizq inattendu. L&apos;istighfar n&apos;est pas seulement un acte d&apos;expiation des péchés, il est aussi une cause d&apos;ouverture et de provision. Le Coran confirme ce lien dans la sourate Nuh (71:10-12) où le prophète Nuh invite son peuple à demander pardon à Allah pour recevoir la pluie, les biens et les enfants. Les savants recommandent de multiplier l&apos;istighfar, en particulier dans les moments de contrainte financière."
                />

                <HadithBlock
                  number={11}
                  title="La sadaqa n&apos;a jamais diminué une richesse"
                  narrator="Abu Hurayra"
                  arabic="مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلَّا عِزًّا وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلَّا رَفَعَهُ اللَّهُ"
                  translation="La sadaqa (aumône) n&apos;a jamais diminué une richesse. Allah n&apos;augmente celui qui pardonne qu&apos;en honneur. Et quiconque s&apos;humilie devant Allah, Allah l&apos;élèvera."
                  source="Sahih Muslim, n°2588"
                  grade="sahih"
                  explanation="Ce hadith contient trois vérités qui contredisent la logique matérialiste : donner ne diminue pas la richesse, pardonner n&apos;affaiblit pas, et l&apos;humilité élève. La promesse que la sadaqa ne diminue pas les biens peut s&apos;entendre de deux façons : soit Allah compense la dépense par une bénédiction accrue, soit la récompense dans l&apos;au-delà dépasse de loin ce qui a été donné. Dans tous les cas, le Prophète ﷺ encourage le croyant à donner sans craindre la pauvreté. Ce hadith est un pilier de la compréhension islamique de l&apos;économie spirituelle."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths montrent que la subsistance en islam ne dépend pas uniquement de l&apos;effort matériel : elle est aussi liée à la qualité de la relation du croyant avec Allah et avec les autres. Pour approfondir le sujet de l&apos;aumône obligatoire, consultez notre article sur les{" "}
                  <Link href="/hadith-zakat-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la zakat en islam
                  </Link>.
                </p>
              </section>

              {/* ============================================== */}
              {/* SECTION : La vraie richesse est celle de l'âme */}
              {/* ============================================== */}
              <section id="richesse-ame" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La vraie richesse est la richesse de l&apos;âme
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si l&apos;islam encourage le travail et la recherche du rizq licite, il met en garde contre l&apos;attachement excessif aux biens matériels. Le Prophète ﷺ a redéfini la richesse véritable comme un état intérieur — le contentement (<em>qana&apos;a</em>) — plutôt qu&apos;une accumulation de possessions.
                </p>

                <HadithBlock
                  number={12}
                  title="La vraie richesse est la richesse de l&apos;âme"
                  narrator="Abu Hurayra"
                  arabic="لَيْسَ الْغِنَى عَنْ كَثْرَةِ الْعَرَضِ وَلَكِنَّ الْغِنَى غِنَى النَّفْسِ"
                  translation="La richesse ne réside pas dans l&apos;abondance des biens, mais la vraie richesse est la richesse de l&apos;âme."
                  source="Sahih Al-Bukhari, n°6446 — Sahih Muslim, n°1051"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus cités sur la richesse en islam. Le Prophète ﷺ opère un renversement complet de la définition commune de la richesse. L&apos;homme qui possède des millions mais qui reste insatisfait et avide est, en réalité, pauvre. Tandis que celui qui possède peu mais dont l&apos;âme est satisfaite et reconnaissante est véritablement riche. Le mot &laquo; nafs &raquo; (âme, ego) désigne ici le for intérieur du croyant : c&apos;est la sérénité intérieure qui constitue la vraie richesse, non les possessions extérieures."
                />

                <HadithBlock
                  number={13}
                  title="Regardez ceux qui sont en dessous de vous"
                  narrator="Abu Hurayra"
                  arabic="انْظُرُوا إِلَى مَنْ أَسْفَلَ مِنْكُمْ وَلَا تَنْظُرُوا إِلَى مَنْ هُوَ فَوْقَكُمْ فَهُوَ أَجْدَرُ أَنْ لَا تَزْدَرُوا نِعْمَةَ اللَّهِ عَلَيْكُمْ"
                  translation="Regardez ceux qui sont en dessous de vous (en biens matériels) et ne regardez pas ceux qui sont au-dessus de vous. Cela est plus à même de vous empêcher de mépriser les bienfaits d&apos;Allah sur vous."
                  source="Sahih Muslim, n°2963"
                  grade="sahih"
                  explanation="Ce hadith offre une méthode pratique pour cultiver le contentement. La comparaison vers le haut engendre l&apos;envie et l&apos;insatisfaction, tandis que la comparaison vers le bas engendre la gratitude. Le Prophète ﷺ met en garde contre le mépris des bienfaits d&apos;Allah — une forme d&apos;ingratitude qui peut mener à leur retrait. Ce hadith est d&apos;une actualité saisissante à l&apos;ère des réseaux sociaux, où la comparaison constante avec les possessions d&apos;autrui génère frustration et dépression."
                />

                <HadithBlock
                  number={14}
                  title="Le fils d&apos;Adam dit : mon bien, mon bien"
                  narrator="Abdullah ibn ash-Shikhkhir"
                  arabic="يَقُولُ ابْنُ آدَمَ مَالِي مَالِي وَهَلْ لَكَ يَا ابْنَ آدَمَ مِنْ مَالِكَ إِلَّا مَا أَكَلْتَ فَأَفْنَيْتَ أَوْ لَبِسْتَ فَأَبْلَيْتَ أَوْ تَصَدَّقْتَ فَأَمْضَيْتَ"
                  translation="Le fils d&apos;Adam dit : mon bien, mon bien ! Or, qu&apos;as-tu de tes biens, ô fils d&apos;Adam, si ce n&apos;est ce que tu as mangé et consommé, ce que tu as porté et usé, ou ce que tu as donné en aumône et fait avancer (pour l&apos;au-delà) ?"
                  source="Sahih Muslim, n°2958"
                  grade="sahih"
                  explanation="Ce hadith remet en perspective la possession matérielle. Le Prophète ﷺ pose une question rhétorique puissante : de toute ta richesse, que gardes-tu réellement ? Seulement trois choses : ce que tu as consommé (qui est fini), ce que tu as porté (qui est usé) et ce que tu as donné en sadaqa (qui est investi pour l&apos;éternité). Seule la dernière catégorie — la sadaqa — a une valeur permanente. Ce hadith enseigne que la véritable épargne est celle qui est &laquo; déposée &raquo; auprès d&apos;Allah par la générosité."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le rizq et la richesse
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur le rizq et la richesse. Leurs explications permettent de mieux saisir la portée spirituelle et pratique de ces enseignements prophétiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le tawakkul ne consiste pas à abandonner les causes, mais à ne pas s&apos;appuyer sur elles. Celui qui abandonne les causes est un négligent, et celui qui s&apos;appuie sur elles est un associateur dans sa confiance. Le vrai mutawakkil prend les causes avec son corps et s&apos;en remet à Allah avec son cœur.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Madarij as-Salikin</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith &laquo; la vraie richesse est la richesse de l&apos;âme &raquo; signifie que celui dont l&apos;âme est riche se contente de ce qu&apos;il a et ne convoite pas ce que possèdent les autres. Cette richesse est la tranquillité du cœur et sa satisfaction du décret d&apos;Allah. C&apos;est le plus haut degré de la richesse, car le riche insatisfait est en réalité pauvre.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le rizq est de deux sortes : un rizq qui te cherche et qui viendra à toi même si tu ne le poursuis pas, et un rizq que tu dois chercher. Mais le rizq que tu cherches ne doit jamais te pousser à désobéir à Allah, car ce qu&apos;il y a auprès d&apos;Allah ne s&apos;obtient que par Son obéissance.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Rajab al-Hanbali, <em>Jami&apos; al-&apos;Ulum wal-Hikam</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que les hadiths sur le rizq ne sont pas de simples recommandations morales : ils constituent un cadre complet qui articule la croyance au destin (<em>qadar</em>), l&apos;effort personnel (<em>kasb</em>), la confiance en Allah (<em>tawakkul</em>) et le contentement (<em>qana&apos;a</em>). Les savants rappellent que ce cadre s&apos;applique à toutes les époques et à toutes les situations économiques.
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
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour la vie quotidienne du musulman :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Croire que le rizq est garanti par Allah
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le rizq de chaque être est écrit avant sa naissance. Cette certitude libère le croyant de l&apos;anxiété et l&apos;empêche de recourir au gain illicite par peur de manquer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Travailler activement tout en s&apos;en remettant à Allah
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le tawakkul est l&apos;effort accompagné de la confiance en Allah, non la passivité. Comme les oiseaux, le croyant doit sortir chercher sa subsistance chaque jour.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Privilégier le gain licite (halal) en toute circonstance
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a enseigné que chaque âme recevra l&apos;intégralité de son rizq. Il n&apos;y a donc aucune raison de recourir à des moyens illicites : le halal est suffisant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Maintenir les liens de parenté pour élargir le rizq
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a établi un lien direct entre le maintien des liens familiaux et l&apos;augmentation de la subsistance et de la durée de vie.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Cultiver la gratitude et le contentement
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La vraie richesse est la richesse de l&apos;âme. Regarder ceux qui ont moins que soi engendre la gratitude, tandis que la comparaison vers le haut engendre l&apos;envie.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Donner en sadaqa sans craindre la diminution
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La sadaqa n&apos;a jamais diminué une richesse. Donner dans le chemin d&apos;Allah est le seul investissement dont le rendement est éternel.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      7
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Multiplier l&apos;istighfar et les invocations pour le rizq
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La demande de pardon et les du&apos;as prophétiques sont des causes spirituelles d&apos;augmentation de la subsistance, confirmées par le Coran et la Sunna.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur le rizq dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur la sadaqa et la charité en islam"
                  description="Découvrez les hadiths authentiques sur l&apos;aumône, ses mérites et ses formes multiples selon la Sunna."
                  href="/hadith-sadaqa-charite-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la zakat en islam"
                  description="Les enseignements prophétiques sur le troisième pilier de l&apos;islam : conditions, bénéficiaires et mérites de la zakat."
                  href="/hadith-zakat-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la patience et les épreuves en islam"
                  description="Les paroles du Prophète ﷺ sur la patience face aux difficultés, aux maladies et aux pertes."
                  href="/hadith-patience-epreuves-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadith du jour : le Prophète Muhammad ﷺ"
                  description="Retrouvez chaque jour un hadith authentique avec son explication détaillée."
                  href="/hadith-du-jour"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
