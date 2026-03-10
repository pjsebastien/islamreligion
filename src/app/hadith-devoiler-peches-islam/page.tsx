import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithBlock from "@/components/HadithBlock";
import TableOfContents from "@/components/TableOfContents";
import AffiliateForm from "@/components/AffiliateForm";
import ArticleCTA from "@/components/ArticleCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Hadiths sur le fait de dévoiler ses péchés en islam : al-mujahara et le satr d\u2019Allah",
  description:
    "Découvrez les hadiths authentiques sur le fait de dévoiler ses péchés en islam : al-mujahara, le voile d\u2019Allah, la différence entre aveu et vantardise, couvrir les fautes d\u2019autrui. Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths sur le fait de dévoiler ses péchés en islam : al-mujahara et le satr d\u2019Allah",
    description:
      "Les hadiths authentiques sur le dévoilement des péchés : ceux qu\u2019Allah pardonne sauf ceux qui divulguent, le voile divin, couvrir les fautes des autres et le repentir discret.",
    url: "https://www.islamreligion.fr/hadith-devoiler-peches-islam",
    images: [
      {
        url: "/images/coran-ouvert-couverture-marron-illustration.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-devoiler-peches-islam",
  },
};

const tocItems = [
  { id: "mujahara", label: "Al-mujahara : dévoiler ses péchés" },
  { id: "satr-allah", label: "Le voile d\u2019Allah (as-satr)" },
  { id: "couvrir-autrui", label: "Couvrir les fautes d\u2019autrui" },
  { id: "repentir-discret", label: "Le repentir en privé" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Que signifie al-mujahara dans les hadiths sur les péchés ?",
    answer:
      "Al-mujahara désigne le fait de dévoiler publiquement ses péchés, de s\u2019en vanter ou de les raconter après qu\u2019Allah les a couverts. Le Prophète \u2018alayhi salatu wa salam a enseigné que toute la communauté est pardonnée sauf ceux qui font al-mujahara (Bukhari 6069). Ce terme inclut celui qui commet un péché la nuit, qu\u2019Allah couvre, puis qui le révèle le lendemain matin.",
  },
  {
    question:
      "Pourquoi est-il interdit de dévoiler ses péchés en islam ?",
    answer:
      "Dévoiler ses péchés constitue un rejet du voile protecteur d\u2019Allah (as-satr). Allah, dans Sa miséricorde, couvre les fautes de Ses serviteurs. En les révélant, le pécheur banalise la désobéissance, encourage d\u2019autres à pécher, et fait preuve d\u2019ingratitude envers le voile divin. Le Prophète a qualifié ces personnes d\u2019exceptées du pardon général.",
  },
  {
    question:
      "Peut-on avouer ses péchés à un savant pour demander conseil ?",
    answer:
      "Les savants distinguent entre al-mujahara (se vanter de ses péchés) et la consultation sincère. Demander conseil à un savant de confiance sur un péché commis, dans le but de se repentir, est permis selon la majorité des savants. L\u2019essentiel est que la démarche soit motivée par le repentir et non par la fierté ou l\u2019exhibitionnisme.",
  },
  {
    question:
      "Quel est le lien entre couvrir les fautes d\u2019autrui et le pardon d\u2019Allah ?",
    answer:
      "Le Prophète a enseigné que celui qui couvre les fautes d\u2019un musulman, Allah couvrira ses fautes au Jour du Jugement (Bukhari 2442, Muslim 2580). Il y a donc une réciprocité divine : la miséricorde envers les autres attire la miséricorde d\u2019Allah. Cela concerne les péchés privés, non les injustices qui nécessitent réparation.",
  },
  {
    question:
      "Que signifie le satr (voile) d\u2019Allah dans les hadiths ?",
    answer:
      "Le satr d\u2019Allah désigne le fait qu\u2019Allah cache les péchés de Ses serviteurs aux yeux des gens. Le Prophète a enseigné qu\u2019Allah approchera Son serviteur croyant au Jour du Jugement et le couvrira de Son voile, lui faisant reconnaître ses péchés en privé avant de lui pardonner (Bukhari 2441). Ce voile est une grâce que le croyant ne doit pas déchirer lui-même.",
  },
  {
    question:
      "Les réseaux sociaux sont-ils concernés par l\u2019interdiction de dévoiler ses péchés ?",
    answer:
      "Oui, les savants contemporains considèrent que publier ses péchés sur les réseaux sociaux est une forme moderne d\u2019al-mujahara. Que ce soit par des photos, des vidéos ou des récits, révéler publiquement ses désobéissances entre dans le cadre du hadith de Bukhari (6069). L\u2019ampleur de la diffusion rend cette forme encore plus grave que la vantardise orale.",
  },
  {
    question:
      "Le repentir efface-t-il le péché même si on l\u2019a dévoilé ?",
    answer:
      "Le repentir sincère (at-tawba an-nasuh) efface tout péché par la miséricorde d\u2019Allah, y compris le fait de l\u2019avoir dévoilé. Toutefois, le croyant doit cesser de divulguer ses fautes passées et regretter de les avoir révélées. Le Prophète a enseigné que celui qui se repent d\u2019un péché est comme celui qui n\u2019a pas de péché (Ibn Majah 4250).",
  },
  {
    question:
      "Doit-on dénoncer quelqu\u2019un qui commet un péché en privé ?",
    answer:
      "Non, la règle générale est de couvrir les fautes privées d\u2019autrui et de conseiller la personne en privé. Le Prophète a dit : \u00ab Celui qui couvre un musulman, Allah le couvrira \u00bb (Muslim 2580). Les savants précisent toutefois que si le péché implique un préjudice envers autrui (injustice, oppression), il est permis, voire obligatoire, de le signaler aux autorités compétentes.",
  },
];

export default function HadithDevoilerPechesIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-devoiler-peches-islam/#article",
        headline:
          "Hadiths sur le fait de dévoiler ses péchés en islam : al-mujahara et le satr d\u2019Allah",
        description:
          "Découvrez les hadiths authentiques sur le fait de dévoiler ses péchés en islam : al-mujahara, le voile d\u2019Allah, couvrir les fautes d\u2019autrui et le repentir discret.",
        image: "/images/coran-ouvert-couverture-marron-illustration.jpg",
        datePublished: "2026-05-08",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-devoiler-peches-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-devoiler-peches-islam/#breadcrumb",
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
            name: "Hadiths sur le fait de dévoiler ses péchés",
            item: "https://www.islamreligion.fr/hadith-devoiler-peches-islam",
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
          title="Hadiths sur le fait de dévoiler ses péchés en islam"
          subtitle="Les enseignements prophétiques sur al-mujahara, le voile protecteur d&apos;Allah, la couverture des fautes d&apos;autrui et le repentir discret selon la Sunna authentique."
          imageSrc="/images/coran-ouvert-couverture-marron-illustration.jpg"
          imageAlt="Hadiths sur le fait de dévoiler ses péchés en islam"
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
                  Hadiths sur le fait de dévoiler ses péchés
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
                    Le Prophète ﷺ a enseigné que toute la communauté est pardonnée sauf ceux qui dévoilent publiquement leurs péchés (al-mujahara).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Allah couvre les fautes de Ses serviteurs par Son voile (as-satr) : déchirer ce voile est une forme d&apos;ingratitude envers Sa miséricorde.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Couvrir les fautes d&apos;un musulman attire la couverture divine : celui qui couvre son frère, Allah le couvrira au Jour du Jugement.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le repentir sincère se fait en privé, entre le serviteur et son Seigneur, sans nécessité de confesser publiquement ses fautes.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Al-mujahara          */}
              {/* ============================== */}
              <section id="mujahara" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Al-mujahara : l&apos;interdiction de dévoiler ses péchés
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En islam, le péché est une réalité humaine. Tout fils d&apos;Adam est pécheur, et les meilleurs pécheurs sont ceux qui se repentent. Cependant, le Prophète ﷺ a établi une distinction fondamentale entre celui qui pèche discrètement et se repent, et celui qui dévoile publiquement ses fautes, s&apos;en vantant devant les gens. Ce second comportement, appelé <em>al-mujahara</em>, est sévèrement condamné par la Sunna.
                </p>

                <HadithBlock
                  number={1}
                  title="Tous sont pardonnés sauf ceux qui dévoilent"
                  narrator="Abu Hurayra"
                  arabic="كُلُّ أُمَّتِي مُعَافًى إِلَّا الْمُجَاهِرِينَ، وَإِنَّ مِنَ الْمُجَاهَرَةِ أَنْ يَعْمَلَ الرَّجُلُ بِاللَّيْلِ عَمَلًا ثُمَّ يُصْبِحَ وَقَدْ سَتَرَهُ اللَّهُ عَلَيْهِ فَيَقُولَ يَا فُلَانُ عَمِلْتُ الْبَارِحَةَ كَذَا وَكَذَا، وَقَدْ بَاتَ يَسْتُرُهُ رَبُّهُ وَيُصْبِحُ يَكْشِفُ سِتْرَ اللَّهِ عَنْهُ"
                  translation="Toute ma communauté est pardonnée sauf ceux qui dévoilent (al-mujahirin). Et parmi le dévoilement, il y a le fait qu&apos;un homme commette un acte la nuit, puis qu&apos;Allah le couvre, et qu&apos;il dise au matin : &laquo; Ô untel, j&apos;ai fait telle et telle chose hier soir &raquo;, alors que son Seigneur l&apos;avait couvert durant la nuit, et il déchire au matin le voile d&apos;Allah."
                  source="Sahih Al-Bukhari, n°6069 — Sahih Muslim, n°2990"
                  grade="sahih"
                  explanation="Ce hadith est le fondement de l&apos;interdiction de dévoiler ses péchés en islam. Le terme &laquo; mu&apos;afa &raquo; (pardonné) indique qu&apos;Allah accorde Son pardon à condition que le serviteur ne déchire pas lui-même le voile de protection. Le Prophète ﷺ décrit un scénario précis : commettre un péché la nuit, bénéficier du voile d&apos;Allah, puis le révéler soi-même. Les savants soulignent que la gravité réside dans le mépris du voile divin et la banalisation du péché."
                />

                <HadithBlock
                  number={2}
                  title="Tout fils d&apos;Adam est pécheur"
                  narrator="Anas ibn Malik"
                  arabic="كُلُّ ابْنِ آدَمَ خَطَّاءٌ وَخَيْرُ الْخَطَّائِينَ التَّوَّابُونَ"
                  translation="Tout fils d&apos;Adam est pécheur, et les meilleurs des pécheurs sont ceux qui se repentent constamment."
                  source="Jami&apos; at-Tirmidhi, n°2499 — Sunan Ibn Majah, n°4251"
                  grade="hasan"
                  explanation="Ce hadith pose le cadre général : le péché est inhérent à la condition humaine. L&apos;islam ne demande pas la perfection, mais le repentir. Ce qui distingue le croyant n&apos;est pas l&apos;absence de faute, mais le retour constant vers Allah. Ce hadith s&apos;articule avec le précédent : puisque tout le monde pèche, la voie est le repentir discret et non la divulgation publique."
                />

                <HadithBlock
                  number={3}
                  title="Celui qui commet une turpitude, qu&apos;il se couvre du voile d&apos;Allah"
                  narrator="Ibn &apos;Umar"
                  arabic="اجْتَنِبُوا هَذِهِ الْقَاذُورَاتِ الَّتِي نَهَى اللَّهُ تَعَالَى عَنْهَا، فَمَنْ أَلَمَّ بِشَيْءٍ مِنْهَا فَلْيَسْتَتِرْ بِسِتْرِ اللَّهِ وَلْيَتُبْ إِلَى اللَّهِ"
                  translation="Évitez ces turpitudes qu&apos;Allah a interdites. Et quiconque en commet quelque chose, qu&apos;il se couvre du voile d&apos;Allah et qu&apos;il se repente auprès d&apos;Allah."
                  source="Al-Muwatta de l&apos;imam Malik, n°1546 — Al-Mustadrak d&apos;Al-Hakim, n°7615"
                  grade="sahih"
                  explanation="Ce hadith donne la conduite à suivre après un péché : se couvrir du voile d&apos;Allah (c&apos;est-à-dire ne pas le révéler) et se repentir sincèrement. L&apos;ordre est double : la discrétion et le retour à Allah. Les savants en déduisent que le croyant qui a failli ne doit ni se vanter ni en parler publiquement, mais doit régler son affaire avec Allah en privé."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths établissent le principe fondamental : le péché est humain, le repentir est la voie, et la divulgation des fautes est condamnée. Pour approfondir la thématique du repentir, consultez notre article sur les{" "}
                  <Link href="/hadith-pardon-repentir-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le pardon et le repentir en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Le satr d'Allah      */}
              {/* ============================== */}
              <section id="satr-allah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le voile d&apos;Allah (as-satr) : une miséricorde divine
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des Noms d&apos;Allah est <em>As-Sattir</em> (Celui qui couvre, qui voile). Cette qualité divine se manifeste dans le fait qu&apos;Allah cache les péchés de Ses serviteurs aux yeux des gens. Les hadiths suivants décrivent cette grâce immense et expliquent pourquoi le croyant ne doit pas la rejeter en dévoilant lui-même ses fautes.
                </p>

                <HadithBlock
                  number={4}
                  title="Allah couvrira Son serviteur au Jour du Jugement"
                  narrator="Ibn &apos;Umar"
                  arabic="إِنَّ اللَّهَ يُدْنِي الْمُؤْمِنَ فَيَضَعُ عَلَيْهِ كَنَفَهُ وَيَسْتُرُهُ فَيَقُولُ أَتَعْرِفُ ذَنْبَ كَذَا أَتَعْرِفُ ذَنْبَ كَذَا فَيَقُولُ نَعَمْ أَيْ رَبِّ حَتَّى إِذَا قَرَّرَهُ بِذُنُوبِهِ وَرَأَى فِي نَفْسِهِ أَنَّهُ هَلَكَ قَالَ سَتَرْتُهَا عَلَيْكَ فِي الدُّنْيَا وَأَنَا أَغْفِرُهَا لَكَ الْيَوْمَ"
                  translation="Allah approchera le croyant et posera sur lui Son voile protecteur, puis Il lui dira : &laquo; Reconnais-tu tel péché ? Reconnais-tu tel péché ? &raquo; Il répondra : &laquo; Oui, ô mon Seigneur. &raquo; Jusqu&apos;à ce qu&apos;il lui fasse reconnaître tous ses péchés et qu&apos;il pense être perdu. Alors Allah dira : &laquo; Je les ai couverts pour toi dans la vie d&apos;ici-bas, et aujourd&apos;hui Je te les pardonne. &raquo;"
                  source="Sahih Al-Bukhari, n°2441 — Sahih Muslim, n°2768"
                  grade="sahih"
                  explanation="Ce hadith extraordinaire décrit la scène du Jour du Jugement où Allah, dans Sa miséricorde infinie, couvre le croyant de Son voile pour lui rappeler ses péchés en privé, puis les lui pardonne. La leçon est claire : celui qui a préservé le voile d&apos;Allah dans cette vie bénéficiera de Sa couverture et de Son pardon dans l&apos;au-delà. Celui qui a déchiré ce voile s&apos;est privé lui-même de cette grâce."
                />

                <HadithBlock
                  number={5}
                  title="Allah aime la pudeur et la couverture"
                  narrator="Ya&apos;la ibn Umayya"
                  arabic="إِنَّ اللَّهَ حَيِيٌّ سِتِّيرٌ يُحِبُّ الْحَيَاءَ وَالسَّتْرَ"
                  translation="Certes, Allah est Pudique et Il couvre (Sittir). Il aime la pudeur et la couverture."
                  source="Sunan Abu Dawud, n°4012 — Sunan An-Nasa&apos;i, n°406"
                  grade="sahih"
                  explanation="Ce hadith révèle un attribut divin fondamental : Allah est Sittir, Celui qui couvre et qui voile. Il aime que Ses serviteurs adoptent cette même qualité. La pudeur (<em>haya&apos;</em>) et la couverture (<em>satr</em>) sont des valeurs que le croyant doit cultiver, tant pour ses propres fautes que pour celles d&apos;autrui. Dévoiler ses péchés va à l&apos;encontre de cet attribut divin."
                />

                <HadithBlock
                  number={6}
                  title="Quand Allah couvre un serviteur, Il ne l&apos;expose pas"
                  narrator="Abu Hurayra"
                  arabic="إِنَّ اللَّهَ عَزَّ وَجَلَّ إِذَا سَتَرَ عَلَى عَبْدٍ فِي الدُّنْيَا لَمْ يَفْضَحْهُ يَوْمَ الْقِيَامَةِ"
                  translation="Certes, lorsqu&apos;Allah Azza wa Jall couvre un serviteur dans ce bas monde, Il ne l&apos;expose pas au Jour du Jugement."
                  source="Sahih Muslim, n°2590"
                  grade="sahih"
                  explanation="Ce hadith établit le lien entre le voile d&apos;Allah dans cette vie et dans l&apos;au-delà. Le serviteur qui bénéficie de la couverture divine ici-bas sera également protégé au Jour du Jugement. Les savants en déduisent que la couverture des péchés est une grâce continue : celui qui la préserve en ne dévoilant pas ses fautes verra cette grâce se prolonger dans l&apos;au-delà."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez la purification du cœur, le repentir et la spiritualité islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Couvrir autrui       */}
              {/* ============================== */}
              <section id="couvrir-autrui" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Couvrir les fautes d&apos;autrui : une obligation islamique
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;interdiction de dévoiler les péchés ne concerne pas seulement ses propres fautes. Le Prophète ﷺ a également enseigné qu&apos;il est du devoir du musulman de couvrir les fautes de son frère, de ne pas l&apos;exposer ni le dénoncer publiquement. Cette éthique de couverture mutuelle est un pilier de la fraternité islamique.
                </p>

                <HadithBlock
                  number={7}
                  title="Celui qui couvre un musulman, Allah le couvrira"
                  narrator="Ibn &apos;Umar"
                  arabic="الْمُسْلِمُ أَخُو الْمُسْلِمِ لَا يَظْلِمُهُ وَلَا يُسْلِمُهُ وَمَنْ كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ وَمَنْ فَرَّجَ عَنْ مُسْلِمٍ كُرْبَةً فَرَّجَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرُبَاتِ يَوْمِ الْقِيَامَةِ وَمَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ يَوْمَ الْقِيَامَةِ"
                  translation="Le musulman est le frère du musulman : il ne l&apos;opprime pas et ne l&apos;abandonne pas. Celui qui est au service de son frère, Allah est à son service. Celui qui soulage un musulman d&apos;une affliction, Allah le soulagera d&apos;une affliction au Jour du Jugement. Et celui qui couvre un musulman, Allah le couvrira au Jour du Jugement."
                  source="Sahih Al-Bukhari, n°2442 — Sahih Muslim, n°2580"
                  grade="sahih"
                  explanation="Ce hadith majeur établit le principe de réciprocité entre les actes du croyant et la récompense divine. Couvrir un musulman signifie ne pas révéler ses péchés ni ses défauts aux gens. En retour, Allah couvre les fautes de celui qui couvre son frère. Les savants précisent que cette couverture concerne les péchés privés, non les injustices qui nécessitent réparation ou les crimes qui menacent la sécurité publique."
                />

                <HadithBlock
                  number={8}
                  title="Ne cherchez pas les défauts des musulmans"
                  narrator="Ibn &apos;Abbas"
                  arabic="يَا مَعْشَرَ مَنْ آمَنَ بِلِسَانِهِ وَلَمْ يَدْخُلِ الْإِيمَانُ قَلْبَهُ لَا تَغْتَابُوا الْمُسْلِمِينَ وَلَا تَتَّبِعُوا عَوْرَاتِهِمْ فَإِنَّهُ مَنْ اتَّبَعَ عَوْرَاتِهِمْ يَتَّبِعُ اللَّهُ عَوْرَتَهُ وَمَنْ يَتَّبِعِ اللَّهُ عَوْرَتَهُ يَفْضَحْهُ فِي بَيْتِهِ"
                  translation="Ô vous qui avez cru avec leur langue mais dont la foi n&apos;a pas pénétré leur cœur ! Ne médisez pas des musulmans et ne cherchez pas leurs défauts. Car celui qui cherche les défauts des autres, Allah cherchera ses défauts. Et celui dont Allah cherche les défauts, Il l&apos;exposera même dans sa propre maison."
                  source="Sunan Abu Dawud, n°4880"
                  grade="hasan"
                  explanation="Ce hadith contient un avertissement sévère : celui qui se spécialise dans la recherche des fautes d&apos;autrui subira le même sort de la part d&apos;Allah. Le terme &laquo; &apos;awra &raquo; désigne les défauts, les faiblesses et les péchés cachés. Chercher à les découvrir et à les divulguer est un signe d&apos;hypocrisie, comme l&apos;indique l&apos;adresse du hadith : &laquo; vous qui avez cru avec leur langue &raquo;."
                />

                <HadithBlock
                  number={9}
                  title="Aucun serviteur ne couvre un autre sans qu&apos;Allah ne le couvre"
                  narrator="Abu Hurayra"
                  arabic="لَا يَسْتُرُ عَبْدٌ عَبْدًا فِي الدُّنْيَا إِلَّا سَتَرَهُ اللَّهُ يَوْمَ الْقِيَامَةِ"
                  translation="Aucun serviteur ne couvre un autre serviteur dans ce bas monde sans qu&apos;Allah ne le couvre au Jour du Jugement."
                  source="Sahih Muslim, n°2590"
                  grade="sahih"
                  explanation="Ce hadith réaffirme la récompense de la couverture des fautes d&apos;autrui sous une forme concise et directe. Le terme &laquo; &apos;abd &raquo; (serviteur) est utilisé pour les deux parties, soulignant l&apos;égalité devant Allah : chacun est serviteur d&apos;Allah et chacun a des défauts. Les savants y voient un encouragement à la bienveillance mutuelle et à la préservation de l&apos;honneur d&apos;autrui."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths sur la couverture des fautes d&apos;autrui sont étroitement liés à l&apos;interdiction de la médisance. Pour en savoir plus, consultez notre article sur les{" "}
                  <Link href="/hadith-medisance-calomnie-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la médisance et la calomnie en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Repentir en privé    */}
              {/* ============================== */}
              <section id="repentir-discret" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le repentir en privé : la voie du croyant
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si dévoiler ses péchés est condamné, le repentir discret est, lui, grandement valorisé. L&apos;islam enseigne que la relation entre le serviteur et Allah est directe : nul intermédiaire n&apos;est requis pour obtenir le pardon divin. Les hadiths suivants montrent la joie immense d&apos;Allah lorsque Son serviteur revient vers Lui en privé.
                </p>

                <HadithBlock
                  number={10}
                  title="Allah se réjouit du repentir de Son serviteur"
                  narrator="Anas ibn Malik"
                  arabic="لَلَّهُ أَشَدُّ فَرَحًا بِتَوْبَةِ عَبْدِهِ حِينَ يَتُوبُ إِلَيْهِ مِنْ أَحَدِكُمْ كَانَ عَلَى رَاحِلَتِهِ بِأَرْضِ فَلَاةٍ فَانْفَلَتَتْ مِنْهُ وَعَلَيْهَا طَعَامُهُ وَشَرَابُهُ فَأَيِسَ مِنْهَا فَأَتَى شَجَرَةً فَاضْطَجَعَ فِي ظِلِّهَا قَدْ أَيِسَ مِنْ رَاحِلَتِهِ فَبَيْنَا هُوَ كَذَلِكَ إِذَا هُوَ بِهَا قَائِمَةً عِنْدَهُ"
                  translation="Allah se réjouit du repentir de Son serviteur plus que l&apos;un d&apos;entre vous qui, dans un désert aride, perd sa monture portant sa nourriture et sa boisson, désespère de la retrouver, s&apos;allonge à l&apos;ombre d&apos;un arbre ayant perdu tout espoir, et la retrouve soudain debout à côté de lui."
                  source="Sahih Muslim, n°2747"
                  grade="sahih"
                  explanation="Ce hadith illustre l&apos;immensité de la miséricorde divine par une parabole saisissante. La joie d&apos;Allah au repentir de Son serviteur dépasse la joie la plus intense qu&apos;un être humain puisse ressentir : celle de retrouver sa survie après l&apos;avoir crue perdue. Ce hadith encourage le croyant à ne jamais désespérer de la miséricorde divine, quelle que soit la gravité de ses péchés."
                />

                <HadithBlock
                  number={11}
                  title="Allah tend Sa Main la nuit et le jour"
                  narrator="Abu Musa al-Ash&apos;ari"
                  arabic="إِنَّ اللَّهَ عَزَّ وَجَلَّ يَبْسُطُ يَدَهُ بِاللَّيْلِ لِيَتُوبَ مُسِيءُ النَّهَارِ وَيَبْسُطُ يَدَهُ بِالنَّهَارِ لِيَتُوبَ مُسِيءُ اللَّيْلِ حَتَّى تَطْلُعَ الشَّمْسُ مِنْ مَغْرِبِهَا"
                  translation="Certes, Allah Azza wa Jall tend Sa Main la nuit pour que le pécheur du jour se repente, et Il tend Sa Main le jour pour que le pécheur de la nuit se repente, jusqu&apos;à ce que le soleil se lève de l&apos;Ouest."
                  source="Sahih Muslim, n°2759"
                  grade="sahih"
                  explanation="Ce hadith montre que la porte du repentir est constamment ouverte. Allah n&apos;attend pas que le serviteur aille confesser ses péchés publiquement : Il tend Lui-même Sa Main pour accueillir le repentir. La précision &laquo; la nuit &raquo; et &laquo; le jour &raquo; indique qu&apos;il n&apos;y a aucun délai : le croyant peut se repentir à tout instant. Ce hadith s&apos;oppose directement à la logique de la mujahara : pourquoi dévoiler quand Allah Lui-même offre Son pardon en privé ?"
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le dévoilement des péchés
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur al-mujahara et le satr. Leurs explications permettent de mieux comprendre les nuances de cette question et ses applications pratiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le mujahir est celui qui dévoile son péché après qu&apos;Allah l&apos;a couvert, en s&apos;en vantant le lendemain matin devant les gens. La gravité réside dans le fait qu&apos;il rejette la grâce du voile divin et encourage d&apos;autres à pécher par son récit.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le voile d&apos;Allah est une miséricorde que le serviteur ne doit pas déchirer. Celui qui commet un péché en secret, qu&apos;il le garde entre lui et Allah, et qu&apos;il se repente. Allah aime la pudeur et déteste la divulgation et l&apos;exhibitionnisme dans le péché.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Il y a une différence entre celui qui dévoile ses péchés par fierté et vantardise, et celui qui consulte un savant pour trouver la voie du repentir. Le premier est le mujahir condamné par le hadith, le second cherche la guérison de son âme et cela est permis, voire recommandé.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Madarij as-Salikin</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires savants éclairent une nuance essentielle : l&apos;interdiction de dévoiler ses péchés vise la vantardise et la banalisation du péché, non la consultation sincère en vue du repentir. Le bon comportement dans ce domaine s&apos;inscrit dans l&apos;éthique générale du musulman, détaillée dans notre article sur les{" "}
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
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour la vie quotidienne du musulman :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne jamais se vanter de ses péchés
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Al-mujahara est l&apos;un des rares comportements qui excluent du pardon général. Raconter ses fautes pour impressionner ou divertir est une forme de rejet du voile d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Préserver le voile d&apos;Allah sur soi
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Allah couvre les fautes de Ses serviteurs par miséricorde. Déchirer ce voile revient à rejeter Sa grâce. Le croyant doit choisir la discrétion et le repentir privé.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Couvrir les fautes d&apos;autrui
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Celui qui couvre les défauts de son frère sera couvert par Allah au Jour du Jugement. Ne pas chercher les fautes des autres ni les divulguer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se repentir immédiatement et en privé
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Allah tend Sa Main jour et nuit pour accueillir le repentir. Nul besoin de confesser publiquement : le repentir se fait entre le serviteur et son Seigneur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Attention aux réseaux sociaux
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Publier ses péchés en ligne est une forme moderne d&apos;al-mujahara. Les stories, publications et vidéos montrant des désobéissances entrent dans le cadre de l&apos;interdiction.
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
                        Allah se réjouit du repentir de Son serviteur plus que toute joie humaine. Quel que soit le péché, la porte du retour à Allah reste ouverte tant que le soleil ne se lève pas de l&apos;Ouest.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur le repentir et la couverture des péchés dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur le pardon et le repentir en islam"
                  description="Découvrez les hadiths authentiques sur la miséricorde d&apos;Allah, les conditions du repentir et les invocations du pardon."
                  href="/hadith-pardon-repentir-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la médisance et la calomnie en islam"
                  description="Les enseignements prophétiques sur l&apos;interdiction de la médisance, la calomnie et la préservation de l&apos;honneur d&apos;autrui."
                  href="/hadith-medisance-calomnie-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le bon comportement en islam"
                  description="Les hadiths du Prophète sur l&apos;éthique, la pudeur, la bienveillance et les nobles caractères."
                  href="/hadith-bon-comportement-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
