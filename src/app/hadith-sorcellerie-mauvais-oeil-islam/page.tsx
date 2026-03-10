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
    "Hadiths sur la sorcellerie, le mauvais œil et la roqya en islam",
  description:
    "Découvrez les hadiths authentiques sur la sorcellerie (sihr), le mauvais œil (al-&apos;ayn) et la roqya en islam. Texte arabe, traduction française et explications des savants.",
  openGraph: {
    title:
      "Hadiths sur la sorcellerie, le mauvais œil et la roqya en islam",
    description:
      "Les hadiths authentiques sur la sorcellerie, le mauvais œil et la roqya : texte arabe, traduction, grade et explications détaillées selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-sorcellerie-mauvais-oeil-islam",
    images: [
      {
        url: "/images/dome-mosquee-croissant-lune-islam-architecture.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-sorcellerie-mauvais-oeil-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique" },
  { id: "mauvais-oeil", label: "Le mauvais œil (al-&apos;ayn)" },
  { id: "sorcellerie", label: "La sorcellerie (sihr) dans les hadiths" },
  { id: "roqya", label: "La roqya légitime" },
  { id: "interdit", label: "Ce qui est interdit" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Le mauvais œil existe-t-il vraiment en islam ?",
    answer:
      "Oui, le mauvais œil (al-\u2019ayn) est une réalité confirmée par le Prophète \u2018alayhi salatu wa salam. Il a dit : \u00ab Le mauvais œil est une réalité \u00bb (Bukhari 5740, Muslim 2187). Ibn Abbas rapporte également que le Prophète a ordonné la roqya contre le mauvais œil. Les savants sont unanimes sur sa réalité, tout en rappelant que seul Allah détient le pouvoir de nuire et de guérir.",
  },
  {
    question:
      "Quelle est la différence entre la roqya légitime et la sorcellerie ?",
    answer:
      "La roqya légitime (char\u2019iyya) consiste à réciter le Coran, les invocations prophétiques et les noms d\u2019Allah pour demander la guérison à Allah seul. La sorcellerie (sihr), en revanche, fait appel aux djinns ou à des forces occultes et constitue un acte de mécréance (kufr). La roqya se pratique en langue arabe compréhensible, sans amulettes ni talismans, tandis que la sorcellerie implique des rituels interdits et des paroles incompréhensibles.",
  },
  {
    question:
      "Quelles sourates réciter pour se protéger de la sorcellerie et du mauvais œil ?",
    answer:
      "Les sourates les plus recommandées sont Al-Fatiha, Ayat al-Kursi (Al-Baqara 2:255), les deux derniers versets de sourate Al-Baqara, et les trois dernières sourates du Coran (Al-Ikhlas, Al-Falaq, An-Nas). Le Prophète récitait les mu\u2019awwidhatayn (Al-Falaq et An-Nas) chaque soir avant de dormir et soufflait dans ses mains, comme le rapporte Aisha (Bukhari 5017).",
  },
  {
    question:
      "Porter des amulettes ou des talismans est-il permis en islam ?",
    answer:
      "Non, porter des amulettes (tama\u2019im) contenant autre chose que le Coran est interdit selon la majorité des savants. Le Prophète a dit : \u00ab Quiconque porte une amulette a commis du shirk \u00bb (Ahmad 17422). Même les amulettes coraniques font l\u2019objet d\u2019un désaccord : certains compagnons les autorisaient, mais la majorité des savants les déconseillent par précaution afin de fermer la porte au shirk.",
  },
  {
    question:
      "Comment se protéger du mauvais œil au quotidien ?",
    answer:
      "Le Prophète a enseigné plusieurs moyens de protection : réciter les adhkar du matin et du soir, dire \u00ab Ma sha Allah, la quwwata illa billah \u00bb devant ce qui plaît, réciter les mu\u2019awwidhatayn avant de dormir, faire la roqya sur soi-même et sur ses enfants, et placer sa confiance en Allah (tawakkul). Il est aussi recommandé de réciter sourate Al-Baqara régulièrement dans la maison.",
  },
  {
    question:
      "La sorcellerie est-elle un péché majeur en islam ?",
    answer:
      "Oui, la sorcellerie fait partie des sept péchés destructeurs (al-mubiqat) mentionnés par le Prophète aux côtés du shirk et du meurtre (Bukhari 2766, Muslim 89). Pratiquer la sorcellerie est un acte de mécréance car elle implique le recours aux djinns et aux forces occultes. Le sorcier encourt la peine la plus sévère selon les quatre écoles de jurisprudence.",
  },
];

export default function HadithSorcellerieMauvaisOeilIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-sorcellerie-mauvais-oeil-islam/#article",
        headline:
          "Hadiths sur la sorcellerie, le mauvais œil et la roqya en islam",
        description:
          "Découvrez les hadiths authentiques sur la sorcellerie (sihr), le mauvais œil (al-'ayn) et la roqya en islam.",
        image: "/images/dome-mosquee-croissant-lune-islam-architecture.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-sorcellerie-mauvais-oeil-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-sorcellerie-mauvais-oeil-islam/#breadcrumb",
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
            name: "Sorcellerie et mauvais œil",
            item: "https://www.islamreligion.fr/hadith-sorcellerie-mauvais-oeil-islam",
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
          title="Hadiths sur la sorcellerie, le mauvais œil et la roqya en islam"
          subtitle="Les enseignements prophétiques sur le mauvais œil, la sorcellerie, la roqya légitime et les moyens de protection selon la Sunna authentique."
          imageSrc="/images/dome-mosquee-croissant-lune-islam-architecture.jpg"
          imageAlt="Hadiths sur la sorcellerie, le mauvais œil et la roqya en islam"
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
                  Sorcellerie et mauvais œil
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
                    Le mauvais œil (<em>al-&apos;ayn</em>) est une réalité confirmée par le Prophète ﷺ et attestée par de nombreux hadiths authentiques.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La sorcellerie (<em>sihr</em>) fait partie des sept péchés destructeurs et constitue un acte de mécréance (<em>kufr</em>).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La roqya légitime (<em>char&apos;iyya</em>) est le seul moyen autorisé pour se soigner : récitation du Coran et des invocations prophétiques.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le port d&apos;amulettes, de talismans ou le recours aux charlatans est formellement interdit par la Sunna.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique : sourates de protection
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths, il faut rappeler que la protection contre la sorcellerie et le mauvais œil est d&apos;abord une thématique coranique. Allah a révélé des sourates spécifiquement destinées à protéger le croyant contre le mal des envieux et des sorciers. Le Prophète ﷺ récitait ces sourates chaque jour et les recommandait à sa communauté comme un bouclier spirituel.
                </p>

                <HadithCard
                  arabic="قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ"
                  text="Dis : je cherche refuge auprès du Seigneur de l&apos;aube naissante, contre le mal de ce qu&apos;Il a créé, contre le mal de l&apos;obscurité quand elle s&apos;approfondit, contre le mal de celles qui soufflent sur les nœuds, et contre le mal de l&apos;envieux quand il envie."
                  source="Coran, sourate Al-Falaq (113:1-5)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Sourate Al-Falaq mentionne explicitement deux maux : les <em>naffathat fi al-&apos;uqad</em> (celles qui soufflent sur les nœuds), une référence directe à la sorcellerie, et le <em>hasid</em> (l&apos;envieux), source du mauvais œil. Les exégètes expliquent que cette sourate a été révélée lorsque le Prophète ﷺ fut lui-même victime de sorcellerie de la part de Labid ibn al-A&apos;sam, comme le rapportent les recueils authentiques.
                </p>

                <HadithCard
                  arabic="قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ"
                  text="Dis : je cherche refuge auprès du Seigneur des hommes, le Souverain des hommes, le Dieu des hommes, contre le mal du tentateur furtif, qui souffle le mal dans les poitrines des hommes, qu&apos;il soit parmi les djinns ou parmi les hommes."
                  source="Coran, sourate An-Nas (114:1-6)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Sourate An-Nas complète la protection en mentionnant le <em>waswas</em> (le tentateur), qu&apos;il soit djinn ou humain. Les deux sourates, appelées <em>al-mu&apos;awwidhatayn</em> (les deux protectrices), forment ensemble un rempart complet contre les maux spirituels. Le Prophète ﷺ a enseigné qu&apos;il n&apos;y a pas de meilleure protection que ces deux sourates, comme nous le verrons dans les hadiths suivants.
                </p>
              </section>

              {/* ====================================== */}
              {/* SECTION : Le mauvais oeil              */}
              {/* ====================================== */}
              <section id="mauvais-oeil" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le mauvais œil (al-&apos;ayn) est une réalité
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le mauvais œil n&apos;est ni une superstition ni une croyance populaire : c&apos;est une réalité confirmée par le Prophète ﷺ à travers plusieurs hadiths authentiques. Il désigne l&apos;effet nocif produit par le regard d&apos;une personne envieuse ou admiratrice qui ne mentionne pas le nom d&apos;Allah. Les hadiths suivants établissent clairement sa réalité et les moyens de s&apos;en prémunir.
                </p>

                <HadithBlock
                  number={1}
                  title="Le mauvais œil est une réalité"
                  narrator="Ibn &apos;Abbas"
                  arabic="الْعَيْنُ حَقٌّ وَلَوْ كَانَ شَيْءٌ سَابَقَ الْقَدَرَ سَبَقَتْهُ الْعَيْنُ وَإِذَا اسْتُغْسِلْتُمْ فَاغْسِلُوا"
                  translation="Le mauvais œil est une réalité. S&apos;il y avait une chose qui pouvait devancer le destin, ce serait le mauvais œil. Et lorsqu&apos;on vous demande de vous laver (pour annuler l&apos;effet du mauvais œil), alors lavez-vous."
                  source="Sahih Muslim, n°2188"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus explicites sur la réalité du mauvais œil. Le Prophète ﷺ utilise une hyperbole puissante : si quelque chose pouvait dépasser le qadar (le destin d&apos;Allah), ce serait le mauvais œil. Cela montre la gravité de son effet, tout en rappelant que rien ne se produit sans la permission d&apos;Allah. La seconde partie du hadith prescrit un remède : le ghusl (lavage rituel) de celui qui est suspecté d&apos;avoir porté le mauvais œil, dont l&apos;eau est ensuite versée sur la personne atteinte."
                />

                <HadithBlock
                  number={2}
                  title="Le mauvais œil fait entrer l&apos;homme dans la tombe"
                  narrator="Jabir ibn &apos;Abdillah"
                  arabic="أَكْثَرُ مَنْ يَمُوتُ مِنْ أُمَّتِي بَعْدَ قَضَاءِ اللَّهِ وَقَدَرِهِ بِالْعَيْنِ"
                  translation="La plupart de ceux qui meurent dans ma communauté, après le décret d&apos;Allah et Son destin, meurent à cause du mauvais œil."
                  source="Musnad al-Bazzar — authentifié par Al-Albani dans Sahih al-Jami&apos;, n°1206"
                  grade="hasan"
                  explanation="Ce hadith souligne la fréquence et la dangerosité du mauvais œil. Le Prophète ﷺ précise &laquo; après le décret d&apos;Allah &raquo; pour rappeler que tout se produit par la volonté divine, mais que le mauvais œil est l&apos;une des causes les plus courantes de maladie et de mort dans la communauté. Les savants y voient un appel à la vigilance et à la pratique régulière des adhkar de protection."
                />

                <HadithBlock
                  number={3}
                  title="Le Prophète ﷺ ordonne la roqya contre le mauvais œil"
                  narrator="Aisha"
                  arabic="أَمَرَنِي رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَوْ أَمَرَ أَنْ يُسْتَرْقَى مِنَ الْعَيْنِ"
                  translation="Le Messager d&apos;Allah ﷺ m&apos;a ordonné — ou a ordonné — de pratiquer la roqya contre le mauvais œil."
                  source="Sahih Al-Bukhari, n°5738 — Sahih Muslim, n°2195"
                  grade="sahih"
                  explanation="Ce hadith montre que le Prophète ﷺ ne s&apos;est pas contenté de confirmer l&apos;existence du mauvais œil : il a prescrit un remède concret, la roqya. L&apos;ordre donné à Aisha indique que la roqya n&apos;est pas réservée aux hommes ni aux savants. Chaque musulman peut la pratiquer sur lui-même et sur ses proches, à condition de se limiter aux paroles du Coran et de la Sunna."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths établissent un cadre clair : le mauvais œil est réel, ses effets peuvent être graves, et la roqya est le remède prescrit par le Prophète ﷺ. Il ne s&apos;agit ni de panique ni de paranoïa, mais d&apos;une prise de conscience accompagnée de moyens de protection légitimes. Pour approfondir les invocations de protection, consultez notre article sur les{" "}
                  <Link href="/doua-protection-mauvais-oeil-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    douas de protection contre le mauvais œil
                  </Link>.
                </p>
              </section>

              {/* ====================================== */}
              {/* SECTION : Sorcellerie dans les hadiths */}
              {/* ====================================== */}
              <section id="sorcellerie" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La sorcellerie (sihr) dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La sorcellerie est un péché majeur en islam, classé parmi les sept péchés destructeurs (<em>al-mubiqat</em>). Le Prophète ﷺ a mis en garde contre sa pratique et contre le recours aux sorciers, tout en montrant que la protection réside dans le Coran et les invocations prophétiques. Les hadiths suivants traitent de la gravité de la sorcellerie et de l&apos;épisode où le Prophète ﷺ fut lui-même victime de sihr.
                </p>

                <HadithBlock
                  number={4}
                  title="La sorcellerie parmi les sept péchés destructeurs"
                  narrator="Abu Hurayra"
                  arabic="اجْتَنِبُوا السَّبْعَ الْمُوبِقَاتِ قَالُوا يَا رَسُولَ اللَّهِ وَمَا هُنَّ قَالَ الشِّرْكُ بِاللَّهِ وَالسِّحْرُ..."
                  translation="Évitez les sept péchés destructeurs. Ils dirent : ô Messager d&apos;Allah, quels sont-ils ? Il dit : l&apos;associationnisme (shirk), la sorcellerie (sihr), tuer une âme qu&apos;Allah a rendue sacrée sauf à bon droit, manger l&apos;usure (riba), manger les biens de l&apos;orphelin, fuir le jour du combat, et accuser de fornication les femmes chastes et croyantes."
                  source="Sahih Al-Bukhari, n°2766 — Sahih Muslim, n°89"
                  grade="sahih"
                  explanation="La sorcellerie est mentionnée immédiatement après le shirk, ce qui illustre sa gravité extrême. Les savants expliquent que le sihr implique nécessairement un pacte avec les djinns, ce qui constitue une forme d&apos;associationnisme. Le sorcier attribue à des forces occultes un pouvoir qui n&apos;appartient qu&apos;à Allah. Ce hadith est la base juridique sur laquelle les quatre écoles de jurisprudence s&apos;appuient pour considérer la sorcellerie comme un acte de mécréance majeur."
                />

                <HadithBlock
                  number={5}
                  title="Le Prophète ﷺ ensorcelé par Labid ibn al-A&apos;sam"
                  narrator="Aisha"
                  arabic="سَحَرَ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ رَجُلٌ مِنْ بَنِي زُرَيْقٍ يُقَالُ لَهُ لَبِيدُ بْنُ الْأَعْصَمِ حَتَّى كَانَ رَسُولُ اللَّهِ يُخَيَّلُ إِلَيْهِ أَنَّهُ كَانَ يَفْعَلُ الشَّيْءَ وَمَا فَعَلَهُ"
                  translation="Un homme des Banu Zurayq, nommé Labid ibn al-A&apos;sam, ensorcela le Messager d&apos;Allah ﷺ au point qu&apos;il croyait avoir fait une chose alors qu&apos;il ne l&apos;avait pas faite. Puis Allah l&apos;en guérit, et il dit : Allah m&apos;a guéri. Deux hommes (des anges) sont venus à moi, l&apos;un s&apos;est assis à ma tête et l&apos;autre à mes pieds. L&apos;un a dit : de quoi souffre cet homme ? L&apos;autre a répondu : il est ensorcelé. Il a dit : qui l&apos;a ensorcelé ? Il a répondu : Labid ibn al-A&apos;sam."
                  source="Sahih Al-Bukhari, n°5763 — Sahih Muslim, n°2189"
                  grade="sahih"
                  explanation="Ce hadith rapporte un événement historique majeur : le Prophète ﷺ lui-même fut victime de sorcellerie. Cela prouve que le sihr est réel et peut affecter les meilleurs des hommes. Toutefois, la sorcellerie n&apos;a jamais touché la mission prophétique ni la révélation : elle n&apos;a affecté que certains aspects de sa vie quotidienne. La guérison est venue par la récitation des mu&apos;awwidhatayn (Al-Falaq et An-Nas), selon d&apos;autres narrations. Les savants tirent de cet épisode que la roqya coranique est le remède par excellence contre la sorcellerie."
                />

                <HadithBlock
                  number={6}
                  title="Celui qui va chez un devin ou un sorcier"
                  narrator="Abu Hurayra"
                  arabic="مَنْ أَتَى عَرَّافًا أَوْ كَاهِنًا فَصَدَّقَهُ بِمَا يَقُولُ فَقَدْ كَفَرَ بِمَا أُنْزِلَ عَلَى مُحَمَّدٍ"
                  translation="Quiconque va chez un devin ou un voyant et croit en ce qu&apos;il dit a mécru en ce qui a été révélé à Muhammad ﷺ."
                  source="Sunan Abu Dawud, n°3904 — Musnad Ahmad, n°9532"
                  grade="sahih"
                  explanation="Ce hadith ne concerne pas seulement le sorcier, mais aussi celui qui le consulte. Croire aux paroles d&apos;un devin ou d&apos;un voyant revient à remettre en cause la toute-puissance d&apos;Allah et la vérité du message prophétique. Les savants distinguent deux cas : celui qui consulte un devin par curiosité (dont la prière n&apos;est pas acceptée pendant 40 jours, selon un autre hadith) et celui qui y croit sincèrement (qui tombe dans le kufr). Ce hadith ferme la porte à toute complaisance envers les pratiques occultes."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La position de l&apos;islam est sans ambiguïté : la sorcellerie est réelle, mais elle est absolument interdite. Consulter un sorcier, un voyant ou un charlatan est un péché qui peut atteindre le degré de la mécréance. La seule voie légitime est la roqya par le Coran et la Sunna, comme nous le verrons dans la section suivante. Pour en savoir plus sur la protection en islam, consultez notre article sur la{" "}
                  <Link href="/sorcellerie-islam-protection" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    protection contre la sorcellerie en islam
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez la aqida, le fiqh et les fondements de la protection spirituelle avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Roqya legitime       */}
              {/* ============================== */}
              <section id="roqya" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La roqya légitime : protection et guérison
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La roqya (<em>ruqya char&apos;iyya</em>) est le traitement spirituel prescrit par le Prophète ﷺ. Elle consiste à réciter le Coran, les noms d&apos;Allah et les invocations prophétiques sur le malade ou sur soi-même. Le Prophète ﷺ l&apos;a pratiquée, l&apos;a autorisée et en a fixé les conditions pour la distinguer des pratiques interdites.
                </p>

                <HadithBlock
                  number={7}
                  title="Il n&apos;y a pas de mal dans la roqya tant qu&apos;elle ne contient pas de shirk"
                  narrator="&apos;Awf ibn Malik al-Ashja&apos;i"
                  arabic="كُنَّا نَرْقِي فِي الْجَاهِلِيَّةِ فَقُلْنَا يَا رَسُولَ اللَّهِ كَيْفَ تَرَى فِي ذَلِكَ فَقَالَ اعْرِضُوا عَلَيَّ رُقَاكُمْ لَا بَأْسَ بِالرُّقَى مَا لَمْ يَكُنْ فِيهِ شِرْكٌ"
                  translation="Nous pratiquions la roqya à l&apos;époque de l&apos;ignorance (jahiliyya). Nous avons dit : ô Messager d&apos;Allah, qu&apos;en penses-tu ? Il a dit : montrez-moi vos roqya. Il n&apos;y a pas de mal dans la roqya tant qu&apos;elle ne contient pas de shirk (associationnisme)."
                  source="Sahih Muslim, n°2200"
                  grade="sahih"
                  explanation="Ce hadith pose la règle fondamentale de la roqya légitime : elle est permise à condition de ne contenir aucune forme de shirk. Le Prophète ﷺ n&apos;a pas interdit la roqya de manière absolue : il l&apos;a encadrée. Les savants en déduisent trois conditions : que les paroles soient en arabe compréhensible, qu&apos;elles ne contiennent pas de shirk, et que le praticien et le malade croient que la guérison vient d&apos;Allah seul. Toute roqya qui utilise des symboles, des incantations incompréhensibles ou invoque des djinns est interdite."
                />

                <HadithBlock
                  number={8}
                  title="Le Prophète ﷺ récitait les mu&apos;awwidhatayn chaque nuit"
                  narrator="Aisha"
                  arabic="كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا أَوَى إِلَى فِرَاشِهِ كُلَّ لَيْلَةٍ جَمَعَ كَفَّيْهِ ثُمَّ نَفَثَ فِيهِمَا فَقَرَأَ فِيهِمَا قُلْ هُوَ اللَّهُ أَحَدٌ وَقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ وَقُلْ أَعُوذُ بِرَبِّ النَّاسِ ثُمَّ يَمْسَحُ بِهِمَا مَا اسْتَطَاعَ مِنْ جَسَدِهِ يَبْدَأُ بِهِمَا عَلَى رَأْسِهِ وَوَجْهِهِ وَمَا أَقْبَلَ مِنْ جَسَدِهِ يَفْعَلُ ذَلِكَ ثَلَاثَ مَرَّاتٍ"
                  translation="Le Messager d&apos;Allah ﷺ, chaque nuit lorsqu&apos;il se couchait, joignait ses deux mains, soufflait dedans, puis y récitait : Qul Huwa Allahu Ahad, Qul A&apos;udhu bi Rabb il-Falaq et Qul A&apos;udhu bi Rabb in-Nas. Puis il passait ses mains sur tout ce qu&apos;il pouvait de son corps, en commençant par la tête, le visage et l&apos;avant du corps. Il faisait cela trois fois."
                  source="Sahih Al-Bukhari, n°5017"
                  grade="sahih"
                  explanation="Ce hadith décrit la roqya quotidienne du Prophète ﷺ sur lui-même. Il s&apos;agit d&apos;une pratique préventive, pas uniquement curative. Les trois sourates récitées (Al-Ikhlas, Al-Falaq, An-Nas) forment un rempart contre le shirk, la sorcellerie et le waswas. Le geste de souffler dans les mains puis de les passer sur le corps est une sunna que chaque musulman peut reproduire. Aisha rapporte qu&apos;elle faisait de même pour le Prophète ﷺ lorsqu&apos;il était malade, en utilisant ses propres mains par recherche de la baraka de la main du Prophète."
                />

                <HadithBlock
                  number={9}
                  title="La roqya de Jibril au Prophète ﷺ"
                  narrator="Abu Sa&apos;id al-Khudri"
                  arabic="أَنَّ جِبْرِيلَ أَتَى النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ يَا مُحَمَّدُ اشْتَكَيْتَ فَقَالَ نَعَمْ قَالَ بِاسْمِ اللَّهِ أَرْقِيكَ مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ اللَّهُ يَشْفِيكَ بِاسْمِ اللَّهِ أَرْقِيكَ"
                  translation="Jibril (Gabriel) vint au Prophète ﷺ et dit : ô Muhammad, es-tu souffrant ? Il répondit : oui. Jibril dit : au nom d&apos;Allah, je te fais la roqya contre tout ce qui te nuit, contre le mal de toute âme ou œil envieux. Qu&apos;Allah te guérisse, au nom d&apos;Allah je te fais la roqya."
                  source="Sahih Muslim, n°2186"
                  grade="sahih"
                  explanation="Ce hadith rapporte la roqya pratiquée par Jibril lui-même sur le Prophète ﷺ. Il donne un modèle d&apos;invocation de roqya : commencer par le nom d&apos;Allah, demander la protection contre tout mal, mentionner spécifiquement le mauvais œil, et attribuer la guérison à Allah seul. Les savants utilisent ce hadith pour enseigner la formulation correcte de la roqya. Il montre aussi que le Prophète ﷺ, malgré son rang, avait besoin de la protection d&apos;Allah, ce qui enseigne l&apos;humilité à tout croyant."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La roqya légitime se résume à trois principes : réciter les paroles d&apos;Allah et de Son Messager, croire que la guérison vient d&apos;Allah seul, et ne rien y mélanger de shirk ou de pratiques suspectes. Le musulman n&apos;a pas besoin d&apos;un intermédiaire pour pratiquer la roqya : il peut la faire sur lui-même et sur ses proches. Pour découvrir les invocations de protection quotidiennes, consultez nos articles sur les{" "}
                  <Link href="/doua-contre-sorcellerie-djinns-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    douas contre la sorcellerie et les djinns
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Ce qui est interdit  */}
              {/* ============================== */}
              <section id="interdit" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce qui est interdit : talismans, amulettes et charlatans
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si la roqya légitime est encouragée, le Prophète ﷺ a fermement interdit les pratiques qui relèvent du shirk, même lorsqu&apos;elles sont présentées sous une apparence religieuse. Le port d&apos;amulettes, le recours aux talismans, les fils noués et les pendentifs censés protéger sont autant de pratiques condamnées par la Sunna.
                </p>

                <HadithBlock
                  number={10}
                  title="Quiconque porte une amulette a commis du shirk"
                  narrator="&apos;Uqba ibn &apos;Amir"
                  arabic="مَنْ تَعَلَّقَ تَمِيمَةً فَقَدْ أَشْرَكَ"
                  translation="Quiconque porte une amulette (tamima) a commis du shirk (associationnisme)."
                  source="Musnad Ahmad, n°17422 — authentifié par Al-Albani"
                  grade="sahih"
                  explanation="Ce hadith est catégorique : porter une amulette est un acte de shirk. La tamima désigne tout objet porté dans le but de repousser le mal ou d&apos;attirer le bien, qu&apos;il s&apos;agisse de pierres, de fils, de perles ou de pendentifs contenant des écritures. Les savants distinguent le shirk majeur (attribuer le pouvoir de protection à l&apos;objet lui-même) du shirk mineur (croire que l&apos;objet est une cause de protection sans l&apos;attribuer à Allah). Dans les deux cas, la pratique est interdite. Même les amulettes contenant des versets coraniques sont déconseillées par la majorité des savants, par précaution."
                />

                <HadithBlock
                  number={11}
                  title="Les fils et les anneaux comme protection sont du shirk"
                  narrator="Hudhayfa ibn al-Yaman"
                  arabic="رَأَى النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ رَجُلًا فِي يَدِهِ حَلْقَةٌ مِنْ صُفْرٍ فَقَالَ مَا هَذِهِ قَالَ مِنَ الْوَاهِنَةِ فَقَالَ انْزِعْهَا فَإِنَّهَا لَا تَزِيدُكَ إِلَّا وَهْنًا فَإِنَّكَ لَوْ مُتَّ وَهِيَ عَلَيْكَ مَا أَفْلَحْتَ أَبَدًا"
                  translation="Le Prophète ﷺ vit un homme portant un anneau de laiton à la main. Il dit : qu&apos;est-ce que ceci ? L&apos;homme répondit : c&apos;est contre la wahina (une douleur). Le Prophète dit : enlève-le, car il ne t&apos;ajoutera que de la faiblesse. Si tu mourais en le portant, tu ne réussirais jamais."
                  source="Musnad Ahmad, n°18814 — Sunan Ibn Majah, n°3531"
                  grade="hasan"
                  explanation="Ce hadith montre le Prophète ﷺ en train de corriger une pratique courante chez les Arabes : porter des anneaux ou des bracelets comme remèdes. L&apos;avertissement est sévère : non seulement l&apos;objet n&apos;apporte aucune guérison, mais il ajoute de la faiblesse, car il détourne la confiance de la personne d&apos;Allah vers un objet inerte. La menace finale — &laquo; tu ne réussirais jamais &raquo; — illustre la gravité de mourir en portant un objet de shirk. Ce hadith est la base de l&apos;interdiction de tous les bracelets, fils et bijoux portés dans un but de protection."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La frontière entre la roqya légitime et les pratiques interdites est claire : tout ce qui détourne la confiance d&apos;Allah vers un objet, un être humain ou une force occulte relève du shirk. Le musulman place sa confiance (<em>tawakkul</em>) en Allah seul et utilise les moyens qu&apos;Il a autorisés : le Coran, les invocations et la médecine. Pour approfondir le sujet de la médecine prophétique, consultez notre article sur les{" "}
                  <Link href="/hadith-medecine-prophetique-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la médecine prophétique en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur la sorcellerie et la roqya
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont consacré des chapitres entiers de leurs ouvrages à la question de la sorcellerie, du mauvais œil et de la roqya. Leurs commentaires éclairent les hadiths et fixent les règles de la pratique légitime.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La sorcellerie est réelle, elle a une existence concrète. Elle peut rendre malade, tuer, séparer les époux et altérer la raison. Cependant, elle ne se produit que par la permission d&apos;Allah. Le remède se trouve dans le Coran et les invocations authentiques, et aucun sorcier ne peut surpasser la protection divine.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La roqya est de trois types : celle qui est permise, celle qui est obligatoire et celle qui est interdite. Celle qui est permise est la récitation du Coran et des invocations prophétiques. Celle qui est obligatoire est le cas où une personne peut sauver un musulman par la roqya et ne le fait pas. Celle qui est interdite est ce qui contient du shirk, des incantations en langue inconnue ou le recours aux djinns.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Taymiyya, <em>Majmu&apos; al-Fatawa</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le mauvais œil est l&apos;une des plus grandes épreuves de cette communauté. Sa cause est l&apos;admiration non accompagnée de la mention d&apos;Allah. Le remède est de dire &laquo; Ma sha Allah, la quwwata illa billah &raquo; et de pratiquer la roqya. Quant à celui qui est reconnu pour porter le mauvais œil, il doit être éloigné et on peut l&apos;obliger à faire le ghusl dont l&apos;eau sera versée sur la personne atteinte.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Zad al-Ma&apos;ad</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires de savants montrent que la question de la sorcellerie et du mauvais œil est traitée avec rigueur dans la tradition islamique. Les savants ne nient pas leur existence, mais encadrent strictement les moyens de s&apos;en protéger et de s&apos;en soigner. Toute pratique qui sort du cadre coranique et prophétique est rejetée, quel que soit l&apos;habit religieux dont elle se pare.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Lecons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques pour le musulman
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés permet de dégager des leçons concrètes pour la vie spirituelle du musulman face à la sorcellerie et au mauvais œil :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Réciter les adhkar matin et soir sans interruption
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les invocations quotidiennes constituent le premier rempart contre le mauvais œil et la sorcellerie. Les mu&apos;awwidhatayn, Ayat al-Kursi et sourate Al-Ikhlas récitées trois fois chaque matin et chaque soir protègent le croyant par la permission d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Pratiquer la roqya sur soi-même et ses enfants
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Pas besoin d&apos;un intermédiaire ni d&apos;un &laquo; raqui &raquo; professionnel. Le Prophète ﷺ faisait la roqya lui-même chaque nuit. Réciter le Coran, souffler dans ses mains et les passer sur le corps est une sunna accessible à tous.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Dire &laquo; Ma sha Allah &raquo; devant ce qui plaît
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Mentionner le nom d&apos;Allah devant ce qui suscite l&apos;admiration protège de porter involontairement le mauvais œil. C&apos;est une adab (bienséance) prophétique qui rappelle que tout bienfait vient d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne jamais consulter de sorcier, voyant ou charlatan
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Même en cas de souffrance, le recours à un sorcier ou un devin est un péché majeur qui peut atteindre le degré de la mécréance. Le musulman se tourne vers Allah, le Coran et la médecine licite.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se débarrasser de toute amulette et talisman
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Bracelets, fils, pendentifs, pierres, anneaux portés dans un but de protection : tout cela doit être retiré. La confiance ne se place qu&apos;en Allah, et ces objets n&apos;apportent que faiblesse et éloignement de la protection divine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Réciter sourate Al-Baqara régulièrement à la maison
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a informé que les shayatins fuient la maison où sourate Al-Baqara est récitée. Maintenir une récitation régulière du Coran dans le foyer est un moyen de purification spirituelle du lieu de vie.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur la protection spirituelle dans leur langue originale et renforcez votre pratique de la roqya."
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
                  title="Protection contre la sorcellerie en islam"
                  description="Les moyens de protection, les invocations et les sourates à réciter pour se prémunir contre la sorcellerie."
                  href="/sorcellerie-islam-protection"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la médecine prophétique en islam"
                  description="Les remèdes prophétiques : miel, graine de nigelle, hijama, roqya et alimentation saine selon la Sunna."
                  href="/hadith-medecine-prophetique-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
