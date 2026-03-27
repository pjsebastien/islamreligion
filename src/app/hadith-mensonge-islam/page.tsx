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
    "Hadiths sur le mensonge en islam : interdiction et conséquences",
  description:
    "Découvrez les hadiths authentiques sur le mensonge en islam : interdiction formelle, signes de l&apos;hypocrisie, exceptions permises et vertus de la véracité. Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths sur le mensonge en islam : interdiction et conséquences",
    description:
      "Les hadiths authentiques sur le mensonge en islam : interdiction, hypocrisie, exceptions permises et récompenses de la véracité selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-mensonge-islam",
    images: [
      {
        url: "/images/mains-priere-doua-islam-invocation.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-mensonge-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique du mensonge" },
  { id: "interdiction-mensonge", label: "L\u2019interdiction du mensonge" },
  { id: "signes-hypocrite", label: "Les signes de l\u2019hypocrite" },
  { id: "exceptions-permises", label: "Les exceptions permises" },
  { id: "veracite-paradis", label: "La véracité mène au Paradis" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur le mensonge en islam ?",
    answer:
      "Les hadiths les plus importants sur le mensonge incluent celui d\u2019Abdullah ibn Mas\u2019ud sur le mensonge qui mène à la perversité et à l\u2019Enfer (Bukhari 6094), celui d\u2019Abu Hurayra sur les trois signes de l\u2019hypocrite dont le mensonge (Bukhari 33), et celui d\u2019Umm Kulthum sur les exceptions permises pour réconcilier les gens (Muslim 2605). Ces hadiths couvrent l\u2019interdiction, les conséquences et les cas particuliers.",
  },
  {
    question:
      "Le mensonge est-il un péché majeur en islam ?",
    answer:
      "Les savants considèrent le mensonge comme un péché majeur lorsqu\u2019il cause un préjudice grave, comme le faux témoignage ou le mensonge sur Allah et Son Messager. Le mensonge ordinaire est un péché qui, par répétition, peut mener à la perversité (fujur) selon le hadith d\u2019Ibn Mas\u2019ud rapporté par Bukhari et Muslim. Le Prophète \u2018alayhi salatu wa salam a averti que le menteur est inscrit auprès d\u2019Allah comme menteur.",
  },
  {
    question:
      "Peut-on mentir pour réconcilier deux personnes en islam ?",
    answer:
      "Oui, le hadith d\u2019Umm Kulthum bint \u2019Uqba (Muslim 2605) mentionne trois cas où le mensonge est toléré : pour réconcilier les gens, en temps de guerre (stratagème militaire), et entre époux pour préserver l\u2019harmonie conjugale. Les savants précisent qu\u2019il s\u2019agit de recourir au tawriya (double sens, allusion) plutôt qu\u2019au mensonge explicite.",
  },
  {
    question:
      "Que dit le Prophète sur celui qui ment pour faire rire les gens ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a dit : \u00ab Malheur à celui qui parle et ment pour faire rire les gens. Malheur à lui ! Malheur à lui ! \u00bb (Abu Dawud 4990). Ce hadith montre que même le mensonge anodin, à but humoristique, est blâmé en islam. La triple répétition de \u00ab malheur à lui \u00bb souligne la gravité de cette habitude.",
  },
  {
    question:
      "Comment la véracité est-elle récompensée en islam ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a enseigné que la véracité (sidq) mène à la piété (birr), qui elle-même mène au Paradis (Bukhari 6094). Le véridique persévérant est inscrit auprès d\u2019Allah comme siddiq (véridique). La véracité est aussi un attribut des prophètes et des compagnons les plus éminents, comme Abu Bakr as-Siddiq.",
  },
  {
    question:
      "Comment lutter contre le mensonge au quotidien selon la Sunna ?",
    answer:
      "La Sunna recommande de surveiller sa langue, de craindre Allah en toute circonstance, de se rappeler que les anges enregistrent chaque parole, et de s\u2019exercer à la véracité même quand c\u2019est difficile. Le Prophète a conseillé de ne rapporter que ce dont on est sûr et de ne pas mentir même en plaisantant. La fréquentation des gens véridiques est aussi recommandée (Coran 9:119).",
  },
];

export default function HadithMensongeIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-mensonge-islam/#article",
        headline:
          "Hadiths sur le mensonge en islam : interdiction et conséquences",
        description:
          "Découvrez les hadiths authentiques sur le mensonge en islam : interdiction formelle, signes de l\u2019hypocrisie, exceptions permises et vertus de la véracité.",
        image: "/images/mains-priere-doua-islam-invocation.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-mensonge-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-mensonge-islam/#breadcrumb",
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
            name: "Mensonge en islam",
            item: "https://www.islamreligion.fr/hadith-mensonge-islam",
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
          title="Hadiths sur le mensonge en islam"
          subtitle="Les enseignements prophétiques sur l&apos;interdiction du mensonge, les signes de l&apos;hypocrisie, les exceptions permises et les vertus de la véracité selon la Sunna authentique."
          imageSrc="/images/mains-priere-doua-islam-invocation.jpg"
          imageAlt="Hadiths sur le mensonge en islam, interdiction et conséquences"
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
                  Mensonge en islam
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
                    Le mensonge est formellement interdit en islam et le Prophète ﷺ l&apos;a décrit comme un chemin menant à la perversité et à l&apos;Enfer.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le mensonge est l&apos;un des trois signes de l&apos;hypocrite (<em>munafiq</em>) selon le hadith authentique rapporté par Bukhari et Muslim.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Trois cas d&apos;exception sont mentionnés : la réconciliation entre les gens, la guerre et les paroles entre époux pour préserver l&apos;harmonie.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La véracité (<em>sidq</em>) mène à la piété (<em>birr</em>) et au Paradis ; le véridique est inscrit auprès d&apos;Allah comme <em>siddiq</em>.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique du mensonge en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;explorer les hadiths sur le mensonge, il convient de rappeler que le Coran condamne fermement cette pratique. Allah associe le mensonge à l&apos;injustice, à l&apos;hypocrisie et à la mécréance. Plusieurs versets posent les fondements sur lesquels s&apos;appuient les enseignements du Prophète ﷺ concernant la véracité et la condamnation du mensonge.
                </p>

                <HadithCard
                  arabic="يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ"
                  text="Ô vous qui avez cru ! Craignez Allah et soyez avec les véridiques."
                  source="Coran, sourate At-Tawba (9:119)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset est un ordre divin adressé aux croyants. Allah ne se contente pas d&apos;interdire le mensonge : Il ordonne de fréquenter les véridiques et de s&apos;intégrer dans leur cercle. Les savants y voient un double enseignement : être véridique soi-même et choisir un entourage qui valorise la vérité. Le terme <em>sadiqin</em> (véridiques) désigne ceux dont la parole, l&apos;intention et l&apos;action sont en cohérence.
                </p>

                <HadithCard
                  arabic="إِنَّمَا يَفْتَرِي الْكَذِبَ الَّذِينَ لَا يُؤْمِنُونَ بِآيَاتِ اللَّهِ وَأُولَٰئِكَ هُمُ الْكَاذِبُونَ"
                  text="Seuls ceux qui ne croient pas aux signes d&apos;Allah inventent le mensonge, et ce sont eux les menteurs."
                  source="Coran, sourate An-Nahl (16:105)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset établit un lien direct entre le mensonge et l&apos;absence de foi. Allah décrit le mensonge comme une caractéristique de ceux qui rejettent Ses signes, faisant du mensonge un attribut fondamentalement contraire à la nature du croyant. Les commentateurs (<em>mufassirun</em>) soulignent que ce verset a été révélé pour réfuter les accusateurs qui prétendaient que le Prophète ﷺ inventait le Coran, mais sa portée est générale : le mensonge est incompatible avec la foi sincère.
                </p>

                <HadithCard
                  arabic="وَاجْتَنِبُوا قَوْلَ الزُّورِ"
                  text="Et écartez-vous de la parole mensongère."
                  source="Coran, sourate Al-Hajj (22:30)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;expression <em>qawl az-zur</em> (parole mensongère) englobe toute forme de fausseté : le faux témoignage, la calomnie, la flatterie trompeuse et le mensonge ordinaire. Le Prophète ﷺ a d&apos;ailleurs placé le faux témoignage parmi les plus grands péchés, soulignant la continuité entre le message coranique et la Sunna sur cette question.
                </p>
              </section>

              {/* ======================================== */}
              {/* SECTION : L'interdiction du mensonge    */}
              {/* ======================================== */}
              <section id="interdiction-mensonge" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;interdiction du mensonge selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a condamné le mensonge sous toutes ses formes avec une fermeté sans équivoque. Les hadiths suivants établissent que le mensonge est un chemin vers la dépravation morale et l&apos;Enfer, qu&apos;il soit prononcé en plaisantant ou sérieusement. La véracité, au contraire, est le socle de la personnalité du croyant.
                </p>

                <HadithBlock
                  number={1}
                  title="Le mensonge mène à la perversité et à l&apos;Enfer"
                  narrator="Abdullah ibn Mas&apos;ud"
                  arabic="إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ وَإِنَّ الرَّجُلَ لَيَصْدُقُ حَتَّى يُكْتَبَ عِنْدَ اللَّهِ صِدِّيقًا وَإِنَّ الْكَذِبَ يَهْدِي إِلَى الْفُجُورِ وَإِنَّ الْفُجُورَ يَهْدِي إِلَى النَّارِ وَإِنَّ الرَّجُلَ لَيَكْذِبُ حَتَّى يُكْتَبَ عِنْدَ اللَّهِ كَذَّابًا"
                  translation="La véracité mène à la piété et la piété mène au Paradis. L&apos;homme ne cesse d&apos;être véridique jusqu&apos;à ce qu&apos;il soit inscrit auprès d&apos;Allah comme véridique (siddiq). Et le mensonge mène à la perversité (fujur) et la perversité mène à l&apos;Enfer. L&apos;homme ne cesse de mentir jusqu&apos;à ce qu&apos;il soit inscrit auprès d&apos;Allah comme menteur (kadhdhab)."
                  source="Sahih Al-Bukhari, n°6094 — Sahih Muslim, n°2607"
                  grade="sahih"
                  explanation="Ce hadith est le texte fondateur sur la question du mensonge en islam. Il présente deux trajectoires opposées : la véracité, qui engendre la piété et conduit au Paradis, et le mensonge, qui engendre la dépravation et conduit à l&apos;Enfer. Le terme fujur désigne l&apos;ensemble des transgressions morales. Le Prophète ﷺ avertit que le mensonge n&apos;est jamais anodin : par accumulation, il transforme la nature de celui qui le pratique, au point qu&apos;Allah l&apos;enregistre comme menteur. À l&apos;inverse, la persévérance dans la vérité élève le croyant au rang de siddiq, le plus haut degré après la prophétie."
                />

                <HadithBlock
                  number={2}
                  title="Malheur à celui qui ment pour faire rire"
                  narrator="Bahz ibn Hakim, de son grand-père"
                  arabic="وَيْلٌ لِلَّذِي يُحَدِّثُ بِالْحَدِيثِ لِيُضْحِكَ بِهِ الْقَوْمَ فَيَكْذِبُ وَيْلٌ لَهُ وَيْلٌ لَهُ"
                  translation="Malheur à celui qui parle et ment pour faire rire les gens. Malheur à lui ! Malheur à lui !"
                  source="Sunan Abu Dawud, n°4990 — Jami&apos; at-Tirmidhi, n°2315"
                  grade="hasan"
                  explanation="Ce hadith cible une pratique courante : le mensonge à but humoristique. Beaucoup considèrent ce type de mensonge comme inoffensif, mais le Prophète ﷺ le condamne avec une sévérité marquée par la triple répétition de &laquo; malheur à lui &raquo; (wayl lahu). Le terme wayl désigne soit un châtiment terrible, soit une vallée de l&apos;Enfer selon certains commentateurs. Ce hadith enseigne que le mensonge ne devient pas licite parce qu&apos;il est enrobé d&apos;humour. Le croyant peut plaisanter sans mentir, comme le faisait le Prophète ﷺ lui-même."
                />

                <HadithBlock
                  number={3}
                  title="La garantie pour celui qui abandonne le mensonge"
                  narrator="Abu Umama al-Bahili"
                  arabic="أَنَا زَعِيمٌ بِبَيْتٍ فِي رَبَضِ الْجَنَّةِ لِمَنْ تَرَكَ الْمِرَاءَ وَإِنْ كَانَ مُحِقًّا وَبِبَيْتٍ فِي وَسَطِ الْجَنَّةِ لِمَنْ تَرَكَ الْكَذِبَ وَإِنْ كَانَ مَازِحًا وَبِبَيْتٍ فِي أَعْلَى الْجَنَّةِ لِمَنْ حَسَّنَ خُلُقَهُ"
                  translation="Je garantis une maison dans les abords du Paradis à celui qui abandonne la polémique même s&apos;il a raison, une maison au milieu du Paradis à celui qui abandonne le mensonge même en plaisantant, et une maison au sommet du Paradis à celui qui perfectionne son caractère."
                  source="Sunan Abu Dawud, n°4800"
                  grade="hasan"
                  explanation="Ce hadith offre une récompense concrète et progressive. Le Prophète ﷺ utilise le mot za&apos;im (garant), une formule solennelle qui souligne la certitude de la promesse. Abandonner le mensonge, même en plaisantant, donne droit à une demeure au centre du Paradis — un rang supérieur à celui qui abandonne seulement la polémique. Cette gradation montre que le contrôle de la langue est un acte d&apos;adoration de premier plan. Les savants notent que ce hadith complète celui de Bahz ibn Hakim : le premier avertit, le second récompense."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths forment un cadre clair : le mensonge est interdit quelle qu&apos;en soit la forme, y compris la plaisanterie. La véracité, en revanche, est un chemin vers le Paradis. Pour approfondir les vertus du bon comportement dans la Sunna, consultez notre article sur les{" "}
                  <Link href="/hadith-bon-comportement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le bon comportement en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Signes de l'hypocrite */}
              {/* ============================== */}
              <section id="signes-hypocrite" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les signes de l&apos;hypocrite et le mensonge
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;hypocrisie (<em>nifaq</em>) est l&apos;un des fléaux les plus dangereux pour la communauté musulmane. Le Prophète ﷺ a identifié le mensonge comme l&apos;un des signes distinctifs de l&apos;hypocrite. Ces hadiths montrent que le mensonge n&apos;est pas un défaut isolé, mais le symptôme d&apos;une maladie spirituelle profonde qui atteint les fondements mêmes de la foi.
                </p>

                <HadithBlock
                  number={4}
                  title="Les trois signes de l&apos;hypocrite"
                  narrator="Abu Hurayra"
                  arabic="آيَةُ الْمُنَافِقِ ثَلَاثٌ: إِذَا حَدَّثَ كَذَبَ، وَإِذَا وَعَدَ أَخْلَفَ، وَإِذَا اؤْتُمِنَ خَانَ"
                  translation="Les signes de l&apos;hypocrite sont au nombre de trois : lorsqu&apos;il parle, il ment ; lorsqu&apos;il promet, il ne tient pas sa promesse ; et lorsqu&apos;on lui confie un dépôt, il trahit."
                  source="Sahih Al-Bukhari, n°33 — Sahih Muslim, n°59"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus connus sur l&apos;hypocrisie. Le mensonge y figure en première position, comme la porte d&apos;entrée vers les autres trahisons. Les savants distinguent l&apos;hypocrisie de croyance (nifaq i&apos;tiqadi), qui exclut de l&apos;islam, et l&apos;hypocrisie d&apos;action (nifaq &apos;amali), qui concerne le musulman pécheur présentant ces traits sans renier sa foi. Ibn Taymiyya explique que celui qui cumule ces trois signes possède l&apos;hypocrisie complète en acte, même s&apos;il reste musulman. Ce hadith invite chaque croyant à un examen de conscience régulier."
                />

                <HadithBlock
                  number={5}
                  title="Quatre traits de l&apos;hypocrite accompli"
                  narrator="Abdullah ibn &apos;Amr"
                  arabic="أَرْبَعٌ مَنْ كُنَّ فِيهِ كَانَ مُنَافِقًا خَالِصًا، وَمَنْ كَانَتْ فِيهِ خَصْلَةٌ مِنْهُنَّ كَانَتْ فِيهِ خَصْلَةٌ مِنَ النِّفَاقِ حَتَّى يَدَعَهَا: إِذَا اؤْتُمِنَ خَانَ، وَإِذَا حَدَّثَ كَذَبَ، وَإِذَا عَاهَدَ غَدَرَ، وَإِذَا خَاصَمَ فَجَرَ"
                  translation="Quatre traits : celui qui les réunit tous est un hypocrite accompli, et celui qui en possède un seul possède un trait d&apos;hypocrisie jusqu&apos;à ce qu&apos;il l&apos;abandonne : lorsqu&apos;on lui confie un dépôt, il trahit ; lorsqu&apos;il parle, il ment ; lorsqu&apos;il fait un pacte, il le rompt ; et lorsqu&apos;il se dispute, il se montre pervers."
                  source="Sahih Al-Bukhari, n°34 — Sahih Muslim, n°58"
                  grade="sahih"
                  explanation="Ce hadith complète le précédent en ajoutant un quatrième signe : la perversité dans les disputes (fujur). Le Prophète ﷺ précise que posséder ne serait-ce qu&apos;un seul de ces traits constitue &laquo; un trait d&apos;hypocrisie &raquo;, ce qui est un avertissement redoutable. Les savants, dont l&apos;imam An-Nawawi, insistent sur le fait que ce hadith ne signifie pas que tout menteur est un mécréant, mais que le mensonge est une caractéristique de l&apos;hypocrisie dont le croyant sincère doit absolument se purifier."
                />

                <HadithBlock
                  number={6}
                  title="Le Prophète ﷺ n&apos;a jamais menti"
                  narrator="Abdullah ibn Abi al-Hamsa"
                  arabic="وَاعَدْتُ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مَوْعِدًا قَبْلَ أَنْ يُبْعَثَ فَبَقِيَتْ لَهُ أَيَّامٌ فَجِئْتُهُ فِي الْيَوْمِ الثَّالِثِ فَقَالَ: يَا فَتَى لَقَدْ شَقَقْتَ عَلَيَّ أَنَا هَاهُنَا مُنْذُ ثَلَاثَةِ أَيَّامٍ أَنْتَظِرُكَ"
                  translation="J&apos;avais pris rendez-vous avec le Prophète ﷺ avant sa mission prophétique. Des jours s&apos;écoulèrent et je vins le troisième jour. Il me dit : &laquo; Jeune homme, tu m&apos;as mis en difficulté ! Je suis ici depuis trois jours à t&apos;attendre. &raquo;"
                  source="Sunan Abu Dawud, n°4996"
                  grade="hasan"
                  explanation="Ce récit illustre la véracité absolue du Prophète ﷺ, même avant le début de sa mission. Il a attendu trois jours à un lieu de rendez-vous plutôt que de manquer à sa parole. Ce hadith montre que la véracité et le respect des engagements n&apos;étaient pas seulement des commandements qu&apos;il transmettait, mais des qualités qu&apos;il incarnait dans sa vie personnelle. Les savants y voient la preuve que la véracité est un trait de caractère naturel des prophètes, antérieur à la révélation."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez la science du hadith, le bon comportement et la purification de l&apos;âme avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Exceptions permises  */}
              {/* ============================== */}
              <section id="exceptions-permises" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les exceptions permises au mensonge
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Malgré l&apos;interdiction stricte du mensonge, la jurisprudence islamique reconnaît des situations exceptionnelles où une forme de dissimulation est tolérée. Ces exceptions sont encadrées par des hadiths authentiques et limitées à des cas précis où le bien obtenu dépasse le mal du mensonge. Les savants recommandent toutefois de recourir au <em>tawriya</em> (double sens, allusion) plutôt qu&apos;au mensonge explicite.
                </p>

                <HadithBlock
                  number={7}
                  title="Trois cas où le mensonge est toléré"
                  narrator="Umm Kulthum bint &apos;Uqba"
                  arabic="لَيْسَ الْكَذَّابُ الَّذِي يُصْلِحُ بَيْنَ النَّاسِ فَيَنْمِي خَيْرًا أَوْ يَقُولُ خَيْرًا"
                  translation="N&apos;est pas menteur celui qui réconcilie les gens en transmettant du bien ou en disant du bien."
                  source="Sahih Al-Bukhari, n°2692 — Sahih Muslim, n°2605"
                  grade="sahih"
                  explanation="Ce hadith est le texte de référence sur les exceptions au mensonge. La narratrice, Umm Kulthum bint &apos;Uqba, ajoute dans la version de Muslim qu&apos;elle n&apos;a entendu le Prophète ﷺ autoriser le mensonge que dans trois cas : la réconciliation entre les gens, la guerre et les paroles de l&apos;homme à son épouse (et inversement). Le terme &laquo; n&apos;est pas menteur &raquo; (laysa al-kadhdhab) indique que cette personne n&apos;est pas considérée comme menteuse aux yeux d&apos;Allah. Les savants précisent que la réconciliation vise à éteindre les conflits en rapportant à chaque partie le bien que l&apos;autre dit d&apos;elle, même si c&apos;est embelli."
                />

                <HadithBlock
                  number={8}
                  title="La ruse en temps de guerre"
                  narrator="Jabir ibn Abdullah"
                  arabic="الْحَرْبُ خَدْعَةٌ"
                  translation="La guerre est ruse (stratégie)."
                  source="Sahih Al-Bukhari, n°3029 — Sahih Muslim, n°1739"
                  grade="sahih"
                  explanation="Ce hadith concis établit que les stratagèmes militaires, y compris la dissimulation d&apos;informations, sont permis en temps de guerre. Le mot khud&apos;a (ruse) ne signifie pas tricherie, mais stratégie et tromperie de l&apos;ennemi, ce qui est une nécessité militaire reconnue par toutes les civilisations. Les savants limitent cette permission au contexte de la guerre et refusent de l&apos;étendre aux affaires civiles. Ka&apos;b ibn Malik rapporte que le Prophète ﷺ utilisait des allusions pour dissimuler la direction de ses expéditions, sans jamais mentir ouvertement."
                />

                <HadithBlock
                  number={9}
                  title="Les paroles entre époux"
                  narrator="Asma bint Yazid"
                  arabic="لَا يَحِلُّ الْكَذِبُ إِلَّا فِي ثَلَاثٍ: يُحَدِّثُ الرَّجُلُ امْرَأَتَهُ لِيُرْضِيَهَا، وَالْكَذِبُ فِي الْحَرْبِ، وَالْكَذِبُ لِيُصْلِحَ بَيْنَ النَّاسِ"
                  translation="Le mensonge n&apos;est permis que dans trois cas : l&apos;homme qui parle à son épouse pour la satisfaire, le mensonge en temps de guerre, et le mensonge pour réconcilier les gens."
                  source="Jami&apos; at-Tirmidhi, n°1939"
                  grade="hasan"
                  explanation="Ce hadith explicite les trois exceptions avec une formulation plus détaillée. La mention des paroles entre époux concerne les compliments, les expressions d&apos;amour et les promesses destinées à préserver l&apos;harmonie conjugale. Les savants, dont Ibn al-Qayyim, précisent que cette exception vise les paroles de tendresse (&laquo; tu es la plus belle &raquo;) et non la dissimulation de fautes graves ou la tromperie financière. Le principe reste que la vérité est la norme et que ces exceptions sont des concessions limitées à des situations où le mensonge prévient un mal plus grand."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces exceptions ne doivent pas être détournées de leur finalité. Les savants insistent sur le recours au <em>tawriya</em> (utiliser des mots à double sens) plutôt qu&apos;au mensonge explicite. Le mensonge reste interdit dans toutes les autres situations, y compris les affaires commerciales, le témoignage et les relations sociales. Pour approfondir la question des péchés de la langue, consultez notre article sur les{" "}
                  <Link href="/hadith-medisance-calomnie-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la médisance et la calomnie en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Véracité et Paradis  */}
              {/* ============================== */}
              <section id="veracite-paradis" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La véracité mène au Paradis
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si les hadiths précédents mettent en lumière les dangers du mensonge, ceux qui suivent valorisent la vertu opposée : la véracité (<em>sidq</em>). Le Prophète ﷺ a encouragé les croyants à cultiver cette qualité, promettant des récompenses immenses à ceux qui s&apos;y tiennent avec constance.
                </p>

                <HadithBlock
                  number={10}
                  title="La véracité guide vers la piété"
                  narrator="Abdullah ibn Mas&apos;ud"
                  arabic="عَلَيْكُمْ بِالصِّدْقِ فَإِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ"
                  translation="Attachez-vous à la véracité, car la véracité guide vers la piété, et la piété guide vers le Paradis."
                  source="Sahih Muslim, n°2607"
                  grade="sahih"
                  explanation="Cette partie du hadith d&apos;Ibn Mas&apos;ud, déjà cité pour sa dimension d&apos;avertissement, mérite d&apos;être isolée pour sa dimension d&apos;encouragement. Le verbe &laquo; attachez-vous &raquo; (&apos;alaykum) est un impératif qui montre que la véracité demande un effort conscient et continu. La chaîne sidq → birr → janna (véracité → piété → Paradis) est un itinéraire spirituel complet. Le birr englobe toutes les bonnes actions : prière, aumône, bon caractère, patience. La véracité en est la porte d&apos;entrée, car sans honnêteté, aucune vertu n&apos;est authentique."
                />

                <HadithBlock
                  number={11}
                  title="Le commerçant véridique sera avec les prophètes"
                  narrator="Abu Sa&apos;id al-Khudri"
                  arabic="التَّاجِرُ الصَّدُوقُ الْأَمِينُ مَعَ النَّبِيِّينَ وَالصِّدِّيقِينَ وَالشُّهَدَاءِ"
                  translation="Le commerçant véridique et digne de confiance sera avec les prophètes, les véridiques et les martyrs."
                  source="Jami&apos; at-Tirmidhi, n°1209"
                  grade="hasan"
                  explanation="Ce hadith montre que la véracité dans le commerce — domaine où la tentation du mensonge est forte — élève le croyant à un rang extraordinaire. Être compté parmi les prophètes, les siddiqin et les martyrs le Jour de la Résurrection est une récompense immense, proportionnelle à la difficulté de rester honnête dans les transactions. Les savants y voient la preuve que la véracité n&apos;est pas seulement une vertu personnelle, mais une vertu sociale qui préserve la confiance au sein de la communauté. Ce hadith est aussi un rappel pour les commerçants musulmans : tricher, mentir sur la qualité d&apos;un produit ou dissimuler ses défauts les prive de cette récompense."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La véracité est donc bien plus qu&apos;un simple trait de caractère : c&apos;est un acte d&apos;adoration qui rapproche d&apos;Allah et du Paradis. Le croyant qui s&apos;attache à la vérité en toute circonstance suit le chemin des prophètes et des compagnons. Pour découvrir d&apos;autres paroles prophétiques sur les vertus, consultez notre{" "}
                  <Link href="/hadith-prophete-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    recueil de hadiths du Prophète Muhammad ﷺ
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le mensonge
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur le mensonge. Leurs explications permettent de saisir la portée juridique et spirituelle de ces enseignements prophétiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le mensonge est la racine de toute perversité. Lorsqu&apos;un homme s&apos;y habitue, il perd la confiance des gens et la sienne propre. Le Prophète ﷺ a dit que le menteur est inscrit comme tel auprès d&apos;Allah, ce qui signifie que le mensonge affecte le registre même de la personne dans le monde invisible.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Les exceptions au mensonge sont strictement limitées aux trois cas mentionnés par le hadith. Et même dans ces cas, le croyant doit recourir au tawriya (double sens) autant que possible, car le mensonge explicite reste détestable en toute circonstance. La permission n&apos;est pas un encouragement, mais une concession face à la nécessité.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Zad al-Ma&apos;ad</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La véracité est le fondement de toutes les vertus et le mensonge est le fondement de tous les vices. Celui qui maîtrise sa langue et s&apos;astreint à la vérité verra les autres vertus s&apos;aligner naturellement, car la véracité exige le courage, la patience et la crainte d&apos;Allah.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que les savants traitent le mensonge comme un sujet transversal qui touche à la foi, au droit, à l&apos;éthique et à la spiritualité. La condamnation du mensonge traverse les quatre écoles juridiques sans divergence significative, ce qui témoigne de l&apos;unanimité de la communauté savante sur cette question.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Lecons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques pour le quotidien
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés permet de dégager des leçons concrètes pour la vie du musulman :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Surveiller chaque parole
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le mensonge commence souvent par des exagérations ou des approximations. Le croyant doit prendre l&apos;habitude de peser ses mots et de ne rapporter que ce dont il est sûr.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Bannir le mensonge humoristique
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ plaisantait sans jamais mentir. L&apos;humour ne justifie pas la fausseté. Il est possible de faire rire sans inventer de fausses histoires ni déformer la réalité.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Examiner sa conscience face à l&apos;hypocrisie
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les signes de l&apos;hypocrite (mensonge, trahison, non-respect des promesses) doivent servir de miroir. Le croyant sincère se remet régulièrement en question pour purifier son comportement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Utiliser les exceptions avec parcimonie
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les trois cas d&apos;exception (réconciliation, guerre, époux) ne sont pas des portes ouvertes au mensonge. Le recours au tawriya (double sens) est toujours préférable au mensonge explicite.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Être véridique dans le commerce
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le commerçant honnête sera avec les prophètes au Jour du Jugement. Cacher les défauts d&apos;un produit, gonfler les prix ou faire de la publicité mensongère sont des formes de mensonge condamnées par la Sunna.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Éduquer les enfants à la véracité
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a enseigné qu&apos;appeler un enfant en lui promettant quelque chose sans le donner est une forme de mensonge. L&apos;éducation à la vérité commence dès l&apos;enfance, par l&apos;exemple parental.
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
                  description="Comprenez les hadiths sur le mensonge et la véracité dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  description="Les enseignements prophétiques sur les vertus du caractère, la douceur et la bienveillance."
                  href="/hadith-bon-comportement-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la médisance et la calomnie en islam"
                  description="Les avertissements du Prophète ﷺ contre la ghiba, la namima et les péchés de la langue."
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
