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
    "Hadiths sur la jalousie en islam : envie, hasad et protection prophétique",
  description:
    "Découvrez les hadiths authentiques sur la jalousie (hasad) en islam : ses dangers, la différence entre envie et émulation, la jalousie d\u2019Allah, le mauvais œil et les moyens de protection selon la Sunna.",
  openGraph: {
    title:
      "Hadiths sur la jalousie en islam : envie, hasad et protection prophétique",
    description:
      "Les hadiths authentiques sur la jalousie en islam : dangers du hasad, jalousie permise, protection par les adhkar et différence entre envie et émulation selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-jalousie-islam",
    images: [
      {
        url: "/images/coran-ouvert-calligraphie-doree-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-jalousie-islam",
  },
};

const tocItems = [
  { id: "danger-hasad", label: "Le danger du hasad (envie destructrice)" },
  { id: "hasad-bonnes-actions", label: "Le hasad dévore les bonnes actions" },
  { id: "mauvais-oeil", label: "Le mauvais œil est une réalité" },
  { id: "jalousie-permise", label: "La jalousie permise (en deux cas)" },
  { id: "ghira-allah", label: "La jalousie d\u2019Allah (al-ghira)" },
  { id: "protection-hasad", label: "Se protéger du hasad et du mauvais œil" },
  { id: "hasad-ghira-munafasa", label: "Hasad, ghira et munafasa : les différences" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quelle est la différence entre la jalousie (hasad) et l\u2019émulation (munafasa) en islam ?",
    answer:
      "Le hasad consiste à souhaiter la disparition d\u2019un bienfait dont jouit autrui, ce qui est strictement interdit. La munafasa (émulation) consiste à désirer le même bienfait sans vouloir que l\u2019autre en soit privé. La munafasa est permise et même encouragée dans les domaines du bien, comme la science religieuse ou la générosité. Le Prophète \u2018alayhi salatu wa salam a dit que l\u2019envie n\u2019est permise que dans deux cas : envers celui qui a reçu le Coran et envers celui qui dépense sa richesse dans le bien (Bukhari 73).",
  },
  {
    question:
      "Comment se protéger du mauvais œil selon les hadiths ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a prescrit plusieurs moyens de protection contre le mauvais œil : la lecture régulière des sourates Al-Falaq et An-Nas, les adhkar du matin et du soir, dire \u00ab MashaAllah, la quwwata illa billah \u00bb lorsqu\u2019on admire quelque chose, et la roqya légitime. Il a également recommandé la ruqya pour celui qui est atteint du mauvais œil et a confirmé que le mauvais œil est une réalité (Muslim 2188).",
  },
  {
    question:
      "Pourquoi le hasad est-il considéré comme un péché majeur en islam ?",
    answer:
      "Le hasad est considéré comme un péché grave car il implique une contestation du décret divin (qadar). L\u2019envieux s\u2019oppose à la répartition des bienfaits par Allah. De plus, le Prophète a averti que le hasad dévore les bonnes actions comme le feu dévore le bois (Abu Dawud 4903). Les savants soulignent qu\u2019il est à l\u2019origine du premier péché commis sur terre, lorsqu\u2019Iblis a envié Adam, et du premier meurtre, lorsque Qabil a envié Habil.",
  },
  {
    question:
      "Qu\u2019est-ce que la jalousie d\u2019Allah (al-ghira) mentionnée dans les hadiths ?",
    answer:
      "La ghira d\u2019Allah est un attribut divin qui désigne le fait qu\u2019Allah n\u2019accepte pas que Ses serviteurs commettent les turpitudes qu\u2019Il a interdites. Le Prophète a dit : \u00ab Il n\u2019y a personne de plus jaloux (dans son honneur) qu\u2019Allah \u00bb (Bukhari 5223). Cette jalousie divine est une expression de la grandeur et de la sainteté d\u2019Allah, et non une émotion humaine. Elle montre que les interdits divins sont motivés par la sagesse et la miséricorde.",
  },
  {
    question:
      "La ghira (jalousie protectrice) est-elle permise en islam ?",
    answer:
      "Oui, la ghira au sens de protection de son honneur et de celui de sa famille est non seulement permise mais louée en islam. Le Prophète a dit que Sa\u2019d ibn \u2018Ubada était jaloux (protecteur) et que lui-même l\u2019était encore plus, et qu\u2019Allah l\u2019est davantage (Bukhari 6846). La ghira se distingue du hasad car elle ne vise pas à nuire à autrui mais à préserver la dignité et les limites sacrées établies par Allah.",
  },
  {
    question:
      "Quels sont les adhkar recommandés pour se protéger de la jalousie et du mauvais œil ?",
    answer:
      "Les adhkar recommandés incluent : la lecture trois fois matin et soir de la sourate Al-Ikhlas, Al-Falaq et An-Nas, le verset du Trône (Ayat al-Kursi), l\u2019invocation \u00ab A\u2019udhu bi kalimatillahi at-tammati min sharri ma khalaq \u00bb (Muslim 2708), et le fait de dire \u00ab Bismillah \u00bb et \u00ab MashaAllah \u00bb lorsqu\u2019on voit un bienfait chez autrui. Le Prophète a dit que celui qui récite ces sourates matin et soir sera protégé de toute chose (Abu Dawud 5082).",
  },
  {
    question:
      "Le hasad peut-il atteindre autrui sans le mauvais œil ?",
    answer:
      "Oui, les savants distinguent le hasad intérieur (sentiment d\u2019envie dans le cœur) du mauvais œil (\u2019ayn) qui est une manifestation concrète. Le hasad dans le cœur est un péché si on ne le combat pas, mais il ne nuit directement qu\u2019à celui qui le porte. Le mauvais œil, en revanche, peut atteindre autrui par la permission d\u2019Allah. C\u2019est pourquoi le Prophète a ordonné de chercher refuge contre les deux : le hasad intérieur par la purification du cœur, et le mauvais œil par les adhkar et la roqya.",
  },
  {
    question:
      "Quel est le lien entre la jalousie et l\u2019hypocrisie (nifaq) en islam ?",
    answer:
      "Le hasad et l\u2019hypocrisie partagent une racine commune : la maladie du cœur. Le jaloux, comme l\u2019hypocrite, dissimule un mal intérieur tout en affichant une apparence de bien. Le Prophète a averti que le hasad et la haine font partie des \u00ab raseuses \u00bb qui ne rasent pas les cheveux mais la religion (Tirmidhi 2510). Les savants, dont Ibn al-Qayyim, expliquent que le hasad non traité peut conduire à la médisance, la calomnie et la trahison, qui sont des traits de l\u2019hypocrisie.",
  },
];

export default function HadithJalousieIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-jalousie-islam/#article",
        headline:
          "Hadiths sur la jalousie en islam : envie, hasad et protection prophétique",
        description:
          "Découvrez les hadiths authentiques sur la jalousie (hasad) en islam : ses dangers, la jalousie permise, le mauvais œil et les moyens de protection.",
        image: "/images/coran-ouvert-calligraphie-doree-lumiere.jpg",
        datePublished: "2026-04-23",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-jalousie-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-jalousie-islam/#breadcrumb",
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
            name: "Hadiths sur la jalousie",
            item: "https://www.islamreligion.fr/hadith-jalousie-islam",
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
          title="Hadiths sur la jalousie en islam"
          subtitle="Les enseignements prophétiques sur le hasad (envie destructrice), le mauvais œil, la jalousie permise et les moyens de protection selon la Sunna authentique."
          imageSrc="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
          imageAlt="Hadiths sur la jalousie en islam, envie et protection prophétique"
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
                  Hadiths sur la jalousie
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
                    Le hasad (envie destructrice) est un péché majeur qui dévore les bonnes actions comme le feu dévore le bois sec.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le mauvais œil (&apos;ayn) est une réalité confirmée par le Prophète ﷺ, et la protection passe par les adhkar et la roqya légitime.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    L&apos;islam distingue le hasad interdit de la munafasa (émulation) permise et de la ghira (jalousie protectrice) louable.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Allah Lui-même possède l&apos;attribut de la ghira : Il n&apos;accepte pas que Ses serviteurs transgressent Ses limites sacrées.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Le danger du hasad   */}
              {/* ============================== */}
              <section id="danger-hasad" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le danger du hasad (envie destructrice)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le hasad désigne en arabe le fait de souhaiter la disparition d&apos;un bienfait dont jouit une autre personne. Il se distingue de la simple admiration ou du désir d&apos;obtenir un bien similaire. Le Coran et la Sunna mettent en garde avec la plus grande fermeté contre ce vice du cœur, qui fut à l&apos;origine du premier péché d&apos;Iblis envers Adam et du premier meurtre sur terre.
                </p>

                <HadithCard
                  arabic="وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ"
                  text="Et contre le mal de l&apos;envieux lorsqu&apos;il envie."
                  source="Coran, sourate Al-Falaq (113:5)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah a ordonné à Son Prophète ﷺ de chercher refuge contre le mal de l&apos;envieux, ce qui montre la gravité de ce fléau. Le fait qu&apos;il soit mentionné aux côtés de la sorcellerie et des ténèbres dans cette même sourate indique que le hasad est une menace réelle, tant spirituelle que sociale.
                </p>

                <HadithBlock
                  number={1}
                  title="Prenez garde à l&apos;envie (hasad)"
                  narrator="Abu Hurayra"
                  arabic="إِيَّاكُمْ وَالْحَسَدَ فَإِنَّ الْحَسَدَ يَأْكُلُ الْحَسَنَاتِ كَمَا تَأْكُلُ النَّارُ الْحَطَبَ"
                  translation="Prenez garde à l&apos;envie, car l&apos;envie dévore les bonnes actions comme le feu dévore le bois."
                  source="Sunan Abu Dawud, n°4903"
                  grade="hasan"
                  explanation="Ce hadith utilise une image saisissante pour illustrer le danger du hasad : il ne se contente pas de nuire aux relations humaines, il détruit le capital spirituel de l&apos;envieux lui-même. Les bonnes actions laborieusement accumulées — prières, jeûnes, aumônes — sont consumées par le feu de l&apos;envie. Les savants expliquent que le hasad engendre la médisance, la calomnie, la ruse et parfois la violence, autant de péchés qui annulent les récompenses."
                />

                <HadithBlock
                  number={2}
                  title="Ne vous enviez pas les uns les autres"
                  narrator="Abu Hurayra"
                  arabic="لَا تَحَاسَدُوا وَلَا تَنَاجَشُوا وَلَا تَبَاغَضُوا وَلَا تَدَابَرُوا وَلَا يَبِعْ بَعْضُكُمْ عَلَى بَيْعِ بَعْضٍ وَكُونُوا عِبَادَ اللَّهِ إِخْوَانًا"
                  translation="Ne vous enviez pas les uns les autres, ne surenchérissez pas les uns sur les autres (dans les ventes), ne vous haïssez pas les uns les autres, ne vous tournez pas le dos les uns aux autres, et ne vendez pas par-dessus la vente de l&apos;autre. Soyez, ô serviteurs d&apos;Allah, des frères."
                  source="Sahih Muslim, n°2564"
                  grade="sahih"
                  explanation="Ce hadith fondamental place le hasad en tête d&apos;une liste de comportements destructeurs pour la fraternité musulmane. Le Prophète ﷺ montre que l&apos;envie est la racine qui nourrit la haine, la tromperie et la rupture des liens. En interdisant ces vices dans un même souffle, il révèle leur enchaînement logique : le hasad mène à la haine, la haine au rejet, et le rejet à la destruction de la communauté. L&apos;injonction finale — &laquo; soyez des frères &raquo; — rappelle l&apos;objectif positif de ces interdictions."
                />

                <HadithBlock
                  number={3}
                  title="La maladie des communautés qui vous ont précédés"
                  narrator="Az-Zubayr ibn al-&apos;Awwam"
                  arabic="دَبَّ إِلَيْكُمْ دَاءُ الْأُمَمِ قَبْلَكُمُ الْحَسَدُ وَالْبَغْضَاءُ هِيَ الْحَالِقَةُ لَا أَقُولُ تَحْلِقُ الشَّعَرَ وَلَكِنْ تَحْلِقُ الدِّينَ"
                  translation="La maladie des communautés qui vous ont précédés s&apos;est glissée parmi vous : l&apos;envie et la haine. Elle est la raseuse. Je ne dis pas qu&apos;elle rase les cheveux, mais elle rase la religion."
                  source="Jami&apos; at-Tirmidhi, n°2510"
                  grade="hasan"
                  explanation="Le Prophète ﷺ qualifie le hasad de &laquo; maladie des communautés antérieures &raquo;, indiquant que ce fléau a contribué à la destruction de nations entières avant l&apos;islam. La métaphore de la &laquo; raseuse &raquo; est puissante : le hasad ne détruit pas l&apos;apparence physique mais le fondement même de la foi. Les savants, dont Ibn al-Qayyim, commentent que la perte de la religion est pire que la perte des cheveux, car elle touche l&apos;essence même de l&apos;être humain."
                />
              </section>

              {/* ======================================== */}
              {/* SECTION : Le hasad dévore les bonnes actions */}
              {/* ======================================== */}
              <section id="hasad-bonnes-actions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le hasad dévore les bonnes actions
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les hadiths ne se contentent pas d&apos;interdire le hasad : ils décrivent avec précision ses ravages sur la vie spirituelle du croyant. L&apos;envieux est doublement perdant — il perd ses bonnes actions et s&apos;inflige une souffrance intérieure permanente en observant les bienfaits d&apos;autrui.
                </p>

                <HadithBlock
                  number={4}
                  title="L&apos;envieux et le croyant sincère"
                  narrator="Abu Hurayra"
                  arabic="لَا يَجْتَمِعُ فِي جَوْفِ عَبْدٍ الْإِيمَانُ وَالْحَسَدُ"
                  translation="La foi et l&apos;envie ne se réunissent pas dans le cœur d&apos;un serviteur."
                  source="Sunan An-Nasa&apos;i, n°3109"
                  grade="sahih"
                  explanation="Ce hadith établit une incompatibilité fondamentale entre la foi complète et le hasad. Les savants précisent qu&apos;il ne s&apos;agit pas d&apos;une annulation totale de la foi, mais d&apos;une diminution grave de sa perfection. Celui qui porte le hasad dans son cœur a une foi déficiente, car la foi implique d&apos;accepter le décret d&apos;Allah et de souhaiter le bien pour son frère. L&apos;imam Ibn Rajab explique que le hasad contredit le principe fondamental de la satisfaction envers la répartition divine des bienfaits."
                />

                <HadithBlock
                  number={5}
                  title="L&apos;entrée au Paradis et la purification du cœur"
                  narrator="Anas ibn Malik"
                  arabic="لَا يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ"
                  translation="N&apos;entrera pas au Paradis celui qui a dans son cœur le poids d&apos;un atome d&apos;orgueil."
                  source="Sahih Muslim, n°91"
                  grade="sahih"
                  explanation="Bien que ce hadith mentionne l&apos;orgueil (kibr), les savants l&apos;associent étroitement au hasad car les deux maladies partagent la même racine : le refus d&apos;accepter la volonté divine. L&apos;orgueilleux se croit supérieur aux autres, et l&apos;envieux refuse que les autres reçoivent des bienfaits. Ibn al-Qayyim dans son ouvrage &laquo; Al-Da wa ad-Dawa &raquo; explique que le hasad est un mélange d&apos;orgueil et d&apos;avarice de l&apos;âme. Ce hadith rappelle que la purification du cœur est une condition de l&apos;entrée au Paradis."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez la purification du cœur, les maladies spirituelles et leur traitement selon la Sunna avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Le mauvais œil       */}
              {/* ============================== */}
              <section id="mauvais-oeil" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le mauvais œil est une réalité
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le mauvais œil (&apos;ayn) est étroitement lié au hasad. Il se produit lorsqu&apos;une personne regarde un bienfait avec envie ou admiration excessive, sans invoquer la bénédiction d&apos;Allah. Le Prophète ﷺ a confirmé sa réalité et a enseigné les moyens de s&apos;en protéger. Pour un approfondissement complet sur ce sujet, consultez notre article sur les{" "}
                  <Link href="/hadith-sorcellerie-mauvais-oeil-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la sorcellerie et le mauvais œil en islam
                  </Link>.
                </p>

                <HadithBlock
                  number={6}
                  title="Le mauvais œil est vrai"
                  narrator="Ibn &apos;Abbas"
                  arabic="الْعَيْنُ حَقٌّ وَلَوْ كَانَ شَيْءٌ سَابَقَ الْقَدَرَ لَسَبَقَتْهُ الْعَيْنُ وَإِذَا اسْتُغْسِلْتُمْ فَاغْسِلُوا"
                  translation="Le mauvais œil est une réalité. S&apos;il y avait une chose qui devançait le destin, ce serait le mauvais œil. Et lorsqu&apos;on vous demande de vous laver (pour guérir quelqu&apos;un), alors lavez-vous."
                  source="Sahih Muslim, n°2188"
                  grade="sahih"
                  explanation="Ce hadith est la preuve fondamentale de la réalité du mauvais œil en islam. Le Prophète ﷺ affirme que si quelque chose pouvait devancer le destin divin, ce serait le mauvais œil — une hyperbole qui souligne sa puissance réelle. La seconde partie du hadith prescrit un remède concret : le ghusl (lavage) de celui qui a porté le mauvais œil, dont l&apos;eau est utilisée pour laver la personne atteinte. Ce traitement prophétique montre que le mauvais œil a des effets tangibles qui nécessitent des remèdes spécifiques."
                />

                <HadithBlock
                  number={7}
                  title="La protection des enfants contre le mauvais œil"
                  narrator="Ibn &apos;Abbas"
                  arabic="كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يُعَوِّذُ الْحَسَنَ وَالْحُسَيْنَ وَيَقُولُ أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ"
                  translation="Le Prophète ﷺ protégeait Al-Hasan et Al-Husayn en disant : &laquo; Je vous place sous la protection des paroles parfaites d&apos;Allah contre tout démon, tout animal venimeux et tout mauvais œil. &raquo;"
                  source="Sahih Al-Bukhari, n°3371"
                  grade="sahih"
                  explanation="Ce hadith montre le souci prophétique de protéger les enfants contre le mauvais œil. Le Prophète ﷺ utilisait cette invocation pour ses petits-fils Al-Hasan et Al-Husayn, ce qui en fait une sunna pratique pour tous les parents. L&apos;invocation mentionne trois dangers : les démons, les animaux venimeux et le mauvais œil, indiquant que ce dernier est une menace réelle au même titre que les deux autres. Les savants recommandent aux parents de réciter cette invocation quotidiennement pour leurs enfants."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Jalousie permise     */}
              {/* ============================== */}
              <section id="jalousie-permise" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La jalousie permise : l&apos;envie dans deux cas seulement
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam ne condamne pas toute forme de désir face aux bienfaits d&apos;autrui. Le Prophète ﷺ a distingué clairement le hasad destructeur de la ghibta (envie saine), qui consiste à désirer un bienfait similaire sans souhaiter que l&apos;autre en soit privé. Cette distinction est essentielle pour comprendre la position nuancée de l&apos;islam sur ce sujet.
                </p>

                <HadithBlock
                  number={8}
                  title="Pas d&apos;envie sauf dans deux cas"
                  narrator="Ibn Mas&apos;ud"
                  arabic="لَا حَسَدَ إِلَّا فِي اثْنَتَيْنِ رَجُلٌ آتَاهُ اللَّهُ مَالًا فَسُلِّطَ عَلَى هَلَكَتِهِ فِي الْحَقِّ وَرَجُلٌ آتَاهُ اللَّهُ حِكْمَةً فَهُوَ يَقْضِي بِهَا وَيُعَلِّمُهَا"
                  translation="Il n&apos;y a d&apos;envie permise que dans deux cas : un homme à qui Allah a donné une richesse et qui la dépense entièrement dans le bien, et un homme à qui Allah a donné la sagesse et qui juge par elle et l&apos;enseigne."
                  source="Sahih Al-Bukhari, n°73 — Sahih Muslim, n°816"
                  grade="sahih"
                  explanation="Ce hadith définit la ghibta, l&apos;envie saine et permise. Le mot &laquo; hasad &raquo; est utilisé ici dans un sens linguistique élargi, signifiant le désir d&apos;obtenir un bienfait similaire. Les deux cas mentionnés concernent l&apos;usage du bien au service de la vérité : la richesse dépensée dans le chemin d&apos;Allah et la science partagée. Le Prophète ﷺ oriente ainsi l&apos;énergie naturelle de l&apos;émulation vers les domaines les plus nobles. L&apos;imam An-Nawawi précise que cette &laquo; envie &raquo; n&apos;implique aucun souhait de voir l&apos;autre perdre son bienfait."
                />

                <HadithBlock
                  number={9}
                  title="Celui qui récite le Coran et celui qui dépense sa richesse"
                  narrator="Abu Hurayra"
                  arabic="لَا حَسَدَ إِلَّا فِي اثْنَتَيْنِ رَجُلٌ عَلَّمَهُ اللَّهُ الْقُرْآنَ فَهُوَ يَتْلُوهُ آنَاءَ اللَّيْلِ وَآنَاءَ النَّهَارِ فَسَمِعَهُ جَارٌ لَهُ فَقَالَ لَيْتَنِي أُوتِيتُ مِثْلَ مَا أُوتِيَ فُلَانٌ فَعَمِلْتُ مِثْلَ مَا يَعْمَلُ"
                  translation="Il n&apos;y a d&apos;envie permise que dans deux cas : un homme à qui Allah a enseigné le Coran et qui le récite durant les heures de la nuit et du jour, et son voisin l&apos;entend et dit : &laquo; Si seulement j&apos;avais reçu ce qu&apos;Untel a reçu, afin de faire comme il fait. &raquo;"
                  source="Sahih Al-Bukhari, n°5026"
                  grade="sahih"
                  explanation="Cette variante du hadith précédent détaille le mécanisme de la ghibta : le voisin qui entend la récitation ne souhaite pas que le récitateur perde sa capacité, mais désire ardemment posséder la même. Le sentiment est &laquo; si seulement moi aussi &raquo;, et non &laquo; pourquoi lui et pas moi &raquo;. Cette nuance est fondamentale. Le hadith encourage l&apos;émulation dans le bien (tanafus) que le Coran lui-même recommande : &laquo; Que ceux qui veulent entrer en compétition rivalisent pour cela &raquo; (Al-Mutaffifin 83:26)."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : La ghira d'Allah     */}
              {/* ============================== */}
              <section id="ghira-allah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La jalousie d&apos;Allah (al-ghira)
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La ghira est un concept distinct du hasad. Elle désigne la protection jalouse de son honneur et de ses droits. Allah possède cet attribut au plus haut degré : Il n&apos;accepte pas que Ses serviteurs commettent les turpitudes qu&apos;Il a interdites. Le Prophète ﷺ a également loué la ghira chez les croyants, notamment dans la protection de la dignité familiale.
                </p>

                <HadithBlock
                  number={10}
                  title="Personne n&apos;est plus jaloux qu&apos;Allah"
                  narrator="Ibn Mas&apos;ud"
                  arabic="مَا مِنْ أَحَدٍ أَغْيَرُ مِنَ اللَّهِ مِنْ أَجْلِ ذَلِكَ حَرَّمَ الْفَوَاحِشَ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ"
                  translation="Il n&apos;y a personne de plus jaloux (dans son honneur) qu&apos;Allah. C&apos;est pour cela qu&apos;Il a interdit les turpitudes, apparentes et cachées."
                  source="Sahih Al-Bukhari, n°5223 — Sahih Muslim, n°2760"
                  grade="sahih"
                  explanation="Ce hadith lie directement la ghira d&apos;Allah à la législation islamique. Les interdits divins ne sont pas des restrictions arbitraires mais l&apos;expression de la jalousie sacrée d&apos;Allah pour Ses serviteurs. Il refuse que Ses créatures s&apos;avilissent dans les turpitudes. L&apos;imam Ibn al-Qayyim commente longuement ce hadith dans &laquo; Rawdat al-Muhibbin &raquo;, expliquant que la ghira d&apos;Allah est un signe de Son amour pour Ses serviteurs : Il les protège de ce qui les dégrade."
                />

                <HadithBlock
                  number={11}
                  title="La ghira de Sa&apos;d et la ghira d&apos;Allah"
                  narrator="Al-Mughira ibn Shu&apos;ba"
                  arabic="قَالَ سَعْدُ بْنُ عُبَادَةَ لَوْ رَأَيْتُ رَجُلًا مَعَ امْرَأَتِي لَضَرَبْتُهُ بِالسَّيْفِ غَيْرَ مُصْفَحٍ فَقَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَتَعْجَبُونَ مِنْ غَيْرَةِ سَعْدٍ لَأَنَا أَغْيَرُ مِنْهُ وَاللَّهُ أَغْيَرُ مِنِّي"
                  translation="Sa&apos;d ibn &apos;Ubada dit : &laquo; Si je voyais un homme avec ma femme, je le frapperais du tranchant de mon épée. &raquo; Le Prophète ﷺ dit : &laquo; Vous étonnez-vous de la jalousie de Sa&apos;d ? Je suis plus jaloux que lui, et Allah est plus jaloux que moi. &raquo;"
                  source="Sahih Al-Bukhari, n°6846 — Sahih Muslim, n°1499"
                  grade="sahih"
                  explanation="Ce hadith établit une hiérarchie dans la ghira : Sa&apos;d, puis le Prophète ﷺ, puis Allah. La ghira de Sa&apos;d pour son honneur conjugal est louée, non blâmée. Le Prophète ﷺ ne le réprimande pas mais élève le concept en montrant qu&apos;Allah possède cet attribut au degré suprême. La ghira d&apos;Allah se manifeste par Ses interdictions : quand un serviteur commet une turpitude, il transgresse les limites que la ghira divine a établies. Ce hadith montre que la ghira est un attribut noble lorsqu&apos;elle est canalisée dans les limites de la Charia."
                />
              </section>

              {/* ======================================== */}
              {/* SECTION : Protection contre le hasad     */}
              {/* ======================================== */}
              <section id="protection-hasad" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Se protéger du hasad et du mauvais œil
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ n&apos;a pas seulement mis en garde contre le hasad : il a enseigné des moyens concrets de protection. Les adhkar du matin et du soir, les sourates protectrices et les invocations spécifiques constituent un bouclier quotidien contre l&apos;envie et le mauvais œil.
                </p>

                <HadithBlock
                  number={12}
                  title="Chercher refuge par les paroles parfaites d&apos;Allah"
                  narrator="Abu Hurayra"
                  arabic="مَنْ قَالَ حِينَ يُمْسِي ثَلَاثَ مَرَّاتٍ أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ لَمْ تَضُرَّهُ حُمَةٌ تِلْكَ اللَّيْلَةَ"
                  translation="Celui qui dit le soir, trois fois : &laquo; Je cherche refuge dans les paroles parfaites d&apos;Allah contre le mal de ce qu&apos;Il a créé &raquo;, aucune piqûre (venimeuse) ne lui nuira cette nuit-là."
                  source="Sahih Muslim, n°2709"
                  grade="sahih"
                  explanation="Cette invocation prophétique offre une protection globale qui inclut le mauvais œil et le hasad. Les &laquo; paroles parfaites d&apos;Allah &raquo; désignent, selon les savants, le Coran et les attributs divins. L&apos;imam An-Nawawi note que cette invocation a été expérimentée et vérifiée par de nombreux savants. Sa simplicité — trois répétitions le soir — la rend accessible à tous. Le hadith montre que la protection spirituelle quotidienne est un enseignement prophétique pratique et non une simple recommandation théorique."
                />

                <HadithBlock
                  number={13}
                  title="Les sourates protectrices (Al-Mu&apos;awwidhat)"
                  narrator="Aisha"
                  arabic="كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا أَوَى إِلَى فِرَاشِهِ كُلَّ لَيْلَةٍ جَمَعَ كَفَّيْهِ ثُمَّ نَفَثَ فِيهِمَا فَقَرَأَ فِيهِمَا قُلْ هُوَ اللَّهُ أَحَدٌ وَقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ وَقُلْ أَعُوذُ بِرَبِّ النَّاسِ ثُمَّ يَمْسَحُ بِهِمَا مَا اسْتَطَاعَ مِنْ جَسَدِهِ"
                  translation="Chaque nuit, lorsque le Messager d&apos;Allah ﷺ allait se coucher, il joignait ses mains, soufflait dedans, y récitait les sourates Al-Ikhlas, Al-Falaq et An-Nas, puis passait ses mains sur tout son corps autant qu&apos;il le pouvait."
                  source="Sahih Al-Bukhari, n°5017"
                  grade="sahih"
                  explanation="Ce hadith décrit la pratique prophétique quotidienne de protection avant le sommeil. Les trois sourates récitées couvrent l&apos;ensemble des menaces spirituelles : Al-Ikhlas affirme le tawhid, Al-Falaq protège contre la sorcellerie et l&apos;envie, An-Nas protège contre les insufflations sataniques. Le geste de souffler dans les mains et de se frotter le corps ajoute une dimension physique à la protection spirituelle. Cette sunna est l&apos;un des moyens les plus efficaces de se prémunir contre le hasad et le mauvais œil."
                />
              </section>

              {/* ============================================ */}
              {/* SECTION : Hasad, ghira et munafasa           */}
              {/* ============================================ */}
              <section id="hasad-ghira-munafasa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Hasad, ghira et munafasa : les différences
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam distingue avec précision trois formes de réaction face aux bienfaits d&apos;autrui ou à la protection de son honneur. Comprendre ces distinctions est essentiel pour purifier son cœur et adopter le comportement juste.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hasad est de souhaiter la disparition du bienfait chez autrui, qu&apos;on le veuille pour soi ou non. La ghibta est de désirer pour soi un bienfait similaire sans souhaiter qu&apos;il disparaisse chez l&apos;autre. La première est interdite, la seconde est permise et parfois recommandée.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hasad est la plus vile des maladies de l&apos;âme. Il est un mélange d&apos;avarice et d&apos;orgueil : l&apos;avarice de l&apos;âme qui refuse de voir les autres bénéficier des dons d&apos;Allah, et l&apos;orgueil de se croire plus méritant qu&apos;eux. Son remède est la connaissance d&apos;Allah, la satisfaction de Son décret et l&apos;invocation pour celui qu&apos;on envie.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Al-Da&apos; wa ad-Dawa&apos;</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La ghira est de deux types : une ghira qu&apos;Allah aime, c&apos;est la ghira dans les situations douteuses (qui protège l&apos;honneur) ; et une ghira qu&apos;Allah déteste, c&apos;est la ghira sans raison valable (la suspicion infondée). La première est un signe de foi, la seconde est une forme d&apos;oppression.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En résumé : le <strong>hasad</strong> est toujours interdit — c&apos;est le souhait de voir disparaître un bienfait chez autrui. La <strong>munafasa</strong> (ou ghibta) est permise et même encouragée — c&apos;est le désir d&apos;obtenir un bienfait similaire dans le bien. La <strong>ghira</strong> est louable lorsqu&apos;elle protège l&apos;honneur dans les limites de la Charia, mais blâmable lorsqu&apos;elle se transforme en suspicion infondée. Pour approfondir les vertus du bon comportement, consultez notre article sur les{" "}
                  <Link href="/hadith-bon-comportement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le bon comportement en islam
                  </Link>.
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
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour le musulman soucieux de purifier son cœur du hasad :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Reconnaître le hasad comme une maladie du cœur
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le premier pas vers la guérison est de reconnaître le mal. Le hasad dévore les bonnes actions et diminue la foi. Le croyant doit examiner son cœur avec sincérité et demander l&apos;aide d&apos;Allah contre ce vice.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Accepter le décret divin (qadar)
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le hasad naît du refus d&apos;accepter la répartition divine des bienfaits. Se rappeler qu&apos;Allah distribue Ses dons selon Sa sagesse aide à éteindre le feu de l&apos;envie et à cultiver la gratitude pour ses propres bienfaits.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Pratiquer les adhkar matin et soir
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La récitation quotidienne des sourates protectrices (Al-Ikhlas, Al-Falaq, An-Nas) et des invocations prophétiques est un bouclier contre le mauvais œil et le hasad. C&apos;est une sunna simple et accessible à tous.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Transformer l&apos;envie en émulation positive
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Lorsqu&apos;on admire un bienfait chez autrui, dire &laquo; MashaAllah, Allahumma barik lahu &raquo; et transformer ce sentiment en motivation pour faire le bien soi-même. C&apos;est la munafasa que l&apos;islam encourage.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Invoquer pour celui qu&apos;on envie
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les savants recommandent comme remède contre le hasad de faire des invocations en faveur de la personne enviée. Cet acte contre-nature brise le mécanisme de l&apos;envie et purifie le cœur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Distinguer la ghira louable de la suspicion maladive
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La ghira qui protège l&apos;honneur dans le cadre de la Charia est un signe de foi. Mais la suspicion infondée et la jalousie possessive qui opprime le conjoint ou la famille sont blâmables et contraires à l&apos;enseignement prophétique.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur la jalousie et la purification du cœur dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur la sorcellerie et le mauvais œil en islam"
                  description="Les hadiths authentiques sur la sorcellerie, le mauvais œil, la roqya et les moyens de protection prophétiques."
                  href="/hadith-sorcellerie-mauvais-oeil-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le bon comportement en islam"
                  description="Les enseignements du Prophète ﷺ sur les bonnes manières, la bienveillance et les vertus du caractère."
                  href="/hadith-bon-comportement-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la médisance et la calomnie en islam"
                  description="Ce que disent les hadiths sur la médisance (ghiba), la calomnie (buhtan) et la préservation de la langue."
                  href="/hadith-medisance-calomnie-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
