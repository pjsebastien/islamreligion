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
    "Hadiths sur le bon comportement (akhlaq) en islam : guide des vertus prophétiques",
  description:
    "Découvrez les hadiths authentiques sur le bon comportement en islam (akhlaq) : noblesse du caractère, douceur, sourire, honnêteté, pudeur. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths sur le bon comportement (akhlaq) en islam : guide des vertus prophétiques",
    description:
      "Les hadiths authentiques sur le bon comportement en islam : noblesse du caractère, sourire, parole douce, honnêteté, pudeur et modestie selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-bon-comportement-islam",
    images: [
      {
        url: "/images/motif-arabesque-islamique-geometrie-dore.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-bon-comportement-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique du bon comportement" },
  { id: "noblesse-caractere", label: "La noblesse du caractère" },
  { id: "sourire-douceur", label: "Le sourire, la parole douce et la douceur" },
  { id: "honnetete-sincerite", label: "L\u2019honnêteté et la sincérité" },
  { id: "pudeur-modestie", label: "La pudeur et la modestie" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur le bon comportement en islam ?",
    answer:
      "Les hadiths les plus importants sur le bon comportement incluent celui rapporté par An-Nawwas ibn Sam\u2019an où le Prophète ﷺ définit le bon comportement comme ce qui apaise l\u2019âme (Muslim 2553), celui d\u2019Abu Dharr sur le sourire comme aumône (Tirmidhi 1956), et celui d\u2019Abdullah ibn Mas\u2019ud sur la véracité qui mène au Paradis (Bukhari 6094). Ces hadiths couvrent les fondements de l\u2019éthique islamique.",
  },
  {
    question:
      "Pourquoi le bon comportement (akhlaq) est-il si important en islam ?",
    answer:
      "Le bon comportement est au cœur du message prophétique. Le Prophète ﷺ a déclaré : \u00ab J\u2019ai été envoyé pour parfaire les nobles caractères \u00bb (Musnad Ahmad 8939). L\u2019akhlaq est si important que le Prophète ﷺ a affirmé que la meilleure chose placée dans la balance du croyant au Jour du Jugement est le bon caractère (Abu Dawud 4799). Il ne s\u2019agit pas d\u2019un aspect secondaire, mais d\u2019un pilier de la foi.",
  },
  {
    question:
      "Quelle est la place du sourire dans le comportement du musulman ?",
    answer:
      "Le sourire occupe une place privilégiée dans l\u2019éthique islamique. Le Prophète ﷺ a enseigné que sourire à son frère est une aumône (Tirmidhi 1956). Ses Compagnons témoignent qu\u2019il était constamment souriant. Le sourire est considéré comme un acte d\u2019adoration accessible à tous, qui adoucit les relations et propage la bienveillance dans la société musulmane.",
  },
  {
    question:
      "Les hadiths sur le bon comportement s\u2019appliquent-ils uniquement entre musulmans ?",
    answer:
      "Non, les hadiths sur le bon comportement ont une portée universelle. Le Prophète ﷺ a ordonné la douceur en toute chose (Muslim 2593), et le Coran décrit le Prophète comme une miséricorde pour l\u2019ensemble des mondes. Les savants soulignent que le bon caractère en islam s\u2019applique envers toute la création : musulmans, non-musulmans, animaux et même l\u2019environnement.",
  },
  {
    question:
      "Quel est le lien entre la pudeur (haya) et la foi en islam ?",
    answer:
      "Le lien est explicite dans les hadiths : le Prophète ﷺ a affirmé que la pudeur est une branche de la foi (Bukhari 9, Muslim 35). La pudeur en islam ne se limite pas à la tenue vestimentaire : elle englobe la retenue dans la parole, le regard, le comportement et les transactions. Les savants considèrent la pudeur comme un indicateur du niveau de foi du croyant.",
  },
  {
    question:
      "Comment le Prophète Muhammad ﷺ incarnait-il le bon comportement ?",
    answer:
      "Le Prophète ﷺ était l\u2019incarnation vivante du Coran, comme l\u2019a décrit Aisha (Muslim 746). Il était constamment souriant, parlait avec douceur, ne répondait pas au mal par le mal, était le plus pudique des hommes et le plus véridique. Il saluait les enfants, aidait les faibles et pardonnait à ceux qui lui avaient fait du tort. Son comportement exemplaire reste le modèle suprême pour tout musulman.",
  },
];

export default function HadithBonComportementIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-bon-comportement-islam/#article",
        headline:
          "Hadiths sur le bon comportement (akhlaq) en islam : guide des vertus prophétiques",
        description:
          "Découvrez les hadiths authentiques sur le bon comportement en islam (akhlaq) : noblesse du caractère, douceur, sourire, honnêteté, pudeur.",
        image: "/images/motif-arabesque-islamique-geometrie-dore.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-bon-comportement-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-bon-comportement-islam/#breadcrumb",
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
            name: "Bon comportement",
            item: "https://www.islamreligion.fr/hadith-bon-comportement-islam",
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
          title="Hadiths sur le bon comportement (akhlaq) en islam"
          subtitle="Les enseignements prophétiques sur la noblesse du caractère, la douceur, le sourire, l&apos;honnêteté et la pudeur selon la Sunna authentique."
          imageSrc="/images/motif-arabesque-islamique-geometrie-dore.jpg"
          imageAlt="Hadiths sur le bon comportement en islam, akhlaq et vertus prophétiques"
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
                  Bon comportement
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
                    Le Prophète ﷺ a été envoyé pour parfaire les nobles caractères : l&apos;akhlaq est au cœur de la mission prophétique.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le bon comportement est la chose la plus lourde dans la balance du croyant au Jour du Jugement.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le sourire, la parole douce et la douceur dans les relations sont des formes d&apos;aumône et d&apos;adoration.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La pudeur (<em>haya</em>) est une branche de la foi et un trait distinctif du croyant.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique du bon comportement en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;explorer les hadiths sur le bon comportement, il est essentiel de rappeler que le Coran pose les fondements de l&apos;éthique islamique. Allah exalté soit-Il a décrit Son Prophète ﷺ comme un modèle de caractère sublime, et a ordonné aux croyants d&apos;adopter les vertus les plus nobles dans leurs interactions. Le terme <em>akhlaq</em> (pluriel de <em>khuluq</em>) désigne l&apos;ensemble des dispositions morales et des vertus qui façonnent la personnalité du musulman.
                </p>

                <HadithCard
                  arabic="وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ"
                  text="Et tu es certes d&apos;un caractère éminent."
                  source="Coran, sourate Al-Qalam (68:4)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset est l&apos;un des plus puissants éloges divins adressés au Prophète Muhammad ﷺ. Allah atteste que son caractère est <em>&apos;azim</em> (immense, grandiose). Les savants expliquent que ce verset englobe toutes les vertus morales : la patience, la générosité, la douceur, la véracité, la pudeur et le pardon. Aisha, interrogée sur le caractère du Prophète ﷺ, a répondu : &laquo;&nbsp;Son caractère était le Coran&nbsp;&raquo; (Muslim 746), signifiant qu&apos;il incarnait chaque enseignement du Livre d&apos;Allah.
                </p>

                <HadithCard
                  arabic="خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ وَأَعْرِضْ عَنِ الْجَاهِلِينَ"
                  text="Accepte ce qu&apos;on t&apos;offre de raisonnable, commande ce qui est convenable et éloigne-toi des ignorants."
                  source="Coran, sourate Al-A&apos;raf (7:199)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset résume à lui seul le programme éthique du musulman : le pardon, l&apos;appel au bien et le détachement face à la provocation. Les exégètes, dont l&apos;imam Ibn Kathir, considèrent ce verset comme un condensé des bonnes mœurs (<em>makarim al-akhlaq</em>). C&apos;est sur cette base coranique que le Prophète ﷺ a construit ses enseignements détaillés sur le bon comportement, que nous allons explorer à travers les hadiths authentiques.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Noblesse du caractère */}
              {/* ============================== */}
              <section id="noblesse-caractere" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La noblesse du caractère selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a élevé le bon caractère au rang de finalité de sa mission prophétique. Les hadiths suivants montrent que l&apos;akhlaq n&apos;est pas un aspect secondaire de la pratique religieuse, mais son essence même. Un musulman qui prie et jeûne mais dont le caractère est mauvais a une foi incomplète, tandis que celui qui excelle dans ses mœurs atteint les plus hauts degrés.
                </p>

                <HadithBlock
                  number={1}
                  title="J&apos;ai été envoyé pour parfaire les nobles caractères"
                  narrator="Abu Hurayra"
                  arabic="إِنَّمَا بُعِثْتُ لِأُتَمِّمَ صَالِحَ الْأَخْلَاقِ"
                  translation="J&apos;ai été envoyé pour parfaire les nobles caractères."
                  source="Musnad Ahmad, n°8939 — Al-Adab al-Mufrad, n°273"
                  grade="sahih"
                  explanation="Ce hadith définit le cœur même de la mission prophétique : le perfectionnement moral de l&apos;humanité. Le verbe &laquo; parfaire &raquo; (utammim) indique que les prophètes précédents avaient déjà posé des fondements éthiques, et que Muhammad ﷺ est venu les compléter et les porter à leur achèvement. Les savants, dont l&apos;imam Malik qui a placé ce hadith en ouverture de son chapitre sur le bon caractère dans le Muwatta, y voient la preuve que l&apos;akhlaq est indissociable de la foi. La religion ne se réduit pas aux rituels : elle est avant tout un projet de transformation morale."
                />

                <HadithBlock
                  number={2}
                  title="Le bon caractère, la chose la plus lourde dans la balance"
                  narrator="Abu Darda"
                  arabic="مَا مِنْ شَيْءٍ أَثْقَلُ فِي الْمِيزَانِ مِنْ حُسْنِ الْخُلُقِ"
                  translation="Il n&apos;y a rien de plus lourd dans la balance (du Jour du Jugement) que le bon caractère."
                  source="Sunan Abu Dawud, n°4799 — Jami&apos; at-Tirmidhi, n°2002"
                  grade="sahih"
                  explanation="Ce hadith donne au bon caractère un poids eschatologique considérable. La &laquo; balance &raquo; (mizan) fait référence à la pesée des actes au Jour du Jugement. Le Prophète ﷺ affirme que le bon caractère est la chose la plus lourde qu&apos;un croyant puisse y déposer. Cela signifie que les vertus morales — la patience, la générosité, la douceur, la véracité — pèsent davantage que de nombreux actes d&apos;adoration accomplis sans élévation morale. Les savants y voient un encouragement puissant à travailler son caractère au quotidien."
                />

                <HadithBlock
                  number={3}
                  title="Le bon comportement est la piété"
                  narrator="An-Nawwas ibn Sam&apos;an"
                  arabic="الْبِرُّ حُسْنُ الْخُلُقِ، وَالْإِثْمُ مَا حَاكَ فِي صَدْرِكَ وَكَرِهْتَ أَنْ يَطَّلِعَ عَلَيْهِ النَّاسُ"
                  translation="La piété (birr), c&apos;est le bon caractère. Et le péché est ce qui te trouble intérieurement et que tu détestes que les gens découvrent."
                  source="Sahih Muslim, n°2553"
                  grade="sahih"
                  explanation="Ce hadith établit une équivalence remarquable entre la piété (birr) et le bon caractère. Le terme birr, qui désigne habituellement la vertu au sens large et l&apos;obéissance à Allah, est ici identifié au bon comportement. Le Prophète ﷺ offre également un critère intérieur pour reconnaître le péché : ce qui provoque un malaise dans la poitrine et que l&apos;on souhaite cacher aux autres. Les savants soulignent que ce hadith fait du bon caractère non pas un simple complément de la piété, mais son essence même."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths forment un triptyque fondamental sur la place du bon caractère en islam. Ils enseignent que l&apos;akhlaq est à la fois la finalité de la prophétie, la chose la plus précieuse au Jour du Jugement et l&apos;essence même de la piété. Pour approfondir les enseignements du Prophète ﷺ et découvrir d&apos;autres paroles fondatrices, consultez notre article sur{" "}
                  <Link href="/hadith-prophete-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    les hadiths du Prophète Muhammad ﷺ
                  </Link>.
                </p>
              </section>

              {/* =========================================== */}
              {/* SECTION : Sourire, parole douce, douceur    */}
              {/* =========================================== */}
              <section id="sourire-douceur" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le sourire, la parole douce et la douceur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ n&apos;a pas seulement prêché les grandes vertus abstraites : il a enseigné des gestes concrets et accessibles à tous. Le sourire, la bonne parole et la douceur dans les relations sont des actes d&apos;adoration à part entière. Ces hadiths montrent que le bon comportement commence par les interactions les plus simples du quotidien.
                </p>

                <HadithBlock
                  number={4}
                  title="Ton sourire à ton frère est une aumône"
                  narrator="Abu Dharr"
                  arabic="تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ، وَأَمْرُكَ بِالْمَعْرُوفِ وَنَهْيُكَ عَنِ الْمُنْكَرِ صَدَقَةٌ، وَإِرْشَادُكَ الرَّجُلَ فِي أَرْضِ الضَّلَالِ لَكَ صَدَقَةٌ"
                  translation="Ton sourire à ton frère est une aumône. Ton commandement du bien et ton interdiction du mal sont une aumône. Ton indication du chemin à celui qui est égaré est une aumône."
                  source="Jami&apos; at-Tirmidhi, n°1956"
                  grade="hasan"
                  explanation="Ce hadith élargit considérablement la notion d&apos;aumône (sadaqa) en islam. Le sourire, geste qui ne coûte rien, est placé au même rang que les bonnes actions. Le Prophète ﷺ montre que la générosité n&apos;est pas uniquement financière : elle peut être un regard bienveillant, une parole encourageante ou un service rendu. Les savants y voient la preuve que l&apos;islam valorise les petits gestes quotidiens autant que les grandes œuvres. Ce hadith invite le musulman à transformer chaque interaction en acte d&apos;adoration."
                />

                <HadithBlock
                  number={5}
                  title="La bonne parole est une aumône"
                  narrator="Abu Hurayra"
                  arabic="كُلُّ سُلَامَى مِنَ النَّاسِ عَلَيْهِ صَدَقَةٌ كُلَّ يَوْمٍ تَطْلُعُ فِيهِ الشَّمْسُ، تَعْدِلُ بَيْنَ اثْنَيْنِ صَدَقَةٌ، وَتُعِينُ الرَّجُلَ فِي دَابَّتِهِ فَتَحْمِلُهُ عَلَيْهَا أَوْ تَرْفَعُ لَهُ عَلَيْهَا مَتَاعَهُ صَدَقَةٌ، وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ"
                  translation="Chaque articulation du corps humain doit s&apos;acquitter d&apos;une aumône chaque jour où le soleil se lève. Réconcilier deux personnes est une aumône, aider un homme à monter sur sa monture ou à y charger ses affaires est une aumône, et la bonne parole est une aumône."
                  source="Sahih Al-Bukhari, n°2989 — Sahih Muslim, n°1009"
                  grade="sahih"
                  explanation="Ce hadith enseigne que le corps humain, composé de 360 articulations, a besoin chaque jour de 360 aumônes pour exprimer la gratitude envers Allah. Parmi ces aumônes, le Prophète ﷺ cite la bonne parole (al-kalima at-tayyiba). Les savants expliquent que la parole douce, le mot d&apos;encouragement, le salut chaleureux et même le silence face à la provocation sont autant de formes de cette aumône quotidienne. Ce hadith motive le croyant à multiplier les bonnes actions, aussi modestes soient-elles."
                />

                <HadithBlock
                  number={6}
                  title="La douceur embellit toute chose"
                  narrator="Aisha"
                  arabic="إِنَّ الرِّفْقَ لَا يَكُونُ فِي شَيْءٍ إِلَّا زَانَهُ، وَلَا يُنْزَعُ مِنْ شَيْءٍ إِلَّا شَانَهُ"
                  translation="La douceur n&apos;est présente dans une chose que pour l&apos;embellir, et elle n&apos;est retirée d&apos;une chose que pour l&apos;enlaidir."
                  source="Sahih Muslim, n°2594"
                  grade="sahih"
                  explanation="Ce hadith énonce un principe universel : la douceur (rifq) embellit tout ce qu&apos;elle touche, et son absence enlaidit tout ce dont elle se retire. Le Prophète ﷺ applique ce principe à tous les domaines de la vie : la parole, l&apos;éducation, le commerce, la gouvernance et les relations familiales. Les savants, dont l&apos;imam An-Nawawi, soulignent que ce hadith est une invitation permanente à choisir la douceur en toute circonstance. La violence et la brutalité ne sont jamais la voie du croyant, même lorsqu&apos;il a raison."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Le sourire, la bonne parole et la douceur sont des vertus que le Prophète ﷺ a rendues accessibles à tous les croyants, sans distinction de richesse ou de statut. Elles constituent la base des relations sociales en islam et témoignent d&apos;une foi vivante et généreuse. Ces qualités sont également essentielles dans les relations d&apos;amitié et de fraternité que nous explorons dans notre article sur{" "}
                  <Link href="/hadith-amitie-frequentation-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    les hadiths sur l&apos;amitié et la fréquentation en islam
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le bon comportement prophétique, les sciences du hadith et la spiritualité islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Honnêteté, sincérité */}
              {/* ============================== */}
              <section id="honnetete-sincerite" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;honnêteté et la sincérité dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;honnêteté (<em>sidq</em>) et la sincérité (<em>ikhlas</em>) occupent une place centrale dans l&apos;éthique islamique. Le Prophète ﷺ a lié la véracité au chemin du Paradis et le mensonge au chemin de l&apos;Enfer. La parole du musulman doit être un reflet fidèle de sa réalité intérieure, et son comportement public doit correspondre à son comportement privé.
                </p>

                <HadithBlock
                  number={7}
                  title="La véracité mène au Paradis"
                  narrator="Abdullah ibn Mas&apos;ud"
                  arabic="عَلَيْكُمْ بِالصِّدْقِ فَإِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ وَمَا يَزَالُ الرَّجُلُ يَصْدُقُ وَيَتَحَرَّى الصِّدْقَ حَتَّى يُكْتَبَ عِنْدَ اللَّهِ صِدِّيقًا وَإِيَّاكُمْ وَالْكَذِبَ فَإِنَّ الْكَذِبَ يَهْدِي إِلَى الْفُجُورِ وَإِنَّ الْفُجُورَ يَهْدِي إِلَى النَّارِ وَمَا يَزَالُ الرَّجُلُ يَكْذِبُ وَيَتَحَرَّى الْكَذِبَ حَتَّى يُكْتَبَ عِنْدَ اللَّهِ كَذَّابًا"
                  translation="Attachez-vous à la véracité, car la véracité mène à la piété et la piété mène au Paradis. L&apos;homme ne cesse d&apos;être véridique et de rechercher la vérité jusqu&apos;à ce qu&apos;il soit inscrit auprès d&apos;Allah comme véridique (siddiq). Et prenez garde au mensonge, car le mensonge mène à la perversité et la perversité mène au Feu. L&apos;homme ne cesse de mentir et de rechercher le mensonge jusqu&apos;à ce qu&apos;il soit inscrit auprès d&apos;Allah comme menteur."
                  source="Sahih Al-Bukhari, n°6094 — Sahih Muslim, n°2607"
                  grade="sahih"
                  explanation="Ce hadith présente la véracité et le mensonge comme deux chemins opposés aux conséquences éternelles. Le Prophète ﷺ établit une chaîne causale : la véracité conduit à la piété (birr), qui conduit au Paradis ; le mensonge conduit à la perversité (fujur), qui conduit à l&apos;Enfer. Le terme siddiq (véridique par excellence) est le plus haut degré après la prophétie, comme en témoigne le surnom d&apos;Abu Bakr as-Siddiq. Les savants soulignent que ce hadith concerne toutes les formes de véracité : la parole, l&apos;intention et l&apos;action."
                />

                <HadithBlock
                  number={8}
                  title="Les signes de l&apos;hypocrite"
                  narrator="Abu Hurayra"
                  arabic="آيَةُ الْمُنَافِقِ ثَلَاثٌ: إِذَا حَدَّثَ كَذَبَ، وَإِذَا وَعَدَ أَخْلَفَ، وَإِذَا اؤْتُمِنَ خَانَ"
                  translation="Les signes de l&apos;hypocrite sont au nombre de trois : lorsqu&apos;il parle, il ment ; lorsqu&apos;il promet, il ne tient pas sa promesse ; et lorsqu&apos;on lui confie un dépôt, il trahit."
                  source="Sahih Al-Bukhari, n°33 — Sahih Muslim, n°59"
                  grade="sahih"
                  explanation="Ce hadith identifie trois comportements qui caractérisent l&apos;hypocrisie (nifaq) : le mensonge, la trahison des promesses et la trahison de la confiance. Les savants distinguent l&apos;hypocrisie doctrinale (nifaq akbar), qui fait sortir de l&apos;islam, de l&apos;hypocrisie comportementale (nifaq asghar), qui concerne ces trois traits. Un musulman qui ment habituellement, manque à ses engagements ou trahit les dépôts porte en lui des traits d&apos;hypocrisie qu&apos;il doit combattre. Ce hadith est un miroir que chaque croyant doit placer devant lui pour évaluer son propre comportement."
                />

                <HadithBlock
                  number={9}
                  title="Celui qui triche n&apos;est pas des nôtres"
                  narrator="Abu Hurayra"
                  arabic="مَنْ غَشَّ فَلَيْسَ مِنِّي"
                  translation="Celui qui triche n&apos;est pas des nôtres."
                  source="Sahih Muslim, n°102"
                  grade="sahih"
                  explanation="Ce hadith bref mais d&apos;une grande force condamne toute forme de tromperie et de malhonnêteté. Le Prophète ﷺ a prononcé ces mots en voyant un marchand qui avait caché la partie abîmée de sa marchandise sous la partie saine. L&apos;expression &laquo; n&apos;est pas des nôtres &raquo; ne signifie pas l&apos;exclusion de l&apos;islam, mais un désaveu prophétique sévère. Les savants appliquent ce hadith à toutes les formes de tromperie : dans le commerce, les examens, les contrats, les relations et même dans l&apos;enseignement. L&apos;honnêteté est un pilier non négociable de la vie en société selon l&apos;islam."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Pudeur et modestie   */}
              {/* ============================== */}
              <section id="pudeur-modestie" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La pudeur et la modestie dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La pudeur (<em>haya</em>) est une vertu que le Prophète ﷺ a élevée au rang de branche de la foi. Elle ne se limite pas à la tenue vestimentaire : elle englobe la retenue dans la parole, le regard, le comportement et les transactions. Le Prophète ﷺ était lui-même décrit comme &laquo;&nbsp;plus pudique qu&apos;une jeune fille dans sa chambre&nbsp;&raquo;. La modestie, quant à elle, se manifeste dans l&apos;absence d&apos;orgueil et la simplicité du caractère.
                </p>

                <HadithBlock
                  number={10}
                  title="La pudeur est une branche de la foi"
                  narrator="Abu Hurayra"
                  arabic="الْإِيمَانُ بِضْعٌ وَسَبْعُونَ أَوْ بِضْعٌ وَسِتُّونَ شُعْبَةً فَأَفْضَلُهَا قَوْلُ لَا إِلَهَ إِلَّا اللَّهُ وَأَدْنَاهَا إِمَاطَةُ الْأَذَى عَنْ الطَّرِيقِ وَالْحَيَاءُ شُعْبَةٌ مِنْ الْإِيمَانِ"
                  translation="La foi comporte soixante-dix et quelques — ou soixante et quelques — branches. La plus élevée est la parole &laquo; il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah &raquo; et la plus basse est le fait d&apos;écarter un obstacle du chemin. Et la pudeur est une branche de la foi."
                  source="Sahih Al-Bukhari, n°9 — Sahih Muslim, n°35"
                  grade="sahih"
                  explanation="Ce hadith célèbre structure la foi en branches multiples, de la plus haute (le tawhid) à la plus humble (écarter un obstacle). La pudeur est mentionnée séparément comme une branche à part entière, ce qui souligne son importance particulière. Les savants expliquent que la pudeur est le moteur intérieur qui pousse le croyant à s&apos;éloigner du péché et à embellir son comportement. Celui qui perd la pudeur perd le frein moral qui protège sa foi. Ce hadith est rapporté dans les deux Sahih, attestant de son authenticité maximale."
                />

                <HadithBlock
                  number={11}
                  title="La pudeur ne produit que du bien"
                  narrator="Imran ibn Husayn"
                  arabic="الْحَيَاءُ لَا يَأْتِي إِلَّا بِخَيْرٍ"
                  translation="La pudeur ne produit que du bien."
                  source="Sahih Al-Bukhari, n°6117 — Sahih Muslim, n°37"
                  grade="sahih"
                  explanation="Ce hadith bref énonce un principe absolu : la pudeur est toujours bénéfique, sans exception. Certains objectent que la pudeur peut empêcher de poser des questions ou de réclamer ses droits. Les savants répondent que la pudeur véritable (haya shar&apos;i) ne pousse jamais à négliger une obligation religieuse ou un droit légitime. La fausse pudeur qui empêche d&apos;apprendre ou de défendre la vérité n&apos;est pas la pudeur louée par le Prophète ﷺ, mais de la timidité blâmable. La vraie pudeur pousse à éviter le péché, à respecter autrui et à se comporter avec dignité."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La pudeur et la modestie sont des vertus qui protègent le croyant de l&apos;intérieur. Elles sont le reflet d&apos;une conscience permanente d&apos;Allah et d&apos;un respect profond pour Sa création. Ces qualités sont étroitement liées à la patience et à l&apos;endurance face aux épreuves, que nous explorons dans notre article sur{" "}
                  <Link href="/hadith-patience-epreuves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    les hadiths sur la patience et les épreuves en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le bon comportement
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur le bon comportement. Leurs réflexions permettent de saisir la profondeur et la portée de ces enseignements prophétiques dans la vie quotidienne du musulman.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le bon caractère est la moitié de la religion. Le Prophète ﷺ a résumé l&apos;ensemble de sa mission dans le perfectionnement des mœurs. Celui qui néglige son caractère tout en multipliant les actes d&apos;adoration est comme celui qui construit un édifice sans fondations.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam Al-Ghazali, <em>Ihya &apos;Ulum ad-Din</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith sur la véracité qui mène au Paradis montre que la véracité n&apos;est pas seulement une qualité morale, mais un chemin spirituel. Celui qui s&apos;attache à la vérité dans toutes ses affaires finit par être inscrit auprès d&apos;Allah comme siddiq, le plus haut rang après la prophétie.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La pudeur est le gardien de la foi. Lorsqu&apos;elle disparaît, le croyant perd sa protection intérieure contre le péché. C&apos;est pourquoi le Prophète ﷺ l&apos;a mentionnée spécifiquement parmi les branches de la foi : elle est le mécanisme qui active toutes les autres branches.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le bon comportement en islam n&apos;est pas une simple politesse sociale. C&apos;est un acte d&apos;adoration à part entière, récompensé par Allah comme la prière et le jeûne. Le Prophète ﷺ a fait du sourire une aumône et de la bonne parole une sadaqa, élevant ainsi les gestes quotidiens au rang d&apos;actes méritoires.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Madarij as-Salikin</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires des savants montrent que le bon comportement en islam dépasse la simple courtoisie : il est un pilier de la foi, un chemin vers le Paradis et un critère de jugement au Jour Dernier. Chaque hadith cité dans cet article a fait l&apos;objet de commentaires détaillés dans les ouvrages classiques de la tradition islamique.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Leçons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques pour le musulman
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour améliorer son caractère au quotidien :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Faire du bon caractère une priorité religieuse
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        L&apos;akhlaq n&apos;est pas un supplément optionnel à la pratique religieuse : c&apos;est son essence. Le Prophète ﷺ a fait du bon caractère la chose la plus lourde dans la balance du Jour du Jugement. Chaque effort pour améliorer son caractère est un acte d&apos;adoration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Multiplier les sourires et les bonnes paroles
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le sourire et la bonne parole sont des aumônes accessibles à tous, sans distinction de richesse ou de statut. Ils adoucissent les relations, renforcent les liens fraternels et propagent la bienveillance dans la communauté.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Choisir la douceur en toute circonstance
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La douceur embellit tout ce qu&apos;elle touche. Dans l&apos;éducation des enfants, les discussions conjugales, les relations professionnelles et même les désaccords : la douceur est toujours le meilleur choix selon l&apos;enseignement prophétique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        S&apos;attacher à la véracité absolue
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La véracité mène au Paradis et le mensonge mène à l&apos;Enfer. Le musulman doit être véridique dans ses paroles, ses actes et ses intentions. Les traits de l&apos;hypocrite — le mensonge, la trahison des promesses et la trahison de la confiance — doivent être combattus avec acharnement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Cultiver la pudeur comme protection intérieure
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La pudeur est le gardien de la foi. Elle empêche le croyant de s&apos;engager dans le péché et l&apos;encourage à agir avec dignité et retenue. La vraie pudeur ne freine pas l&apos;apprentissage ni la défense du droit, mais elle freine l&apos;indécence et la transgression.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Bannir toute forme de tromperie
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a désavoué celui qui triche. L&apos;honnêteté dans le commerce, les relations et tous les domaines de la vie est un impératif islamique non négociable. Le musulman doit être reconnu pour sa fiabilité et son intégrité.
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
                  description="Comprenez les hadiths sur le bon comportement dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur la patience et les épreuves en islam"
                  description="Les enseignements prophétiques sur l&apos;endurance, la résilience et la récompense de la patience."
                  href="/hadith-patience-epreuves-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur l&apos;amitié et la fréquentation en islam"
                  description="Les critères prophétiques pour choisir ses compagnons et entretenir des relations saines."
                  href="/hadith-amitie-frequentation-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
