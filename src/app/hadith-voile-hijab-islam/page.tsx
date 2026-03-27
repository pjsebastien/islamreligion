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
    "Hadiths sur le voile et le hijab en islam : pudeur et prescription",
  description:
    "Découvrez les hadiths authentiques sur le voile et le hijab en islam : prescription coranique, pudeur vestimentaire, jilbab, niqab. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths sur le voile et le hijab en islam : pudeur et prescription",
    description:
      "Les hadiths authentiques sur le voile en islam : prescription du hijab, pudeur, modestie vestimentaire et enseignements prophétiques sur le vêtement de la femme musulmane.",
    url: "https://www.islamreligion.fr/hadith-voile-hijab-islam",
    images: [
      {
        url: "/images/femme-musulmane-hijab-lecture-coran-islam.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-voile-hijab-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique du voile" },
  { id: "prescription-hijab", label: "La prescription du hijab" },
  { id: "pudeur-modestie", label: "Pudeur et modestie vestimentaire" },
  { id: "jilbab-niqab", label: "Le jilbab et le niqab" },
  { id: "femme-espace-public", label: "La femme et l\u2019espace public" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur le voile en islam ?",
    answer:
      "Les hadiths les plus importants sur le voile incluent celui rapporté par Aisha sur la réaction des femmes des Ansar au verset du khimar (Bukhari 4758), celui d\u2019Umm Atiyya sur le jilbab lors de la prière de l\u2019Aïd (Bukhari 351), et celui d\u2019Aisha sur le comportement d\u2019Asma bint Abi Bakr (Abu Dawud 4104). Ces hadiths couvrent les fondements de la prescription du voile, sa forme et ses conditions.",
  },
  {
    question:
      "Le hijab est-il obligatoire en islam selon les hadiths ?",
    answer:
      "La majorité des savants considèrent le hijab comme une obligation religieuse (fard) pour la femme musulmane pubère. Ils s\u2019appuient sur les versets d\u2019An-Nur (24:31) et d\u2019Al-Ahzab (33:59), ainsi que sur de nombreux hadiths authentiques montrant que les femmes du Prophète et les Compagnonnes se couvraient la tête et le corps en présence d\u2019hommes non-mahram.",
  },
  {
    question:
      "Quelle est la différence entre le hijab, le jilbab et le niqab ?",
    answer:
      "Le hijab désigne le voile couvrant la tête et le cou. Le jilbab est un vêtement ample couvrant tout le corps, porté par-dessus les habits. Le niqab est le voile couvrant le visage, ne laissant apparaître que les yeux. Les savants s\u2019accordent sur l\u2019obligation du hijab et du jilbab, mais divergent sur le caractère obligatoire ou recommandé du niqab.",
  },
  {
    question:
      "La pudeur (haya) concerne-t-elle uniquement les femmes en islam ?",
    answer:
      "Non, la pudeur (haya) concerne les hommes et les femmes. Le Prophète \u2018alayhi salatu wa salam a dit que la pudeur fait partie de la foi (Bukhari 9). Les hommes ont également des obligations vestimentaires : couvrir la zone entre le nombril et les genoux, ne pas porter de soie ni d\u2019or, et baisser le regard. La pudeur est un trait de caractère global, pas uniquement vestimentaire.",
  },
  {
    question:
      "Les femmes portaient-elles le voile avant l\u2019islam ?",
    answer:
      "Certaines femmes arabes portaient déjà un khimar (foulard) avant l\u2019islam, mais elles le rejetaient en arrière, laissant la poitrine découverte. Le verset d\u2019An-Nur (24:31) a ordonné de rabattre le khimar sur la poitrine (juyub), ce qui a constitué une prescription nouvelle. Aisha rapporte que les femmes des Ansar ont immédiatement déchiré leurs vêtements pour se couvrir après la révélation de ce verset.",
  },
  {
    question:
      "Le voile est-il mentionné dans le Coran ou seulement dans les hadiths ?",
    answer:
      "Le voile est mentionné à la fois dans le Coran et dans les hadiths. Les versets 31 de la sourate An-Nur et 59 de la sourate Al-Ahzab prescrivent explicitement le khimar et le jilbab. Les hadiths viennent ensuite préciser les modalités pratiques : ce qui doit être couvert, les exceptions, les situations particulières et l\u2019exemple concret des femmes de la communauté prophétique.",
  },
];

export default function HadithVoileHijabIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-voile-hijab-islam/#article",
        headline:
          "Hadiths sur le voile et le hijab en islam : pudeur et prescription",
        description:
          "Découvrez les hadiths authentiques sur le voile et le hijab en islam : prescription coranique, pudeur vestimentaire, jilbab et enseignements prophétiques.",
        image: "/images/femme-musulmane-hijab-lecture-coran-islam.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-voile-hijab-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-voile-hijab-islam/#breadcrumb",
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
            name: "Voile et hijab",
            item: "https://www.islamreligion.fr/hadith-voile-hijab-islam",
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
          title="Hadiths sur le voile et le hijab en islam"
          subtitle="Les enseignements prophétiques sur la prescription du voile, la pudeur vestimentaire, le jilbab et la modestie selon la Sunna authentique."
          imageSrc="/images/femme-musulmane-hijab-lecture-coran-islam.jpg"
          imageAlt="Femme musulmane portant le hijab en lisant le Coran, islam et pudeur"
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
                  Voile et hijab
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
                    Le voile est prescrit par le Coran (sourate An-Nur et Al-Ahzab) et détaillé par de nombreux hadiths authentiques du Prophète ﷺ.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La pudeur (<em>haya</em>) est une branche de la foi qui concerne les hommes comme les femmes, dans le vêtement comme dans le comportement.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les Compagnonnes du Prophète ﷺ ont appliqué immédiatement les versets du voile, déchirant leurs vêtements pour se couvrir.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les savants distinguent le hijab (tête et cou), le jilbab (vêtement ample) et le niqab (voile du visage), avec un consensus sur l&apos;obligation des deux premiers.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique du voile en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La question du voile en islam repose d&apos;abord sur deux passages coraniques majeurs, révélés à Médine. Ces versets ont instauré une prescription claire pour les croyantes, que les hadiths du Prophète ﷺ sont venus préciser et compléter. Comprendre le contexte coranique est indispensable avant d&apos;aborder les traditions prophétiques sur le sujet.
                </p>

                <HadithCard
                  arabic="وَقُل لِّلْمُؤْمِنَاتِ يَغْضُضْنَ مِنْ أَبْصَارِهِنَّ وَيَحْفَظْنَ فُرُوجَهُنَّ وَلَا يُبْدِينَ زِينَتَهُنَّ إِلَّا مَا ظَهَرَ مِنْهَا ۖ وَلْيَضْرِبْنَ بِخُمُرِهِنَّ عَلَىٰ جُيُوبِهِنَّ"
                  text="Et dis aux croyantes de baisser leurs regards, de garder leur chasteté, et de ne montrer de leurs atours que ce qui en paraît, et qu&apos;elles rabattent leur voile (khimar) sur leur poitrine (juyub)."
                  source="Coran, sourate An-Nur (24:31)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset contient trois injonctions distinctes : baisser le regard, préserver la chasteté et couvrir les atours (<em>zina</em>). Le terme <em>khimar</em> désigne le tissu porté sur la tête, que les femmes arabes laissaient retomber derrière le dos. Le Coran ordonne de le rabattre sur la poitrine (<em>juyub</em>), couvrant ainsi la tête, le cou et le décolleté. L&apos;expression &laquo; ce qui en paraît &raquo; fait l&apos;objet d&apos;interprétations savantes : Ibn Abbas l&apos;a interprétée comme le visage et les mains, tandis que d&apos;autres savants l&apos;ont restreinte aux vêtements extérieurs.
                </p>

                <HadithCard
                  arabic="يَا أَيُّهَا النَّبِيُّ قُل لِّأَزْوَاجِكَ وَبَنَاتِكَ وَنِسَاءِ الْمُؤْمِنِينَ يُدْنِينَ عَلَيْهِنَّ مِن جَلَابِيبِهِنَّ ۚ ذَٰلِكَ أَدْنَىٰ أَن يُعْرَفْنَ فَلَا يُؤْذَيْنَ"
                  text="Ô Prophète ! Dis à tes épouses, à tes filles et aux femmes des croyants de ramener sur elles leurs grands voiles (jalabib). Cela est plus à même qu&apos;elles soient reconnues et qu&apos;elles ne soient pas offensées."
                  source="Coran, sourate Al-Ahzab (33:59)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce second verset élargit la prescription aux épouses du Prophète ﷺ, à ses filles et à toutes les croyantes. Le terme <em>jalabib</em> (pluriel de <em>jilbab</em>) désigne un vêtement ample, porté par-dessus les habits ordinaires, couvrant le corps de la tête aux pieds. Le verset indique une finalité claire : la protection et la reconnaissance de la femme croyante. Les hadiths viennent ensuite détailler les modalités concrètes de cette prescription.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Prescription hijab   */}
              {/* ============================== */}
              <section id="prescription-hijab" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La prescription du hijab dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les hadiths authentiques apportent un éclairage concret sur la manière dont les premières musulmanes ont reçu et appliqué les versets du voile. Ces récits montrent l&apos;empressement des Compagnonnes à obéir à la révélation, et les précisions du Prophète ﷺ sur ce que la femme doit couvrir en présence d&apos;hommes étrangers (<em>non-mahram</em>).
                </p>

                <HadithBlock
                  number={1}
                  title="La réaction des femmes des Ansar au verset du khimar"
                  narrator="Aisha"
                  arabic="يَرْحَمُ اللَّهُ نِسَاءَ الْمُهَاجِرَاتِ الْأُوَلَ، لَمَّا أَنْزَلَ اللَّهُ: وَلْيَضْرِبْنَ بِخُمُرِهِنَّ عَلَى جُيُوبِهِنَّ، شَقَقْنَ مُرُوطَهُنَّ فَاخْتَمَرْنَ بِهَا"
                  translation="Qu&apos;Allah fasse miséricorde aux premières femmes émigrées (Muhajiraat). Lorsqu&apos;Allah révéla : &laquo; Qu&apos;elles rabattent leur voile sur leur poitrine &raquo;, elles déchirèrent leurs manteaux (murut) et s&apos;en couvrirent."
                  source="Sahih Al-Bukhari, n°4758"
                  grade="sahih"
                  explanation="Ce hadith témoigne de la réactivité immédiate des premières musulmanes face à la révélation coranique. Les femmes des Muhajiraat n&apos;ont pas attendu de trouver un tissu adapté : elles ont déchiré leurs manteaux pour se couvrir sur-le-champ. Cette attitude illustre la soumission totale à l&apos;ordre divin et la compréhension que le khimar devait couvrir la poitrine, et non simplement rester posé sur la tête comme c&apos;était la coutume préislamique."
                />

                <HadithBlock
                  number={2}
                  title="Ce que la femme doit montrer de son corps"
                  narrator="Aisha"
                  arabic="إِنَّ أَسْمَاءَ بِنْتَ أَبِي بَكْرٍ دَخَلَتْ عَلَى رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَعَلَيْهَا ثِيَابٌ رِقَاقٌ، فَأَعْرَضَ عَنْهَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَقَالَ: يَا أَسْمَاءُ، إِنَّ الْمَرْأَةَ إِذَا بَلَغَتِ الْمَحِيضَ لَمْ تَصْلُحْ أَنْ يُرَى مِنْهَا إِلَّا هَذَا وَهَذَا، وَأَشَارَ إِلَى وَجْهِهِ وَكَفَّيْهِ"
                  translation="Asma bint Abi Bakr entra chez le Messager d&apos;Allah ﷺ vêtue d&apos;habits fins. Le Messager d&apos;Allah ﷺ se détourna d&apos;elle et dit : &laquo; Ô Asma, lorsque la femme atteint l&apos;âge des menstrues, il ne convient pas qu&apos;on voie d&apos;elle autre chose que ceci et cela &raquo;, et il désigna son visage et ses mains."
                  source="Sunan Abu Dawud, n°4104"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus cités sur la question de la awra (parties du corps à couvrir) de la femme. Le Prophète ﷺ a indiqué que seuls le visage et les mains peuvent rester découverts après la puberté. Les savants de l&apos;école hanafite et malikite s&apos;appuient sur ce hadith pour autoriser la découverte du visage et des mains, tandis que d&apos;autres, comme certains hanbalites, considèrent que le visage fait aussi partie de la awra. Quoi qu&apos;il en soit, ce hadith établit clairement l&apos;obligation de couvrir le reste du corps."
                />

                <HadithBlock
                  number={3}
                  title="Le voile de la femme en état de sacralisation (ihram)"
                  narrator="Ibn &apos;Umar"
                  arabic="لَا تَنْتَقِبِ الْمَرْأَةُ الْمُحْرِمَةُ وَلَا تَلْبَسِ الْقُفَّازَيْنِ"
                  translation="La femme en état de sacralisation (ihram) ne doit pas porter le niqab ni les gants."
                  source="Sahih Al-Bukhari, n°1838"
                  grade="sahih"
                  explanation="Ce hadith, bien qu&apos;il concerne le pèlerinage, est un argument indirect en faveur du voile : si le Prophète ﷺ interdit le niqab et les gants pendant l&apos;ihram, c&apos;est que ces éléments étaient portés en temps normal par les femmes. L&apos;interdiction est spécifique à l&apos;état de sacralisation, ce qui implique que hors de cet état, le port du niqab et des gants était une pratique courante parmi les Compagnonnes. Les savants y voient une preuve que le niqab était répandu, même s&apos;ils divergent sur son caractère obligatoire."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths montrent la cohérence de la prescription : le Coran ordonne le voile, les Compagnonnes l&apos;appliquent sans délai, et le Prophète ﷺ en précise les contours. Pour approfondir les enseignements prophétiques sur la femme en islam, consultez notre article sur les{" "}
                  <Link href="/hadith-femme-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la femme en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Pudeur et modestie   */}
              {/* ============================== */}
              <section id="pudeur-modestie" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La pudeur et la modestie vestimentaire dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le voile s&apos;inscrit dans un cadre plus large : celui de la pudeur (<em>haya</em>), que le Prophète ﷺ a élevée au rang de branche de la foi. La modestie vestimentaire n&apos;est pas une fin en soi, mais l&apos;expression extérieure d&apos;une vertu intérieure qui touche le regard, la parole et le comportement.
                </p>

                <HadithBlock
                  number={4}
                  title="La pudeur est une branche de la foi"
                  narrator="Abu Hurayra"
                  arabic="الْإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً، وَالْحَيَاءُ شُعْبَةٌ مِنَ الْإِيمَانِ"
                  translation="La foi comporte soixante-dix et quelques branches. Et la pudeur (haya) est une branche de la foi."
                  source="Sahih Al-Bukhari, n°9 — Sahih Muslim, n°35"
                  grade="sahih"
                  explanation="Ce hadith fondamental lie directement la pudeur à la foi. Le terme <em>haya</em> englobe la modestie intérieure (vis-à-vis d&apos;Allah) et extérieure (vis-à-vis des créatures). Les savants expliquent que la pudeur est mentionnée spécifiquement parmi les branches de la foi parce qu&apos;elle conduit naturellement à l&apos;obéissance : celui qui a de la pudeur devant Allah couvrira ce qu&apos;Il a ordonné de couvrir et évitera ce qu&apos;Il a interdit. Le voile est ainsi l&apos;une des manifestations concrètes de cette branche de la foi."
                />

                <HadithBlock
                  number={5}
                  title="Les femmes habillées mais dénudées"
                  narrator="Abu Hurayra"
                  arabic="صِنْفَانِ مِنْ أَهْلِ النَّارِ لَمْ أَرَهُمَا: قَوْمٌ مَعَهُمْ سِيَاطٌ كَأَذْنَابِ الْبَقَرِ يَضْرِبُونَ بِهَا النَّاسَ، وَنِسَاءٌ كَاسِيَاتٌ عَارِيَاتٌ مُمِيلَاتٌ مَائِلَاتٌ، رُءُوسُهُنَّ كَأَسْنِمَةِ الْبُخْتِ الْمَائِلَةِ، لَا يَدْخُلْنَ الْجَنَّةَ وَلَا يَجِدْنَ رِيحَهَا"
                  translation="Deux catégories de gens de l&apos;Enfer que je n&apos;ai pas encore vues : des gens portant des fouets semblables à des queues de vaches avec lesquels ils frappent les gens, et des femmes habillées mais dénudées, séduisantes et séduites, leurs têtes ressemblant aux bosses inclinées des chameaux. Elles n&apos;entreront pas au Paradis et n&apos;en sentiront même pas le parfum."
                  source="Sahih Muslim, n°2128"
                  grade="sahih"
                  explanation="Ce hadith prophétique décrit une réalité future avec une précision remarquable. L&apos;expression &laquo; habillées mais dénudées &raquo; (<em>kasiyat ariyat</em>) a été interprétée par les savants de plusieurs manières : des femmes portant des vêtements si fins ou si moulants qu&apos;ils ne remplissent pas la fonction de couverture, ou des femmes qui ne couvrent qu&apos;une partie de leur corps. L&apos;expression &laquo; séduisantes et séduites &raquo; (<em>mumilat mailat</em>) décrit celles qui attirent les regards et sont elles-mêmes attirées par la séduction. Ce hadith met en garde contre le vêtement qui, bien que présent, ne remplit pas sa fonction de pudeur."
                />

                <HadithBlock
                  number={6}
                  title="La pudeur ne peut qu&apos;apporter du bien"
                  narrator="Imran ibn Husayn"
                  arabic="الْحَيَاءُ لَا يَأْتِي إِلَّا بِخَيْرٍ"
                  translation="La pudeur ne peut qu&apos;apporter du bien."
                  source="Sahih Al-Bukhari, n°6117 — Sahih Muslim, n°37"
                  grade="sahih"
                  explanation="Ce hadith concis pose un principe absolu : la pudeur n&apos;a que des effets positifs. Certaines personnes pourraient considérer la pudeur comme un frein social ou un signe de faiblesse. Le Prophète ﷺ réfute cette vision en affirmant que la haya ne produit que du bien, que ce soit dans la préservation de l&apos;honneur, la protection des relations sociales ou l&apos;élévation spirituelle. Appliquée au vêtement, cette parole signifie que le choix de la modestie vestimentaire ne prive la femme de rien ; il ne fait que lui apporter du bien."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh du vêtement, les règles de la awra et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Jilbab et niqab      */}
              {/* ============================== */}
              <section id="jilbab-niqab" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le jilbab et le niqab dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-delà du khimar (voile de tête), les hadiths mentionnent d&apos;autres pièces vestimentaires : le jilbab, vêtement ample couvrant tout le corps, et le niqab, voile couvrant le visage. Ces éléments ont fait l&apos;objet de discussions savantes approfondies, et les hadiths éclairent leur usage parmi les premières générations de musulmanes.
                </p>

                <HadithBlock
                  number={7}
                  title="Sortir avec le jilbab pour la prière de l&apos;Aïd"
                  narrator="Umm Atiyya"
                  arabic="أَمَرَنَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَنْ نُخْرِجَهُنَّ فِي الْفِطْرِ وَالْأَضْحَى: الْعَوَاتِقَ وَالْحُيَّضَ وَذَوَاتِ الْخُدُورِ. فَأَمَّا الْحُيَّضُ فَيَعْتَزِلْنَ الصَّلَاةَ وَيَشْهَدْنَ الْخَيْرَ وَدَعْوَةَ الْمُسْلِمِينَ. قُلْتُ: يَا رَسُولَ اللَّهِ، إِحْدَانَا لَا يَكُونُ لَهَا جِلْبَابٌ. قَالَ: لِتُلْبِسْهَا أُخْتُهَا مِنْ جِلْبَابِهَا"
                  translation="Le Messager d&apos;Allah ﷺ nous a ordonné de les faire sortir pour les prières de l&apos;Aïd al-Fitr et de l&apos;Aïd al-Adha : les jeunes filles, les femmes en menstrues et les femmes cloîtrées. Les femmes en menstrues s&apos;écartaient de la prière mais assistaient au bien et à l&apos;invocation des musulmans. J&apos;ai dit : Ô Messager d&apos;Allah, l&apos;une d&apos;entre nous n&apos;a pas de jilbab. Il dit : Que sa sœur lui prête l&apos;un de ses jilbabs."
                  source="Sahih Al-Bukhari, n°351 — Sahih Muslim, n°890"
                  grade="sahih"
                  explanation="Ce hadith montre que le Prophète ﷺ considérait le jilbab comme une condition de sortie pour la femme. Lorsque Umm Atiyya signale que certaines femmes n&apos;en possèdent pas, le Prophète ﷺ ne les dispense pas de sortir, mais ordonne le prêt d&apos;un jilbab. Cela indique deux choses : premièrement, le jilbab est nécessaire pour la présence de la femme dans l&apos;espace public ; deuxièmement, la solidarité entre femmes est encouragée pour permettre à toutes de participer à la vie communautaire."
                />

                <HadithBlock
                  number={8}
                  title="Aisha et le voile du visage pendant le pèlerinage"
                  narrator="Aisha"
                  arabic="كَانَ الرُّكْبَانُ يَمُرُّونَ بِنَا وَنَحْنُ مَعَ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مُحْرِمَاتٌ، فَإِذَا حَاذَوْنَا سَدَلَتْ إِحْدَانَا جِلْبَابَهَا مِنْ رَأْسِهَا عَلَى وَجْهِهَا، فَإِذَا جَاوَزُونَا كَشَفْنَاهُ"
                  translation="Les cavaliers passaient devant nous alors que nous étions en état d&apos;ihram avec le Messager d&apos;Allah ﷺ. Lorsqu&apos;ils arrivaient à notre hauteur, l&apos;une d&apos;entre nous laissait tomber son jilbab de sa tête sur son visage, et lorsqu&apos;ils s&apos;éloignaient, nous le découvrions."
                  source="Sunan Abu Dawud, n°1833 — Musnad Ahmad, n°24021"
                  grade="hasan"
                  explanation="Ce hadith d&apos;Aisha éclaire la pratique du voile du visage pendant le pèlerinage. Bien que le niqab (voile attaché) soit interdit en ihram, les femmes du Prophète ﷺ laissaient tomber leur jilbab sur leur visage lorsque des hommes passaient. Cela montre que le voile du visage était une pratique habituelle pour les épouses du Prophète ﷺ, même si elles adaptaient sa forme pendant l&apos;ihram. Les savants qui considèrent le niqab comme obligatoire s&apos;appuient sur ce hadith, tandis que les autres y voient un acte recommandé propre aux épouses du Prophète ﷺ."
                />

                <HadithBlock
                  number={9}
                  title="Le vêtement qui traîne par orgueil"
                  narrator="Abu Hurayra"
                  arabic="لَا يَنْظُرُ اللَّهُ يَوْمَ الْقِيَامَةِ إِلَى مَنْ جَرَّ إِزَارَهُ بَطَرًا"
                  translation="Allah ne regardera pas, le Jour de la Résurrection, celui qui traîne son vêtement (izar) par orgueil."
                  source="Sahih Al-Bukhari, n°5783 — Sahih Muslim, n°2087"
                  grade="sahih"
                  explanation="Bien que ce hadith concerne d&apos;abord les hommes et l&apos;izar (vêtement du bas), il pose un principe général applicable au vêtement de la femme : le vêtement ne doit pas être un instrument d&apos;orgueil. La femme musulmane porte le jilbab par obéissance à Allah, non par ostentation. Ce hadith rappelle que la modestie vestimentaire doit être accompagnée d&apos;une modestie intérieure. Umm Salama a interrogé le Prophète ﷺ sur la longueur du vêtement de la femme, et il a autorisé qu&apos;il traîne d&apos;une coudée (Tirmidhi 1731), distinguant ainsi les règles vestimentaires masculines et féminines."
                />
              </section>

              {/* ======================================== */}
              {/* SECTION : La femme et l'espace public    */}
              {/* ======================================== */}
              <section id="femme-espace-public" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La femme et l&apos;espace public dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le voile n&apos;est pas un instrument d&apos;enfermement. Les hadiths montrent que les femmes participaient à la vie publique — prière, enseignement, marché, pèlerinage — tout en observant les règles de pudeur. Le Prophète ﷺ a lui-même encouragé la présence des femmes dans les mosquées et les rassemblements communautaires.
                </p>

                <HadithBlock
                  number={10}
                  title="N&apos;empêchez pas les servantes d&apos;Allah d&apos;aller aux mosquées"
                  narrator="Ibn &apos;Umar"
                  arabic="لَا تَمْنَعُوا إِمَاءَ اللَّهِ مَسَاجِدَ اللَّهِ"
                  translation="N&apos;empêchez pas les servantes d&apos;Allah (de se rendre) aux mosquées d&apos;Allah."
                  source="Sahih Al-Bukhari, n°900 — Sahih Muslim, n°442"
                  grade="sahih"
                  explanation="Ce hadith affirme le droit de la femme à fréquenter la mosquée. Le Prophète ﷺ utilise une formulation impérative négative (&laquo; n&apos;empêchez pas &raquo;), ce qui en fait une interdiction claire de priver les femmes d&apos;accès aux lieux de culte. Ce hadith, lu conjointement avec les prescriptions du voile, montre que le hijab et le jilbab ne sont pas des outils d&apos;exclusion sociale, mais des conditions qui permettent justement à la femme de participer à la vie publique et spirituelle de la communauté."
                />

                <HadithBlock
                  number={11}
                  title="Les femmes sortaient voilées pour la prière de l&apos;aube"
                  narrator="Aisha"
                  arabic="كُنَّ نِسَاءُ الْمُؤْمِنَاتِ يَشْهَدْنَ مَعَ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ صَلَاةَ الْفَجْرِ مُتَلَفِّعَاتٍ بِمُرُوطِهِنَّ، ثُمَّ يَنْقَلِبْنَ إِلَى بُيُوتِهِنَّ حِينَ يَقْضِينَ الصَّلَاةَ لَا يَعْرِفُهُنَّ أَحَدٌ مِنَ الْغَلَسِ"
                  translation="Les femmes croyantes assistaient à la prière de l&apos;aube avec le Messager d&apos;Allah ﷺ, enveloppées dans leurs manteaux (murut). Puis elles retournaient chez elles après la prière, sans que personne ne les reconnaisse à cause de l&apos;obscurité."
                  source="Sahih Al-Bukhari, n°578 — Sahih Muslim, n°645"
                  grade="sahih"
                  explanation="Ce hadith illustre la pratique quotidienne des femmes du temps du Prophète ﷺ. Elles participaient à la prière de l&apos;aube (fajr) à la mosquée, enveloppées dans leurs manteaux. Le fait qu&apos;elles ne soient pas reconnues tenait à la fois à l&apos;obscurité de l&apos;aube et à la couverture de leurs vêtements. Ce récit montre que le voile n&apos;empêchait pas les femmes de sortir pour accomplir leurs obligations religieuses. Au contraire, c&apos;est le voile qui leur permettait de se rendre à la mosquée dans le respect de la pudeur prescrite."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La participation active des femmes à la vie de la communauté prophétique réfute l&apos;idée que le voile serait synonyme de réclusion. Les Compagnonnes étudiaient, enseignaient, commerçaient et soignaient les blessés, tout en respectant les prescriptions vestimentaires. Pour explorer d&apos;autres aspects du{" "}
                  <Link href="/hadith-bon-comportement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    bon comportement en islam selon les hadiths
                  </Link>, consultez notre article dédié.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le voile et les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont commenté ces hadiths pour en extraire des règles juridiques précises. Leurs analyses montrent un large consensus sur l&apos;obligation du voile, avec des divergences légitimes sur les détails de ce qui doit être couvert.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le verset d&apos;An-Nur ordonne aux croyantes de rabattre le khimar sur la poitrine. Le khimar est ce qui couvre la tête. Si Allah ordonne de le rabattre sur la poitrine, cela implique nécessairement de couvrir la tête, le cou et la poitrine. C&apos;est le consensus des exégètes.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam Al-Qurtubi, <em>Al-Jami&apos; li-Ahkam al-Qur&apos;an</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;L&apos;obligation du hijab fait l&apos;objet d&apos;un consensus parmi les savants. La divergence porte uniquement sur le visage et les mains : sont-ils awra ou non ? La position la plus prudente est de les couvrir, mais celle qui découvre le visage et les mains a un appui dans la Sunna et les paroles des Compagnons.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Qudama, <em>Al-Mughni</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La pudeur (haya) est la racine de tout bien. Sa disparition entraîne la disparition de tout bien. Le Prophète ﷺ a dit que la pudeur est une branche de la foi parce qu&apos;elle pousse naturellement vers l&apos;obéissance et éloigne de la désobéissance, exactement comme la foi elle-même.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le jilbab mentionné dans le verset d&apos;Al-Ahzab est le vêtement qui couvre la femme de la tête aux pieds. Les femmes arabes portaient le khimar sur la tête et le jilbab par-dessus leurs vêtements lorsqu&apos;elles sortaient. C&apos;est le sens du commandement coranique.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Kathir, <em>Tafsir al-Qur&apos;an al-Azim</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires savants confirment que la question du voile repose sur des textes coraniques et prophétiques solides. Le consensus porte sur l&apos;obligation de couvrir la tête, le cou, la poitrine et le corps. La divergence sur le visage et les mains est une question de <em>fiqh</em> légitime, et chaque musulmane doit suivre l&apos;avis qu&apos;elle juge le plus fondé en science.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Lecons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques tirées des hadiths sur le voile
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés permet de dégager des enseignements concrets pour la pratique quotidienne de la musulmane :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Le voile est un acte d&apos;obéissance à Allah
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les versets coraniques et les hadiths montrent que le hijab est une prescription divine, pas une simple tradition culturelle. Le porter est un acte d&apos;adoration qui rapproche d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La pudeur intérieure précède le vêtement
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La haya est une branche de la foi qui se manifeste dans le regard, la parole et le comportement. Le vêtement modeste n&apos;a de sens que s&apos;il est accompagné d&apos;une pudeur du cœur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Le voile ne signifie pas l&apos;isolement
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les Compagnonnes priaient à la mosquée, apprenaient la science, participaient aux rassemblements et sortaient pour leurs besoins. Le voile est une condition de présence dans l&apos;espace public, pas un motif d&apos;exclusion.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Le vêtement doit couvrir sans attirer l&apos;attention
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les hadiths mettent en garde contre les vêtements fins, moulants ou provocants. Le vêtement de la musulmane doit être ample, opaque et couvrant, sans être un instrument d&apos;ostentation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La solidarité entre femmes est une sunna
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a ordonné aux femmes de se prêter mutuellement le jilbab pour permettre à toutes de participer aux prières de l&apos;Aïd. L&apos;entraide dans la pratique du voile est encouragée.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La divergence savante sur le visage est légitime
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les savants divergent sur l&apos;obligation de couvrir le visage et les mains. Les deux positions s&apos;appuient sur des preuves textuelles. La musulmane doit suivre l&apos;avis qu&apos;elle considère le plus fondé, sans juger celles qui suivent l&apos;autre position.
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
                  description="Comprenez les hadiths sur le voile et la pudeur dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur la femme en islam : droits, dignité et enseignements"
                  description="Les hadiths authentiques sur le statut, les droits et la place de la femme en islam."
                  href="/hadith-femme-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le bon comportement en islam"
                  description="Les enseignements prophétiques sur la pudeur, la douceur et les nobles caractères."
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
