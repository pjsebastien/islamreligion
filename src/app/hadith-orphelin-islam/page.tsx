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
    "Hadiths sur l\u2019orphelin en islam : paroles prophétiques et enseignements",
  description:
    "Découvrez les hadiths authentiques sur l\u2019orphelin en islam : le parrainage (kafala), la place au Paradis, la protection de ses biens, l\u2019attendrissement du cœur. Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths sur l\u2019orphelin en islam : paroles prophétiques et enseignements",
    description:
      "Les hadiths authentiques sur l\u2019orphelin en islam : kafala, récompense au Paradis, protection des biens de l\u2019orphelin et attendrissement du cœur selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-orphelin-islam",
    images: [
      {
        url: "/images/enfant-musulman-islam-ramadan-illustration-3d.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-orphelin-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique de l\u2019orphelin" },
  { id: "parrainage-paradis", label: "Le parrain de l\u2019orphelin au Paradis" },
  { id: "meilleure-maison", label: "La meilleure maison en islam" },
  { id: "attendrir-coeur", label: "Attendrir son cœur par l\u2019orphelin" },
  { id: "protection-biens", label: "Protection des biens de l\u2019orphelin" },
  { id: "prophete-orphelin", label: "Le Prophète \uFDFA, lui-même orphelin" },
  { id: "kafala", label: "La kafala (parrainage) en islam" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur l\u2019orphelin en islam ?",
    answer:
      "Les hadiths les plus importants sur l\u2019orphelin incluent celui de Sahl ibn Sa\u2019d où le Prophète \uFDFA dit : \u00ab Moi et le parrain de l\u2019orphelin serons comme ceci au Paradis \u00bb en joignant l\u2019index et le majeur (Bukhari 5304), celui d\u2019Abu Hurayra sur la meilleure maison étant celle où un orphelin est bien traité (Ibn Majah 3679), et celui sur l\u2019interdiction de consommer injustement les biens de l\u2019orphelin (Bukhari 2766).",
  },
  {
    question:
      "Quelle est la récompense de celui qui prend en charge un orphelin en islam ?",
    answer:
      "Le Prophète \uFDFA a promis à celui qui parraine un orphelin d\u2019être son voisin au Paradis, en montrant la proximité entre son index et son majeur. Cette récompense immense montre le rang élevé de la kafala dans la hiérarchie des bonnes actions en islam. Elle concerne aussi bien le parrainage d\u2019un orphelin de sa propre famille que celui d\u2019un orphelin étranger.",
  },
  {
    question:
      "Comment l\u2019islam protège-t-il les biens de l\u2019orphelin ?",
    answer:
      "L\u2019islam interdit formellement de consommer les biens de l\u2019orphelin de manière injuste. Le Coran classe cet acte parmi les sept péchés destructeurs (mubiqat). Le tuteur est tenu de préserver et de faire fructifier les biens de l\u2019orphelin jusqu\u2019à sa majorité, et il ne peut y toucher que dans l\u2019intérêt de l\u2019enfant. Le Prophète \uFDFA a averti que celui qui mange injustement les biens de l\u2019orphelin ne fait qu\u2019avaler du feu.",
  },
  {
    question:
      "Le Prophète Muhammad était-il orphelin ?",
    answer:
      "Oui, le Prophète Muhammad \uFDFA est né orphelin de père : son père Abdullah ibn Abd al-Muttalib est décédé avant sa naissance. Sa mère Amina est décédée alors qu\u2019il avait six ans. Il a ensuite été pris en charge par son grand-père Abd al-Muttalib, puis par son oncle Abu Talib. Cette expérience personnelle a profondément marqué sa sensibilité envers les orphelins.",
  },
  {
    question:
      "Qu\u2019est-ce que la kafala en islam ?",
    answer:
      "La kafala est le parrainage ou la prise en charge d\u2019un enfant orphelin. Elle consiste à subvenir à ses besoins matériels, éducatifs et affectifs. Contrairement à l\u2019adoption occidentale, la kafala ne modifie pas la filiation de l\u2019enfant : il conserve le nom de son père biologique. La kafala est considérée comme l\u2019une des meilleures actions en islam, récompensée par la compagnie du Prophète \uFDFA au Paradis.",
  },
  {
    question:
      "Qui est considéré comme orphelin en islam ?",
    answer:
      "En islam, l\u2019orphelin (yatim) est l\u2019enfant qui a perdu son père avant d\u2019atteindre la puberté. La perte de la mère seule ne confère pas le statut d\u2019orphelin au sens juridique islamique, bien que l\u2019enfant mérite tout autant la compassion. Après la puberté, l\u2019enfant n\u2019est plus considéré comme orphelin au sens technique, mais les savants recommandent de continuer à le soutenir s\u2019il est dans le besoin.",
  },
  {
    question:
      "Comment attendrir son cœur selon les hadiths sur l\u2019orphelin ?",
    answer:
      "Le Prophète \uFDFA a conseillé à un homme qui se plaignait de la dureté de son cœur de caresser la tête de l\u2019orphelin et de nourrir le pauvre. Ce hadith rapporté par Ahmad montre que le contact avec les plus vulnérables est un remède spirituel à la dureté du cœur. Prendre soin de l\u2019orphelin adoucit l\u2019âme et développe la miséricorde.",
  },
  {
    question:
      "Quels sont les droits de l\u2019orphelin en islam ?",
    answer:
      "L\u2019orphelin en islam a droit à la protection physique et morale, à la préservation de ses biens, à l\u2019éducation, à la bienveillance et au bon traitement. Le Coran et la Sunna insistent sur le respect de sa dignité et interdisent de le repousser ou de le maltraiter. Le tuteur doit agir dans l\u2019intérêt exclusif de l\u2019enfant et sera interrogé par Allah sur la manière dont il a rempli cette responsabilité.",
  },
];

export default function HadithOrphelinIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-orphelin-islam/#article",
        headline:
          "Hadiths sur l\u2019orphelin en islam : paroles prophétiques et enseignements",
        description:
          "Découvrez les hadiths authentiques sur l\u2019orphelin en islam : kafala, récompense au Paradis, protection des biens et attendrissement du cœur.",
        image: "/images/enfant-musulman-islam-ramadan-illustration-3d.jpg",
        datePublished: "2026-04-29",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-orphelin-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-orphelin-islam/#breadcrumb",
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
            name: "Hadiths sur l\u2019orphelin",
            item: "https://www.islamreligion.fr/hadith-orphelin-islam",
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
          title="Hadiths sur l&apos;orphelin en islam"
          subtitle="Les enseignements prophétiques sur la prise en charge de l&apos;orphelin, la récompense au Paradis, la protection de ses biens et l&apos;attendrissement du cœur selon la Sunna authentique."
          imageSrc="/images/enfant-musulman-islam-ramadan-illustration-3d.jpg"
          imageAlt="Hadiths sur l&apos;orphelin en islam, enseignements prophétiques"
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
                  Hadiths sur l&apos;orphelin
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
                    Le Prophète ﷺ a promis à celui qui parraine un orphelin d&apos;être son voisin au Paradis, en joignant l&apos;index et le majeur.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La meilleure maison est celle où un orphelin est bien traité ; la pire est celle où il est maltraité.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ était lui-même orphelin, ce qui explique sa profonde sensibilité envers les enfants privés de père.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    L&apos;islam interdit formellement de consommer les biens de l&apos;orphelin et classe cet acte parmi les péchés destructeurs.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique de l&apos;orphelin en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths, il convient de rappeler que la protection de l&apos;orphelin est d&apos;abord une injonction coranique. Allah a mentionné l&apos;orphelin dans de nombreux versets, tantôt pour ordonner sa prise en charge, tantôt pour mettre en garde contre l&apos;injustice à son égard. Le Coran établit les fondements sur lesquels s&apos;appuient ensuite les hadiths du Prophète ﷺ.
                </p>

                <HadithCard
                  arabic="فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ"
                  text="Quant à l&apos;orphelin, ne le maltraite pas."
                  source="Coran, sourate Ad-Duha (93:9)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset de la sourate Ad-Duha est adressé directement au Prophète ﷺ, lui-même orphelin. Allah lui rappelle Sa faveur de l&apos;avoir recueilli alors qu&apos;il était orphelin, puis lui ordonne de ne jamais repousser un orphelin. Le verbe <em>taqhar</em> désigne le fait de dominer avec brutalité, de mépriser ou de priver de ses droits. Les savants soulignent que ce verset s&apos;applique à toute la communauté musulmane.
                </p>

                <HadithCard
                  arabic="وَيَسْأَلُونَكَ عَنِ الْيَتَامَىٰ قُلْ إِصْلَاحٌ لَّهُمْ خَيْرٌ وَإِن تُخَالِطُوهُمْ فَإِخْوَانُكُمْ وَاللَّهُ يَعْلَمُ الْمُفْسِدَ مِنَ الْمُصْلِحِ"
                  text="Et ils t&apos;interrogent au sujet des orphelins. Dis : &laquo;&nbsp;Les pourvoir de ce qui est bien est la meilleure action. Si vous vous mêlez à eux, ce sont vos frères.&nbsp;&raquo; Allah distingue celui qui sème le désordre de celui qui fait le bien."
                  source="Coran, sourate Al-Baqara (2:220)"
                />

                <HadithCard
                  arabic="إِنَّ الَّذِينَ يَأْكُلُونَ أَمْوَالَ الْيَتَامَىٰ ظُلْمًا إِنَّمَا يَأْكُلُونَ فِي بُطُونِهِمْ نَارًا وَسَيَصْلَوْنَ سَعِيرًا"
                  text="Ceux qui mangent injustement les biens des orphelins ne font que manger du feu dans leurs ventres. Et ils brûleront bientôt dans les flammes de l&apos;Enfer."
                  source="Coran, sourate An-Nisa (4:10)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces versets coraniques dessinent un cadre clair : l&apos;orphelin est un membre vulnérable de la communauté dont la protection est une obligation collective. Allah promet un châtiment sévère à ceux qui spolient ses biens et une récompense immense à ceux qui le prennent en charge. C&apos;est sur cette base coranique que le Prophète ﷺ a construit ses enseignements détaillés sur le traitement de l&apos;orphelin.
                </p>
              </section>

              {/* ========================================== */}
              {/* SECTION : Le parrain de l'orphelin au Paradis */}
              {/* ========================================== */}
              <section id="parrainage-paradis" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le parrain de l&apos;orphelin au Paradis
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a accordé un rang extraordinaire à celui qui prend en charge un orphelin. Les hadiths suivants montrent que la kafala de l&apos;orphelin est l&apos;une des voies les plus sûres vers le Paradis et la proximité avec le Messager d&apos;Allah ﷺ.
                </p>

                <HadithBlock
                  number={1}
                  title="Moi et le parrain de l&apos;orphelin au Paradis"
                  narrator="Sahl ibn Sa&apos;d"
                  arabic="أَنَا وَكَافِلُ الْيَتِيمِ فِي الْجَنَّةِ هَكَذَا وَأَشَارَ بِالسَّبَّابَةِ وَالْوُسْطَى وَفَرَّجَ بَيْنَهُمَا شَيْئًا"
                  translation="Moi et le parrain de l&apos;orphelin serons au Paradis comme ceci — et il montra l&apos;index et le majeur en les écartant légèrement."
                  source="Sahih Al-Bukhari, n°5304"
                  grade="sahih"
                  explanation="Ce hadith est le plus célèbre sur le sujet de l&apos;orphelin. Le geste du Prophète ﷺ — joindre l&apos;index et le majeur — illustre la proximité extrême entre lui et le parrain de l&apos;orphelin au Paradis. Le léger écart entre les deux doigts rappelle que nul ne peut égaler le rang prophétique, mais que le parrain en sera le plus proche voisin. Les savants soulignent qu&apos;il n&apos;existe presque aucune autre bonne action pour laquelle le Prophète ﷺ ait promis une telle proximité."
                />

                <HadithBlock
                  number={2}
                  title="Le parrain d&apos;un orphelin de sa famille ou d&apos;ailleurs"
                  narrator="Abu Hurayra"
                  arabic="كَافِلُ الْيَتِيمِ لَهُ أَوْ لِغَيْرِهِ أَنَا وَهُوَ كَهَاتَيْنِ فِي الْجَنَّةِ"
                  translation="Le parrain de l&apos;orphelin, qu&apos;il soit de sa famille ou non, sera avec moi comme ces deux-là au Paradis."
                  source="Sahih Muslim, n°2983"
                  grade="sahih"
                  explanation="Ce hadith complète le précédent en précisant que la récompense concerne aussi bien celui qui parraine un orphelin de sa propre famille (neveu, petit-fils) que celui qui prend en charge un orphelin sans lien de parenté. Le narrateur Malik ibn Anas, en rapportant ce hadith, montra ses deux doigts, l&apos;index et le majeur, pour illustrer cette proximité. Les savants y voient un encouragement puissant à la kafala, qu&apos;elle soit intrafamiliale ou communautaire."
                />

                <HadithBlock
                  number={3}
                  title="Celui qui passe sa main sur la tête de l&apos;orphelin"
                  narrator="Abu Umama"
                  arabic="مَنْ مَسَحَ رَأْسَ يَتِيمٍ لَمْ يَمْسَحْهُ إِلَّا لِلَّهِ كَانَ لَهُ بِكُلِّ شَعْرَةٍ مَرَّتْ عَلَيْهَا يَدُهُ حَسَنَاتٌ"
                  translation="Celui qui passe sa main sur la tête d&apos;un orphelin, ne le faisant que pour Allah, aura pour chaque cheveu sur lequel sa main est passée des bonnes actions (hassanat)."
                  source="Musnad Ahmad, n°22207"
                  grade="hasan"
                  explanation="Ce hadith montre que même le geste le plus simple — caresser la tête d&apos;un orphelin — est abondamment récompensé lorsqu&apos;il est fait avec sincérité pour Allah. La mention de &laquo; chaque cheveu &raquo; est une hyperbole prophétique pour exprimer l&apos;immensité de la récompense. Ce hadith invite les musulmans à ne pas sous-estimer les petits gestes de tendresse envers les orphelins : un sourire, une caresse, un mot bienveillant sont autant d&apos;actes d&apos;adoration."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : La meilleure maison  */}
              {/* ============================== */}
              <section id="meilleure-maison" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La meilleure maison en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a établi un critère simple pour distinguer les meilleurs foyers musulmans : le traitement réservé à l&apos;orphelin. Ce critère révèle la place centrale que l&apos;islam accorde à la solidarité envers les plus vulnérables.
                </p>

                <HadithBlock
                  number={4}
                  title="La meilleure et la pire des maisons"
                  narrator="Abu Hurayra"
                  arabic="خَيْرُ بَيْتٍ فِي الْمُسْلِمِينَ بَيْتٌ فِيهِ يَتِيمٌ يُحْسَنُ إِلَيْهِ وَشَرُّ بَيْتٍ فِي الْمُسْلِمِينَ بَيْتٌ فِيهِ يَتِيمٌ يُسَاءُ إِلَيْهِ"
                  translation="La meilleure maison parmi les musulmans est celle dans laquelle se trouve un orphelin qui est bien traité. Et la pire maison parmi les musulmans est celle dans laquelle se trouve un orphelin qui est maltraité."
                  source="Sunan Ibn Majah, n°3679"
                  grade="hasan"
                  explanation="Ce hadith établit un critère moral pour évaluer les foyers musulmans. La présence d&apos;un orphelin n&apos;est pas en soi un bienfait ou un malheur : c&apos;est le traitement qui lui est réservé qui détermine la valeur du foyer. Le Prophète ﷺ utilise un contraste saisissant — la meilleure et la pire des maisons — pour inciter les familles à accueillir des orphelins avec bienveillance. Les savants y voient aussi un avertissement aux tuteurs négligents."
                />

                <HadithBlock
                  number={5}
                  title="Nourrir l&apos;orphelin et le pauvre"
                  narrator="Abu Hurayra"
                  arabic="السَّاعِي عَلَى الْأَرْمَلَةِ وَالْمِسْكِينِ كَالْمُجَاهِدِ فِي سَبِيلِ اللَّهِ أَوْ كَالَّذِي يَصُومُ النَّهَارَ وَيَقُومُ اللَّيْلَ"
                  translation="Celui qui s&apos;efforce de subvenir aux besoins de la veuve et du pauvre est comparable à celui qui combat dans le sentier d&apos;Allah, ou à celui qui jeûne le jour et prie la nuit."
                  source="Sahih Al-Bukhari, n°5353 — Sahih Muslim, n°2982"
                  grade="sahih"
                  explanation="Bien que ce hadith mentionne la veuve et le pauvre, les savants l&apos;appliquent également à l&apos;orphelin, car l&apos;orphelin accompagne souvent la veuve. La comparaison avec le combattant dans le sentier d&apos;Allah et le dévot qui jeûne et prie sans cesse montre le rang immense de cette œuvre de bienfaisance. Le Prophète ﷺ met ainsi sur un pied d&apos;égalité l&apos;effort social et l&apos;effort cultuel, prouvant que l&apos;islam ne sépare pas l&apos;adoration de la solidarité."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh de la kafala, les droits de l&apos;orphelin et les obligations du tuteur avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Attendrir son cœur   */}
              {/* ============================== */}
              <section id="attendrir-coeur" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Attendrir son cœur par l&apos;orphelin
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a enseigné que le contact avec l&apos;orphelin est un remède spirituel puissant. Celui qui souffre de dureté de cœur trouvera dans la compassion envers l&apos;orphelin un moyen de retrouver la tendresse et la miséricorde.
                </p>

                <HadithBlock
                  number={6}
                  title="Si tu veux attendrir ton cœur"
                  narrator="Abu al-Darda&apos;"
                  arabic="أَتُحِبُّ أَنْ يَلِينَ قَلْبُكَ وَتُدْرِكَ حَاجَتَكَ؟ ارْحَمِ الْيَتِيمَ وَامْسَحْ رَأْسَهُ وَأَطْعِمْهُ مِنْ طَعَامِكَ يَلِنْ قَلْبُكَ وَتُدْرِكْ حَاجَتَكَ"
                  translation="Veux-tu que ton cœur s&apos;attendrisse et que tu obtiennes ce dont tu as besoin ? Fais miséricorde à l&apos;orphelin, caresse sa tête et nourris-le de ta nourriture : ton cœur s&apos;attendrira et tu obtiendras ce dont tu as besoin."
                  source="Musnad Ahmad, n°21671 — At-Tabarani, Al-Mu&apos;jam al-Kabir"
                  grade="hasan"
                  explanation="Ce hadith prescrit un remède concret à celui qui se plaint de la dureté de son cœur. Le Prophète ﷺ indique trois actions : faire miséricorde à l&apos;orphelin, lui caresser la tête et le nourrir. Ces gestes physiques et matériels produisent un effet spirituel : l&apos;attendrissement du cœur. Les savants expliquent que le contact avec la souffrance d&apos;autrui brise l&apos;égoïsme et rappelle les bienfaits d&apos;Allah, ce qui purifie le cœur."
                />

                <HadithBlock
                  number={7}
                  title="Le Prophète ﷺ et les enfants orphelins"
                  narrator="Anas ibn Malik"
                  arabic="كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَحْسَنَ النَّاسِ خُلُقًا وَكَانَ لِي أَخٌ يُقَالُ لَهُ أَبُو عُمَيْرٍ فَكَانَ إِذَا جَاءَ قَالَ: يَا أَبَا عُمَيْرٍ مَا فَعَلَ النُّغَيْرُ"
                  translation="Le Prophète ﷺ avait le meilleur caractère. J&apos;avais un petit frère surnommé Abu Umayr. Quand le Prophète ﷺ venait, il lui disait : &laquo;&nbsp;Ô Abu Umayr, qu&apos;a fait le petit oiseau (nughayr) ?&nbsp;&raquo;"
                  source="Sahih Al-Bukhari, n°6129 — Sahih Muslim, n°2150"
                  grade="sahih"
                  explanation="Ce hadith illustre la tendresse du Prophète ﷺ envers les enfants. Abu Umayr était un petit garçon qui avait un oiseau comme animal de compagnie. Le Prophète ﷺ prenait le temps de s&apos;adresser à lui avec affection et humour, en jouant sur les mots (Umayr / nughayr). Ce comportement montre que le Prophète ﷺ n&apos;était pas distant avec les enfants, y compris les plus vulnérables. Il enseignait par l&apos;exemple que l&apos;attention et la tendresse envers les enfants font partie de la Sunna."
                />

                <HadithBlock
                  number={8}
                  title="Celui qui n&apos;est pas miséricordieux"
                  narrator="Abu Hurayra"
                  arabic="قَبَّلَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ الْحَسَنَ بْنَ عَلِيٍّ وَعِنْدَهُ الْأَقْرَعُ بْنُ حَابِسٍ فَقَالَ الْأَقْرَعُ إِنَّ لِي عَشَرَةً مِنَ الْوَلَدِ مَا قَبَّلْتُ مِنْهُمْ أَحَدًا فَنَظَرَ إِلَيْهِ رَسُولُ اللَّهِ ثُمَّ قَالَ مَنْ لَا يَرْحَمُ لَا يُرْحَمُ"
                  translation="Le Messager d&apos;Allah ﷺ embrassa Al-Hasan ibn Ali. Al-Aqra&apos; ibn Habis, qui était présent, dit : &laquo;&nbsp;J&apos;ai dix enfants et je n&apos;ai jamais embrassé aucun d&apos;entre eux.&nbsp;&raquo; Le Prophète ﷺ le regarda et dit : &laquo;&nbsp;Celui qui n&apos;est pas miséricordieux ne recevra pas de miséricorde.&nbsp;&raquo;"
                  source="Sahih Al-Bukhari, n°5997 — Sahih Muslim, n°2318"
                  grade="sahih"
                  explanation="Ce hadith contient un principe fondamental : la miséricorde est réciproque. Celui qui ne fait pas preuve de tendresse envers les enfants — orphelins ou non — se prive lui-même de la miséricorde divine. Le Prophète ﷺ fut choqué par l&apos;attitude d&apos;Al-Aqra&apos;, qui se vantait de sa dureté. Ce hadith s&apos;applique avec une force particulière au traitement de l&apos;orphelin, qui a perdu son premier protecteur et qui a besoin de recevoir la tendresse d&apos;autres adultes."
                />
              </section>

              {/* ====================================== */}
              {/* SECTION : Protection des biens         */}
              {/* ====================================== */}
              <section id="protection-biens" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Protection des biens de l&apos;orphelin
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam ne se contente pas de recommander la bienveillance envers l&apos;orphelin : il impose des obligations juridiques strictes concernant la gestion de ses biens. Le Prophète ﷺ a classé la spoliation des biens de l&apos;orphelin parmi les péchés les plus graves.
                </p>

                <HadithBlock
                  number={9}
                  title="Les sept péchés destructeurs"
                  narrator="Abu Hurayra"
                  arabic="اجْتَنِبُوا السَّبْعَ الْمُوبِقَاتِ قَالُوا يَا رَسُولَ اللَّهِ وَمَا هُنَّ قَالَ الشِّرْكُ بِاللَّهِ وَالسِّحْرُ وَقَتْلُ النَّفْسِ الَّتِي حَرَّمَ اللَّهُ إِلَّا بِالْحَقِّ وَأَكْلُ الرِّبَا وَأَكْلُ مَالِ الْيَتِيمِ وَالتَّوَلِّي يَوْمَ الزَّحْفِ وَقَذْفُ الْمُحْصَنَاتِ الْمُؤْمِنَاتِ الْغَافِلَاتِ"
                  translation="Évitez les sept péchés destructeurs. On demanda : &laquo;&nbsp;Ô Messager d&apos;Allah, quels sont-ils ?&nbsp;&raquo; Il dit : &laquo;&nbsp;Le polythéisme, la sorcellerie, le meurtre interdit par Allah sauf à juste titre, l&apos;usure, la consommation des biens de l&apos;orphelin, la fuite du champ de bataille et l&apos;accusation de fornication des femmes croyantes chastes.&nbsp;&raquo;"
                  source="Sahih Al-Bukhari, n°2766 — Sahih Muslim, n°89"
                  grade="sahih"
                  explanation="Ce hadith classe la consommation des biens de l&apos;orphelin parmi les sept péchés les plus graves en islam, aux côtés du shirk (polythéisme) et du meurtre. Ce rang élevé dans la hiérarchie des péchés montre à quel point l&apos;islam protège les droits financiers de l&apos;orphelin. Le terme &laquo; mubiqat &raquo; (destructeurs) indique que ces péchés détruisent les bonnes actions et mènent à la perdition. Les fuqaha en déduisent que le tuteur doit rendre des comptes précis sur la gestion des biens de l&apos;orphelin."
                />

                <HadithBlock
                  number={10}
                  title="Faites fructifier les biens des orphelins"
                  narrator="Anas ibn Malik"
                  arabic="اتَّجِرُوا فِي أَمْوَالِ الْيَتَامَى لَا تَأْكُلُهَا الزَّكَاةُ"
                  translation="Faites fructifier les biens des orphelins afin que la zakat ne les consume pas."
                  source="Al-Bayhaqi, As-Sunan al-Kubra — At-Tabarani, Al-Mu&apos;jam al-Awsat"
                  grade="hasan"
                  explanation="Ce hadith ordonne aux tuteurs de faire fructifier les biens de l&apos;orphelin par le commerce ou l&apos;investissement. La logique est simple : si les biens restent inactifs, la zakat annuelle obligatoire les réduira progressivement. En les faisant fructifier, le capital se maintient et l&apos;orphelin retrouve son patrimoine intact, voire augmenté, à sa majorité. Les savants y voient la preuve que le tuteur a non seulement l&apos;obligation de préserver les biens, mais aussi de les développer dans l&apos;intérêt de l&apos;enfant."
                />
              </section>

              {/* ======================================= */}
              {/* SECTION : Le Prophète, lui-même orphelin */}
              {/* ======================================= */}
              <section id="prophete-orphelin" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le Prophète ﷺ, lui-même orphelin
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Messager d&apos;Allah ﷺ a vécu l&apos;expérience de l&apos;orphelinat dans sa propre chair. Son père Abdullah est décédé avant sa naissance, et sa mère Amina est morte alors qu&apos;il n&apos;avait que six ans. Cette expérience personnelle a profondément façonné sa sensibilité et ses enseignements sur la question.
                </p>

                <HadithBlock
                  number={11}
                  title="Allah a rappelé au Prophète ﷺ sa condition d&apos;orphelin"
                  narrator="Transmission coranique"
                  arabic="أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ ۝ وَوَجَدَكَ ضَالًّا فَهَدَىٰ ۝ وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ"
                  translation="Ne t&apos;a-t-Il pas trouvé orphelin ? Alors Il t&apos;a recueilli. Ne t&apos;a-t-Il pas trouvé égaré ? Alors Il t&apos;a guidé. Ne t&apos;a-t-Il pas trouvé dans le besoin ? Alors Il t&apos;a enrichi."
                  source="Coran, sourate Ad-Duha (93:6-8)"
                  grade="sahih"
                  explanation="Ces versets résument le parcours du Prophète ﷺ : orphelin recueilli par son grand-père puis son oncle, chercheur de vérité guidé vers la révélation, et homme modeste enrichi par la grâce divine. Allah mentionne l&apos;orphelinat en premier, comme pour souligner que cette épreuve fondatrice a préparé le Prophète ﷺ à sa mission. Les savants expliquent que cette expérience lui a donné une compréhension intime de la souffrance des orphelins et a nourri sa miséricorde légendaire."
                />

                <HadithBlock
                  number={12}
                  title="La prise en charge par Abu Talib"
                  narrator="Ibn &apos;Abbas"
                  arabic="لَمَّا تُوُفِّيَ عَبْدُ الْمُطَّلِبِ أَوْصَى أَبَا طَالِبٍ بِالنَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَكَانَ يُقَدِّمُهُ عَلَى وَلَدِهِ"
                  translation="Lorsque Abd al-Muttalib mourut, il confia le Prophète ﷺ à Abu Talib, qui le préférait à ses propres enfants."
                  source="Al-Bayhaqi, Dala&apos;il an-Nubuwwa — Ibn Hisham, As-Sira an-Nabawiyya"
                  grade="hasan"
                  explanation="Ce récit illustre le modèle de kafala idéal : Abu Talib a pris en charge son neveu orphelin avec un amour qui dépassait celui qu&apos;il portait à ses propres enfants. Il l&apos;a protégé, nourri, éduqué et défendu face aux persécutions des Qurayshites. Ce comportement exemplaire montre que la kafala n&apos;est pas une simple aide matérielle, mais un engagement affectif total. Le Prophète ﷺ n&apos;a jamais oublié cette bonté et a toujours parlé d&apos;Abu Talib avec gratitude."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : La kafala en islam   */}
              {/* ============================== */}
              <section id="kafala" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La kafala (parrainage) de l&apos;orphelin en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La kafala est le dispositif islamique de prise en charge de l&apos;orphelin. Elle se distingue de l&apos;adoption occidentale en ce qu&apos;elle ne modifie pas la filiation de l&apos;enfant. Le kafil (parrain) s&apos;engage à subvenir aux besoins matériels, éducatifs et affectifs de l&apos;orphelin tout en lui conservant son nom de famille biologique.
                </p>

                <HadithBlock
                  number={13}
                  title="La récompense de celui qui dépense pour l&apos;orphelin"
                  narrator="Abu Hurayra"
                  arabic="مَنْ ضَمَّ يَتِيمًا بَيْنَ مُسْلِمَيْنِ فِي طَعَامِهِ وَشَرَابِهِ حَتَّى يَسْتَغْنِيَ عَنْهُ وَجَبَتْ لَهُ الْجَنَّةُ"
                  translation="Celui qui prend en charge un orphelin parmi les musulmans, le nourrissant et l&apos;abreuvant jusqu&apos;à ce qu&apos;il soit autonome, le Paradis lui est garanti."
                  source="Musnad Ahmad, n°8868"
                  grade="hasan"
                  explanation="Ce hadith précise la durée de la kafala : elle s&apos;étend jusqu&apos;à ce que l&apos;orphelin soit autonome, c&apos;est-à-dire qu&apos;il atteigne la puberté et soit capable de subvenir à ses propres besoins. La récompense promise — le Paradis garanti — montre le rang exceptionnel de cet engagement dans la hiérarchie des œuvres pieuses. Les savants soulignent que la kafala englobe la nourriture, le logement, l&apos;éducation et l&apos;accompagnement moral."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants de l&apos;islam ont abondamment commenté les hadiths sur la kafala. Leurs explications permettent de mieux saisir la portée juridique et spirituelle de cette institution.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La kafala de l&apos;orphelin est l&apos;une des plus grandes portes du bien. Le hadith de Sahl ibn Sa&apos;d suffit à montrer son rang : être le voisin du Prophète ﷺ au Paradis est un honneur que seules les actions les plus méritoires procurent.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;L&apos;orphelin dans l&apos;islam n&apos;est pas un fardeau pour la communauté, mais une occasion de gagner l&apos;agrément d&apos;Allah. Celui qui s&apos;en occupe purifie sa richesse et élève son rang auprès d&apos;Allah.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le tuteur de l&apos;orphelin doit agir avec la même prudence qu&apos;un père agissant pour son propre enfant. Il doit préserver ses biens, les faire fructifier et ne rien en prélever sauf dans l&apos;intérêt exclusif de l&apos;enfant.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Qudama, <em>Al-Mughni</em>
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================== */}
              {/* SECTION : Leçons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Enseignements et leçons pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour le musulman soucieux de prendre soin des orphelins :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Parrainer un orphelin pour être voisin du Prophète ﷺ au Paradis
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La kafala de l&apos;orphelin est l&apos;une des rares actions pour lesquelles le Prophète ﷺ a promis sa compagnie directe au Paradis. C&apos;est une opportunité à ne pas manquer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Traiter l&apos;orphelin avec bienveillance et tendresse
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les petits gestes comptent : caresser la tête de l&apos;orphelin, lui sourire, le nourrir de sa propre nourriture. Chaque geste est une hassana inscrite auprès d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Protéger les biens de l&apos;orphelin avec rigueur
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La consommation injuste des biens de l&apos;orphelin est un péché destructeur. Le tuteur doit préserver et faire fructifier ces biens jusqu&apos;à la majorité de l&apos;enfant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Soigner la dureté de cœur par la miséricorde
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Celui qui souffre de dureté de cœur trouvera dans le contact avec l&apos;orphelin un remède spirituel. La compassion envers les vulnérables purifie l&apos;âme et rapproche d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Suivre l&apos;exemple du Prophète ﷺ, orphelin et miséricordieux
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a transformé son épreuve d&apos;orphelinat en source de compassion universelle. Son exemple nous enseigne que les épreuves peuvent devenir des moteurs de bienfaisance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Accueillir l&apos;orphelin dans son foyer
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La meilleure maison en islam est celle qui accueille un orphelin et le traite bien. Ouvrir son foyer à un enfant dans le besoin est un acte qui élève toute la famille.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur l&apos;orphelin dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  description="Découvrez les hadiths authentiques sur l&apos;aumône, la générosité et les récompenses de la sadaqa."
                  href="/hadith-sadaqa-charite-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le bon comportement en islam"
                  description="Les enseignements prophétiques sur le caractère, la douceur et les relations avec autrui."
                  href="/hadith-bon-comportement-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la famille et les liens de parenté"
                  description="Les paroles du Prophète ﷺ sur les droits de la famille, la piété filiale et le maintien des liens."
                  href="/hadith-famille-liens-parente-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
