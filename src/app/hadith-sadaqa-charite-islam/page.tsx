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
    "Hadiths sur la sadaqa et la charité en islam : guide complet des enseignements prophétiques",
  description:
    "Découvrez les hadiths authentiques sur la sadaqa et la charité en islam : mérites de l&apos;aumône, formes de sadaqa, sadaqa cachée, sadaqa jariya. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths sur la sadaqa et la charité en islam : guide complet des enseignements prophétiques",
    description:
      "Les hadiths authentiques sur la sadaqa en islam : mérites, formes variées, aumône secrète et aumône continue selon la Sunna du Prophète Muhammad ﷺ.",
    url: "https://www.islamreligion.fr/hadith-sadaqa-charite-islam",
    images: [
      {
        url: "/images/mosquee-prophete-medine-islam-dome-vert.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-sadaqa-charite-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique de la sadaqa" },
  { id: "merites-sadaqa", label: "Les mérites de la sadaqa" },
  { id: "formes-sadaqa", label: "Les formes de sadaqa" },
  { id: "sadaqa-cachee", label: "La sadaqa cachée" },
  { id: "sadaqa-jariya", label: "La sadaqa jariya (aumône continue)" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quelle est la différence entre la sadaqa et la zakat en islam ?",
    answer:
      "La zakat est un pilier obligatoire de l\u2019islam, calculée sur la richesse selon des seuils précis (nisab), tandis que la sadaqa est une aumône volontaire sans montant fixe. La zakat est due une fois par an sur les biens éligibles, alors que la sadaqa peut être donnée à tout moment, en toute quantité, et prend des formes variées : argent, nourriture, sourire, bonne parole ou même le retrait d\u2019un obstacle du chemin.",
  },
  {
    question:
      "Quels sont les hadiths les plus importants sur la sadaqa en islam ?",
    answer:
      "Parmi les hadiths les plus importants sur la sadaqa, on trouve celui sur l\u2019ombre de la sadaqa au Jour du Jugement (Ahmad 17333), celui sur la sadaqa qui éteint la colère du Seigneur (Tirmidhi 664), et celui sur les sept catégories de personnes protégées par l\u2019ombre d\u2019Allah, dont celui qui donne en secret (Bukhari 1423). Le hadith sur la sadaqa jariya (Muslim 1631) est également fondamental car il enseigne que certaines aumônes continuent de profiter au donneur même après sa mort.",
  },
  {
    question: "Qu&apos;est-ce que la sadaqa jariya en islam ?",
    answer:
      "La sadaqa jariya est une aumône continue dont la récompense perdure après la mort du donneur. Le Prophète ﷺ a enseigné que trois choses continuent de profiter au défunt : une aumône continue, une science bénéfique et un enfant pieux qui invoque en sa faveur (Muslim 1631). Parmi les exemples de sadaqa jariya : construire une mosquée, creuser un puits, planter un arbre, ou contribuer à un projet éducatif.",
  },
  {
    question: "Peut-on donner la sadaqa à un non-musulman ?",
    answer:
      "Oui, la majorité des savants autorisent la sadaqa volontaire envers les non-musulmans. Le Coran dit : \u00ab Allah ne vous interdit pas d\u2019être bons et équitables envers ceux qui ne vous ont pas combattus \u00bb (Al-Mumtahana 60:8). La sadaqa est un acte de miséricorde universelle. Toutefois, la zakat obligatoire est réservée aux huit catégories mentionnées dans le Coran (At-Tawba 9:60).",
  },
  {
    question: "Le sourire est-il vraiment considéré comme une sadaqa ?",
    answer:
      "Oui, le Prophète ﷺ a explicitement enseigné que le sourire adressé à son frère est une sadaqa (Tirmidhi 1956). Ce hadith élargit la notion de charité au-delà du don matériel. En islam, la sadaqa englobe toute bonne action : le sourire, la bonne parole, guider un égaré, enlever un obstacle du chemin, et même les rapports conjugaux selon un hadith rapporté dans Sahih Muslim.",
  },
  {
    question:
      "Pourquoi la sadaqa cachée est-elle meilleure que la sadaqa publique ?",
    answer:
      "La sadaqa cachée est préférable car elle préserve la sincérité de l\u2019intention (ikhlas) et protège le donneur de l\u2019ostentation (riya\u2019). Le Prophète ﷺ a enseigné que parmi les sept personnes protégées par l\u2019ombre d\u2019Allah au Jour du Jugement figure celui qui donne en charité au point que sa main gauche ignore ce que donne sa main droite (Bukhari 1423). Cependant, la sadaqa publique peut être préférable si elle encourage les autres à donner.",
  },
];

export default function HadithSadaqaChariteIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-sadaqa-charite-islam/#article",
        headline:
          "Hadiths sur la sadaqa et la charité en islam : guide complet des enseignements prophétiques",
        description:
          "Découvrez les hadiths authentiques sur la sadaqa et la charité en islam : mérites, formes variées, aumône secrète et aumône continue.",
        image: "/images/mosquee-prophete-medine-islam-dome-vert.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-sadaqa-charite-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-sadaqa-charite-islam/#breadcrumb",
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
            name: "Sadaqa et charité",
            item: "https://www.islamreligion.fr/hadith-sadaqa-charite-islam",
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
          title="Hadiths sur la sadaqa et la charité en islam"
          subtitle="Les enseignements prophétiques sur les mérites de l&apos;aumône, les formes de sadaqa, la charité secrète et l&apos;aumône continue selon la Sunna authentique."
          imageSrc="/images/mosquee-prophete-medine-islam-dome-vert.jpg"
          imageAlt="Hadiths sur la sadaqa et la charité en islam, mosquée du Prophète à Médine"
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
                  Sadaqa et charité
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
                    La sadaqa protège le croyant au Jour du Jugement et éteint la colère d&apos;Allah selon les hadiths authentiques.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La charité en islam ne se limite pas à l&apos;argent : le sourire, la bonne parole et enlever un obstacle du chemin sont autant de formes de sadaqa.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La sadaqa donnée en secret est supérieure car elle préserve la sincérité et protège de l&apos;ostentation.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La sadaqa jariya (aumône continue) est l&apos;une des trois oeuvres dont la récompense perdure après la mort du croyant.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique de la sadaqa en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;explorer les hadiths sur la charité, il est essentiel de rappeler que la sadaqa occupe une place centrale dans le Coran. Allah y exhorte les croyants à dépenser de leurs biens dans Son sentier, en promettant des récompenses multipliées. Les versets suivants constituent le socle coranique sur lequel reposent les enseignements prophétiques détaillés dans cet article.
                </p>

                <HadithCard
                  arabic="مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنبُلَةٍ مِّائَةُ حَبَّةٍ وَاللَّهُ يُضَاعِفُ لِمَن يَشَاءُ وَاللَّهُ وَاسِعٌ عَلِيمٌ"
                  text="Ceux qui dépensent leurs biens dans le sentier d&apos;Allah ressemblent à un grain d&apos;où naissent sept épis, à cent grains l&apos;épi. Car Allah multiplie la récompense à qui Il veut et la grâce d&apos;Allah est immense et Il est Omniscient."
                  source="Coran, sourate Al-Baqara (2:261)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset est l&apos;un des plus puissants sur la générosité en islam. La métaphore agricole illustre la multiplication divine de la récompense : un seul grain peut produire sept cents grains, et Allah peut multiplier encore davantage. Les savants expliquent que cette multiplication dépend de la sincérité de l&apos;intention, de la qualité du bien donné et du besoin du bénéficiaire. Ce verset motive le croyant à ne jamais considérer une aumône comme insignifiante.
                </p>

                <HadithCard
                  arabic="يَا أَيُّهَا الَّذِينَ آمَنُوا أَنفِقُوا مِن طَيِّبَاتِ مَا كَسَبْتُمْ وَمِمَّا أَخْرَجْنَا لَكُم مِّنَ الْأَرْضِ وَلَا تَيَمَّمُوا الْخَبِيثَ مِنْهُ تُنفِقُونَ وَلَسْتُم بِآخِذِيهِ إِلَّا أَن تُغْمِضُوا فِيهِ"
                  text="Ô les croyants ! Dépensez des meilleures choses que vous avez gagnées et des récoltes que Nous avons fait sortir de la terre pour vous. Et ne vous tournez pas vers ce qui est vil pour en faire dépense. Ne donnez pas ce que vous-mêmes n&apos;accepteriez qu&apos;en fermant les yeux."
                  source="Coran, sourate Al-Baqara (2:267)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset pose un principe fondamental : la sadaqa doit provenir de ce que l&apos;on a de meilleur, non de ce dont on veut se débarrasser. Allah interdit de donner en charité ce que l&apos;on refuserait soi-même de recevoir. Cette exigence de qualité dans le don reflète la noblesse de l&apos;acte et le respect dû aux bénéficiaires. Les savants y voient aussi un moyen de purifier l&apos;âme de l&apos;avarice : donner ce que l&apos;on aime est un véritable sacrifice.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Mérites de la sadaqa */}
              {/* ============================== */}
              <section id="merites-sadaqa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les mérites de la sadaqa selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a décrit les mérites de la sadaqa dans de nombreux hadiths. L&apos;aumône ne diminue jamais la richesse du donneur ; au contraire, elle la purifie et attire la bénédiction divine. Les hadiths suivants mettent en lumière les récompenses exceptionnelles promises à celui qui donne pour la cause d&apos;Allah.
                </p>

                <HadithBlock
                  number={1}
                  title="Le croyant est à l&apos;ombre de sa sadaqa"
                  narrator="&apos;Uqba ibn &apos;Amir"
                  arabic="كُلُّ امْرِئٍ فِي ظِلِّ صَدَقَتِهِ حَتَّى يُقْضَى بَيْنَ النَّاسِ"
                  translation="Chaque personne sera à l&apos;ombre de sa sadaqa jusqu&apos;à ce que le jugement soit prononcé entre les gens."
                  source="Musnad Ahmad, n°17333 — authentifié par Al-Albani"
                  grade="sahih"
                  explanation="Ce hadith décrit une scène du Jour du Jugement où le soleil sera rapproché des créatures. En ce jour de terreur, la sadaqa du croyant lui servira d&apos;ombre protectrice. Plus le croyant aura donné dans la vie d&apos;ici-bas, plus son ombre sera vaste. Les savants en déduisent que la sadaqa régulière, même modeste, est préférable à un don ponctuel important. Ce hadith encourage la constance dans la générosité tout au long de la vie."
                />

                <HadithBlock
                  number={2}
                  title="La sadaqa éteint la colère du Seigneur"
                  narrator="Anas ibn Malik"
                  arabic="إِنَّ الصَّدَقَةَ لَتُطْفِئُ غَضَبَ الرَّبِّ وَتَدْفَعُ مِيتَةَ السُّوءِ"
                  translation="La sadaqa éteint la colère du Seigneur et repousse la mauvaise mort."
                  source="Jami&apos; at-Tirmidhi, n°664 — authentifié par Al-Albani"
                  grade="hasan"
                  explanation="Ce hadith révèle deux effets majeurs de la sadaqa. Premièrement, elle apaise la colère d&apos;Allah envers le serviteur pécheur : donner en charité est un moyen de se racheter et de se rapprocher de la miséricorde divine. Deuxièmement, elle protège contre la &laquo; mauvaise mort &raquo;, c&apos;est-à-dire une fin de vie dans l&apos;humiliation, la souffrance ou l&apos;éloignement d&apos;Allah. Les savants recommandent la sadaqa en période de difficulté comme un remède spirituel contre les épreuves."
                />

                <HadithBlock
                  number={3}
                  title="La sadaqa ne diminue en rien la richesse"
                  narrator="Abu Hurayra"
                  arabic="مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلَّا عِزًّا وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلَّا رَفَعَهُ اللَّهُ"
                  translation="La sadaqa ne diminue en rien la richesse. Allah n&apos;accroît le serviteur qui pardonne qu&apos;en honneur, et quiconque s&apos;humilie devant Allah, Allah l&apos;élève."
                  source="Sahih Muslim, n°2588"
                  grade="sahih"
                  explanation="Ce hadith réunit trois principes fondamentaux. Concernant la sadaqa, le Prophète ﷺ affirme qu&apos;elle ne réduit pas la richesse : soit Allah bénit les biens restants de sorte qu&apos;ils suffisent davantage, soit Il les remplace par mieux dans cette vie ou dans l&apos;au-delà. Les deux autres principes — le pardon et l&apos;humilité — forment avec la charité un triptyque de vertus qui élèvent le croyant. L&apos;imam An-Nawawi commente que ce hadith combat l&apos;avarice en rassurant le donneur sur la préservation de ses biens."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths dissipent les craintes liées au don. La sadaqa n&apos;est pas une perte, mais un investissement auprès d&apos;Allah. Elle protège le croyant dans cette vie et dans l&apos;au-delà. Pour approfondir les obligations financières en islam, consultez notre article sur{" "}
                  <Link href="/hadith-zakat-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    les hadiths sur la zakat en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Formes de sadaqa     */}
              {/* ============================== */}
              <section id="formes-sadaqa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les formes de sadaqa selon la Sunna
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;une des plus belles leçons de l&apos;islam sur la charité est son universalité. La sadaqa ne se réduit pas au don d&apos;argent : elle englobe toute action bénéfique envers autrui. Le Prophète ﷺ a élargi la notion de charité pour que chaque musulman, riche ou pauvre, puisse y participer quotidiennement.
                </p>

                <HadithBlock
                  number={4}
                  title="Ton sourire à ton frère est une sadaqa"
                  narrator="Abu Dharr"
                  arabic="تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ وَأَمْرُكَ بِالْمَعْرُوفِ وَنَهْيُكَ عَنِ الْمُنْكَرِ صَدَقَةٌ وَإِرْشَادُكَ الرَّجُلَ فِي أَرْضِ الضَّلَالِ لَكَ صَدَقَةٌ وَإِمَاطَتُكَ الْحَجَرَ وَالشَّوْكَةَ وَالْعَظْمَ عَنِ الطَّرِيقِ لَكَ صَدَقَةٌ وَإِفْرَاغُكَ مِنْ دَلْوِكَ فِي دَلْوِ أَخِيكَ لَكَ صَدَقَةٌ"
                  translation="Ton sourire à ton frère est une sadaqa. Commander le bien et interdire le mal est une sadaqa. Guider un homme égaré est une sadaqa pour toi. Retirer la pierre, l&apos;épine et l&apos;os du chemin est une sadaqa pour toi. Verser de ton seau dans le seau de ton frère est une sadaqa pour toi."
                  source="Jami&apos; at-Tirmidhi, n°1956"
                  grade="hasan"
                  explanation="Ce hadith est l&apos;un des plus riches sur la diversité des formes de sadaqa. Le Prophète ﷺ y énumère des actes simples et accessibles à tous : sourire, guider, débarrasser le chemin, partager l&apos;eau. Aucun de ces actes ne nécessite de richesse matérielle. Ce hadith démocratise la charité et en fait un mode de vie quotidien. Les savants soulignent que chaque interaction humaine peut devenir une sadaqa si elle est accomplie avec sincérité et dans l&apos;intention de plaire à Allah."
                />

                <HadithBlock
                  number={5}
                  title="La bonne parole est une sadaqa"
                  narrator="Abu Hurayra"
                  arabic="الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ وَكُلُّ خُطْوَةٍ تَمْشِيهَا إِلَى الصَّلَاةِ صَدَقَةٌ وَتُمِيطُ الْأَذَى عَنِ الطَّرِيقِ صَدَقَةٌ"
                  translation="La bonne parole est une sadaqa. Chaque pas que tu fais en direction de la prière est une sadaqa. Et retirer un obstacle du chemin est une sadaqa."
                  source="Sahih Al-Bukhari, n°2989 — Sahih Muslim, n°1009"
                  grade="sahih"
                  explanation="Ce hadith fait partie d&apos;un hadith plus long dans lequel le Prophète ﷺ enseigne que chaque articulation du corps humain doit une sadaqa chaque jour. Les compagnons, surpris par cette exigence, lui demandèrent comment la remplir. Le Prophète ﷺ leur montra que la sadaqa quotidienne ne requiert pas de fortune : une parole aimable, la marche vers la mosquée et le nettoyage du chemin suffisent. Ce hadith libère le musulman de la culpabilité de ne pas pouvoir donner financièrement."
                />

                <HadithBlock
                  number={6}
                  title="Abreuver un animal assoiffé est une sadaqa"
                  narrator="Abu Hurayra"
                  arabic="بَيْنَمَا رَجُلٌ يَمْشِي بِطَرِيقٍ اشْتَدَّ عَلَيْهِ الْعَطَشُ فَوَجَدَ بِئْرًا فَنَزَلَ فِيهَا فَشَرِبَ ثُمَّ خَرَجَ فَإِذَا كَلْبٌ يَلْهَثُ يَأْكُلُ الثَّرَى مِنَ الْعَطَشِ فَقَالَ الرَّجُلُ لَقَدْ بَلَغَ هَذَا الْكَلْبَ مِنَ الْعَطَشِ مِثْلُ الَّذِي كَانَ بَلَغَ مِنِّي فَنَزَلَ الْبِئْرَ فَمَلَأَ خُفَّهُ مَاءً ثُمَّ أَمْسَكَهُ بِفِيهِ حَتَّى رَقِيَ فَسَقَى الْكَلْبَ فَشَكَرَ اللَّهُ لَهُ فَغَفَرَ لَهُ"
                  translation="Un homme marchait sur un chemin et fut pris d&apos;une soif intense. Il trouva un puits, y descendit et but. En sortant, il vit un chien haletant qui mangeait la terre humide tant il avait soif. L&apos;homme se dit : &laquo; Ce chien souffre de la soif autant que j&apos;en souffrais. &raquo; Il descendit dans le puits, remplit sa chaussure d&apos;eau, la tint dans sa bouche en remontant, et abreuva le chien. Allah le remercia pour cela et lui pardonna ses péchés."
                  source="Sahih Al-Bukhari, n°2363 — Sahih Muslim, n°2244"
                  grade="sahih"
                  explanation="Ce hadith narratif illustre que la miséricorde envers les créatures d&apos;Allah — y compris les animaux — est une forme de sadaqa récompensée. L&apos;homme n&apos;avait pas de récipient : il utilisa sa chaussure, montrant que la sincérité de l&apos;intention importe plus que les moyens. Les compagnons demandèrent : &laquo; Ô Messager d&apos;Allah, sommes-nous récompensés pour les animaux ? &raquo; Il répondit : &laquo; En toute créature vivante, il y a une récompense. &raquo; Ce hadith élargit la sadaqa à la bienveillance envers tous les êtres vivants."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths montrent que la sadaqa en islam est un concept vaste qui transcende le simple don financier. Chaque acte de bonté, chaque parole aimable, chaque geste de compassion est comptabilisé comme une aumône auprès d&apos;Allah. Cette vision globale de la charité permet à chaque musulman de contribuer, quel que soit son statut social ou financier.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh de la sadaqa, les règles de la zakat et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Sadaqa cachée        */}
              {/* ============================== */}
              <section id="sadaqa-cachee" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La sadaqa cachée : l&apos;aumône secrète dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam accorde une importance particulière à la discrétion dans le don. La sadaqa cachée préserve la sincérité de l&apos;intention et protège le donneur de l&apos;ostentation (<em>riya&apos;</em>), l&apos;un des plus grands dangers pour les actes d&apos;adoration. Les hadiths suivants montrent la supériorité de l&apos;aumône secrète.
                </p>

                <HadithBlock
                  number={7}
                  title="Sept personnes sous l&apos;ombre d&apos;Allah : celui qui donne en secret"
                  narrator="Abu Hurayra"
                  arabic="سَبْعَةٌ يُظِلُّهُمُ اللَّهُ فِي ظِلِّهِ يَوْمَ لَا ظِلَّ إِلَّا ظِلُّهُ: إِمَامٌ عَادِلٌ وَشَابٌّ نَشَأَ فِي عِبَادَةِ رَبِّهِ وَرَجُلٌ قَلْبُهُ مُعَلَّقٌ فِي الْمَسَاجِدِ وَرَجُلَانِ تَحَابَّا فِي اللَّهِ اجْتَمَعَا عَلَيْهِ وَتَفَرَّقَا عَلَيْهِ وَرَجُلٌ طَلَبَتْهُ امْرَأَةٌ ذَاتُ مَنْصِبٍ وَجَمَالٍ فَقَالَ إِنِّي أَخَافُ اللَّهَ وَرَجُلٌ تَصَدَّقَ بِصَدَقَةٍ فَأَخْفَاهَا حَتَّى لَا تَعْلَمَ شِمَالُهُ مَا تُنْفِقُ يَمِينُهُ وَرَجُلٌ ذَكَرَ اللَّهَ خَالِيًا فَفَاضَتْ عَيْنَاهُ"
                  translation="Sept personnes seront sous l&apos;ombre d&apos;Allah le jour où il n&apos;y aura pas d&apos;autre ombre que la Sienne : un dirigeant juste ; un jeune qui a grandi dans l&apos;adoration d&apos;Allah ; un homme dont le coeur est attaché aux mosquées ; deux personnes qui s&apos;aiment pour Allah ; un homme sollicité par une femme de rang et de beauté qui dit &laquo; Je crains Allah &raquo; ; un homme qui donne une aumône en la cachant au point que sa main gauche ne sait pas ce que dépense sa main droite ; et un homme qui invoque Allah dans la solitude et dont les yeux débordent de larmes."
                  source="Sahih Al-Bukhari, n°1423 — Sahih Muslim, n°1031"
                  grade="sahih"
                  explanation="Ce hadith célèbre mentionne sept catégories de personnes privilégiées au Jour du Jugement. Parmi elles figure celui qui donne en secret au point que &laquo; sa main gauche ne sait pas ce que dépense sa main droite &raquo;. Cette expression hyperbolique illustre le degré de discrétion recherché. L&apos;objectif est de préserver l&apos;ikhlas (sincérité) : le donneur ne cherche ni la reconnaissance des hommes, ni leur admiration, mais uniquement la satisfaction d&apos;Allah. Ce hadith est un puissant encouragement à multiplier les aumônes secrètes."
                />

                <HadithBlock
                  number={8}
                  title="La sadaqa secrète éteint le péché"
                  narrator="Mu&apos;awiya ibn Hayda"
                  arabic="إِنَّ صَدَقَةَ السِّرِّ تُطْفِئُ غَضَبَ الرَّبِّ تَبَارَكَ وَتَعَالَى"
                  translation="La sadaqa donnée en secret éteint la colère du Seigneur, Béni et Exalté soit-Il."
                  source="Al-Mu&apos;jam al-Kabir d&apos;At-Tabarani, n°819 — authentifié par Al-Albani dans Sahih al-Jami&apos;, n°3759"
                  grade="sahih"
                  explanation="Ce hadith précise que c&apos;est spécifiquement la sadaqa donnée en secret qui possède ce pouvoir d&apos;apaiser la colère divine. La mention de la colère d&apos;Allah ne doit pas être comprise de manière anthropomorphique, mais comme la conséquence des péchés du serviteur. En donnant en secret, le croyant manifeste une relation intime avec Allah, fondée sur la crainte et l&apos;espoir, loin du regard des hommes. Les savants recommandent de donner régulièrement en secret, même de petites sommes, comme protection spirituelle contre les péchés."
                />

                <HadithBlock
                  number={9}
                  title="La meilleure sadaqa est l&apos;effort du pauvre"
                  narrator="Abu Hurayra"
                  arabic="أَفْضَلُ الصَّدَقَةِ جُهْدُ الْمُقِلِّ وَابْدَأْ بِمَنْ تَعُولُ"
                  translation="La meilleure sadaqa est l&apos;effort de celui qui a peu. Et commence par ceux qui sont à ta charge."
                  source="Sunan Abu Dawud, n°1677 — authentifié par Al-Albani"
                  grade="sahih"
                  explanation="Ce hadith contient deux enseignements. Premièrement, la valeur de la sadaqa ne se mesure pas à la quantité donnée mais à l&apos;effort fourni par le donneur. Celui qui donne malgré ses propres besoins est plus méritant que le riche qui donne de son surplus. Deuxièmement, la charité commence par la famille : il est interdit de négliger l&apos;entretien de ses proches pour donner aux étrangers. Ce hadith établit un ordre de priorité qui protège la cellule familiale tout en encourageant la générosité mesurée."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Sadaqa jariya        */}
              {/* ============================== */}
              <section id="sadaqa-jariya" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La sadaqa jariya : l&apos;aumône continue dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La sadaqa jariya est l&apos;une des formes les plus précieuses de charité en islam. Contrairement à la sadaqa ponctuelle, l&apos;aumône continue produit des récompenses qui s&apos;accumulent même après la mort du donneur. Le Prophète ﷺ a encouragé les musulmans à investir dans des projets durables dont les bienfaits persistent au fil du temps.
                </p>

                <HadithBlock
                  number={10}
                  title="Trois oeuvres dont la récompense ne cesse pas"
                  narrator="Abu Hurayra"
                  arabic="إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثَةٍ إِلَّا مِنْ صَدَقَةٍ جَارِيَةٍ أَوْ عِلْمٍ يُنْتَفَعُ بِهِ أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ"
                  translation="Lorsque le fils d&apos;Adam meurt, ses oeuvres cessent sauf trois : une aumône continue (sadaqa jariya), une science dont les gens tirent profit, et un enfant pieux qui invoque Allah en sa faveur."
                  source="Sahih Muslim, n°1631"
                  grade="sahih"
                  explanation="Ce hadith est le fondement du concept de sadaqa jariya. Les trois exceptions à l&apos;arrêt des oeuvres après la mort sont toutes liées à l&apos;impact durable : un bien qui continue de profiter (puits, mosquée, école), un savoir transmis qui continue d&apos;être enseigné, et un enfant bien éduqué qui continue d&apos;invoquer pour ses parents. Ce hadith incite le musulman à penser à long terme et à investir dans des oeuvres dont les bienfaits transcendent sa propre existence. Les savants l&apos;utilisent pour encourager la construction de mosquées, le financement de projets éducatifs et la diffusion du savoir islamique."
                />

                <HadithBlock
                  number={11}
                  title="Planter un arbre est une sadaqa"
                  narrator="Anas ibn Malik"
                  arabic="مَا مِنْ مُسْلِمٍ يَغْرِسُ غَرْسًا أَوْ يَزْرَعُ زَرْعًا فَيَأْكُلُ مِنْهُ طَيْرٌ أَوْ إِنْسَانٌ أَوْ بَهِيمَةٌ إِلَّا كَانَ لَهُ بِهِ صَدَقَةٌ"
                  translation="Il n&apos;est pas un musulman qui plante un arbre ou sème une graine, puis qu&apos;un oiseau, un être humain ou un animal en mange, sans que cela ne lui soit compté comme une sadaqa."
                  source="Sahih Al-Bukhari, n°2320 — Sahih Muslim, n°1553"
                  grade="sahih"
                  explanation="Ce hadith est un exemple concret de sadaqa jariya. L&apos;arbre planté ou le champ cultivé continue de nourrir les créatures bien après le geste initial du musulman. Chaque fruit mangé, chaque grain picor par un oiseau, chaque herbe broutée par un animal est une sadaqa qui s&apos;inscrit dans le registre des bonnes actions du planteur. Ce hadith encourage l&apos;agriculture, l&apos;écologie et la préservation de l&apos;environnement comme des actes d&apos;adoration. Il illustre la vision islamique d&apos;une charité qui inclut toutes les créatures, pas seulement les êtres humains."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La sadaqa jariya est un investissement pour l&apos;éternité. Les projets qui bénéficient aux gens durablement — mosquées, puits, écoles, livres de science — sont les meilleurs placements du croyant pour sa vie future. Pour en savoir plus sur le soutien aux plus vulnérables, consultez notre article sur{" "}
                  <Link href="/hadith-orphelin-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    les hadiths sur l&apos;orphelin en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur la sadaqa et la charité
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur la sadaqa. Leurs explications permettent de mieux saisir la portée juridique, spirituelle et sociale de ces enseignements prophétiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La sadaqa est une preuve (burhan) de la sincérité de la foi du croyant. En effet, l&apos;âme est naturellement attachée aux biens. Celui qui dépense ses biens dans le sentier d&apos;Allah prouve que son amour pour Allah est supérieur à son amour pour la richesse. C&apos;est pourquoi le Prophète ﷺ a dit : &laquo; la sadaqa est une preuve &raquo;.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La sadaqa cachée est supérieure à la sadaqa publique dans la plupart des cas, car elle est plus éloignée de l&apos;ostentation et plus proche de la sincérité. Cependant, si la sadaqa publique encourage les autres à donner et qu&apos;elle est exempte d&apos;ostentation, elle peut être préférable, car elle joint le bienfait du don à celui de l&apos;exemple.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La sadaqa jariya est la forme la plus sage de charité, car elle allie la générosité immédiate à la prévoyance. Le croyant qui construit un puits, fonde une école ou plante un arbre investit dans son au-delà tout en bénéficiant à la communauté dans la durée. C&apos;est l&apos;acte le plus intelligent du point de vue de l&apos;éternité.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Zad al-Ma&apos;ad</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que les hadiths sur la sadaqa ne sont pas de simples exhortations morales : ils constituent le fondement d&apos;un système complet de solidarité sociale. Les savants distinguent la sadaqa obligatoire (zakat, expiation) de la sadaqa volontaire (<em>tatawwu&apos;</em>), tout en soulignant que la charité volontaire est un complément indispensable qui couvre les besoins non satisfaits par la zakat.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Leçons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques sur la sadaqa
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour la pratique quotidienne de la sadaqa :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Donner régulièrement, même peu
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La constance dans la sadaqa est plus précieuse qu&apos;un don ponctuel important. L&apos;ombre de la sadaqa au Jour du Jugement se construit jour après jour, aumône après aumône.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Élargir sa vision de la charité
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le sourire, la bonne parole, guider un égaré, retirer un obstacle du chemin : la sadaqa dépasse largement le don d&apos;argent. Chaque musulman peut pratiquer la charité quotidiennement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Privilégier la discrétion dans le don
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La sadaqa cachée préserve la sincérité et protège de l&apos;ostentation. Que ta main gauche ne sache pas ce que donne ta main droite : tel est l&apos;idéal prophétique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Investir dans la sadaqa jariya
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Construire une mosquée, creuser un puits, financer une école, planter un arbre : ces oeuvres continuent de produire des récompenses bien après la mort du donneur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Donner du meilleur de ses biens
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Coran interdit de donner en sadaqa ce que l&apos;on refuserait soi-même. La qualité du don reflète la sincérité de l&apos;intention et le respect envers le bénéficiaire.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Commencer par sa propre famille
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a enseigné de commencer la charité par ceux qui sont à sa charge. Subvenir aux besoins de sa famille est la première et la plus méritoire des sadaqat.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur la sadaqa dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur la zakat en islam : l&apos;aumône obligatoire"
                  description="Les hadiths authentiques sur le troisième pilier de l&apos;islam : calcul, bénéficiaires et mérites de la zakat."
                  href="/hadith-zakat-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur l&apos;orphelin en islam : protection et miséricorde"
                  description="Les enseignements prophétiques sur le soin des orphelins et la récompense de celui qui les prend en charge."
                  href="/hadith-orphelin-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
