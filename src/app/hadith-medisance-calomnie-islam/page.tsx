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
    "Hadiths sur la médisance et la calomnie en islam : guide complet",
  description:
    "Découvrez les hadiths authentiques sur la médisance (gheeba), la calomnie (buhtan) et la namima en islam. Texte arabe, traduction française et explications détaillées des savants.",
  openGraph: {
    title:
      "Hadiths sur la médisance et la calomnie en islam : guide complet",
    description:
      "Les hadiths authentiques sur la médisance, la calomnie et les commérages en islam : définitions, châtiments, exceptions et repentir selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-medisance-calomnie-islam",
    images: [
      {
        url: "/images/coran-shahada-calligraphie-fond-beige.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-medisance-calomnie-islam",
  },
};

const tocItems = [
  { id: "definitions", label: "Définitions : gheeba, buhtan et namima" },
  { id: "gravite", label: "Gravité de la médisance" },
  { id: "chatiments", label: "Châtiments de la médisance et de la calomnie" },
  { id: "langue", label: "Le contrôle de la langue" },
  { id: "exceptions", label: "Quand la gheeba est permise" },
  { id: "repentir", label: "Le repentir de la médisance" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quelle est la différence entre la médisance (gheeba) et la calomnie (buhtan) en islam ?",
    answer:
      "La médisance (gheeba) consiste à mentionner votre frère en son absence par quelque chose qu\u2019il n\u2019aimerait pas, même si c\u2019est vrai. La calomnie (buhtan) consiste à dire quelque chose de faux sur votre frère. Le Prophète \u2018alayhi salatu wa salam a clarifié cette distinction dans un hadith rapporté par Muslim (n\u00b02589). La calomnie est donc plus grave que la médisance, car elle combine le péché de la médisance et celui du mensonge.",
  },
  {
    question:
      "Quels sont les châtiments réservés aux médisants selon les hadiths ?",
    answer:
      "Les hadiths décrivent plusieurs châtiments : le médisant est comparé à celui qui mange la chair de son frère mort (Coran 49:12), il sera griffé au visage avec des ongles de cuivre le Jour du Jugement (Abu Dawud n\u00b04878), et ses bonnes actions seront transférées à ceux qu\u2019il a lésés, comme dans le hadith du musulman en faillite (Muslim n\u00b02581). La médisance dévore les bonnes actions comme le feu dévore le bois sec.",
  },
  {
    question:
      "La médisance est-elle parfois autorisée en islam ?",
    answer:
      "Oui, les savants ont identifié six exceptions où la gheeba est permise : se plaindre d\u2019une injustice auprès d\u2019un juge, demander de l\u2019aide pour changer un blâmable, demander une fatwa, mettre en garde contre un mal, mentionner une personne connue par un défaut physique (pour l\u2019identifier), et avertir contre un innovateur ou un pécheur public. Ces exceptions ont été compilées par l\u2019imam An-Nawawi dans Al-Adhkar.",
  },
  {
    question:
      "Comment se repentir de la médisance en islam ?",
    answer:
      "Le repentir de la médisance comprend plusieurs étapes : regretter sincèrement, prendre la ferme résolution de ne plus recommencer, demander pardon à Allah, et si possible, demander pardon à la personne lésée. Si demander pardon à la personne risque de causer un plus grand mal, il est recommandé de faire des invocations en sa faveur et de mentionner ses qualités dans les mêmes assemblées où l\u2019on avait médit d\u2019elle.",
  },
  {
    question:
      "Qu\u2019est-ce que la namima (les commérages) en islam ?",
    answer:
      "La namima est le fait de rapporter les paroles d\u2019une personne à une autre dans le but de semer la discorde entre elles. Le Prophète a dit que le namam (celui qui propage les commérages) n\u2019entrera pas au Paradis (Bukhari n\u00b06056, Muslim n\u00b0105). La namima est considérée comme l\u2019un des plus grands péchés car elle brise les liens familiaux et communautaires.",
  },
  {
    question:
      "Est-ce de la médisance si ce que je dis est vrai ?",
    answer:
      "Oui, c\u2019est précisément la définition de la médisance en islam. Le Prophète a expliqué que si ce que l\u2019on dit est vrai, c\u2019est de la gheeba (médisance), et si c\u2019est faux, c\u2019est du buhtan (calomnie), qui est encore plus grave (Muslim n\u00b02589). Le simple fait que l\u2019information soit vraie ne la rend pas licite à rapporter en l\u2019absence de la personne concernée.",
  },
  {
    question:
      "Quels versets du Coran interdisent la médisance ?",
    answer:
      "Le verset le plus célèbre est celui de la sourate Al-Hujurat (49:12) où Allah compare la médisance au fait de manger la chair de son frère mort. Il y a également le verset de la sourate Al-Humazah (104:1) qui menace de malheur tout calomniateur, et le verset de la sourate Al-Qalam (68:11) qui blâme ceux qui sont des commères et des calomniateurs.",
  },
  {
    question:
      "Comment protéger sa langue de la médisance au quotidien ?",
    answer:
      "Les hadiths recommandent plusieurs pratiques : ne parler qu\u2019en bien ou se taire (Bukhari n\u00b06018), se rappeler que chaque parole est enregistrée par les anges, méditer sur les conséquences de la médisance pour ses bonnes actions, s\u2019éloigner des assemblées de médisance, occuper sa langue par le dhikr (évocation d\u2019Allah) et les invocations, et faire preuve d\u2019empathie en se mettant à la place de la personne visée.",
  },
];

export default function HadithMedisanceCalomnieIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-medisance-calomnie-islam/#article",
        headline:
          "Hadiths sur la médisance et la calomnie en islam : guide complet",
        description:
          "Découvrez les hadiths authentiques sur la médisance (gheeba), la calomnie (buhtan) et la namima en islam.",
        image: "/images/coran-shahada-calligraphie-fond-beige.jpg",
        datePublished: "2026-04-25",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-medisance-calomnie-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-medisance-calomnie-islam/#breadcrumb",
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
            name: "Hadiths sur la médisance et la calomnie",
            item: "https://www.islamreligion.fr/hadith-medisance-calomnie-islam",
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
          title="Hadiths sur la médisance et la calomnie en islam"
          subtitle="Les enseignements prophétiques sur la gheeba, le buhtan et la namima : définitions, gravité, châtiments, exceptions et repentir selon la Sunna authentique."
          imageSrc="/images/coran-shahada-calligraphie-fond-beige.jpg"
          imageAlt="Hadiths sur la médisance et la calomnie en islam, enseignements prophétiques"
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
                  Hadiths sur la médisance et la calomnie
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
                    La médisance (gheeba) consiste à mentionner son frère en son absence par ce qu&apos;il déteste, même si c&apos;est vrai. Si c&apos;est faux, c&apos;est de la calomnie (buhtan).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Coran compare la médisance au fait de manger la chair de son frère mort, et les hadiths décrivent des châtiments sévères pour ceux qui s&apos;y adonnent.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La médisance dévore les bonnes actions : le &laquo;&nbsp;musulman en faillite&nbsp;&raquo; est celui qui arrive le Jour du Jugement avec des prières et des aumônes, mais qui a médit, calomnié et insulté les autres.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les savants ont identifié six cas où la gheeba est permise, mais le principe fondamental reste l&apos;interdiction stricte de cette pratique.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Définitions          */}
              {/* ============================== */}
              <section id="definitions" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Définitions : gheeba, buhtan et namima
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths en détail, il est essentiel de distinguer trois notions souvent confondues dans la langue courante. La <em>gheeba</em> (médisance), le <em>buhtan</em> (calomnie) et la <em>namima</em> (rapportage, commérages) sont trois péchés distincts de la langue, chacun ayant sa propre définition et sa propre gravité dans la tradition prophétique.
                </p>

                <HadithCard
                  arabic="يَا أَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِّنَ الظَّنِّ إِنَّ بَعْضَ الظَّنِّ إِثْمٌ وَلَا تَجَسَّسُوا وَلَا يَغْتَب بَّعْضُكُم بَعْضًا أَيُحِبُّ أَحَدُكُمْ أَن يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًا فَكَرِهْتُمُوهُ"
                  text="Ô vous qui croyez ! Évitez de trop conjecturer, car une partie de la conjecture est péché. Et n&apos;espionnez pas, et ne médisez pas les uns des autres. L&apos;un de vous aimerait-il manger la chair de son frère mort ? Vous en auriez horreur."
                  source="Coran, sourate Al-Hujurat (49:12)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondateur lie trois interdictions : la suspicion excessive, l&apos;espionnage et la médisance. La métaphore finale est d&apos;une puissance saisissante : médire de son frère en son absence, c&apos;est comme dévorer sa chair alors qu&apos;il est mort, c&apos;est-à-dire incapable de se défendre. C&apos;est sur cette base coranique que le Prophète ﷺ a défini précisément chaque notion.
                </p>

                <HadithBlock
                  number={1}
                  title="La définition prophétique de la médisance"
                  narrator="Abu Hurayra"
                  arabic="أَتَدْرُونَ مَا الْغِيبَةُ؟ قَالُوا: اللَّهُ وَرَسُولُهُ أَعْلَمُ. قَالَ: ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ. قِيلَ: أَفَرَأَيْتَ إِنْ كَانَ فِي أَخِي مَا أَقُولُ؟ قَالَ: إِنْ كَانَ فِيهِ مَا تَقُولُ فَقَدِ اغْتَبْتَهُ، وَإِنْ لَمْ يَكُنْ فِيهِ فَقَدْ بَهَتَّهُ"
                  translation="Savez-vous ce qu&apos;est la médisance ? Ils dirent : Allah et Son Messager savent mieux. Il dit : c&apos;est le fait de mentionner ton frère par ce qu&apos;il déteste. On lui dit : et si ce que je dis de mon frère est vrai ? Il dit : si ce que tu dis est en lui, tu as médit de lui, et si ce n&apos;est pas en lui, tu l&apos;as calomnié."
                  source="Sahih Muslim, n°2589"
                  grade="sahih"
                  explanation="Ce hadith est la référence fondamentale sur la définition de la gheeba en islam. Le Prophète ﷺ utilise la méthode pédagogique de la question pour attirer l&apos;attention des Compagnons. La définition est limpide : toute mention d&apos;un absent par ce qu&apos;il n&apos;aimerait pas entendre constitue de la gheeba, que ce soit au sujet de son physique, de sa religion, de son comportement, de sa famille ou de ses biens. Le hadith distingue ensuite clairement la gheeba (vérité désagréable) du buhtan (mensonge sur autrui), ce dernier étant encore plus grave car il cumule deux péchés."
                />

                <HadithBlock
                  number={2}
                  title="Le colporteur de propos n&apos;entrera pas au Paradis"
                  narrator="Hudhayfa ibn al-Yaman"
                  arabic="لَا يَدْخُلُ الْجَنَّةَ نَمَّامٌ"
                  translation="Le colporteur de propos (namam) n&apos;entrera pas au Paradis."
                  source="Sahih Al-Bukhari, n°6056 — Sahih Muslim, n°105"
                  grade="sahih"
                  explanation="Ce hadith bref mais d&apos;une gravité extrême concerne la namima : le fait de rapporter les paroles d&apos;une personne à une autre pour semer la discorde. La menace d&apos;être privé du Paradis montre que ce péché fait partie des grands péchés (kaba&apos;ir). La namima est plus destructrice que la gheeba car elle vise délibérément à briser les liens entre les gens. Les savants précisent que &laquo;&nbsp;n&apos;entrera pas au Paradis&nbsp;&raquo; signifie qu&apos;il n&apos;y entrera pas parmi les premiers, ou qu&apos;il est sous la menace d&apos;un châtiment, sans que cela implique l&apos;éternité en Enfer pour le musulman."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces deux hadiths posent les fondements de la compréhension des péchés de la langue en islam. La gheeba concerne ce que l&apos;on dit en l&apos;absence d&apos;une personne, le buhtan est la gheeba mensongère, et la namima est le rapportage de propos dans le but de nuire. Pour approfondir les enseignements prophétiques sur le mensonge, consultez notre article sur les{" "}
                  <Link href="/hadith-mensonge-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le mensonge en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Gravité              */}
              {/* ============================== */}
              <section id="gravite" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Gravité de la médisance dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les hadiths soulignent la gravité de la médisance en la comparant à des actes extrêmement répréhensibles. Le Prophète ﷺ n&apos;a pas ménagé ses avertissements pour faire prendre conscience aux musulmans de la dangerosité de ce péché qui ronge la communauté de l&apos;intérieur.
                </p>

                <HadithBlock
                  number={3}
                  title="La médisance est pire que l&apos;adultère"
                  narrator="Abu Sa&apos;id al-Khudri et Jabir ibn &apos;Abdillah"
                  arabic="الْغِيبَةُ أَشَدُّ مِنَ الزِّنَا. قَالُوا: يَا رَسُولَ اللَّهِ وَكَيْفَ الْغِيبَةُ أَشَدُّ مِنَ الزِّنَا؟ قَالَ: إِنَّ الرَّجُلَ يَزْنِي ثُمَّ يَتُوبُ فَيَتُوبُ اللَّهُ عَلَيْهِ، وَإِنَّ صَاحِبَ الْغِيبَةِ لَا يُغْفَرُ لَهُ حَتَّى يَغْفِرَ لَهُ صَاحِبُهُ"
                  translation="La médisance est pire que l&apos;adultère. Ils dirent : Ô Messager d&apos;Allah, comment la médisance peut-elle être pire que l&apos;adultère ? Il dit : l&apos;homme commet l&apos;adultère puis se repent et Allah accepte son repentir, mais celui qui médit ne sera pas pardonné tant que celui dont il a médit ne lui aura pas pardonné."
                  source="Rapporté par al-Bayhaqi dans Shu&apos;ab al-Iman, n°6741"
                  grade="hasan"
                  explanation="Ce hadith saisissant compare la médisance à l&apos;adultère pour en montrer la gravité particulière. La raison est que l&apos;adultère est un péché entre le serviteur et Allah : le repentir sincère suffit. La médisance, en revanche, implique un droit d&apos;autrui (haqq al-&apos;abd) qui ne peut être effacé que par le pardon de la personne lésée. Ce hadith rappelle que les péchés qui touchent aux droits d&apos;autrui sont plus difficiles à expier que ceux qui ne concernent que le rapport à Allah."
                />

                <HadithBlock
                  number={4}
                  title="Le musulman en faillite"
                  narrator="Abu Hurayra"
                  arabic="أَتَدْرُونَ مَا الْمُفْلِسُ؟ قَالُوا: الْمُفْلِسُ فِينَا مَنْ لَا دِرْهَمَ لَهُ وَلَا مَتَاعَ. فَقَالَ: إِنَّ الْمُفْلِسَ مِنْ أُمَّتِي يَأْتِي يَوْمَ الْقِيَامَةِ بِصَلَاةٍ وَصِيَامٍ وَزَكَاةٍ، وَيَأْتِي قَدْ شَتَمَ هَذَا وَقَذَفَ هَذَا وَأَكَلَ مَالَ هَذَا وَسَفَكَ دَمَ هَذَا وَضَرَبَ هَذَا، فَيُعْطَى هَذَا مِنْ حَسَنَاتِهِ وَهَذَا مِنْ حَسَنَاتِهِ، فَإِنْ فَنِيَتْ حَسَنَاتُهُ قَبْلَ أَنْ يُقْضَى مَا عَلَيْهِ أُخِذَ مِنْ خَطَايَاهُمْ فَطُرِحَتْ عَلَيْهِ ثُمَّ طُرِحَ فِي النَّارِ"
                  translation="Savez-vous qui est le musulman en faillite ? Ils dirent : le musulman en faillite parmi nous est celui qui n&apos;a ni dirham ni bien. Il dit : le musulman en faillite de ma communauté est celui qui viendra le Jour de la Résurrection avec des prières, des jeûnes et des aumônes, mais il aura insulté celui-ci, calomnié celui-là, dévoré les biens de celui-ci, versé le sang de celui-là et frappé cet autre. On donnera à chacun d&apos;eux de ses bonnes actions, et si ses bonnes actions s&apos;épuisent avant qu&apos;il n&apos;ait réglé ce qu&apos;il doit, on prendra des péchés de ses victimes et on les lui chargera, puis il sera jeté en Enfer."
                  source="Sahih Muslim, n°2581"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus marquants de toute la Sunna sur les droits d&apos;autrui. Le Prophète ﷺ redéfinit la notion de faillite : ce n&apos;est pas la pauvreté matérielle, mais la perte de toutes ses bonnes actions à cause des torts causés aux autres. La médisance, l&apos;insulte et la calomnie figurent en tête de ces torts. Ce hadith montre que les actes d&apos;adoration (prière, jeûne, zakat) ne suffisent pas si l&apos;on bafoue les droits des gens. Les bonnes actions sont littéralement transférées aux victimes, et si elles ne suffisent pas, les péchés des victimes sont chargés sur le médisant."
                />

                <HadithBlock
                  number={5}
                  title="La médisance dévore les bonnes actions"
                  narrator="Anas ibn Malik"
                  arabic="لَمَّا عُرِجَ بِي مَرَرْتُ بِقَوْمٍ لَهُمْ أَظْفَارٌ مِنْ نُحَاسٍ يَخْمِشُونَ وُجُوهَهُمْ وَصُدُورَهُمْ فَقُلْتُ: مَنْ هَؤُلَاءِ يَا جِبْرِيلُ؟ قَالَ: هَؤُلَاءِ الَّذِينَ يَأْكُلُونَ لُحُومَ النَّاسِ وَيَقَعُونَ فِي أَعْرَاضِهِمْ"
                  translation="Lors de mon ascension nocturne, je suis passé devant des gens qui avaient des ongles de cuivre avec lesquels ils se griffaient le visage et la poitrine. J&apos;ai dit : qui sont ceux-là, ô Jibril ? Il dit : ce sont ceux qui mangent la chair des gens et portent atteinte à leur honneur."
                  source="Sunan Abu Dawud, n°4878"
                  grade="sahih"
                  explanation="Ce hadith relate une vision que le Prophète ﷺ a eue lors du voyage nocturne (Isra&apos; et Mi&apos;raj). L&apos;image est terrifiante : des gens se griffent éternellement le visage et la poitrine avec des ongles de cuivre. L&apos;expression &laquo;&nbsp;manger la chair des gens&nbsp;&raquo; fait directement écho au verset coranique (49:12). &laquo;&nbsp;Porter atteinte à leur honneur&nbsp;&raquo; englobe la médisance, la calomnie et toute parole qui nuit à la réputation d&apos;autrui. Ce châtiment est présenté comme une réalité du monde intermédiaire (barzakh), pas une simple métaphore."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez les sciences du hadith, la purification de l&apos;âme et le bon comportement avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Châtiments            */}
              {/* ============================== */}
              <section id="chatiments" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Châtiments de la médisance et de la calomnie
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-delà de la gravité morale, les hadiths décrivent des conséquences concrètes pour le médisant, aussi bien dans la tombe que le Jour du Jugement. Ces descriptions visent à dissuader le croyant de tomber dans ce péché si répandu.
                </p>

                <HadithBlock
                  number={6}
                  title="Les deux hommes châtiés dans leur tombe"
                  narrator="Ibn &apos;Abbas"
                  arabic="مَرَّ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ بِقَبْرَيْنِ فَقَالَ: إِنَّهُمَا لَيُعَذَّبَانِ وَمَا يُعَذَّبَانِ فِي كَبِيرٍ، أَمَّا أَحَدُهُمَا فَكَانَ لَا يَسْتَتِرُ مِنَ الْبَوْلِ، وَأَمَّا الْآخَرُ فَكَانَ يَمْشِي بِالنَّمِيمَةِ"
                  translation="Le Prophète ﷺ passa devant deux tombes et dit : certes, ils sont châtiés, et ils ne sont pas châtiés pour quelque chose de grand (à leurs yeux). L&apos;un d&apos;eux ne se préservait pas des éclaboussures d&apos;urine, et l&apos;autre colportait les propos (namima)."
                  source="Sahih Al-Bukhari, n°216 — Sahih Muslim, n°292"
                  grade="sahih"
                  explanation="Ce hadith est une preuve majeure de la gravité de la namima. Le Prophète ﷺ perçoit le châtiment de la tombe de deux personnes. L&apos;expression &laquo;&nbsp;pas pour quelque chose de grand&nbsp;&raquo; signifie que ces actes semblaient anodins à leurs yeux, alors qu&apos;ils entraînent un châtiment dans la tombe. Le colportage de propos est mis au même niveau que la négligence dans la purification de l&apos;urine, qui invalide la prière. Les savants en déduisent que la namima fait partie des grands péchés."
                />

                <HadithBlock
                  number={7}
                  title="Deux femmes qui jeûnaient et médisaient"
                  narrator="&apos;Ubayd, le serviteur du Prophète ﷺ"
                  arabic="إِنَّ امْرَأَتَيْنِ صَامَتَا وَإِنَّهُمَا كَادَتَا أَنْ تَمُوتَا مِنَ الْعَطَشِ فَذُكِرَتَا لِلنَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَأَعْرَضَ عَنْهُمَا ثُمَّ ذُكِرَتَا لَهُ فَدَعَاهُمَا فَأَمَرَهُمَا أَنْ تَقِيئَا فَقَاءَتَا قَيْحًا وَدَمًا وَصَدِيدًا وَلَحْمًا حَتَّى مَلَأَتَا قَدَحًا، فَقَالَ: إِنَّ هَاتَيْنِ صَامَتَا عَمَّا أَحَلَّ اللَّهُ وَأَفْطَرَتَا عَلَى مَا حَرَّمَ اللَّهُ، جَلَسَتْ إِحْدَاهُمَا إِلَى الْأُخْرَى فَجَعَلَتَا تَأْكُلَانِ لُحُومَ النَّاسِ"
                  translation="Deux femmes jeûnaient et faillirent mourir de soif. On les mentionna au Prophète ﷺ qui se détourna d&apos;elles, puis on les mentionna à nouveau. Il les appela et leur ordonna de vomir, et elles vomirent du pus, du sang, des sécrétions et de la chair jusqu&apos;à remplir un récipient. Il dit : ces deux-là ont jeûné en s&apos;abstenant de ce qu&apos;Allah a rendu licite, et elles ont rompu leur jeûne avec ce qu&apos;Allah a interdit. L&apos;une s&apos;est assise avec l&apos;autre et elles se sont mises à manger la chair des gens."
                  source="Musnad Ahmad, n°23535"
                  grade="sahih"
                  explanation="Ce hadith illustre de manière frappante que la médisance annule la récompense du jeûne. Les deux femmes se sont abstenues de nourriture et de boisson (ce qui est licite en dehors du jeûne), mais elles ont &laquo;&nbsp;mangé&nbsp;&raquo; la chair des gens en médisant d&apos;eux. Le Prophète ﷺ a rendu visible, par un miracle, la réalité spirituelle de la médisance : de la chair putréfiée. Ce récit montre qu&apos;un acte d&apos;adoration peut être vidé de sa substance par les péchés de la langue."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Langue               */}
              {/* ============================== */}
              <section id="langue" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le contrôle de la langue dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La médisance n&apos;est qu&apos;une manifestation parmi d&apos;autres des péchés de la langue. Le Prophète ﷺ a consacré de nombreux enseignements au contrôle de la parole, faisant de la langue la clé de la réussite ou de la perdition du croyant. Ces hadiths fournissent les remèdes pratiques contre la médisance.
                </p>

                <HadithBlock
                  number={8}
                  title="Que celui qui croit en Allah dise du bien ou se taise"
                  narrator="Abu Hurayra"
                  arabic="مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ"
                  translation="Que celui qui croit en Allah et au Jour dernier dise du bien ou se taise."
                  source="Sahih Al-Bukhari, n°6018 — Sahih Muslim, n°47"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des quarante hadiths de l&apos;imam An-Nawawi et constitue une règle d&apos;or du comportement musulman. Le Prophète ﷺ lie le contrôle de la langue à la foi elle-même : croire en Allah et au Jour dernier implique nécessairement de surveiller ses paroles. Le choix est simple : soit la parole apporte un bien (dhikr, conseil, savoir, réconciliation), soit le silence est préférable. Ce hadith est le remède le plus direct contre la médisance : avant de parler, le croyant doit se demander si ses paroles apportent un bien."
                />

                <HadithBlock
                  number={9}
                  title="La plupart des causes d&apos;entrée en Enfer"
                  narrator="Abu Hurayra"
                  arabic="سُئِلَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنْ أَكْثَرِ مَا يُدْخِلُ النَّاسَ الْجَنَّةَ فَقَالَ: تَقْوَى اللَّهِ وَحُسْنُ الْخُلُقِ. وَسُئِلَ عَنْ أَكْثَرِ مَا يُدْخِلُ النَّاسَ النَّارَ فَقَالَ: الْفَمُ وَالْفَرْجُ"
                  translation="On demanda au Messager d&apos;Allah ﷺ quelle est la chose qui fait entrer le plus de gens au Paradis. Il dit : la crainte d&apos;Allah et le bon caractère. Et on lui demanda quelle est la chose qui fait entrer le plus de gens en Enfer. Il dit : la bouche et les parties intimes."
                  source="Jami&apos; at-Tirmidhi, n°2004"
                  grade="sahih"
                  explanation="Ce hadith met en parallèle les causes du Paradis et de l&apos;Enfer. La bouche (al-fam) englobe tous les péchés de la langue : médisance, calomnie, mensonge, insulte, faux témoignage, et aussi les péchés liés à la consommation illicite. Le fait qu&apos;elle soit citée en premier parmi les causes de l&apos;Enfer montre que les péchés de la langue sont les plus fréquents et les plus dangereux. Ce hadith incite le musulman à considérer sa langue comme l&apos;organe le plus décisif pour son destin éternel."
                />

                <HadithBlock
                  number={10}
                  title="Garantis-moi ce qui est entre tes mâchoires"
                  narrator="Sahl ibn Sa&apos;d"
                  arabic="مَنْ يَضْمَنْ لِي مَا بَيْنَ لَحْيَيْهِ وَمَا بَيْنَ رِجْلَيْهِ أَضْمَنْ لَهُ الْجَنَّةَ"
                  translation="Celui qui me garantit ce qui est entre ses mâchoires et ce qui est entre ses jambes, je lui garantis le Paradis."
                  source="Sahih Al-Bukhari, n°6474"
                  grade="sahih"
                  explanation="Ce hadith synthétique condense le message des hadiths précédents. &laquo;&nbsp;Ce qui est entre les mâchoires&nbsp;&raquo; désigne la langue, et &laquo;&nbsp;ce qui est entre les jambes&nbsp;&raquo; désigne les parties intimes. Celui qui maîtrise ces deux organes a la garantie prophétique du Paradis. Les savants soulignent que la mention de la langue en premier n&apos;est pas anodine : ses péchés sont plus fréquents et plus insidieux que ceux des parties intimes. La médisance fait partie des péchés de la langue les plus courants et les plus difficiles à éviter."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths sur le contrôle de la langue montrent que la médisance n&apos;est pas un péché isolé mais s&apos;inscrit dans une problématique plus large. Pour approfondir les enseignements prophétiques sur le bon comportement, consultez notre article sur les{" "}
                  <Link href="/hadith-bon-comportement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le bon comportement en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Exceptions           */}
              {/* ============================== */}
              <section id="exceptions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Quand la gheeba est permise : les six exceptions
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;interdiction de la médisance est le principe, mais les savants ont identifié des situations où mentionner une personne par ce qu&apos;elle déteste est autorisé, voire obligatoire. L&apos;imam An-Nawawi a compilé ces exceptions dans son ouvrage <em>Al-Adhkar</em>, en les fondant sur des preuves tirées du Coran et de la Sunna.
                </p>

                <HadithBlock
                  number={11}
                  title="La plainte auprès du gouvernant ou du juge"
                  narrator="Aisha"
                  arabic="قَالَتْ هِنْدُ بِنْتُ عُتْبَةَ: يَا رَسُولَ اللَّهِ إِنَّ أَبَا سُفْيَانَ رَجُلٌ شَحِيحٌ وَلَيْسَ يُعْطِينِي مَا يَكْفِينِي وَوَلَدِي إِلَّا مَا أَخَذْتُ مِنْهُ وَهُوَ لَا يَعْلَمُ. فَقَالَ: خُذِي مَا يَكْفِيكِ وَوَلَدَكِ بِالْمَعْرُوفِ"
                  translation="Hind bint &apos;Utba dit : Ô Messager d&apos;Allah, Abu Sufyan est un homme avare et ne me donne pas ce qui me suffit, à moi et à mon enfant, sauf ce que je prends de lui à son insu. Il dit : prends ce qui te suffit, à toi et à ton enfant, de manière convenable."
                  source="Sahih Al-Bukhari, n°5364 — Sahih Muslim, n°1714"
                  grade="sahih"
                  explanation="Ce hadith est la preuve que la plainte pour obtenir justice n&apos;est pas considérée comme de la médisance interdite. Hind a décrit son mari par un défaut (l&apos;avarice) devant le Prophète ﷺ, et celui-ci ne l&apos;a pas blâmée. Au contraire, il a statué en sa faveur. Les savants en déduisent la première exception : il est permis de mentionner les défauts d&apos;une personne devant un juge ou un gouvernant pour obtenir réparation d&apos;une injustice. Cette exception couvre aussi la consultation juridique (demander une fatwa sur une situation impliquant une tierce personne)."
                />

                <HadithBlock
                  number={12}
                  title="La mise en garde dans le conseil religieux"
                  narrator="Fatima bint Qays"
                  arabic="اسْتَشَارَتِ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فِي النِّكَاحِ فَقَالَ: أَمَّا مُعَاوِيَةُ فَصُعْلُوكٌ لَا مَالَ لَهُ، وَأَمَّا أَبُو جَهْمٍ فَلَا يَضَعُ عَصَاهُ عَنْ عَاتِقِهِ"
                  translation="Elle consulta le Prophète ﷺ au sujet du mariage. Il dit : quant à Mu&apos;awiya, c&apos;est un homme pauvre sans biens, et quant à Abu Jahm, il ne pose pas son bâton de son épaule (c&apos;est-à-dire qu&apos;il frappe les femmes)."
                  source="Sahih Muslim, n°1480"
                  grade="sahih"
                  explanation="Ce hadith est la preuve la plus claire de la permissibilité de la gheeba dans le cadre du conseil sincère (nasiha). Fatima bint Qays avait reçu des propositions de mariage et demandait l&apos;avis du Prophète ﷺ. Celui-ci a mentionné les défauts réels des deux prétendants (la pauvreté de l&apos;un et la violence de l&apos;autre) pour la protéger. Il ne s&apos;agit pas de médisance interdite car l&apos;objectif est de préserver un intérêt légitime. Les savants en tirent la règle : lorsqu&apos;on est consulté pour un mariage, un partenariat ou une affaire, il est obligatoire de dire la vérité, même si elle comporte des critiques."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Les six exceptions compilées par l&apos;imam An-Nawawi sont : <strong>1)</strong> la plainte auprès d&apos;un juge pour obtenir justice, <strong>2)</strong> la demande d&apos;aide pour changer un blâmable, <strong>3)</strong> la demande de fatwa, <strong>4)</strong> la mise en garde contre un mal, <strong>5)</strong> la mention d&apos;une personne connue par un surnom lié à un défaut physique (pour l&apos;identifier uniquement), <strong>6)</strong> l&apos;avertissement contre un innovateur ou un pécheur public. Dans tous les cas, l&apos;intention doit être sincère et l&apos;information limitée au strict nécessaire.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Repentir             */}
              {/* ============================== */}
              <section id="repentir" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le repentir de la médisance
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La médisance touche aux droits d&apos;autrui, ce qui rend son repentir plus complexe que celui des péchés entre le serviteur et Allah. Le Prophète ﷺ a indiqué les voies de l&apos;expiation et du retour à Allah pour celui qui a médisé de son frère.
                </p>

                <HadithBlock
                  number={13}
                  title="L&apos;expiation de la médisance"
                  narrator="Abu Hurayra"
                  arabic="مَنْ كَانَتْ لَهُ مَظْلَمَةٌ لِأَخِيهِ مِنْ عِرْضِهِ أَوْ شَيْءٍ فَلْيَتَحَلَّلْهُ مِنْهُ الْيَوْمَ قَبْلَ أَنْ لَا يَكُونَ دِينَارٌ وَلَا دِرْهَمٌ، إِنْ كَانَ لَهُ عَمَلٌ صَالِحٌ أُخِذَ مِنْهُ بِقَدْرِ مَظْلَمَتِهِ، وَإِنْ لَمْ تَكُنْ لَهُ حَسَنَاتٌ أُخِذَ مِنْ سَيِّئَاتِ صَاحِبِهِ فَحُمِلَ عَلَيْهِ"
                  translation="Celui qui a commis une injustice envers son frère, que ce soit dans son honneur ou dans autre chose, qu&apos;il lui demande pardon aujourd&apos;hui, avant qu&apos;il n&apos;y ait ni dinar ni dirham. S&apos;il a des bonnes actions, on lui en prendra proportionnellement à son injustice. Et s&apos;il n&apos;a pas de bonnes actions, on prendra des péchés de sa victime et on les lui chargera."
                  source="Sahih Al-Bukhari, n°2449"
                  grade="sahih"
                  explanation="Ce hadith complète le hadith du &laquo;&nbsp;musulman en faillite&nbsp;&raquo; en montrant la solution : demander pardon à la personne lésée dans cette vie, avant que le règlement de comptes ne se fasse en bonnes et mauvaises actions le Jour du Jugement. L&apos;expression &laquo;&nbsp;dans son honneur&nbsp;&raquo; vise directement la médisance et la calomnie. Les savants discutent du cas où demander pardon à la personne aggraverait la situation : dans ce cas, il est recommandé de faire du bien à cette personne, de prier pour elle et de mentionner ses qualités dans les assemblées où l&apos;on avait médit d&apos;elle."
                />

                <HadithBlock
                  number={14}
                  title="L&apos;expiation de l&apos;assemblée"
                  narrator="Abu Hurayra"
                  arabic="مَنْ جَلَسَ مَجْلِسًا فَكَثُرَ فِيهِ لَغَطُهُ فَقَالَ قَبْلَ أَنْ يَقُومَ مِنْ مَجْلِسِهِ ذَلِكَ: سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ، إِلَّا غُفِرَ لَهُ مَا كَانَ فِي مَجْلِسِهِ ذَلِكَ"
                  translation="Celui qui s&apos;assoit dans une assemblée où les paroles vaines ont été nombreuses, et qui dit avant de se lever : &laquo;&nbsp;Gloire et louange à Toi, ô Allah, j&apos;atteste qu&apos;il n&apos;y a de divinité que Toi, je Te demande pardon et je me repens vers Toi&nbsp;&raquo;, il lui sera pardonné ce qui a été dit dans cette assemblée."
                  source="Jami&apos; at-Tirmidhi, n°3433"
                  grade="sahih"
                  explanation="Ce hadith offre une invocation pratique (kaffarat al-majlis) pour expier les paroles vaines prononcées dans les assemblées, y compris la médisance. Les savants précisent que cette invocation couvre les péchés mineurs de la langue, mais ne dispense pas de demander pardon aux personnes dont on a médit. C&apos;est un filet de sécurité pour les assemblées où le musulman a pu, par inadvertance, participer à des conversations contenant de la gheeba."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur la médisance
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur la médisance. Leurs explications permettent de mieux saisir la portée juridique et spirituelle de ces interdictions.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Sache que la médisance est l&apos;un des péchés les plus répandus et les plus dangereux. Peu de gens en sont épargnés. Elle consume les bonnes actions comme le feu consume le bois. Le serviteur trouvera le Jour du Jugement que ses bonnes actions ont été transférées à ceux dont il a médit, sans même s&apos;en rendre compte.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Al-Adhkar</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La médisance se fait par la langue, mais aussi par le cœur, le geste, l&apos;écriture et le clin d&apos;œil. Tout ce qui fait comprendre le défaut de ton frère à un tiers est de la gheeba. Même le silence éloquent face à une question peut être une forme de médisance.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam Al-Ghazali, <em>Ihya &apos;Ulum ad-Din</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le repentir de la médisance est le plus difficile des repentirs, car il implique le droit d&apos;autrui. Le serviteur doit regretter, résoudre de ne plus recommencer, demander pardon à Allah, et s&apos;efforcer de demander pardon à la personne lésée. S&apos;il ne le peut pas, qu&apos;il invoque en sa faveur et mentionne ses qualités.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Taymiyya, <em>Majmu&apos; al-Fatawa</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que la médisance ne se limite pas aux paroles : elle englobe tout moyen de communication qui nuit à l&apos;honneur d&apos;autrui. À l&apos;ère des réseaux sociaux, ces enseignements sont plus pertinents que jamais. L&apos;envoi d&apos;un message, le partage d&apos;une capture d&apos;écran ou même un emoji moqueur peuvent constituer de la gheeba au sens islamique du terme.
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
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour le musulman soucieux de préserver sa langue et les droits d&apos;autrui :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Connaître la définition exacte de la gheeba
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La médisance ne se limite pas au mensonge : dire une vérité que la personne n&apos;aimerait pas entendre en son absence est déjà de la gheeba. Cette prise de conscience est le premier pas vers la purification de la langue.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se rappeler les conséquences sur les bonnes actions
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le hadith du &laquo;&nbsp;musulman en faillite&nbsp;&raquo; doit être un rappel permanent : les prières, les jeûnes et les aumônes peuvent être transférés à ceux dont on a médit. La médisance est un voleur silencieux de bonnes actions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Appliquer la règle d&apos;or : dire du bien ou se taire
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Avant chaque parole, se demander : est-ce que cette parole apporte un bien ? Si la réponse est non, le silence est la meilleure option. Ce filtre simple élimine la majorité des occasions de médisance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Quitter les assemblées de médisance
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le musulman doit défendre l&apos;honneur de son frère absent ou, à défaut, quitter l&apos;assemblée. Rester silencieux dans une assemblée de médisance sans protester revient à y participer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Connaître les exceptions pour ne pas tomber dans l&apos;excès
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les six exceptions identifiées par les savants montrent que l&apos;islam est une religion d&apos;équilibre. Il ne s&apos;agit pas de ne jamais mentionner quiconque en son absence, mais de le faire uniquement pour un intérêt légitime et avec la bonne intention.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se repentir rapidement et demander pardon
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Si l&apos;on a médit de quelqu&apos;un, il faut se repentir immédiatement, demander pardon à Allah et, si possible, à la personne concernée. Plus le repentir est rapide, plus il est sincère et efficace.
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
                  description="Comprenez les hadiths sur la médisance et la calomnie dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur le bon comportement en islam"
                  description="Découvrez les enseignements prophétiques sur les bonnes manières, la douceur et la noblesse de caractère."
                  href="/hadith-bon-comportement-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le mensonge en islam"
                  description="Les hadiths authentiques sur l&apos;interdiction du mensonge, ses formes et ses conséquences."
                  href="/hadith-mensonge-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la jalousie en islam"
                  description="Les enseignements prophétiques sur l&apos;envie (hasad), ses dangers et comment s&apos;en protéger."
                  href="/hadith-jalousie-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
