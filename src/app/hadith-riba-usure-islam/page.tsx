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
    "Hadiths sur le riba (usure) en islam : interdiction, gravité et alternatives",
  description:
    "Découvrez les hadiths authentiques sur le riba (usure) en islam : interdiction absolue, gravité du péché, malédiction sur toutes les parties, alternatives halal. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths sur le riba (usure) en islam : interdiction, gravité et alternatives",
    description:
      "Les hadiths authentiques sur le riba en islam : prohibition, 70 degrés de gravité, malédiction des parties impliquées et alternatives de financement halal.",
    url: "https://www.islamreligion.fr/hadith-riba-usure-islam",
    images: [
      {
        url: "/images/islam-science-savoir-connaissance-livre.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-riba-usure-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique du riba" },
  { id: "interdiction-absolue", label: "L\u2019interdiction absolue du riba" },
  { id: "gravite-peche", label: "La gravité du péché de riba" },
  { id: "malediction-parties", label: "La malédiction sur toutes les parties" },
  { id: "types-riba", label: "Riba al-fadl et riba an-nasiah" },
  { id: "riba-fin-temps", label: "Le riba à la fin des temps" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "alternatives", label: "Alternatives halal au riba" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Qu\u2019est-ce que le riba en islam et pourquoi est-il interdit ?",
    answer:
      "Le riba d\u00e9signe tout surplus injustifi\u00e9 dans un \u00e9change commercial ou un pr\u00eat. Il est interdit car il cr\u00e9e une injustice entre les parties, enrichit le pr\u00eateur sans effort l\u00e9gitime et appauvrit l\u2019emprunteur. Le Coran l\u2019interdit de mani\u00e8re absolue (sourate Al-Baqara, 2:275-279) et le Proph\u00e8te \uFDFA a maudit toutes les parties impliqu\u00e9es dans une transaction usuraire (Muslim 1598).",
  },
  {
    question:
      "Le riba est-il vraiment pire que la fornication (zina) selon les hadiths ?",
    answer:
      "Oui, un hadith rapport\u00e9 par Ibn Majah (n\u00b02274) affirme qu\u2019un dirham de riba consomm\u00e9 en connaissance de cause est pire que trente-six fois la fornication. Cette comparaison souligne la gravit\u00e9 exceptionnelle du riba dans la hi\u00e9rarchie des p\u00e9ch\u00e9s en islam, car il touche non seulement l\u2019individu mais d\u00e9stabilise l\u2019\u00e9conomie et la soci\u00e9t\u00e9 tout enti\u00e8re.",
  },
  {
    question:
      "Quels sont les types de riba mentionn\u00e9s dans les hadiths ?",
    answer:
      "Les savants distinguent deux types principaux : le riba an-nasiah (riba du d\u00e9lai), qui consiste \u00e0 augmenter le montant d\u00fb en raison d\u2019un report de paiement, et le riba al-fadl (riba de l\u2019exc\u00e9dent), qui consiste \u00e0 \u00e9changer des biens de m\u00eame nature avec un surplus. Le hadith des six cat\u00e9gories (Muslim 1587) pr\u00e9cise les r\u00e8gles d\u2019\u00e9change pour l\u2019or, l\u2019argent, le bl\u00e9, l\u2019orge, les dattes et le sel.",
  },
  {
    question:
      "Les int\u00e9r\u00eats bancaires modernes sont-ils consid\u00e9r\u00e9s comme du riba ?",
    answer:
      "La majorit\u00e9 \u00e9crasante des savants contemporains, incluant l\u2019Acad\u00e9mie islamique de jurisprudence (Majma\u2019 al-Fiqh), consid\u00e8rent que les int\u00e9r\u00eats bancaires conventionnels constituent du riba interdit. Le m\u00e9canisme est identique au riba an-nasiah : un surplus fix\u00e9 \u00e0 l\u2019avance en contrepartie d\u2019un d\u00e9lai de remboursement, ind\u00e9pendamment du r\u00e9sultat \u00e9conomique de l\u2019emprunteur.",
  },
  {
    question:
      "Quelles sont les alternatives halal au pr\u00eat avec int\u00e9r\u00eats ?",
    answer:
      "L\u2019islam propose plusieurs alternatives : la murabaha (vente avec marge b\u00e9n\u00e9ficiaire d\u00e9clar\u00e9e), la musharaka (partenariat avec partage des profits et pertes), la moudaraba (commandite islamique), l\u2019ijara (cr\u00e9dit-bail islamique) et le qard hasan (pr\u00eat sans int\u00e9r\u00eat). Ces instruments sont propos\u00e9s par les banques islamiques et reposent sur le principe du partage du risque.",
  },
  {
    question:
      "Le hadith sur les 70 degr\u00e9s de riba est-il authentique ?",
    answer:
      "Le hadith rapport\u00e9 par Ibn Majah (n\u00b02275) mentionne que le riba comporte plus de soixante-dix degr\u00e9s de gravit\u00e9. Certains muhaddithun le classent comme hasan, d\u2019autres comme sahih lorsqu\u2019il est renforc\u00e9 par d\u2019autres cha\u00eenes de transmission. L\u2019imam Ibn Hajar et d\u2019autres savants l\u2019ont utilis\u00e9 comme preuve de la gravit\u00e9 du riba.",
  },
  {
    question:
      "Pourquoi le Proph\u00e8te a-t-il maudit aussi le t\u00e9moin et le scribe du riba ?",
    answer:
      "Le hadith de Jabir (Muslim 1598) mentionne la mal\u00e9diction sur celui qui consomme le riba, celui qui le donne, le scribe et les deux t\u00e9moins. Cela montre que l\u2019islam interdit toute forme de participation ou de complicit\u00e9 dans les transactions usuraires. Chacun est responsable de ne pas faciliter le p\u00e9ch\u00e9, m\u00eame indirectement.",
  },
  {
    question:
      "Le riba sera-t-il r\u00e9pandu \u00e0 la fin des temps selon les hadiths ?",
    answer:
      "Oui, plusieurs hadiths annoncent que le riba se r\u00e9pandra de mani\u00e8re g\u00e9n\u00e9ralis\u00e9e \u00e0 la fin des temps, au point que m\u00eame celui qui essaie de l\u2019\u00e9viter sera touch\u00e9 par sa poussi\u00e8re (Abu Dawud 3331, Nasa\u2019i 4455). Le Proph\u00e8te \uFDFA a d\u00e9crit cela comme un signe de la fin des temps et une \u00e9preuve pour la communaut\u00e9 musulmane.",
  },
];

export default function HadithRibaUsureIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-riba-usure-islam/#article",
        headline:
          "Hadiths sur le riba (usure) en islam : interdiction, gravité et alternatives",
        description:
          "Découvrez les hadiths authentiques sur le riba (usure) en islam : interdiction absolue, gravité du péché, malédiction des parties et alternatives halal.",
        image: "/images/islam-science-savoir-connaissance-livre.jpg",
        datePublished: "2026-04-24",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-riba-usure-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-riba-usure-islam/#breadcrumb",
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
            name: "Hadiths sur le riba (usure)",
            item: "https://www.islamreligion.fr/hadith-riba-usure-islam",
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
          title="Hadiths sur le riba (usure) en islam"
          subtitle="Les enseignements prophétiques sur l&apos;interdiction absolue de l&apos;usure, la gravité de ce péché, la malédiction sur toutes les parties impliquées et les alternatives halal selon la Sunna authentique."
          imageSrc="/images/islam-science-savoir-connaissance-livre.jpg"
          imageAlt="Hadiths sur le riba et l&apos;usure en islam, enseignements prophétiques"
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
                  Hadiths sur le riba (usure)
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
                    Le riba est interdit de manière absolue dans le Coran et la Sunna. Allah a déclaré la guerre à ceux qui le pratiquent.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ a maudit non seulement celui qui consomme le riba, mais aussi celui qui le donne, le scribe et les témoins.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Un dirham de riba est considéré comme plus grave que trente-six fois la fornication selon un hadith du Prophète ﷺ.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    L&apos;islam propose des alternatives de financement halal fondées sur le partage du risque et la justice économique.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique de l&apos;interdiction du riba
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths, il est essentiel de rappeler que l&apos;interdiction du riba est d&apos;abord coranique. Allah a interdit l&apos;usure de manière progressive, puis de façon absolue et définitive dans la sourate Al-Baqara. Le Coran oppose le riba au commerce licite et à la zakât, établissant que la richesse légitime provient de l&apos;effort et du partage, non de l&apos;exploitation du besoin d&apos;autrui.
                </p>

                <HadithCard
                  arabic="الَّذِينَ يَأْكُلُونَ الرِّبَا لَا يَقُومُونَ إِلَّا كَمَا يَقُومُ الَّذِي يَتَخَبَّطُهُ الشَّيْطَانُ مِنَ الْمَسِّ ذَٰلِكَ بِأَنَّهُمْ قَالُوا إِنَّمَا الْبَيْعُ مِثْلُ الرِّبَا وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا"
                  text="Ceux qui mangent [pratiquent] le riba ne se tiennent (au Jour du Jugement) que comme se tient celui que le toucher de Shaytan a bouleversé. Cela, parce qu&apos;ils disent : &laquo; Le commerce est tout à fait comme le riba &raquo;. Alors qu&apos;Allah a rendu licite le commerce, et illicite le riba."
                  source="Coran, sourate Al-Baqara (2:275)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondamental réfute l&apos;argument de ceux qui assimilent le riba au commerce. Allah établit une distinction nette : le commerce implique un risque, un effort et un échange réel de biens ou de services, tandis que le riba garantit un gain sans risque au prêteur, au détriment de l&apos;emprunteur. Les savants soulignent que la description du consommateur de riba &laquo;&nbsp;bouleversé par le toucher de Shaytan&nbsp;&raquo; illustre le châtiment réservé à cette catégorie de pécheurs au Jour du Jugement.
                </p>

                <HadithCard
                  arabic="يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَذَرُوا مَا بَقِيَ مِنَ الرِّبَا إِن كُنتُم مُّؤْمِنِينَ ﴿٢٧٨﴾ فَإِن لَّمْ تَفْعَلُوا فَأْذَنُوا بِحَرْبٍ مِّنَ اللَّهِ وَرَسُولِهِ"
                  text="Ô les croyants ! Craignez Allah et renoncez au reliquat du riba, si vous êtes croyants. Et si vous ne le faites pas, alors recevez l&apos;annonce d&apos;une guerre de la part d&apos;Allah et de Son Messager."
                  source="Coran, sourate Al-Baqara (2:278-279)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces versets contiennent la menace la plus sévère du Coran envers un péché spécifique : une déclaration de guerre de la part d&apos;Allah et de Son Messager. Aucun autre péché ne reçoit un tel avertissement dans le Livre d&apos;Allah. Les savants, dont l&apos;imam Ibn Kathir, ont souligné que cette formulation exceptionnelle témoigne de la gravité extrême du riba dans la hiérarchie des interdits islamiques.
                </p>
              </section>

              {/* ========================================= */}
              {/* SECTION : Interdiction absolue du riba    */}
              {/* ========================================= */}
              <section id="interdiction-absolue" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;interdiction absolue du riba dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a confirmé et renforcé l&apos;interdiction coranique du riba par de nombreux hadiths. Son dernier sermon (Khutbat al-Wada&apos;) a notamment aboli toutes les formes de riba de la période préislamique, établissant une rupture nette avec les pratiques économiques antérieures.
                </p>

                <HadithBlock
                  number={1}
                  title="L&apos;abolition du riba dans le sermon d&apos;adieu"
                  narrator="Jabir ibn Abdillah"
                  arabic="وَرِبَا الْجَاهِلِيَّةِ مَوْضُوعٌ، وَأَوَّلُ رِبًا أَضَعُ رِبَانَا رِبَا عَبَّاسِ بْنِ عَبْدِ الْمُطَّلِبِ فَإِنَّهُ مَوْضُوعٌ كُلُّهُ"
                  translation="Le riba de la jahiliyya (période préislamique) est aboli. Et le premier riba que j&apos;abolis est notre riba, le riba d&apos;Al-Abbas ibn Abd al-Muttalib : il est entièrement aboli."
                  source="Sahih Muslim, n°1218"
                  grade="sahih"
                  explanation="Ce hadith, prononcé lors du sermon d&apos;adieu à Arafat, montre que le Prophète ﷺ a commencé par abolir le riba de sa propre famille (Al-Abbas était son oncle). Ce geste est d&apos;une portée considérable : il démontre que l&apos;interdiction est universelle, sans exception pour les proches du Prophète. Les savants y voient le principe selon lequel la réforme commence par soi-même et ses proches. La mention de &laquo;&nbsp;la jahiliyya&nbsp;&raquo; indique que toutes les dettes usuraires antérieures sont annulées."
                />

                <HadithBlock
                  number={2}
                  title="Allah a interdit le riba"
                  narrator="Abu Hurayra"
                  arabic="اجْتَنِبُوا السَّبْعَ الْمُوبِقَاتِ... وَأَكْلُ الرِّبَا"
                  translation="Évitez les sept péchés destructeurs... (parmi lesquels) la consommation du riba."
                  source="Sahih Al-Bukhari, n°2766 — Sahih Muslim, n°89"
                  grade="sahih"
                  explanation="Dans ce hadith célèbre, le Prophète ﷺ classe le riba parmi les sept péchés les plus destructeurs (al-mubiqat), aux côtés du shirk (associationnisme), de la sorcellerie, du meurtre d&apos;une âme protégée, de la consommation des biens de l&apos;orphelin, de la fuite du champ de bataille et de la calomnie des femmes chastes. Ce classement place le riba au même niveau que les plus grands péchés de l&apos;islam, ce qui souligne la sévérité de cette interdiction."
                />

                <HadithBlock
                  number={3}
                  title="La malédiction divine sur le riba"
                  narrator="Abu Juhayfah"
                  arabic="لَعَنَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ آكِلَ الرِّبَا وَمُوكِلَهُ"
                  translation="Le Messager d&apos;Allah ﷺ a maudit celui qui consomme le riba et celui qui le donne à consommer."
                  source="Sahih Al-Bukhari, n°2086"
                  grade="sahih"
                  explanation="Ce hadith concis mais puissant établit que la malédiction divine ne frappe pas seulement le créancier qui perçoit les intérêts, mais aussi le débiteur qui les paie volontairement. Les savants expliquent que celui qui accepte de payer le riba contribue à normaliser cette pratique et encourage le système usuraire. La malédiction (la&apos;na) est la forme la plus sévère de condamnation prophétique, signifiant l&apos;éloignement de la miséricorde divine."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Gravité du péché     */}
              {/* ============================== */}
              <section id="gravite-peche" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La gravité du péché de riba selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les hadiths suivants illustrent à quel point le riba est considéré comme un péché majeur en islam. Le Prophète ﷺ a utilisé des comparaisons frappantes pour marquer les esprits et dissuader les croyants de s&apos;approcher de l&apos;usure sous quelque forme que ce soit.
                </p>

                <HadithBlock
                  number={4}
                  title="Le riba pire que trente-six fois la fornication"
                  narrator="Abdallah ibn Hanzalah"
                  arabic="دِرْهَمُ رِبَا يَأْكُلُهُ الرَّجُلُ وَهُوَ يَعْلَمُ أَشَدُّ مِنْ سِتٍّ وَثَلَاثِينَ زَنْيَةً"
                  translation="Un dirham de riba qu&apos;un homme consomme en connaissance de cause est pire que trente-six fois la fornication."
                  source="Musnad Ahmad, n°21957 — Sunan Ibn Majah, n°2274"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus percutants sur la gravité du riba. La fornication (zina) est un péché majeur en islam, puni sévèrement. Pourtant, le Prophète ﷺ affirme qu&apos;un seul dirham de riba est pire que trente-six fornications. La condition &laquo;&nbsp;en connaissance de cause&nbsp;&raquo; est importante : elle aggrave le péché par la conscience délibérée de la transgression. Les savants expliquent que le riba est plus grave car il corrompt l&apos;ensemble du système économique et nuit à la société entière."
                />

                <HadithBlock
                  number={5}
                  title="Les soixante-dix degrés de riba"
                  narrator="Abu Hurayra"
                  arabic="الرِّبَا سَبْعُونَ بَابًا أَيْسَرُهَا أَنْ يَنْكِحَ الرَّجُلُ أُمَّهُ"
                  translation="Le riba comporte soixante-dix degrés. Le moindre d&apos;entre eux équivaut à ce qu&apos;un homme commette l&apos;inceste avec sa propre mère."
                  source="Sunan Ibn Majah, n°2275"
                  grade="hasan"
                  explanation="Ce hadith utilise une image extrêmement choquante pour illustrer la gravité du riba. Si le degré le plus bas du riba équivaut à un péché aussi abominable que l&apos;inceste, les degrés supérieurs sont d&apos;une gravité incommensurable. Les savants soulignent que les &laquo;&nbsp;soixante-dix degrés&nbsp;&raquo; désignent les multiples formes et ramifications du riba, du prêt à intérêt simple aux montages financiers complexes. Ce hadith a été authentifié par l&apos;imam Al-Hakim et déclaré bon (hasan) par d&apos;autres muhaddithun."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces comparaisons prophétiques, bien que difficiles à entendre, ont pour objectif de marquer profondément la conscience du croyant. Elles s&apos;inscrivent dans la pédagogie prophétique qui utilise le choc pour dissuader du péché. Pour comprendre la gravité d&apos;autres péchés majeurs évoqués en comparaison, consultez notre article sur les{" "}
                  <Link href="/hadith-fornication-zina-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la fornication (zina) en islam
                  </Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION : Malédiction sur toutes les parties */}
              {/* ============================================ */}
              <section id="malediction-parties" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La malédiction sur toutes les parties impliquées
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam ne se contente pas d&apos;interdire le riba au prêteur : il étend la responsabilité à toutes les personnes qui participent à la transaction usuraire. Cette approche globale vise à tarir les sources du riba en responsabilisant chaque maillon de la chaîne.
                </p>

                <HadithBlock
                  number={6}
                  title="La malédiction des quatre parties du riba"
                  narrator="Jabir ibn Abdillah"
                  arabic="لَعَنَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ آكِلَ الرِّبَا وَمُوكِلَهُ وَكَاتِبَهُ وَشَاهِدَيْهِ وَقَالَ هُمْ سَوَاءٌ"
                  translation="Le Messager d&apos;Allah ﷺ a maudit celui qui consomme le riba, celui qui le donne, le scribe (qui rédige le contrat) et les deux témoins. Et il a dit : ils sont tous égaux (dans le péché)."
                  source="Sahih Muslim, n°1598"
                  grade="sahih"
                  explanation="Ce hadith est fondamental car il élargit la responsabilité du riba à quatre catégories de personnes : le créancier (celui qui consomme le riba), le débiteur (celui qui le paie), le rédacteur du contrat et les témoins. La phrase &laquo;&nbsp;ils sont tous égaux&nbsp;&raquo; signifie qu&apos;ils partagent le même péché. Ce hadith a des implications considérables dans le contexte moderne : tout employé de banque, notaire ou conseiller financier qui facilite sciemment des transactions usuraires est concerné par cet avertissement prophétique."
                />

                <HadithBlock
                  number={7}
                  title="Le riba finit toujours par diminuer"
                  narrator="Ibn Mas&apos;ud"
                  arabic="مَا أَحَدٌ أَكْثَرَ مِنَ الرِّبَا إِلَّا كَانَ عَاقِبَةُ أَمْرِهِ إِلَى قِلَّةٍ"
                  translation="Quiconque multiplie (sa richesse) par le riba verra son affaire aboutir à la diminution."
                  source="Sunan Ibn Majah, n°2279"
                  grade="hasan"
                  explanation="Ce hadith énonce un principe économique et spirituel : la richesse acquise par le riba est privée de la baraka (bénédiction divine). Même si elle semble croître en apparence, elle finira par diminuer, soit par des pertes matérielles, soit par la perte de la tranquillité d&apos;esprit. Les savants y voient une loi divine qui s&apos;oppose à la logique financière conventionnelle. Ce hadith est confirmé par le verset : &laquo;&nbsp;Allah anéantit le riba et fait fructifier les aumônes&nbsp;&raquo; (Coran, 2:276)."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh des transactions commerciales, les règles du halal et du haram et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Types de riba        */}
              {/* ============================== */}
              <section id="types-riba" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Riba al-fadl et riba an-nasiah dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants distinguent deux types principaux de riba à partir des hadiths prophétiques. Le <em>riba an-nasiah</em> (riba du délai) concerne l&apos;ajout d&apos;un surplus en contrepartie d&apos;un report de paiement, comme les intérêts bancaires classiques. Le <em>riba al-fadl</em> (riba de l&apos;excédent) concerne l&apos;échange de biens de même nature avec un surplus, même sans délai.
                </p>

                <HadithBlock
                  number={8}
                  title="Le hadith des six catégories (riba al-fadl)"
                  narrator="Ubadah ibn as-Samit"
                  arabic="الذَّهَبُ بِالذَّهَبِ وَالْفِضَّةُ بِالْفِضَّةِ وَالْبُرُّ بِالْبُرِّ وَالشَّعِيرُ بِالشَّعِيرِ وَالتَّمْرُ بِالتَّمْرِ وَالْمِلْحُ بِالْمِلْحِ مِثْلًا بِمِثْلٍ سَوَاءً بِسَوَاءٍ يَدًا بِيَدٍ فَإِذَا اخْتَلَفَتْ هَذِهِ الْأَصْنَافُ فَبِيعُوا كَيْفَ شِئْتُمْ إِذَا كَانَ يَدًا بِيَدٍ"
                  translation="L&apos;or contre l&apos;or, l&apos;argent contre l&apos;argent, le blé contre le blé, l&apos;orge contre l&apos;orge, les dattes contre les dattes, le sel contre le sel : à quantité égale, de main à main. Si les catégories diffèrent, vendez comme vous le voulez, à condition que ce soit de main à main."
                  source="Sahih Muslim, n°1587"
                  grade="sahih"
                  explanation="Ce hadith est la base juridique du riba al-fadl. Il établit que l&apos;échange de biens de même catégorie doit respecter deux conditions : l&apos;égalité de quantité et la simultanéité de l&apos;échange. Si l&apos;une de ces conditions n&apos;est pas remplie, la transaction est du riba. Les savants ont étendu ces six catégories par analogie (qiyas) à tous les biens monétaires et alimentaires. Ce hadith fonde la théorie monétaire islamique et explique pourquoi l&apos;échange de devises doit être immédiat."
                />

                <HadithBlock
                  number={9}
                  title="Le surplus dans l&apos;échange est du riba"
                  narrator="Abu Sa&apos;id al-Khudri"
                  arabic="لَا تَبِيعُوا الذَّهَبَ بِالذَّهَبِ إِلَّا مِثْلًا بِمِثْلٍ وَلَا تُشِفُّوا بَعْضَهَا عَلَى بَعْضٍ وَلَا تَبِيعُوا الْوَرِقَ بِالْوَرِقِ إِلَّا مِثْلًا بِمِثْلٍ وَلَا تُشِفُّوا بَعْضَهَا عَلَى بَعْضٍ وَلَا تَبِيعُوا مِنْهَا غَائِبًا بِنَاجِزٍ"
                  translation="Ne vendez pas l&apos;or contre l&apos;or sauf à quantité égale, et ne faites pas de surplus de l&apos;un sur l&apos;autre. Ne vendez pas l&apos;argent contre l&apos;argent sauf à quantité égale, et ne faites pas de surplus de l&apos;un sur l&apos;autre. Et ne vendez pas le présent contre l&apos;absent (à terme)."
                  source="Sahih Al-Bukhari, n°2177 — Sahih Muslim, n°1584"
                  grade="sahih"
                  explanation="Ce hadith complète le précédent en insistant sur deux interdictions : le surplus dans l&apos;échange de même nature (riba al-fadl) et la vente à terme d&apos;un bien contre un autre de même nature (riba an-nasiah). La dernière phrase &laquo;&nbsp;ne vendez pas le présent contre l&apos;absent&nbsp;&raquo; interdit de vendre de l&apos;or disponible contre de l&apos;or à livrer plus tard, car le délai ouvre la porte à la spéculation et à l&apos;injustice. Ce principe s&apos;applique aujourd&apos;hui au marché des changes et aux produits dérivés."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths sur les types de riba montrent que l&apos;interdiction ne se limite pas au prêt à intérêt classique. Elle englobe toutes les formes d&apos;échange inéquitable. Pour approfondir les critères du licite et de l&apos;illicite en islam, consultez notre article sur les{" "}
                  <Link href="/halal-haram-criteres" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    critères du halal et du haram en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Riba fin des temps   */}
              {/* ============================== */}
              <section id="riba-fin-temps" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le riba à la fin des temps
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a annoncé que le riba se répandrait de manière généralisée dans les derniers temps, au point de toucher la quasi-totalité des gens. Ces hadiths prophétiques sont considérés par les savants comme des signes de la fin des temps et un avertissement pour la communauté musulmane.
                </p>

                <HadithBlock
                  number={10}
                  title="La poussière du riba touchera tout le monde"
                  narrator="Abu Hurayra"
                  arabic="لَيَأْتِيَنَّ عَلَى النَّاسِ زَمَانٌ لَا يَبْقَى أَحَدٌ إِلَّا أَكَلَ الرِّبَا فَإِنْ لَمْ يَأْكُلْهُ أَصَابَهُ مِنْ بُخَارِهِ"
                  translation="Il viendra un temps où il ne restera personne qui ne consomme le riba. Et celui qui ne le consomme pas sera touché par sa poussière (ses effets)."
                  source="Sunan Abu Dawud, n°3331 — Sunan an-Nasa&apos;i, n°4455"
                  grade="hasan"
                  explanation="Ce hadith prophétique décrit une réalité que beaucoup de musulmans vivent aujourd&apos;hui. Le système financier mondial repose largement sur les intérêts, rendant extrêmement difficile d&apos;éviter totalement le riba. L&apos;expression &laquo;&nbsp;sa poussière&nbsp;&raquo; (bukharuhu) désigne les effets indirects du riba : l&apos;inflation, la hausse des prix, la dette publique, qui touchent même ceux qui n&apos;empruntent pas à intérêt. Les savants y voient une raison supplémentaire de développer la finance islamique comme alternative systémique."
                />

                <HadithBlock
                  number={11}
                  title="Le riba et la fornication comme signes de décadence"
                  narrator="Ibn Mas&apos;ud"
                  arabic="بَيْنَ يَدَيِ السَّاعَةِ يَظْهَرُ الرِّبَا وَالزِّنَا وَالْخَمْرُ"
                  translation="Parmi les signes de l&apos;Heure : l&apos;apparition (généralisée) du riba, de la fornication et de l&apos;alcool."
                  source="Rapporté par At-Tabarani dans Al-Mu&apos;jam al-Kabir"
                  grade="hasan"
                  explanation="Ce hadith place le riba aux côtés de deux autres fléaux majeurs — la fornication et l&apos;alcool — comme signes de la dégradation morale qui précède la fin des temps. Les trois péchés partagent une caractéristique commune : ils sont d&apos;abord rejetés par la société, puis tolérés, puis banalisés, et enfin institutionnalisés. Les savants contemporains observent que cette prophétie se réalise avec le système bancaire mondial, la banalisation des relations illicites et l&apos;industrie de l&apos;alcool."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le riba et la finance moderne
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam, classiques et contemporains, ont abondamment commenté les hadiths sur le riba. Leurs analyses permettent de comprendre comment ces enseignements s&apos;appliquent au contexte économique actuel.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le riba est interdit dans toutes les religions révélées. Son interdiction en islam est la plus stricte et la plus détaillée. Les hadiths sur les six catégories montrent que le Prophète ﷺ a voulu fermer toutes les portes qui mènent au riba, même les plus subtiles.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>I&apos;lam al-Muwaqqi&apos;in</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Les intérêts bancaires conventionnels sont du riba interdit, qu&apos;ils soient appelés intérêts, bénéfices ou commissions. Le changement de nom ne change pas la réalité de la transaction. L&apos;Académie islamique de jurisprudence a confirmé cette position à l&apos;unanimité.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Résolution de l&apos;Académie islamique internationale de jurisprudence (Majma&apos; al-Fiqh al-Islami), 1985
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La sagesse de l&apos;interdiction du riba réside dans la protection des plus vulnérables. Le riba transfère la richesse des pauvres vers les riches de manière systématique, creuse les inégalités et détruit la solidarité sociale que l&apos;islam cherche à bâtir.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Sheikh Yusuf al-Qaradawi, <em>Fiqh az-Zakat</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent un consensus quasi-unanime des savants sur l&apos;interdiction des intérêts bancaires conventionnels. Les divergences portent principalement sur les cas de nécessité impérieuse (<em>darura</em>) et sur les détails de certains produits financiers modernes, mais le principe de l&apos;interdiction du riba fait l&apos;objet d&apos;un ijma&apos; (consensus) de la communauté savante.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Alternatives halal   */}
              {/* ============================== */}
              <section id="alternatives" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les alternatives halal au riba
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam n&apos;interdit pas le riba sans proposer d&apos;alternatives. Le Prophète ﷺ a encouragé plusieurs formes de transactions licites qui permettent le financement de projets sans recourir à l&apos;usure. Les savants contemporains ont développé ces principes pour créer un système de finance islamique complet.
                </p>

                <HadithBlock
                  number={12}
                  title="Le prêt sans intérêt (qard hasan)"
                  narrator="Ibn Mas&apos;ud"
                  arabic="مَا مِنْ مُسْلِمٍ يُقْرِضُ مُسْلِمًا قَرْضًا مَرَّتَيْنِ إِلَّا كَانَ كَصَدَقَتِهَا مَرَّةً"
                  translation="Tout musulman qui accorde un prêt à un autre musulman deux fois, c&apos;est comme s&apos;il avait fait l&apos;aumône une fois."
                  source="Sunan Ibn Majah, n°2430"
                  grade="hasan"
                  explanation="Ce hadith encourage le qard hasan, le prêt sans intérêt, en le récompensant spirituellement. Le prêteur ne gagne rien en termes matériels, mais il obtient la récompense d&apos;une sadaqa. Ce principe montre que l&apos;islam valorise l&apos;entraide financière désintéressée. Le qard hasan est aujourd&apos;hui proposé par certaines institutions de finance islamique et par des associations communautaires comme alternative au prêt à intérêt."
                />

                <HadithBlock
                  number={13}
                  title="Le partenariat et le partage des profits"
                  narrator="Abu Hurayra"
                  arabic="قَالَ اللَّهُ تَعَالَى أَنَا ثَالِثُ الشَّرِيكَيْنِ مَا لَمْ يَخُنْ أَحَدُهُمَا صَاحِبَهُ فَإِذَا خَانَهُ خَرَجْتُ مِنْ بَيْنِهِمَا"
                  translation="Allah le Très-Haut a dit : Je suis le troisième des deux associés, tant que l&apos;un d&apos;eux ne trahit pas son associé. S&apos;il le trahit, Je me retire d&apos;entre eux."
                  source="Sunan Abu Dawud, n°3383"
                  grade="hasan"
                  explanation="Ce hadith qudsi (parole divine rapportée par le Prophète ﷺ) fonde le principe du partenariat (musharaka) en islam. Allah bénit l&apos;association honnête entre deux partenaires qui partagent les profits et les pertes. Ce modèle est l&apos;antithèse du riba : au lieu de garantir un gain fixe au prêteur quel que soit le résultat, il impose un partage équitable du risque. La musharaka et la moudaraba sont les deux piliers de la finance islamique moderne, utilisés dans l&apos;immobilier, le commerce et l&apos;investissement."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Leçons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Enseignements et leçons pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour le musulman dans sa vie économique et financière :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Comprendre la gravité absolue du riba
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le riba fait partie des sept péchés destructeurs. Il est pire que la fornication et ses pratiquants sont menacés d&apos;une guerre de la part d&apos;Allah. Cette conscience doit motiver la recherche d&apos;alternatives licites.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne pas faciliter le riba, même indirectement
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La malédiction touche toutes les parties : celui qui consomme le riba, celui qui le donne, le scribe et les témoins. Chaque musulman doit évaluer son rôle professionnel à la lumière de ce hadith.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Connaître les deux types de riba
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le riba ne se limite pas au prêt à intérêt. Le riba al-fadl (surplus dans l&apos;échange de biens similaires) et le riba an-nasiah (surplus lié au délai) sont tous deux interdits. Cette connaissance évite de tomber dans le riba par ignorance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Privilégier la finance islamique
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La musharaka, la moudaraba, la murabaha et le qard hasan sont des alternatives légitimes au riba. Le musulman doit se renseigner sur les offres de finance islamique disponibles dans son pays.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Pratiquer le qard hasan au sein de la communauté
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le prêt sans intérêt entre musulmans est une sunna récompensée comme une aumône. Ce mécanisme d&apos;entraide communautaire réduit la dépendance au système bancaire conventionnel.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se repentir sincèrement si l&apos;on a pratiqué le riba
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Coran ordonne de &laquo;&nbsp;renoncer au reliquat du riba&nbsp;&raquo; et les savants affirment que le repentir sincère (tawba) efface le péché passé, à condition de cesser immédiatement la pratique et de ne garder que le capital initial.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur le riba dans leur langue originale et approfondissez votre connaissance du fiqh des transactions en islam."
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
                  title="Hadiths sur l&apos;alcool en islam : interdiction et sagesse"
                  description="Découvrez les hadiths authentiques sur l&apos;interdiction de l&apos;alcool, sa gravité et les enseignements prophétiques."
                  href="/hadith-alcool-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la fornication (zina) en islam"
                  description="Les enseignements prophétiques sur l&apos;interdiction de la fornication, sa gravité et les voies de préservation."
                  href="/hadith-fornication-zina-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Halal et haram : les critères en islam"
                  description="Comprendre les principes qui déterminent le licite et l&apos;illicite dans la vie quotidienne du musulman."
                  href="/halal-haram-criteres"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
