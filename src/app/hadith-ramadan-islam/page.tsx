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
    "Hadiths sur le Ramadan en islam : jeûne, prière et récompenses",
  description:
    "Découvrez les hadiths authentiques sur le Ramadan en islam : mérites du mois béni, jeûne, prières de nuit (tarawih), suhur, iftar et récompenses divines. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths sur le Ramadan en islam : jeûne, prière et récompenses",
    description:
      "Les hadiths authentiques sur le Ramadan : mérites du mois sacré, jeûne, prières nocturnes, suhur et iftar selon la Sunna du Prophète Muhammad ﷺ.",
    url: "https://www.islamreligion.fr/hadith-ramadan-islam",
    images: [
      {
        url: "/images/ramadan-islam-lanternes-orientales-croissant-dattes.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-ramadan-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique du Ramadan" },
  { id: "merites-ramadan", label: "Les mérites du Ramadan" },
  { id: "jeune-recompenses", label: "Le jeûne et ses récompenses" },
  { id: "prieres-nuit", label: "Les prières de nuit" },
  { id: "suhur-iftar", label: "Le suhur et l\u2019iftar" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur le Ramadan en islam ?",
    answer:
      "Les hadiths les plus importants sur le Ramadan incluent celui rapporté par Abu Hurayra sur l\u2019ouverture des portes du Paradis et la fermeture des portes de l\u2019Enfer (Bukhari 1899), celui sur la récompense du jeûne connue d\u2019Allah seul (Bukhari 1904), et celui sur le pardon des péchés par les prières nocturnes de Ramadan (Bukhari 2009). Ces hadiths couvrent les fondements du mois sacré : ses mérites, le jeûne et les prières de nuit.",
  },
  {
    question:
      "Que dit le Prophète Muhammad sur les mérites du mois de Ramadan ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a enseigné que lorsque le mois de Ramadan arrive, les portes du Paradis sont ouvertes, les portes de l\u2019Enfer sont fermées et les démons sont enchaînés (Bukhari 1899). Il a également dit que celui qui jeûne le Ramadan avec foi et en espérant la récompense divine verra ses péchés antérieurs pardonnés (Bukhari 38). Le Ramadan est ainsi un mois de miséricorde, de pardon et de libération du Feu.",
  },
  {
    question:
      "Quelle est la récompense du jeûne selon les hadiths authentiques ?",
    answer:
      "Selon un hadith qudsi rapporté par Abu Hurayra, Allah a dit : \u00ab Tout acte du fils d\u2019Adam est pour lui, sauf le jeûne, car il est pour Moi et c\u2019est Moi qui en donne la récompense \u00bb (Bukhari 1904). Ce hadith montre que la récompense du jeûne est si immense qu\u2019Allah Seul en connaît l\u2019étendue. Le jeûne est un acte de sincérité pure, car personne ne peut savoir si une personne jeûne réellement, sauf Allah.",
  },
  {
    question:
      "Les prières de tarawih sont-elles obligatoires pendant le Ramadan ?",
    answer:
      "Les prières de tarawih sont une sunna fortement recommandée (sunna mu\u2019akkada), et non une obligation. Le Prophète ﷺ les a priées en groupe pendant quelques nuits puis a cessé de peur qu\u2019elles ne deviennent obligatoires pour sa communauté (Bukhari 2012). \u2018Umar ibn al-Khattab a ensuite rassemblé les gens derrière un seul imam pour les prier en congrégation. Les quatre écoles s\u2019accordent sur leur caractère fortement recommandé.",
  },
  {
    question:
      "Le suhur (repas avant l\u2019aube) est-il obligatoire en islam ?",
    answer:
      "Le suhur n\u2019est pas obligatoire mais fortement recommandé. Le Prophète ﷺ a dit : \u00ab Prenez le repas du suhur, car il y a dans le suhur une bénédiction \u00bb (Bukhari 1923). Il a également encouragé à retarder le suhur le plus possible avant l\u2019aube et à hâter la rupture du jeûne dès le coucher du soleil. Le suhur aide le jeûneur à supporter la faim et la soif durant la journée et constitue une sunna bénie.",
  },
  {
    question:
      "Que se passe-t-il pendant la Nuit du Destin (Laylat al-Qadr) ?",
    answer:
      "La Nuit du Destin est meilleure que mille mois, comme l\u2019affirme le Coran (sourate Al-Qadr). Le Prophète ﷺ a dit : \u00ab Celui qui prie durant la Nuit du Destin avec foi et en espérant la récompense verra ses péchés antérieurs pardonnés \u00bb (Bukhari 2014). Elle se situe dans les dix dernières nuits du Ramadan, plus probablement les nuits impaires. Pour approfondir ce sujet, consultez notre article dédié à la Nuit du Destin.",
  },
  {
    question:
      "Les hadiths sur le Ramadan s\u2019appliquent-ils aux musulmans d\u2019aujourd\u2019hui ?",
    answer:
      "Oui, les enseignements prophétiques sur le Ramadan sont intemporels et pleinement applicables. Les principes du jeûne, des prières nocturnes, du suhur et de l\u2019iftar restent identiques depuis l\u2019époque du Prophète ﷺ. Les savants contemporains s\u2019appuient sur ces mêmes hadiths pour émettre leurs avis juridiques sur les questions modernes liées au Ramadan, comme le jeûne dans les pays aux journées très longues ou l\u2019utilisation du calendrier astronomique.",
  },
];

export default function HadithRamadanIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-ramadan-islam/#article",
        headline:
          "Hadiths sur le Ramadan en islam : jeûne, prière et récompenses",
        description:
          "Découvrez les hadiths authentiques sur le Ramadan en islam : mérites du mois béni, jeûne, prières de nuit, suhur, iftar et récompenses divines.",
        image: "/images/ramadan-islam-lanternes-orientales-croissant-dattes.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-ramadan-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-ramadan-islam/#breadcrumb",
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
            name: "Hadiths sur le Ramadan",
            item: "https://www.islamreligion.fr/hadith-ramadan-islam",
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
          title="Hadiths sur le Ramadan en islam"
          subtitle="Les enseignements prophétiques sur le mois sacré du Ramadan : mérites du jeûne, prières nocturnes, suhur, iftar et récompenses divines selon la Sunna authentique."
          imageSrc="/images/ramadan-islam-lanternes-orientales-croissant-dattes.jpg"
          imageAlt="Hadiths sur le Ramadan en islam, lanternes orientales et croissant de lune"
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
                  Hadiths sur le Ramadan
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
                    Le Ramadan est le mois où les portes du Paradis sont ouvertes, les portes de l&apos;Enfer fermées et les démons enchaînés.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La récompense du jeûne est si immense qu&apos;Allah Seul en connaît l&apos;étendue : &laquo;&nbsp;Le jeûne est pour Moi et c&apos;est Moi qui en donne la récompense&nbsp;&raquo;.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les prières nocturnes (tarawih et qiyam al-layl) accomplies avec foi durant le Ramadan effacent les péchés antérieurs.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le suhur est une bénédiction et l&apos;iftar un moment de joie : le Prophète ﷺ encourageait à retarder le premier et à hâter le second.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique du Ramadan en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths, il convient de rappeler que le jeûne du Ramadan est d&apos;abord une obligation coranique. Allah a prescrit le jeûne à cette communauté comme Il l&apos;avait prescrit aux communautés précédentes, afin d&apos;atteindre la piété (<em>taqwa</em>). Les versets de la sourate Al-Baqara posent les fondements sur lesquels s&apos;appuient ensuite les hadiths du Prophète ﷺ.
                </p>

                <HadithCard
                  arabic="يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ"
                  text="Ô vous qui croyez ! Le jeûne vous a été prescrit comme il a été prescrit à ceux qui vous ont précédés, ainsi atteindrez-vous la piété."
                  source="Coran, sourate Al-Baqara (2:183)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondateur établit le jeûne comme une obligation divine universelle. Le terme <em>kutiba</em> (a été prescrit) indique un caractère obligatoire ferme. La finalité mentionnée — <em>la&apos;allakum tattaqun</em> (afin que vous atteigniez la piété) — montre que le jeûne n&apos;est pas une simple privation physique, mais un moyen d&apos;élévation spirituelle. La <em>taqwa</em> désigne cette conscience constante d&apos;Allah qui oriente chaque acte du croyant.
                </p>

                <HadithCard
                  arabic="شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ وَبَيِّنَاتٍ مِّنَ الْهُدَىٰ وَالْفُرْقَانِ ۚ فَمَن شَهِدَ مِنكُمُ الشَّهْرَ فَلْيَصُمْهُ"
                  text="Le mois de Ramadan au cours duquel le Coran a été révélé comme guide pour les gens, et preuves claires de la bonne direction et du discernement. Donc, quiconque d&apos;entre vous est présent en ce mois, qu&apos;il jeûne !"
                  source="Coran, sourate Al-Baqara (2:185)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset associe le Ramadan à la révélation du Coran, conférant à ce mois une dimension unique parmi tous les mois de l&apos;année. Le jeûne du Ramadan n&apos;est pas seulement une abstinence de nourriture et de boisson : c&apos;est un retour aux sources de la Révélation, un mois de proximité avec la Parole divine. Les savants soulignent que le lien entre le jeûne et le Coran explique pourquoi le Prophète ﷺ intensifiait sa récitation coranique durant ce mois, et pourquoi les prières de tarawih sont consacrées à l&apos;écoute du Coran.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Mérites du Ramadan   */}
              {/* ============================== */}
              <section id="merites-ramadan" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les mérites du Ramadan selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Ramadan occupe une place exceptionnelle dans le calendrier islamique. Le Prophète ﷺ a décrit ses mérites dans de nombreux hadiths qui soulignent la miséricorde divine, le pardon et les récompenses multipliées durant ce mois sacré. Ces hadiths invitent le croyant à saisir pleinement cette opportunité spirituelle unique.
                </p>

                <HadithBlock
                  number={1}
                  title="Les portes du Paradis sont ouvertes"
                  narrator="Abu Hurayra"
                  arabic="إِذَا دَخَلَ رَمَضَانُ فُتِّحَتْ أَبْوَابُ الْجَنَّةِ وَغُلِّقَتْ أَبْوَابُ جَهَنَّمَ وَسُلْسِلَتِ الشَّيَاطِينُ"
                  translation="Lorsque le mois de Ramadan arrive, les portes du Paradis sont ouvertes, les portes de l&apos;Enfer sont fermées et les démons sont enchaînés."
                  source="Sahih Al-Bukhari, n°1899 — Sahih Muslim, n°1079"
                  grade="sahih"
                  explanation="Ce hadith décrit trois événements cosmiques qui marquent l&apos;entrée du Ramadan. L&apos;ouverture des portes du Paradis symbolise l&apos;abondance des récompenses et la facilitation des bonnes œuvres. La fermeture des portes de l&apos;Enfer indique la multiplication des occasions de pardon. L&apos;enchaînement des démons explique pourquoi les croyants ressentent une plus grande facilité à accomplir le bien durant ce mois. Les savants précisent que les péchés qui subsistent pendant le Ramadan sont dus à l&apos;âme (nafs) et aux mauvaises habitudes, non à l&apos;influence directe des démons."
                />

                <HadithBlock
                  number={2}
                  title="Celui qui jeûne le Ramadan avec foi"
                  narrator="Abu Hurayra"
                  arabic="مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ"
                  translation="Celui qui jeûne le Ramadan avec foi et en espérant la récompense divine verra ses péchés antérieurs pardonnés."
                  source="Sahih Al-Bukhari, n°38 — Sahih Muslim, n°760"
                  grade="sahih"
                  explanation="Ce hadith pose deux conditions pour obtenir le pardon : la foi (<em>imanan</em>) et l&apos;espoir de la récompense (<em>ihtisaban</em>). La foi signifie croire en l&apos;obligation du jeûne et en sa valeur auprès d&apos;Allah. L&apos;ihtisab désigne la sincérité de l&apos;intention, sans recherche d&apos;une récompense mondaine. Le pardon mentionné concerne les péchés mineurs selon la majorité des savants, les péchés majeurs nécessitant un repentir spécifique (tawba). Ce hadith montre que le jeûne n&apos;est pas un simple rituel mais un acte d&apos;adoration conditionné par l&apos;état du cœur."
                />

                <HadithBlock
                  number={3}
                  title="Un héraut appelle chaque nuit de Ramadan"
                  narrator="Abu Hurayra"
                  arabic="يُنَادِي مُنَادٍ: يَا بَاغِيَ الْخَيْرِ أَقْبِلْ، وَيَا بَاغِيَ الشَّرِّ أَقْصِرْ، وَلِلَّهِ عُتَقَاءُ مِنَ النَّارِ، وَذَلِكَ كُلَّ لَيْلَةٍ"
                  translation="Un héraut appelle : &laquo; Ô toi qui cherches le bien, avance ! Ô toi qui cherches le mal, abstiens-toi ! &raquo; Et Allah affranchit des gens du Feu, et cela chaque nuit."
                  source="Jami&apos; at-Tirmidhi, n°682 — Sunan Ibn Majah, n°1642"
                  grade="sahih"
                  explanation="Ce hadith complète le précédent en révélant une dimension supplémentaire du Ramadan : chaque nuit, un ange appelle les croyants vers le bien et met en garde contre le mal. De plus, Allah libère des gens de l&apos;Enfer chaque nuit de Ramadan. Ce hadith souligne l&apos;urgence de profiter de ce mois : chaque nuit est une opportunité de salut. Les savants y voient la preuve que le Ramadan est un mois de libération et de renouveau spirituel, où la miséricorde divine atteint son apogée."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths forment un ensemble cohérent sur les mérites du Ramadan. Ils invitent le croyant à aborder ce mois avec une conscience aiguë de sa valeur exceptionnelle. Pour découvrir d&apos;autres paroles prophétiques, consultez notre page{" "}
                  <Link href="/hadith-du-jour" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    Hadith du jour
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Jeûne et récompenses */}
              {/* ============================== */}
              <section id="jeune-recompenses" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le jeûne et ses récompenses selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le jeûne du Ramadan est le quatrième pilier de l&apos;islam. Le Prophète ﷺ a enseigné que le jeûne est un acte d&apos;adoration unique, dont la récompense est connue d&apos;Allah Seul. Les hadiths suivants détaillent la valeur spirituelle du jeûne et les récompenses promises à celui qui s&apos;abstient pour Allah.
                </p>

                <HadithBlock
                  number={4}
                  title="Le jeûne est pour Moi (hadith qudsi)"
                  narrator="Abu Hurayra"
                  arabic="كُلُّ عَمَلِ ابْنِ آدَمَ يُضَاعَفُ، الْحَسَنَةُ عَشْرُ أَمْثَالِهَا إِلَى سَبْعِمِائَةِ ضِعْفٍ، قَالَ اللَّهُ عَزَّ وَجَلَّ: إِلَّا الصَّوْمَ فَإِنَّهُ لِي وَأَنَا أَجْزِي بِهِ، يَدَعُ شَهْوَتَهُ وَطَعَامَهُ مِنْ أَجْلِي"
                  translation="Tout acte du fils d&apos;Adam est multiplié : la bonne action est multipliée de dix à sept cents fois. Allah — Exalté et Glorifié soit-Il — a dit : &laquo; Sauf le jeûne, car il est pour Moi et c&apos;est Moi qui en donne la récompense. Il délaisse son désir et sa nourriture pour Moi. &raquo;"
                  source="Sahih Muslim, n°1151 — Sahih Al-Bukhari, n°1904"
                  grade="sahih"
                  explanation="Ce hadith qudsi (parole divine rapportée par le Prophète ﷺ) est l&apos;un des plus célèbres sur le jeûne. Allah s&apos;attribue la récompense du jeûne de manière exclusive, ce qui indique une valeur au-delà de tout calcul. Les savants expliquent cette particularité par le fait que le jeûne est un acte de sincérité absolue : personne ne peut vérifier si une personne jeûne réellement, à l&apos;inverse de la prière ou de l&apos;aumône qui sont visibles. Le jeûne est ainsi l&apos;acte le plus éloigné de l&apos;ostentation (riya)."
                />

                <HadithBlock
                  number={5}
                  title="Le jeûneur a deux joies"
                  narrator="Abu Hurayra"
                  arabic="لِلصَّائِمِ فَرْحَتَانِ: فَرْحَةٌ عِنْدَ فِطْرِهِ، وَفَرْحَةٌ عِنْدَ لِقَاءِ رَبِّهِ"
                  translation="Le jeûneur a deux joies : une joie au moment de la rupture de son jeûne, et une joie lorsqu&apos;il rencontrera son Seigneur."
                  source="Sahih Al-Bukhari, n°1904 — Sahih Muslim, n°1151"
                  grade="sahih"
                  explanation="Ce hadith met en lumière deux dimensions de la récompense du jeûne. La première joie est immédiate : le soulagement et la gratitude au moment de l&apos;iftar, lorsque le jeûneur savoure la nourriture après une journée d&apos;abstinence. Cette joie est licite et même encouragée. La seconde joie est eschatologique : le Jour de la Résurrection, le jeûneur se réjouira de la récompense qu&apos;Allah lui accordera. Les savants soulignent que cette double joie distingue le jeûne des autres adorations et montre que l&apos;islam n&apos;est pas une religion de mortification mais d&apos;équilibre entre l&apos;effort et la joie."
                />

                <HadithBlock
                  number={6}
                  title="Le jeûne est un bouclier"
                  narrator="Abu Hurayra"
                  arabic="الصِّيَامُ جُنَّةٌ، فَلَا يَرْفُثْ وَلَا يَجْهَلْ، وَإِنِ امْرُؤٌ قَاتَلَهُ أَوْ شَاتَمَهُ فَلْيَقُلْ: إِنِّي صَائِمٌ، إِنِّي صَائِمٌ"
                  translation="Le jeûne est un bouclier. Que le jeûneur ne tienne pas de propos obscènes et ne se comporte pas avec ignorance. Si quelqu&apos;un le combat ou l&apos;insulte, qu&apos;il dise : &laquo; Je suis en état de jeûne, je suis en état de jeûne. &raquo;"
                  source="Sahih Al-Bukhari, n°1904 — Sahih Muslim, n°1151"
                  grade="sahih"
                  explanation="Ce hadith définit le jeûne comme une protection (<em>junna</em>). Il protège le croyant du péché dans ce monde et du Feu dans l&apos;au-delà. Le Prophète ﷺ précise que le jeûne exige une éthique de comportement : pas de paroles obscènes, pas d&apos;ignorance (comportement grossier). Face à la provocation, le jeûneur se rappelle son état et s&apos;abstient de répondre. Ce hadith enseigne que le vrai jeûne ne se limite pas à l&apos;abstinence de nourriture : c&apos;est un jeûne de la langue, des yeux, des oreilles et du cœur."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths montrent que le jeûne du Ramadan dépasse la simple privation alimentaire. C&apos;est un exercice spirituel complet qui purifie l&apos;âme, renforce la volonté et rapproche le croyant de son Seigneur. Pour approfondir le thème du jeûne en dehors du Ramadan, consultez notre article sur{" "}
                  <Link href="/hadith-jeune-volontaire-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    les hadiths sur le jeûne volontaire en islam
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh du jeûne, les règles du Ramadan et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Prières de nuit      */}
              {/* ============================== */}
              <section id="prieres-nuit" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les prières de nuit : tarawih et qiyam al-layl
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les nuits du Ramadan sont aussi précieuses que ses jours. Le Prophète ﷺ a particulièrement encouragé les prières nocturnes durant ce mois béni, qu&apos;il s&apos;agisse des tarawih en début de nuit ou du qiyam al-layl en fin de nuit. Ces prières sont une occasion unique d&apos;obtenir le pardon divin et de se rapprocher d&apos;Allah dans le calme et la sérénité de la nuit.
                </p>

                <HadithBlock
                  number={7}
                  title="Celui qui prie les nuits de Ramadan avec foi"
                  narrator="Abu Hurayra"
                  arabic="مَنْ قَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ"
                  translation="Celui qui prie les nuits de Ramadan avec foi et en espérant la récompense divine verra ses péchés antérieurs pardonnés."
                  source="Sahih Al-Bukhari, n°2009 — Sahih Muslim, n°759"
                  grade="sahih"
                  explanation="Ce hadith est le pendant nocturne du hadith sur le jeûne (n°2). Il établit les mêmes conditions : la foi et l&apos;espoir de la récompense. Le terme <em>qama</em> (prier debout) désigne les prières nocturnes du Ramadan, connues sous le nom de tarawih. Le pardon promis est un puissant encouragement à ne pas se contenter du jeûne diurne mais à consacrer également les nuits à l&apos;adoration. Les savants soulignent que ces prières sont une sunna fortement recommandée et non une obligation, le Prophète ﷺ ayant lui-même cessé de les prier en congrégation de peur qu&apos;elles ne deviennent obligatoires."
                />

                <HadithBlock
                  number={8}
                  title="Celui qui prie la Nuit du Destin"
                  narrator="Abu Hurayra"
                  arabic="مَنْ قَامَ لَيْلَةَ الْقَدْرِ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ"
                  translation="Celui qui prie durant la Nuit du Destin avec foi et en espérant la récompense divine verra ses péchés antérieurs pardonnés."
                  source="Sahih Al-Bukhari, n°2014 — Sahih Muslim, n°760"
                  grade="sahih"
                  explanation="La Nuit du Destin (Laylat al-Qadr) est le sommet spirituel du Ramadan. Le Coran affirme qu&apos;elle est meilleure que mille mois (sourate Al-Qadr, 97:3), soit plus de 83 années d&apos;adoration. Le Prophète ﷺ a enseigné de la chercher dans les nuits impaires des dix dernières nuits du Ramadan (Bukhari 2017). Ce hadith montre que prier cette nuit avec sincérité suffit pour obtenir le pardon de tous les péchés antérieurs."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La Nuit du Destin est un sujet si vaste qu&apos;il mérite un article à part entière. Pour approfondir ce thème, consultez notre article sur{" "}
                  <Link href="/hadith-nuit-du-destin-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    les hadiths sur la Nuit du Destin en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Suhur et iftar       */}
              {/* ============================== */}
              <section id="suhur-iftar" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le suhur et l&apos;iftar selon la Sunna
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a accordé une attention particulière aux deux repas qui encadrent la journée de jeûne : le suhur (repas avant l&apos;aube) et l&apos;iftar (rupture du jeûne au coucher du soleil). Ces moments ne sont pas de simples actes alimentaires : ils sont encadrés par des enseignements prophétiques précis qui transforment le repas en acte d&apos;adoration.
                </p>

                <HadithBlock
                  number={9}
                  title="La bénédiction du suhur"
                  narrator="Anas ibn Malik"
                  arabic="تَسَحَّرُوا فَإِنَّ فِي السَّحُورِ بَرَكَةً"
                  translation="Prenez le repas du suhur, car il y a dans le suhur une bénédiction."
                  source="Sahih Al-Bukhari, n°1923 — Sahih Muslim, n°1095"
                  grade="sahih"
                  explanation="Ce hadith concis mais puissant encourage les musulmans à ne pas négliger le repas de l&apos;aube. La baraka (bénédiction) mentionnée est à la fois physique et spirituelle. Sur le plan physique, le suhur fournit l&apos;énergie nécessaire pour supporter la journée de jeûne. Sur le plan spirituel, le fait de se lever avant l&apos;aube pour manger est en soi un acte d&apos;obéissance qui distingue le jeûne islamique des jeûnes des autres communautés. Le Prophète ﷺ a dit dans un autre hadith : &laquo; Ce qui distingue notre jeûne de celui des gens du Livre, c&apos;est le repas du suhur &raquo; (Muslim 1096). Les savants recommandent de retarder le suhur le plus possible, en le prenant juste avant l&apos;aube."
                />

                <HadithBlock
                  number={10}
                  title="Hâtez la rupture du jeûne"
                  narrator="Sahl ibn Sa&apos;d"
                  arabic="لَا يَزَالُ النَّاسُ بِخَيْرٍ مَا عَجَّلُوا الْفِطْرَ"
                  translation="Les gens ne cesseront d&apos;être dans le bien tant qu&apos;ils hâteront la rupture du jeûne."
                  source="Sahih Al-Bukhari, n°1957 — Sahih Muslim, n°1098"
                  grade="sahih"
                  explanation="Ce hadith établit un principe simple mais important : rompre le jeûne dès que le soleil se couche, sans retarder. Le &laquo; bien &raquo; mentionné englobe le bien-être physique, la conformité à la Sunna et la bénédiction divine. Retarder l&apos;iftar sans raison est contraire à la pratique prophétique. La Sunna est de rompre le jeûne avec des dattes fraîches, ou à défaut des dattes sèches, ou à défaut de l&apos;eau, comme le rapporte Anas ibn Malik (Abu Dawud 2356). Ce hadith montre que l&apos;islam est une religion de facilité : le jeûne a un début et une fin précis, et il n&apos;y a aucun mérite à prolonger la privation au-delà du temps prescrit."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le Ramadan et les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur le Ramadan. Leurs explications permettent de mieux saisir la portée juridique et spirituelle de ces enseignements prophétiques sur le mois sacré.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La parole d&apos;Allah &laquo; le jeûne est pour Moi &raquo; signifie que le jeûne est l&apos;acte d&apos;adoration le plus sincère, car il est invisible aux yeux des créatures. Contrairement à la prière ou à l&apos;aumône, nul ne peut savoir si une personne jeûne réellement. C&apos;est pourquoi Allah Se l&apos;est attribué et a réservé sa récompense à Lui seul.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;L&apos;enchaînement des démons pendant le Ramadan ne signifie pas l&apos;absence totale de péché, car l&apos;âme (nafs) et les mauvaises habitudes restent. Mais les démons sont affaiblis, ce qui facilite les actes d&apos;obéissance et réduit les tentations. Celui qui pèche pendant le Ramadan est donc encore plus blâmable, car il n&apos;a même pas l&apos;excuse de la suggestion diabolique.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le Ramadan est une école annuelle de discipline spirituelle. Le jeûne éduque la volonté, les prières nocturnes nourrissent le lien avec Allah, et la générosité envers les pauvres purifie les biens. Celui qui sort du Ramadan sans avoir changé n&apos;a pas véritablement compris le sens de ce mois.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Zad al-Ma&apos;ad</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que les hadiths sur le Ramadan ne sont pas de simples recommandations rituelles : ils constituent le fondement d&apos;un corpus juridique (<em>fiqh as-siyam</em>) élaboré par les quatre écoles de jurisprudence. Chaque hadith cité dans cet article est utilisé par les fuqaha pour déduire des règles pratiques sur les conditions du jeûne, les exemptions, les actes recommandés et les interdits durant le Ramadan.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Leçons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Enseignements et leçons pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour vivre pleinement le mois de Ramadan :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Aborder le Ramadan avec une intention sincère
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le pardon est conditionné par la foi et l&apos;espoir de la récompense. Le jeûne sans intention sincère perd sa valeur spirituelle. Renouvelez votre intention chaque jour et rappelez-vous que le jeûne est un acte d&apos;adoration exclusivement pour Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne pas se limiter à l&apos;abstinence alimentaire
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le vrai jeûne est un jeûne du corps, de la langue, des yeux et du cœur. Le Prophète ﷺ a enseigné que le jeûneur doit s&apos;abstenir des propos obscènes, des disputes et de l&apos;ignorance. Un jeûne accompagné de médisance et de mensonge perd une grande partie de sa valeur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Consacrer les nuits à la prière et au Coran
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les prières de tarawih et le qiyam al-layl sont des occasions uniques de pardon. Ne négligez pas les nuits du Ramadan, surtout les dix dernières où se trouve la Nuit du Destin, meilleure que mille mois.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Respecter la Sunna du suhur et de l&apos;iftar
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Prenez le suhur même léger, car il contient une bénédiction. Hâtez la rupture du jeûne dès le coucher du soleil avec des dattes ou de l&apos;eau. Ces gestes simples sont des actes d&apos;obéissance récompensés par Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Multiplier la générosité et les bonnes œuvres
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ était le plus généreux des hommes, et il l&apos;était encore davantage pendant le Ramadan (Bukhari 6). Suivez cet exemple en augmentant vos aumônes, en nourrissant les jeûneurs et en aidant les nécessiteux durant ce mois béni.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Maintenir les acquis après le Ramadan
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Ramadan est une école de discipline. Les bonnes habitudes acquises — prière de nuit, récitation du Coran, maîtrise de soi — doivent se prolonger au-delà du mois sacré. Le signe d&apos;un Ramadan accepté est la continuité dans les bonnes œuvres.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur le Ramadan dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Les hadiths sur le jeûne volontaire en islam"
                  description="Découvrez les mérites du jeûne en dehors du Ramadan : lundi et jeudi, jours blancs, jour de &apos;Arafat et jeûne de Dawud."
                  href="/hadith-jeune-volontaire-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les hadiths sur la Nuit du Destin (Laylat al-Qadr)"
                  description="Tout savoir sur la nuit la plus bénie de l&apos;année : quand la chercher, comment la prier et les invocations recommandées."
                  href="/hadith-nuit-du-destin-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
