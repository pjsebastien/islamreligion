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
    "Hadiths sur le voyage nocturne (Isra wal-Miraj) : les enseignements authentiques",
  description:
    "Découvrez les hadiths authentiques sur l'Isra et le Miraj : le voyage nocturne du Prophète ﷺ de La Mecque à Jérusalem, l'ascension à travers les sept cieux, la rencontre avec les prophètes et l'institution des cinq prières.",
  openGraph: {
    title:
      "Hadiths sur le voyage nocturne (Isra wal-Miraj) : les enseignements authentiques",
    description:
      "Les hadiths authentiques sur l'Isra et le Miraj : voyage nocturne, ascension céleste, rencontre avec les prophètes et institution des cinq prières quotidiennes.",
    url: "https://www.islamreligion.fr/hadith-isra-miraj-islam",
    images: [
      {
        url: "/images/mosquee-prophete-medine-islam-dome-vert.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-isra-miraj-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique de l\u2019Isra et du Miraj" },
  { id: "voyage-nocturne", label: "Le voyage nocturne vers Jérusalem" },
  { id: "ascension-cieux", label: "L\u2019ascension à travers les sept cieux" },
  { id: "cinq-prieres", label: "L\u2019institution des cinq prières" },
  { id: "temoignages", label: "Abu Bakr as-Siddiq et la confirmation" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur l\u2019Isra et le Miraj ?",
    answer:
      "Les hadiths les plus importants sur l\u2019Isra et le Miraj sont rapportés dans Sahih Al-Bukhari (n\u00B03887, n\u00B0349) et Sahih Muslim (n\u00B0162). Ils décrivent le voyage nocturne du Prophète \uFDFA de La Mecque à Jérusalem sur le Buraq, son ascension à travers les sept cieux, sa rencontre avec les prophètes Adam, Isa, Musa et Ibrahim, et l\u2019institution des cinq prières quotidiennes après réduction de cinquante à cinq.",
  },
  {
    question:
      "L\u2019Isra et le Miraj ont-ils eu lieu physiquement ou en rêve ?",
    answer:
      "La majorité des savants de l\u2019islam, dont l\u2019imam An-Nawawi, Ibn Hajar et Ibn Kathir, affirment que l\u2019Isra et le Miraj ont eu lieu physiquement, corps et âme, à l\u2019état d\u2019éveil. Cela est confirmé par le verset coranique (sourate Al-Isra, 17:1) qui mentionne le \u00AB serviteur \u00BB (\u2018abd), terme qui désigne l\u2019être humain dans sa totalité (corps et âme). De plus, les Quraysh n\u2019auraient pas nié l\u2019événement s\u2019il ne s\u2019agissait que d\u2019un rêve.",
  },
  {
    question: "Qu\u2019est-ce que le Buraq mentionné dans les hadiths ?",
    answer:
      "Le Buraq est une monture céleste décrite dans Sahih Muslim (n\u00B0162) comme un animal blanc, plus grand qu\u2019un âne et plus petit qu\u2019un mulet, dont chaque foulée atteignait l\u2019extrémité de son regard. Son nom dérive de la racine arabe \u00AB barq \u00BB (éclair), évoquant sa rapidité. Le Prophète \uFDFA l\u2019a chevauché de La Mecque à Jérusalem lors du voyage nocturne.",
  },
  {
    question:
      "Pourquoi les prières sont-elles passées de cinquante à cinq ?",
    answer:
      "Lors du Miraj, Allah prescrivit initialement cinquante prières quotidiennes. En redescendant, le Prophète \uFDFA rencontra Musa qui lui conseilla de demander une réduction, car sa communauté ne pourrait les supporter. Après plusieurs allers-retours entre Allah et Musa, le nombre fut réduit à cinq prières, tout en conservant la récompense de cinquante (Sahih Al-Bukhari, n\u00B0349). Cela montre la miséricorde d\u2019Allah envers cette communauté.",
  },
  {
    question:
      "Quels prophètes le Prophète Muhammad \uFDFA a-t-il rencontrés lors du Miraj ?",
    answer:
      "Selon les hadiths authentiques, le Prophète \uFDFA a rencontré Adam au premier ciel, Isa (Jésus) et Yahya (Jean) au deuxième ciel, Yusuf (Joseph) au troisième ciel, Idris (Hénoch) au quatrième ciel, Harun (Aaron) au cinquième ciel, Musa (Moïse) au sixième ciel et Ibrahim (Abraham) au septième ciel, adossé à la Maison peuplée (Al-Bayt al-Ma\u2019mur).",
  },
  {
    question: "Qu\u2019est-ce que Sidrat al-Muntaha ?",
    answer:
      "Sidrat al-Muntaha est le \u00AB Lotus de la limite \u00BB, un arbre immense situé au-delà du septième ciel, que le Prophète \uFDFA a vu lors du Miraj. Selon Sahih Muslim, ses feuilles étaient comme des oreilles d\u2019éléphant et ses fruits comme des cruches. C\u2019est à cet endroit que la révélation divine descend et au-delà duquel nulle créature ne peut aller. Allah y a parlé directement au Prophète \uFDFA et lui a prescrit les prières.",
  },
  {
    question:
      "Pourquoi Abu Bakr a-t-il reçu le surnom d\u2019as-Siddiq après l\u2019Isra ?",
    answer:
      "Lorsque les Quraysh rejetèrent le récit du voyage nocturne et allèrent interroger Abu Bakr, celui-ci répondit : \u00AB S\u2019il le dit, alors c\u2019est vrai. \u00BB Il croyait au Prophète \uFDFA pour des choses bien plus extraordinaires, comme la révélation divine. Cette foi inébranlable lui valut le titre d\u2019as-Siddiq (\u00AB le véridique \u00BB ou \u00AB le grand confirmateur \u00BB), rapporté dans les ouvrages de la Sira et par l\u2019imam As-Suyuti.",
  },
  {
    question:
      "Quelle est la date de l\u2019Isra et du Miraj dans le calendrier islamique ?",
    answer:
      "La date exacte de l\u2019Isra et du Miraj fait l\u2019objet de divergences parmi les savants. L\u2019opinion la plus répandue situe l\u2019événement le 27 du mois de Rajab, mais d\u2019autres avis mentionnent le mois de Rabi\u2019 al-Awwal ou de Ramadan. Les savants s\u2019accordent toutefois sur le fait que l\u2019événement s\u2019est produit environ un an et demi avant l\u2019Hégire, soit vers 621 de l\u2019ère chrétienne.",
  },
];

export default function HadithIsraMirajIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-isra-miraj-islam/#article",
        headline:
          "Hadiths sur le voyage nocturne (Isra wal-Miraj) : les enseignements authentiques",
        description:
          "Découvrez les hadiths authentiques sur l\u2019Isra et le Miraj : le voyage nocturne, l\u2019ascension céleste, la rencontre avec les prophètes et l\u2019institution des cinq prières.",
        image: "/images/mosquee-prophete-medine-islam-dome-vert.jpg",
        datePublished: "2026-05-02",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-isra-miraj-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-isra-miraj-islam/#breadcrumb",
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
            name: "Hadiths sur l\u2019Isra et le Miraj",
            item: "https://www.islamreligion.fr/hadith-isra-miraj-islam",
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
          title="Hadiths sur le voyage nocturne (Isra wal-Miraj)"
          subtitle="Les enseignements prophétiques sur le voyage nocturne de La Mecque à Jérusalem, l&apos;ascension à travers les sept cieux, la rencontre avec les prophètes et l&apos;institution des cinq prières quotidiennes."
          imageSrc="/images/mosquee-prophete-medine-islam-dome-vert.jpg"
          imageAlt="Hadiths sur l&apos;Isra et le Miraj, voyage nocturne et ascension céleste en islam"
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
                  Hadiths sur l&apos;Isra et le Miraj
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
                    Le Prophète ﷺ a été transporté de nuit de La Mecque à Jérusalem (Isra), puis élevé à travers les sept cieux (Miraj), corps et âme, à l&apos;état d&apos;éveil.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Il a rencontré les prophètes Adam, Isa, Musa et Ibrahim dans les différents cieux, chacun l&apos;accueillant et confirmant sa mission prophétique.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les cinq prières quotidiennes ont été prescrites lors de cette ascension, réduites de cinquante à cinq par la miséricorde d&apos;Allah.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Abu Bakr as-Siddiq a reçu son titre pour avoir immédiatement cru au récit du voyage nocturne sans hésitation.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique de l&apos;Isra et du Miraj
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;Isra et le Miraj sont d&apos;abord mentionnés dans le Coran avant d&apos;être détaillés par les hadiths. Allah a consacré le début de la sourate Al-Isra à cet événement miraculeux, et la sourate An-Najm décrit l&apos;ascension céleste. Ces versets posent le cadre théologique que les hadiths viennent ensuite préciser et enrichir.
                </p>

                <HadithCard
                  arabic="سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ لِنُرِيَهُ مِنْ آيَاتِنَا"
                  text="Gloire et pureté à Celui qui a fait voyager de nuit Son serviteur de la Mosquée sacrée à la Mosquée la plus éloignée dont Nous avons béni l&apos;alentour, afin de lui montrer certaines de Nos merveilles."
                  source="Coran, sourate Al-Isra (17:1)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondateur établit plusieurs vérités essentielles. Le terme &laquo;&nbsp;serviteur&nbsp;&raquo; (<em>&apos;abd</em>) désigne l&apos;être humain dans sa totalité, corps et âme, ce qui confirme la réalité physique du voyage. La mention de la Mosquée sacrée (La Mecque) et de la Mosquée la plus éloignée (Jérusalem) relie les deux lieux saints et affirme leur sacralité en islam. Les savants soulignent que le voyage s&apos;est déroulé &laquo;&nbsp;de nuit&nbsp;&raquo; (<em>laylan</em>), indiquant qu&apos;il n&apos;a occupé qu&apos;une partie de la nuit.
                </p>

                <HadithCard
                  arabic="وَلَقَدْ رَآهُ نَزْلَةً أُخْرَىٰ عِندَ سِدْرَةِ الْمُنتَهَىٰ عِندَهَا جَنَّةُ الْمَأْوَىٰ إِذْ يَغْشَى السِّدْرَةَ مَا يَغْشَىٰ مَا زَاغَ الْبَصَرُ وَمَا طَغَىٰ لَقَدْ رَأَىٰ مِنْ آيَاتِ رَبِّهِ الْكُبْرَىٰ"
                  text="Il l&apos;a effectivement vu une autre fois, près du Lotus de la limite, près duquel se trouve le Jardin du refuge. Lorsque le Lotus était couvert de ce qui le couvrait, la vue n&apos;a pas dévié et n&apos;a pas outrepassé la limite. Il a certes vu certains des plus grands signes de son Seigneur."
                  source="Coran, sourate An-Najm (53:13-18)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces versets de la sourate An-Najm décrivent le point culminant du Miraj : la vision de Jibril sous sa forme originelle et l&apos;arrivée à Sidrat al-Muntaha, la limite au-delà de laquelle nulle créature ne peut aller. Le Prophète ﷺ a vu les plus grands signes d&apos;Allah sans que son regard ne dévie, preuve de sa maîtrise et de sa sincérité absolue. C&apos;est sur cette base coranique que les hadiths détaillent chaque étape de ce voyage extraordinaire.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Voyage nocturne      */}
              {/* ============================== */}
              <section id="voyage-nocturne" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le voyage nocturne de La Mecque à Jérusalem
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a été transporté de nuit de La Mecque à Jérusalem sur une monture céleste appelée le Buraq. Ce voyage miraculeux, qui s&apos;est déroulé en une fraction de la nuit, marque le début de l&apos;événement le plus extraordinaire de la vie prophétique. Les hadiths suivants décrivent les circonstances de ce départ et la nature du Buraq.
                </p>

                <HadithBlock
                  number={1}
                  title="La description du Buraq"
                  narrator="Anas ibn Malik"
                  arabic="أُتِيَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ بِالْبُرَاقِ لَيْلَةَ أُسْرِيَ بِهِ، وَهُوَ دَابَّةٌ أَبْيَضُ فَوْقَ الْحِمَارِ وَدُونَ الْبَغْلِ، يَضَعُ حَافِرَهُ عِنْدَ مُنْتَهَى طَرْفِهِ"
                  translation="On amena au Messager d&apos;Allah ﷺ le Buraq, la nuit où il fut transporté. C&apos;est un animal blanc, plus grand qu&apos;un âne et plus petit qu&apos;un mulet, qui posait son sabot à l&apos;extrémité de son regard."
                  source="Sahih Muslim, n°162"
                  grade="sahih"
                  explanation="Ce hadith décrit le Buraq, monture surnaturelle dont le nom vient de la racine arabe &laquo;&nbsp;barq&nbsp;&raquo; (éclair), évoquant sa rapidité prodigieuse. La précision &laquo;&nbsp;il posait son sabot à l&apos;extrémité de son regard&nbsp;&raquo; signifie que chaque foulée couvrait la distance que l&apos;œil pouvait embrasser. Les savants soulignent que cette monture est un signe de la puissance divine : Allah a créé pour Son Prophète un moyen de transport adapté à ce voyage extraordinaire entre deux lieux saints séparés par plus de mille kilomètres."
                />

                <HadithBlock
                  number={2}
                  title="L&apos;arrivée à Jérusalem et la prière avec les prophètes"
                  narrator="Abu Hurayra"
                  arabic="لَقَدْ رَأَيْتُنِي فِي الْحِجْرِ وَقُرَيْشٌ تَسْأَلُنِي عَنْ مَسْرَايَ، فَسَأَلَتْنِي عَنْ أَشْيَاءَ مِنْ بَيْتِ الْمَقْدِسِ لَمْ أُثْبِتْهَا، فَكُرِبْتُ كُرْبَةً مَا كُرِبْتُ مِثْلَهَا قَطُّ، فَرَفَعَهُ اللَّهُ لِي أَنْظُرُ إِلَيْهِ، مَا يَسْأَلُونِي عَنْ شَيْءٍ إِلَّا أَنْبَأْتُهُمْ بِهِ"
                  translation="Je me suis vu dans le Hijr (de la Ka&apos;ba) et les Quraysh m&apos;interrogeaient sur mon voyage nocturne. Ils me posèrent des questions sur des détails de Bayt al-Maqdis (Jérusalem) que je n&apos;avais pas retenus. J&apos;éprouvai alors une angoisse comme je n&apos;en avais jamais connue. Alors Allah le fit apparaître devant moi et je le regardais : ils ne me posaient aucune question sans que je ne leur en donne la réponse."
                  source="Sahih Al-Bukhari, n°3886 — Sahih Muslim, n°170"
                  grade="sahih"
                  explanation="Ce hadith montre qu&apos;à son retour, le Prophète ﷺ a dû faire face à l&apos;incrédulité des Quraysh. Ils le testèrent en lui posant des questions sur la Mosquée Al-Aqsa. Lorsqu&apos;il ne se souvint pas de certains détails, Allah fit apparaître devant lui une image de la Mosquée pour qu&apos;il puisse répondre avec précision. Cet épisode confirme la réalité physique du voyage : les Quraysh connaissaient Jérusalem et pouvaient vérifier ses descriptions. Si le voyage n&apos;avait été qu&apos;un rêve, cette épreuve n&apos;aurait eu aucun sens."
                />

                <HadithBlock
                  number={3}
                  title="La prière en tant qu&apos;imam des prophètes"
                  narrator="Abu Hurayra"
                  arabic="وَقَدْ رَأَيْتُنِي فِي جَمَاعَةٍ مِنَ الْأَنْبِيَاءِ، فَإِذَا مُوسَى قَائِمٌ يُصَلِّي... وَإِذَا عِيسَى ابْنُ مَرْيَمَ قَائِمٌ يُصَلِّي... وَإِذَا إِبْرَاهِيمُ قَائِمٌ يُصَلِّي... فَحَانَتِ الصَّلَاةُ فَأَمَمْتُهُمْ"
                  translation="Je me suis vu parmi un groupe de prophètes. Musa était debout en prière... Isa fils de Maryam était debout en prière... Ibrahim était debout en prière... Puis l&apos;heure de la prière arriva et je les dirigeai en tant qu&apos;imam."
                  source="Sahih Muslim, n°172"
                  grade="sahih"
                  explanation="Ce hadith rapporte que le Prophète ﷺ a dirigé la prière en tant qu&apos;imam de tous les prophètes à la Mosquée Al-Aqsa. Cet événement a une portée théologique majeure : il confirme que Muhammad ﷺ est le sceau des prophètes et que sa mission englobe et parachève celles de tous les messagers précédents. Musa, Isa et Ibrahim, les plus grands prophètes, ont prié derrière lui, reconnaissant ainsi son rang. Les savants y voient aussi un symbole de l&apos;unité du message divin à travers les âges."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths montrent que le voyage nocturne n&apos;est pas un simple déplacement géographique, mais un événement à portée théologique profonde. Il relie La Mecque à Jérusalem, confirme la mission prophétique de Muhammad ﷺ et établit la continuité entre tous les messagers d&apos;Allah. Pour approfondir les hadiths sur la prière, consultez notre article sur les{" "}
                  <Link href="/hadith-priere-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la prière en islam
                  </Link>.
                </p>
              </section>

              {/* ========================================= */}
              {/* SECTION : Ascension à travers les cieux   */}
              {/* ========================================= */}
              <section id="ascension-cieux" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;ascension à travers les sept cieux
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Après la prière à Jérusalem, le Prophète ﷺ fut élevé par Jibril à travers les sept cieux. À chaque niveau, il rencontra un prophète qui le salua et confirma sa mission. Cette ascension céleste est le cœur du Miraj, et les hadiths la décrivent avec une précision remarquable.
                </p>

                <HadithBlock
                  number={4}
                  title="La rencontre avec Adam au premier ciel"
                  narrator="Malik ibn Sa&apos;sa&apos;a"
                  arabic="فَفُتِحَ لَنَا فَإِذَا أَنَا بِآدَمَ، فَرَحَّبَ بِي وَدَعَا لِي بِخَيْرٍ"
                  translation="On nous ouvrit (la porte du premier ciel), et voilà que j&apos;étais avec Adam. Il me souhaita la bienvenue et invoqua le bien pour moi."
                  source="Sahih Al-Bukhari, n°3887 — Sahih Muslim, n°162"
                  grade="sahih"
                  explanation="Au premier ciel, le Prophète ﷺ rencontra Adam, le père de l&apos;humanité. Le hadith rapporte qu&apos;Adam avait à sa droite les âmes des gens du Paradis et à sa gauche les âmes des gens de l&apos;Enfer : il riait en regardant à droite et pleurait en regardant à gauche. L&apos;accueil chaleureux d&apos;Adam et son invocation en faveur du Prophète ﷺ symbolisent la reconnaissance du premier homme envers le dernier des prophètes."
                />

                <HadithBlock
                  number={5}
                  title="Isa et Yahya au deuxième ciel, Yusuf au troisième"
                  narrator="Malik ibn Sa&apos;sa&apos;a"
                  arabic="ثُمَّ عُرِجَ بِنَا إِلَى السَّمَاءِ الثَّانِيَةِ... فَإِذَا يَحْيَى وَعِيسَى وَهُمَا ابْنَا الْخَالَةِ... ثُمَّ عُرِجَ بِنَا إِلَى السَّمَاءِ الثَّالِثَةِ... فَإِذَا يُوسُفُ"
                  translation="Puis nous fûmes élevés au deuxième ciel... et voilà Yahya et Isa, tous deux cousins maternels... Puis nous fûmes élevés au troisième ciel... et voilà Yusuf."
                  source="Sahih Al-Bukhari, n°3887"
                  grade="sahih"
                  explanation="Le Prophète ﷺ rencontra au deuxième ciel Isa (Jésus) et Yahya (Jean-Baptiste), que le hadith présente comme cousins maternels. Au troisième ciel, il trouva Yusuf (Joseph), dont le hadith dit qu&apos;il avait reçu la moitié de la beauté. Chaque prophète le salua en disant : &laquo;&nbsp;Bienvenue au frère pieux et au prophète pieux.&nbsp;&raquo; Cette formule d&apos;accueil montre la fraternité entre les prophètes et la continuité de la mission divine."
                />

                <HadithBlock
                  number={6}
                  title="Ibrahim au septième ciel, adossé à Al-Bayt al-Ma&apos;mur"
                  narrator="Malik ibn Sa&apos;sa&apos;a"
                  arabic="ثُمَّ عُرِجَ بِنَا إِلَى السَّمَاءِ السَّابِعَةِ، فَإِذَا إِبْرَاهِيمُ مُسْنِدًا ظَهْرَهُ إِلَى الْبَيْتِ الْمَعْمُورِ، وَإِذَا هُوَ يَدْخُلُهُ كُلَّ يَوْمٍ سَبْعُونَ أَلْفَ مَلَكٍ لَا يَعُودُونَ إِلَيْهِ"
                  translation="Puis nous fûmes élevés au septième ciel, et voilà Ibrahim, adossé à la Maison peuplée (Al-Bayt al-Ma&apos;mur). Chaque jour, soixante-dix mille anges y entrent et n&apos;y reviennent plus jamais."
                  source="Sahih Al-Bukhari, n°3887 — Sahih Muslim, n°162"
                  grade="sahih"
                  explanation="Au sommet des cieux, le Prophète ﷺ rencontra Ibrahim, le père des prophètes, adossé à Al-Bayt al-Ma&apos;mur, la &laquo;&nbsp;Maison peuplée&nbsp;&raquo; qui est l&apos;équivalent céleste de la Ka&apos;ba terrestre. Le fait qu&apos;Ibrahim se trouve au septième ciel, le plus élevé, reflète son rang éminent. La mention des soixante-dix mille anges qui y entrent quotidiennement sans jamais y revenir donne une idée du nombre incalculable des anges et de la grandeur de l&apos;adoration d&apos;Allah dans les cieux."
                />

                <HadithBlock
                  number={7}
                  title="Sidrat al-Muntaha et les signes divins"
                  narrator="Anas ibn Malik"
                  arabic="ثُمَّ انْطَلَقَ بِي جِبْرِيلُ حَتَّى أَتَى سِدْرَةَ الْمُنْتَهَى، فَغَشِيَهَا أَلْوَانٌ لَا أَدْرِي مَا هِيَ... فَأَوْحَى اللَّهُ إِلَيَّ مَا أَوْحَى"
                  translation="Puis Jibril m&apos;emmena jusqu&apos;à Sidrat al-Muntaha (le Lotus de la limite). Des couleurs la couvraient, je ne sais lesquelles... Alors Allah m&apos;inspira ce qu&apos;Il m&apos;inspira."
                  source="Sahih Al-Bukhari, n°349 — Sahih Muslim, n°162"
                  grade="sahih"
                  explanation="Sidrat al-Muntaha est la limite ultime de la création, au-delà de laquelle seul Allah est. Le Prophète ﷺ y est parvenu accompagné de Jibril, qui ne pouvait aller plus loin. Dans d&apos;autres versions du hadith, il est précisé que les feuilles de cet arbre étaient comme des oreilles d&apos;éléphant et ses fruits comme des cruches. C&apos;est à cet endroit que la révélation directe eut lieu et que les prières furent prescrites. Ce hadith illustre que le Prophète ﷺ a atteint une proximité avec Allah qu&apos;aucune autre créature n&apos;a connue."
                />

                <HadithBlock
                  number={8}
                  title="Les fleuves du Paradis vus lors du Miraj"
                  narrator="Anas ibn Malik"
                  arabic="ثُمَّ رُفِعَتْ لِي سِدْرَةُ الْمُنْتَهَى، فَإِذَا أَرْبَعَةُ أَنْهَارٍ: نَهْرَانِ ظَاهِرَانِ وَنَهْرَانِ بَاطِنَانِ، فَأَمَّا الظَّاهِرَانِ فَالنِّيلُ وَالْفُرَاتُ، وَأَمَّا الْبَاطِنَانِ فَنَهْرَانِ فِي الْجَنَّةِ"
                  translation="Puis on m&apos;éleva vers Sidrat al-Muntaha et voilà quatre fleuves : deux apparents et deux cachés. Les deux apparents sont le Nil et l&apos;Euphrate, et les deux cachés sont deux fleuves du Paradis."
                  source="Sahih Al-Bukhari, n°3887"
                  grade="sahih"
                  explanation="Ce hadith révèle que le Prophète ﷺ a vu, à Sidrat al-Muntaha, la source céleste de quatre fleuves. Le Nil et l&apos;Euphrate, deux des plus grands fleuves de la terre, ont leur origine dans le monde céleste. Les deux autres fleuves coulent dans le Paradis. Les savants expliquent que la mention du Nil et de l&apos;Euphrate souligne la bénédiction divine sur ces régions et le lien entre le monde visible et le monde invisible."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez la Sira du Prophète ﷺ, la science du hadith et la théologie islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Les cinq prières     */}
              {/* ============================== */}
              <section id="cinq-prieres" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;institution des cinq prières quotidiennes
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des fruits majeurs du Miraj est la prescription des cinq prières quotidiennes. Contrairement aux autres obligations de l&apos;islam, la prière n&apos;a pas été révélée par l&apos;intermédiaire de Jibril sur terre : elle a été prescrite directement par Allah au Prophète ﷺ dans les cieux, ce qui souligne son rang éminent parmi les actes d&apos;adoration.
                </p>

                <HadithBlock
                  number={9}
                  title="De cinquante prières à cinq"
                  narrator="Anas ibn Malik"
                  arabic="فَفَرَضَ اللَّهُ عَلَى أُمَّتِي خَمْسِينَ صَلَاةً، فَرَجَعْتُ بِذَلِكَ حَتَّى مَرَرْتُ عَلَى مُوسَى فَقَالَ: مَا فَرَضَ اللَّهُ لَكَ عَلَى أُمَّتِكَ؟ قُلْتُ: فَرَضَ خَمْسِينَ صَلَاةً، قَالَ: فَارْجِعْ إِلَى رَبِّكَ فَإِنَّ أُمَّتَكَ لَا تُطِيقُ ذَلِكَ"
                  translation="Allah prescrivit à ma communauté cinquante prières. Je redescendis et passai par Musa qui me demanda : &laquo;&nbsp;Qu&apos;a prescrit Allah à ta communauté ?&nbsp;&raquo; Je dis : &laquo;&nbsp;Cinquante prières.&nbsp;&raquo; Il dit : &laquo;&nbsp;Retourne vers ton Seigneur, car ta communauté ne pourra le supporter.&nbsp;&raquo;"
                  source="Sahih Al-Bukhari, n°349 — Sahih Muslim, n°162"
                  grade="sahih"
                  explanation="Ce hadith raconte le dialogue entre le Prophète ﷺ et Musa après la prescription initiale de cinquante prières. Musa, fort de son expérience avec les Bani Isra&apos;il, savait que les hommes ne pourraient supporter un tel nombre. Le Prophète ﷺ fit alors plusieurs allers-retours entre Allah et Musa, et le nombre fut progressivement réduit de cinquante à cinq. Ce récit montre la miséricorde d&apos;Allah et le conseil fraternel de Musa, mais aussi la retenue du Prophète ﷺ qui finit par dire : &laquo;&nbsp;J&apos;ai honte de demander encore à mon Seigneur.&nbsp;&raquo;"
                />

                <HadithBlock
                  number={10}
                  title="Cinq prières avec la récompense de cinquante"
                  narrator="Anas ibn Malik"
                  arabic="فَنَادَى مُنَادٍ: أَمْضَيْتُ فَرِيضَتِي، وَخَفَّفْتُ عَنْ عِبَادِي، وَأَجْزِي الْحَسَنَةَ عَشْرًا"
                  translation="Un appeleur proclama : &laquo;&nbsp;J&apos;ai confirmé Mon obligation et J&apos;ai allégé (le fardeau) de Mes serviteurs. Je récompense chaque bonne action par dix fois sa valeur.&nbsp;&raquo;"
                  source="Sahih Al-Bukhari, n°349"
                  grade="sahih"
                  explanation="Ce hadith conclut le récit de la réduction des prières. Allah confirme que les cinq prières sont définitives et irréductibles, mais qu&apos;elles portent la récompense de cinquante, car chaque bonne action est multipliée par dix. Les savants y voient un double bienfait : l&apos;allègement pratique pour les croyants et la plénitude de la récompense. Ce hadith est l&apos;une des preuves majeures de l&apos;obligation des cinq prières quotidiennes en islam."
                />

                <HadithBlock
                  number={11}
                  title="Le choix du lait sur le vin"
                  narrator="Abu Hurayra"
                  arabic="أُتِيتُ لَيْلَةَ أُسْرِيَ بِي بِإِنَاءَيْنِ: إِنَاءٍ مِنْ خَمْرٍ وَإِنَاءٍ مِنْ لَبَنٍ، فَنَظَرْتُ إِلَيْهِمَا فَأَخَذْتُ اللَّبَنَ، فَقَالَ جِبْرِيلُ: الْحَمْدُ لِلَّهِ الَّذِي هَدَاكَ لِلْفِطْرَةِ، لَوْ أَخَذْتَ الْخَمْرَ غَوَتْ أُمَّتُكَ"
                  translation="La nuit où je fus transporté, on me présenta deux récipients : l&apos;un de vin et l&apos;autre de lait. Je les regardai et pris le lait. Jibril dit : &laquo;&nbsp;Louange à Allah qui t&apos;a guidé vers la fitra (la nature saine). Si tu avais pris le vin, ta communauté se serait égarée.&nbsp;&raquo;"
                  source="Sahih Al-Bukhari, n°3887 — Sahih Muslim, n°168"
                  grade="sahih"
                  explanation="Ce hadith rapporte un épisode symbolique du voyage nocturne. Le Prophète ﷺ choisit instinctivement le lait, symbole de la fitra (nature saine originelle), plutôt que le vin. Jibril lui confirma que ce choix guidé par Allah préservait sa communauté de l&apos;égarement. Les savants y voient une préfiguration de l&apos;interdiction du vin qui interviendra plus tard à Médine, et une preuve que le Prophète ﷺ est guidé par Allah dans chacun de ses choix."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Abu Bakr as-Siddiq   */}
              {/* ============================== */}
              <section id="temoignages" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Abu Bakr as-Siddiq et la confirmation du voyage nocturne
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le lendemain du voyage nocturne, le Prophète ﷺ annonça aux Quraysh ce qui s&apos;était passé. La réaction fut unanime : le rejet et la moquerie. Pourtant, un homme se distingua par sa foi inébranlable : Abu Bakr, qui reçut à cette occasion le titre d&apos;as-Siddiq, &laquo;&nbsp;le grand confirmateur&nbsp;&raquo;.
                </p>

                <HadithBlock
                  number={12}
                  title="Abu Bakr confirme le voyage nocturne"
                  narrator="Aisha"
                  arabic="لَمَّا أُسْرِيَ بِالنَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِلَى الْمَسْجِدِ الْأَقْصَى، أَصْبَحَ يَتَحَدَّثُ النَّاسُ بِذَلِكَ، فَارْتَدَّ نَاسٌ مِمَّنْ كَانُوا آمَنُوا بِهِ وَصَدَّقُوهُ، وَسَعَوْا بِذَلِكَ إِلَى أَبِي بَكْرٍ فَقَالُوا: هَلْ لَكَ إِلَى صَاحِبِكَ يَزْعُمُ أَنَّهُ أُسْرِيَ بِهِ اللَّيْلَةَ إِلَى بَيْتِ الْمَقْدِسِ؟ قَالَ: أَوَقَالَ ذَلِكَ؟ قَالُوا: نَعَمْ. قَالَ: لَئِنْ كَانَ قَالَ ذَلِكَ لَقَدْ صَدَقَ"
                  translation="Lorsque le Prophète ﷺ fut transporté de nuit vers la Mosquée Al-Aqsa, les gens en parlèrent le matin. Certains qui avaient cru apostasièrent. Ils allèrent voir Abu Bakr et dirent : &laquo;&nbsp;Ton compagnon prétend avoir été transporté la nuit dernière à Jérusalem.&nbsp;&raquo; Il dit : &laquo;&nbsp;A-t-il dit cela ?&nbsp;&raquo; Ils répondirent : &laquo;&nbsp;Oui.&nbsp;&raquo; Il dit : &laquo;&nbsp;S&apos;il l&apos;a dit, alors c&apos;est la vérité.&nbsp;&raquo;"
                  source="Mustadrak al-Hakim, n°4407 — Sirat Ibn Hisham"
                  grade="sahih"
                  explanation="Ce récit illustre la foi exceptionnelle d&apos;Abu Bakr. Tandis que certains musulmans doutaient et apostasièrent face à un récit qui défiait la raison humaine, Abu Bakr n&apos;hésita pas un instant. Son raisonnement était simple et profond : il croyait déjà que le Prophète ﷺ recevait la révélation du ciel, ce qui est bien plus extraordinaire qu&apos;un voyage terrestre. C&apos;est pour cette réponse qu&apos;il reçut le titre d&apos;as-Siddiq. Ce hadith est un modèle de ce que signifie la foi véritable : accepter la parole du Prophète sans condition."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur l&apos;Isra et le Miraj
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur l&apos;Isra et le Miraj. Leurs explications permettent de mieux saisir la portée théologique et spirituelle de cet événement unique dans l&apos;histoire prophétique.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;L&apos;Isra et le Miraj ont eu lieu corps et âme, à l&apos;état d&apos;éveil, et non en rêve. C&apos;est l&apos;avis de la majorité des savants parmi les compagnons, les successeurs et les imams après eux. C&apos;est l&apos;avis apparent des hadiths authentiques, et c&apos;est ce qui est conforme au contexte coranique.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Si le voyage nocturne n&apos;avait été qu&apos;un rêve, les Quraysh ne l&apos;auraient pas nié et n&apos;en auraient pas fait un argument contre le Prophète ﷺ. Car les rêves, même les plus étranges, ne sont contestés par personne. C&apos;est la réalité physique du voyage qui les a heurtés et c&apos;est elle que le Coran confirme.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Kathir, <em>Al-Bidaya wan-Nihaya</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le Miraj est la plus grande distinction accordée au Prophète ﷺ. Aucun autre prophète n&apos;a été élevé à cette proximité d&apos;Allah. Musa a entendu la parole d&apos;Allah sur terre, mais Muhammad ﷺ l&apos;a reçue au-delà des sept cieux, à Sidrat al-Muntaha. C&apos;est là que la prière a été prescrite, car elle est le miraj du croyant.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que l&apos;Isra et le Miraj ne sont pas un récit anecdotique : ils constituent un pilier de la croyance islamique. L&apos;événement confirme la mission prophétique de Muhammad ﷺ, établit la centralité de la prière et illustre la miséricorde d&apos;Allah envers Sa création.
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
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons profondes pour la foi et la pratique du musulman :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La prière est le fruit du Miraj
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les cinq prières quotidiennes sont le cadeau direct de cette ascension céleste. Le Prophète ﷺ a dit que la prière est le miraj du croyant : chaque salat est une élévation vers Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La foi dépasse la raison sans la contredire
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        L&apos;Isra et le Miraj sont un miracle qui dépasse les lois naturelles. Comme Abu Bakr l&apos;a montré, la foi véritable accepte la parole du Prophète ﷺ même lorsque l&apos;événement dépasse la compréhension humaine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        L&apos;unité du message prophétique
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La prière du Prophète ﷺ en tant qu&apos;imam des prophètes à Jérusalem confirme que l&apos;islam parachève les messages d&apos;Adam, Ibrahim, Musa et Isa. Tous les prophètes ont transmis le même message : l&apos;unicité d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La miséricorde d&apos;Allah envers les croyants
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La réduction des prières de cinquante à cinq illustre la miséricorde divine. Allah connaît la faiblesse de Ses serviteurs et leur accorde des allègements tout en préservant la plénitude de la récompense.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        L&apos;épreuve précède l&apos;élévation
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        L&apos;Isra et le Miraj ont eu lieu après l&apos;année de la tristesse (<em>&apos;Am al-Huzn</em>), où le Prophète ﷺ perdit son épouse Khadija et son oncle Abu Talib. Après l&apos;épreuve la plus dure, Allah lui accorda l&apos;honneur le plus grand.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Suivre la fitra et la voie naturelle
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le choix du lait sur le vin par le Prophète ﷺ rappelle que l&apos;islam est la religion de la fitra, la nature saine originelle. Le musulman est appelé à suivre cette voie d&apos;équilibre et de pureté dans tous les aspects de sa vie.
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
                  description="Comprenez les hadiths sur l&apos;Isra et le Miraj dans leur langue originale et approfondissez votre connaissance de la Sira prophétique."
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
                  title="Les hadiths sur la prière en islam"
                  description="Découvrez les hadiths authentiques sur la salat, ses mérites et ses conditions."
                  href="/hadith-priere-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les hadiths du Prophète Muhammad ﷺ : fondements et collections"
                  description="Découvrez l&apos;histoire des grandes collections de hadiths et les critères d&apos;authenticité."
                  href="/hadith-prophete-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les hadiths sur le Coran en islam"
                  description="Les enseignements prophétiques sur la lecture, la mémorisation et les mérites du Coran."
                  href="/hadith-coran-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
