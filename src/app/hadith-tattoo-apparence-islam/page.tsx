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
    "Hadiths sur le tatouage, l&apos;épilation et l&apos;apparence en islam",
  description:
    "Découvrez les hadiths authentiques sur le tatouage (washm), l&apos;épilation des sourcils, la modification du corps et l&apos;apparence en islam. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths sur le tatouage, l&apos;épilation et l&apos;apparence en islam",
    description:
      "Les hadiths authentiques sur le tatouage, l&apos;épilation, la coiffure et les pratiques naturelles (fitrah) selon la Sunna du Prophète Muhammad ﷺ.",
    url: "https://www.islamreligion.fr/hadith-tattoo-apparence-islam",
    images: [
      {
        url: "/images/croissant-lune-lanterne-islam-decoration-pastel.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-tattoo-apparence-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique de l\u2019apparence" },
  { id: "tatouage-washm", label: "Le tatouage (washm) dans les hadiths" },
  { id: "epilation-modification", label: "L\u2019\u00e9pilation et la modification du corps" },
  { id: "coiffure-apparence", label: "La coiffure et l\u2019apparence" },
  { id: "fitrah", label: "La fitrah (pratiques naturelles)" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Le\u00e7ons pratiques" },
  { id: "faq", label: "Questions fr\u00e9quentes" },
];

const faqItems = [
  {
    question:
      "Le tatouage est-il interdit (haram) en islam ?",
    answer:
      "Oui, le tatouage est consid\u00e9r\u00e9 comme interdit (haram) par la majorit\u00e9 des savants de l\u2019islam. Le Proph\u00e8te \uFDFA a maudit la tatoueuse et celle qui se fait tatouer (Bukhari 5937, Muslim 2125). Cette interdiction repose sur la modification de la cr\u00e9ation d\u2019Allah et l\u2019alt\u00e9ration permanente du corps. Les quatre \u00e9coles de jurisprudence s\u2019accordent sur cette interdiction.",
  },
  {
    question:
      "L&apos;\u00e9pilation des sourcils (nams) est-elle permise pour les femmes ?",
    answer:
      "La majorit\u00e9 des savants consid\u00e8rent l\u2019\u00e9pilation des sourcils (nams) comme interdite, car le Proph\u00e8te \uFDFA a maudit la mutanammisa (celle qui \u00e9pile les sourcils) et la nammisa (celle qui demande \u00e0 se les faire \u00e9piler) dans le hadith rapport\u00e9 par Ibn Mas\u2019\u00fbd (Bukhari 5931, Muslim 2125). Toutefois, certains savants comme l\u2019imam Ahmad autorisent de retirer les poils exc\u00e9dentaires qui d\u00e9passent la forme naturelle du sourcil.",
  },
  {
    question:
      "Quelles sont les pratiques de la fitrah mentionn\u00e9es dans les hadiths ?",
    answer:
      "Le Proph\u00e8te \uFDFA a mentionn\u00e9 cinq pratiques de la fitrah : la circoncision, le rasage du pubis, la taille de la moustache, la coupe des ongles et l\u2019\u00e9pilation des aisselles (Bukhari 5889, Muslim 257). Dans une autre version rapport\u00e9e par Aisha (Muslim 261), dix pratiques sont cit\u00e9es, incluant \u00e9galement le siwak, le rin\u00e7age du nez et le lavage des articulations.",
  },
  {
    question:
      "Le Proph\u00e8te a-t-il interdit de se teindre les cheveux ?",
    answer:
      "Non, le Proph\u00e8te \uFDFA a au contraire encourag\u00e9 la teinture des cheveux blancs pour se distinguer des gens du Livre, en disant : \u00ab Changez ces cheveux blancs et \u00e9vitez le noir \u00bb (Muslim 2102). Il a donc permis la teinture au henn\u00e9, au katam et \u00e0 d\u2019autres colorants, tout en d\u00e9conseillant le noir pur selon la majorit\u00e9 des savants.",
  },
  {
    question:
      "Que dit l&apos;islam sur les extensions de cheveux et les perruques ?",
    answer:
      "Le Proph\u00e8te \uFDFA a maudit celle qui raccorde des cheveux (wasila) et celle qui demande qu\u2019on lui en raccorde (mustawsila), selon le hadith d\u2019Ibn \u2019Umar (Bukhari 5936, Muslim 2122). La majorit\u00e9 des savants \u00e9tendent cette interdiction aux perruques et extensions qui donnent l\u2019illusion de vrais cheveux. Toutefois, certains savants contemporains distinguent les extensions synth\u00e9tiques des cheveux naturels.",
  },
  {
    question:
      "Un musulman peut-il se faire retirer un tatouage existant ?",
    answer:
      "Les savants recommandent de faire retirer un tatouage si cela est possible sans nuire \u00e0 la sant\u00e9 ni causer de dommage excessif. Si le retrait pr\u00e9sente un risque m\u00e9dical ou une difficult\u00e9 disproportionn\u00e9e, le rep entir sinc\u00e8re et l\u2019abandon de la pratique suffisent, et le p\u00e9ch\u00e9 est pardonn\u00e9 par Allah selon la majorit\u00e9 des juristes.",
  },
];

export default function HadithTattooApparenceIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-tattoo-apparence-islam/#article",
        headline:
          "Hadiths sur le tatouage, l\u2019\u00e9pilation et l\u2019apparence en islam",
        description:
          "D\u00e9couvrez les hadiths authentiques sur le tatouage, l\u2019\u00e9pilation, la coiffure et les pratiques naturelles (fitrah) en islam.",
        image: "/images/croissant-lune-lanterne-islam-decoration-pastel.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-tattoo-apparence-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-tattoo-apparence-islam/#breadcrumb",
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
            name: "Tatouage et apparence",
            item: "https://www.islamreligion.fr/hadith-tattoo-apparence-islam",
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
          title="Hadiths sur le tatouage, l&apos;épilation et l&apos;apparence en islam"
          subtitle="Les enseignements prophétiques sur le tatouage (washm), l&apos;épilation, la modification du corps, la coiffure et les pratiques naturelles (fitrah) selon la Sunna authentique."
          imageSrc="/images/croissant-lune-lanterne-islam-decoration-pastel.jpg"
          imageAlt="Hadiths sur le tatouage et l&apos;apparence en islam, enseignements prophétiques"
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
                  Tatouage et apparence
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
                    Le Prophète ﷺ a maudit la tatoueuse et celle qui se fait tatouer, considérant le tatouage comme une altération de la création d&apos;Allah.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    L&apos;épilation des sourcils (nams), le limage des dents et les extensions de cheveux font partie des modifications corporelles interdites par les hadiths authentiques.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La fitrah (nature primordiale) prescrit des pratiques d&apos;hygiène et d&apos;embellissement naturel : circoncision, taille de la moustache, coupe des ongles, épilation des aisselles et rasage du pubis.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    L&apos;islam distingue entre l&apos;embellissement naturel encouragé (propreté, parfum, soin de la barbe) et la modification artificielle de la création divine, qui est interdite.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique de l&apos;apparence en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths sur le tatouage et l&apos;apparence, il convient de rappeler le cadre coranique. Allah a créé l&apos;être humain dans la plus belle des formes et a interdit d&apos;altérer Sa création. Plusieurs versets posent les fondements de cette interdiction, que les hadiths du Prophète ﷺ viennent ensuite détailler et appliquer de manière pratique.
                </p>

                <HadithCard
                  arabic="لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ"
                  text="Nous avons certes créé l&apos;être humain dans la plus belle des formes."
                  source="Coran, sourate At-Tin (95:4)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset établit que la forme humaine est un don divin, une création parfaite qu&apos;il convient de respecter. Les savants y voient le fondement de l&apos;interdiction de toute modification permanente du corps qui altère cette forme originelle. Le tatouage, le limage des dents et d&apos;autres pratiques de modification sont considérés comme une atteinte à cette perfection créée par Allah.
                </p>

                <HadithCard
                  arabic="وَلَآمُرَنَّهُمْ فَلَيُغَيِّرُنَّ خَلْقَ اللَّهِ"
                  text="Et certes je leur ordonnerai, et ils altéreront la création d&apos;Allah."
                  source="Coran, sourate An-Nisa (4:119)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset rapporte les paroles de Shaytan (Satan) qui promet d&apos;inciter les hommes à modifier la création d&apos;Allah. Les exégètes comme Ibn Abbas et Ibn Mas&apos;ud ont interprété cette altération comme incluant le tatouage, l&apos;épilation des sourcils et le limage des dents. Ce verset constitue la base coranique principale des interdictions détaillées dans les hadiths qui suivent. Il montre que la modification de la création est une suggestion diabolique, contraire à la soumission à Allah.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Le tatouage (washm)  */}
              {/* ============================== */}
              <section id="tatouage-washm" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le tatouage (washm) dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le tatouage (<em>washm</em> en arabe) fait l&apos;objet d&apos;une interdiction claire et unanime dans les hadiths authentiques. Le Prophète ﷺ a prononcé la malédiction divine (<em>la&apos;na</em>) contre ceux qui pratiquent le tatouage, qu&apos;il s&apos;agisse du tatoueur ou du tatoué. Cette sévérité s&apos;explique par le fait que le tatouage constitue une modification permanente de la création d&apos;Allah.
                </p>

                <HadithBlock
                  number={1}
                  title="La malédiction de la tatoueuse et de celle qui se fait tatouer"
                  narrator="Ibn &apos;Umar"
                  arabic="لَعَنَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ الْوَاصِلَةَ وَالْمُسْتَوْصِلَةَ وَالْوَاشِمَةَ وَالْمُسْتَوْشِمَةَ"
                  translation="Le Messager d&apos;Allah ﷺ a maudit celle qui raccorde les cheveux et celle qui demande à ce qu&apos;on lui en raccorde, celle qui tatoue et celle qui se fait tatouer."
                  source="Sahih Al-Bukhari, n°5937 — Sahih Muslim, n°2124"
                  grade="sahih"
                  explanation="Ce hadith regroupe quatre catégories de femmes maudites par le Prophète ﷺ : la wasila (celle qui raccorde des cheveux), la mustawsila (celle qui demande le raccordement), la washima (la tatoueuse) et la mustawshima (celle qui se fait tatouer). La malédiction (la&apos;na) est la plus sévère des sanctions prophétiques, indiquant que ces actes sont des péchés majeurs. Les savants précisent que la malédiction touche aussi bien les hommes que les femmes, le féminin étant ici utilisé car ces pratiques étaient plus courantes chez les femmes à cette époque."
                />

                <HadithBlock
                  number={2}
                  title="Celles qui modifient la création d&apos;Allah"
                  narrator="Ibn Mas&apos;ud"
                  arabic="لَعَنَ اللَّهُ الْوَاشِمَاتِ وَالْمُسْتَوْشِمَاتِ وَالنَّامِصَاتِ وَالْمُتَنَمِّصَاتِ وَالْمُتَفَلِّجَاتِ لِلْحُسْنِ الْمُغَيِّرَاتِ خَلْقَ اللَّهِ"
                  translation="Allah a maudit les tatoueuses et celles qui se font tatouer, celles qui épilent les sourcils et celles qui se les font épiler, et celles qui se liment les dents pour l&apos;embellissement, altérant ainsi la création d&apos;Allah."
                  source="Sahih Al-Bukhari, n°5931 — Sahih Muslim, n°2125"
                  grade="sahih"
                  explanation="Ce hadith majeur d&apos;Ibn Mas&apos;ud est la référence principale sur les modifications corporelles interdites. Il énumère cinq catégories : les tatoueuses (washimat), celles qui se font tatouer (mustawshimat), les épileuses de sourcils (namisat), celles qui se font épiler les sourcils (mutanamisat) et celles qui se liment les dents pour les espacer (mutafallijat). La cause commune est mentionnée à la fin : &laquo; altérant la création d&apos;Allah &raquo;. Ibn Mas&apos;ud a ajouté : &laquo; Pourquoi ne maudirais-je pas ceux que le Messager d&apos;Allah a maudits, alors que cela se trouve dans le Livre d&apos;Allah ? &raquo;, faisant référence au verset d&apos;An-Nisa (4:119)."
                />

                <HadithBlock
                  number={3}
                  title="L&apos;interdiction du tatouage confirmée par Aisha"
                  narrator="Abu Juhayfah"
                  arabic="نَهَى النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنْ ثَمَنِ الدَّمِ وَثَمَنِ الْكَلْبِ وَكَسْبِ الْبَغِيِّ وَلَعَنَ آكِلَ الرِّبَا وَمُؤْكِلَهُ وَالْوَاشِمَةَ وَالْمُسْتَوْشِمَةَ"
                  translation="Le Prophète ﷺ a interdit le prix du sang, le prix du chien et le gain de la prostituée, et il a maudit celui qui consomme l&apos;usure et celui qui la donne, la tatoueuse et celle qui se fait tatouer."
                  source="Sahih Al-Bukhari, n°5347"
                  grade="sahih"
                  explanation="Ce hadith place le tatouage dans une liste d&apos;interdictions majeures aux côtés du riba (usure) et de la prostitution. Cette association souligne la gravité du péché. Le Prophète ﷺ mentionne le tatouage dans un contexte de prohibitions commerciales et morales, ce qui montre que l&apos;interdiction ne se limite pas à un aspect esthétique, mais relève d&apos;un principe fondamental de la charia. Les savants en déduisent que le revenu tiré du tatouage est également illicite (haram)."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths établissent de manière définitive l&apos;interdiction du tatouage en islam. La malédiction prophétique, la classification parmi les péchés majeurs et le lien explicite avec l&apos;altération de la création d&apos;Allah ne laissent aucune ambiguïté. Pour approfondir les enseignements du Prophète ﷺ sur le comportement, consultez notre article sur les{" "}
                  <Link href="/hadith-bon-comportement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le bon comportement en islam
                  </Link>.
                </p>
              </section>

              {/* ================================================ */}
              {/* SECTION : L&apos;épilation et la modification du corps */}
              {/* ================================================ */}
              <section id="epilation-modification" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;épilation et la modification du corps dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-delà du tatouage, le Prophète ﷺ a interdit d&apos;autres formes de modification corporelle visant à changer l&apos;apparence naturelle créée par Allah. L&apos;épilation des sourcils (<em>nams</em>), le limage des dents (<em>taflij</em>) et les extensions de cheveux (<em>wasl</em>) sont autant de pratiques condamnées par les hadiths authentiques, car elles participent de la même logique d&apos;altération de la création divine.
                </p>

                <HadithBlock
                  number={4}
                  title="La malédiction de celle qui épile les sourcils"
                  narrator="Alqamah"
                  arabic="عَنْ عَبْدِ اللَّهِ قَالَ: لَعَنَ اللَّهُ الْوَاشِمَاتِ وَالْمُسْتَوْشِمَاتِ وَالْمُتَنَمِّصَاتِ وَالْمُتَفَلِّجَاتِ لِلْحُسْنِ الْمُغَيِّرَاتِ خَلْقَ اللَّهِ تَعَالَى، فَبَلَغَ ذَلِكَ امْرَأَةً مِنْ بَنِي أَسَدٍ يُقَالُ لَهَا أُمُّ يَعْقُوبَ فَجَاءَتْ فَقَالَتْ: إِنَّهُ بَلَغَنِي أَنَّكَ لَعَنْتَ كَيْتَ وَكَيْتَ، فَقَالَ: وَمَا لِي لَا أَلْعَنُ مَنْ لَعَنَ رَسُولُ اللَّهِ"
                  translation="Abdullah (Ibn Mas&apos;ud) a dit : &laquo; Allah a maudit les tatoueuses, celles qui se font tatouer, celles qui s&apos;épilent les sourcils et celles qui se liment les dents pour l&apos;embellissement, altérant la création d&apos;Allah. &raquo; Une femme des Banu Asad nommée Umm Ya&apos;qub vint lui dire : &laquo; J&apos;ai entendu que tu as maudit telle et telle. &raquo; Il répondit : &laquo; Comment ne maudirais-je pas ceux que le Messager d&apos;Allah a maudits ? &raquo;"
                  source="Sahih Al-Bukhari, n°5939 — Sahih Muslim, n°2125"
                  grade="sahih"
                  explanation="Ce récit complet montre la réaction d&apos;Ibn Mas&apos;ud face à une femme qui contestait l&apos;interdiction. Sa réponse est catégorique : il ne fait que transmettre la parole du Prophète ﷺ, et celle-ci est conforme au Coran. Il est significatif qu&apos;il ait renvoyé la femme au Coran (sourate An-Nisa 4:119) pour montrer la concordance entre la Révélation et la Sunna. Ce hadith est la preuve principale de l&apos;interdiction de l&apos;épilation des sourcils (nams), un sujet sur lequel les savants ont beaucoup débattu quant à ses limites exactes."
                />

                <HadithBlock
                  number={5}
                  title="L&apos;interdiction de raccorder les cheveux"
                  narrator="Aisha"
                  arabic="أَنَّ جَارِيَةً مِنَ الْأَنْصَارِ تَزَوَّجَتْ وَأَنَّهَا مَرِضَتْ فَتَمَعَّطَ شَعَرُهَا فَأَرَادُوا أَنْ يَصِلُوهَا فَسَأَلُوا رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ: لَعَنَ اللَّهُ الْوَاصِلَةَ وَالْمُسْتَوْصِلَةَ"
                  translation="Une jeune fille des Ansar se maria et tomba malade, perdant ses cheveux. On voulut lui raccorder des cheveux, et on interrogea le Messager d&apos;Allah ﷺ qui dit : &laquo; Allah a maudit celle qui raccorde les cheveux et celle qui demande à ce qu&apos;on lui en raccorde. &raquo;"
                  source="Sahih Al-Bukhari, n°5936 — Sahih Muslim, n°2122"
                  grade="sahih"
                  explanation="Ce hadith est particulièrement éclairant car il montre que l&apos;interdiction s&apos;applique même dans un cas de nécessité apparente : une jeune mariée ayant perdu ses cheveux à cause d&apos;une maladie. Malgré la compassion que l&apos;on pourrait attendre, le Prophète ﷺ a maintenu l&apos;interdiction, ce qui indique sa gravité. Les savants en déduisent que les extensions de cheveux naturels sont formellement interdites. Toutefois, certains juristes contemporains distinguent les cheveux naturels des fibres synthétiques, sur lesquelles l&apos;avis diverge."
                />

                <HadithBlock
                  number={6}
                  title="L&apos;interdiction de se limer les dents"
                  narrator="Ibn Mas&apos;ud"
                  arabic="سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَنْهَى عَنِ النَّامِصَةِ وَالْوَاشِرَةِ وَالْوَاصِلَةِ وَالْوَاشِمَةِ إِلَّا مِنْ دَاءٍ"
                  translation="J&apos;ai entendu le Messager d&apos;Allah ﷺ interdire l&apos;épilation des sourcils (namisa), le limage des dents (washira), le raccordement des cheveux (wasila) et le tatouage (washima), sauf en cas de maladie."
                  source="Sunan Abu Dawud, n°4170"
                  grade="hasan"
                  explanation="Ce hadith ajoute une nuance importante : l&apos;exception médicale (&laquo; sauf en cas de maladie &raquo;). Les savants en déduisent que les modifications corporelles à visée thérapeutique sont permises. Ainsi, la chirurgie réparatrice pour corriger un défaut congénital ou une blessure est autorisée, contrairement à la chirurgie esthétique de convenance. Le terme &laquo; washira &raquo; désigne celle qui lime ses dents pour les espacer afin de paraître plus jeune, une pratique qui existait dans la société arabe pré-islamique."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh de l&apos;apparence, les règles de la tahara et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Coiffure et apparence */}
              {/* ============================== */}
              <section id="coiffure-apparence" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La coiffure et l&apos;apparence dans la Sunna
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si l&apos;islam interdit certaines modifications corporelles, il encourage en revanche le soin de l&apos;apparence, la propreté et l&apos;embellissement naturel. Le Prophète ﷺ accordait une grande importance à sa coiffure, à sa barbe et à son hygiène personnelle. Les hadiths suivants montrent que l&apos;islam ne prône pas le laisser-aller, mais un équilibre entre le soin de soi et le respect de la création divine.
                </p>

                <HadithBlock
                  number={7}
                  title="Changez les cheveux blancs et évitez le noir"
                  narrator="Jabir ibn Abdullah"
                  arabic="جِيءَ بِأَبِي قُحَافَةَ يَوْمَ فَتْحِ مَكَّةَ وَرَأْسُهُ وَلِحْيَتُهُ كَالثَّغَامَةِ بَيَاضًا فَقَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: غَيِّرُوا هَذَا بِشَيْءٍ وَاجْتَنِبُوا السَّوَادَ"
                  translation="Abu Quhafah (le père d&apos;Abu Bakr) fut amené le jour de la conquête de La Mecque, et sa tête et sa barbe étaient blanches comme la fleur de thaghamah. Le Messager d&apos;Allah ﷺ dit : &laquo; Changez cela avec quelque chose et évitez le noir. &raquo;"
                  source="Sahih Muslim, n°2102"
                  grade="sahih"
                  explanation="Ce hadith montre que la teinture des cheveux blancs est une sunna encouragée par le Prophète ﷺ. L&apos;injonction &laquo; évitez le noir &raquo; a été interprétée par la majorité des savants comme une interdiction (haram) ou une forte réprobation (makruh) de la teinture noire pure. Le henné, le katam et les mélanges de couleurs rougeâtres ou brunâtres sont en revanche recommandés. L&apos;objectif est de se distinguer des gens du Livre qui laissaient leurs cheveux blanchir sans les teindre, tout en évitant la tromperie que représente la teinture noire pour paraître plus jeune."
                />

                <HadithBlock
                  number={8}
                  title="Celui qui a des cheveux, qu&apos;il en prenne soin"
                  narrator="Abu Hurayra"
                  arabic="مَنْ كَانَ لَهُ شَعَرٌ فَلْيُكْرِمْهُ"
                  translation="Celui qui a des cheveux, qu&apos;il en prenne soin."
                  source="Sunan Abu Dawud, n°4163"
                  grade="hasan"
                  explanation="Ce hadith concis établit un principe général : le soin des cheveux est un devoir du musulman. Le terme &laquo; yukrimhu &raquo; (qu&apos;il en prenne soin, qu&apos;il les honore) implique le lavage, le peignage, l&apos;huilage et la coupe régulière. Le Prophète ﷺ a interdit le qaza&apos; (se raser une partie de la tête en laissant l&apos;autre) et a encouragé soit de raser la tête entièrement, soit de laisser les cheveux uniformément. Ce hadith s&apos;inscrit dans la vision islamique de l&apos;apparence : ni négligence ni excès."
                />

                <HadithBlock
                  number={9}
                  title="L&apos;interdiction du qaza&apos; (rasage partiel de la tête)"
                  narrator="Ibn &apos;Umar"
                  arabic="نَهَى رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنِ الْقَزَعِ، قَالَ: قُلْتُ لِنَافِعٍ: وَمَا الْقَزَعُ؟ قَالَ: يُحْلَقُ بَعْضُ رَأْسِ الصَّبِيِّ وَيُتْرَكُ بَعْضٌ"
                  translation="Le Messager d&apos;Allah ﷺ a interdit le qaza&apos;. On demanda à Nafi&apos; : &laquo; Qu&apos;est-ce que le qaza&apos; ? &raquo; Il répondit : &laquo; C&apos;est raser une partie de la tête de l&apos;enfant en laissant l&apos;autre. &raquo;"
                  source="Sahih Al-Bukhari, n°5921 — Sahih Muslim, n°2120"
                  grade="sahih"
                  explanation="Le qaza&apos; consiste à raser certaines parties de la tête tout en laissant d&apos;autres avec des cheveux, créant un aspect inégal. Le Prophète ﷺ l&apos;a interdit car cette pratique défigure l&apos;apparence naturelle et était associée à certaines coutumes païennes. Les savants y incluent les coupes de cheveux qui rasent les côtés en laissant le dessus, une pratique répandue aujourd&apos;hui. La règle est l&apos;uniformité : soit on rase entièrement, soit on laisse pousser uniformément."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : La fitrah             */}
              {/* ============================== */}
              <section id="fitrah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La fitrah : les pratiques naturelles en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La <em>fitrah</em> désigne la nature primordiale sur laquelle Allah a créé l&apos;être humain. Le Prophète ﷺ a prescrit des pratiques d&apos;hygiène et d&apos;embellissement qui relèvent de cette nature innée. Contrairement aux modifications interdites, ces pratiques sont encouragées car elles préservent la propreté, la dignité et la beauté naturelle du corps sans en altérer la création.
                </p>

                <HadithBlock
                  number={10}
                  title="Cinq pratiques font partie de la fitrah"
                  narrator="Abu Hurayra"
                  arabic="الْفِطْرَةُ خَمْسٌ: الْخِتَانُ وَالِاسْتِحْدَادُ وَقَصُّ الشَّارِبِ وَتَقْلِيمُ الْأَظْفَارِ وَنَتْفُ الْإِبِطِ"
                  translation="Cinq pratiques font partie de la fitrah : la circoncision, le rasage du pubis, la taille de la moustache, la coupe des ongles et l&apos;épilation des aisselles."
                  source="Sahih Al-Bukhari, n°5889 — Sahih Muslim, n°257"
                  grade="sahih"
                  explanation="Ce hadith fondamental énumère les cinq pratiques de la fitrah reconnues par l&apos;ensemble des écoles juridiques. La circoncision (khitan) est considérée comme obligatoire par la majorité des savants pour les hommes. Le rasage du pubis (istihdad), la taille de la moustache (qass ash-sharib), la coupe des ongles (taqlim al-azfar) et l&apos;épilation des aisselles (natf al-ibt) sont des sunnas fortement recommandées. Le Prophète ﷺ a fixé un délai maximal de quarante jours pour ces pratiques, selon le hadith d&apos;Anas ibn Malik (Muslim 258). Ces actes relèvent de l&apos;hygiène et de la beauté naturelle, sans modifier la création d&apos;Allah."
                />

                <HadithBlock
                  number={11}
                  title="Dix pratiques font partie de la fitrah"
                  narrator="Aisha"
                  arabic="عَشْرٌ مِنَ الْفِطْرَةِ: قَصُّ الشَّارِبِ وَإِعْفَاءُ اللِّحْيَةِ وَالسِّوَاكُ وَاسْتِنْشَاقُ الْمَاءِ وَقَصُّ الْأَظْفَارِ وَغَسْلُ الْبَرَاجِمِ وَنَتْفُ الْإِبِطِ وَحَلْقُ الْعَانَةِ وَانْتِقَاصُ الْمَاءِ"
                  translation="Dix pratiques font partie de la fitrah : tailler la moustache, laisser pousser la barbe, utiliser le siwak, rincer le nez avec de l&apos;eau, couper les ongles, laver les articulations des doigts, épiler les aisselles, raser le pubis et faire l&apos;istinja (nettoyage intime avec de l&apos;eau)."
                  source="Sahih Muslim, n°261"
                  grade="sahih"
                  explanation="Cette version plus complète ajoute cinq pratiques supplémentaires au hadith précédent. Parmi elles, &laquo; laisser pousser la barbe &raquo; (i&apos;fa al-lihya) est une sunna fortement recommandée, voire obligatoire selon les écoles hanbalite et malikite. Le siwak (bâtonnet de nettoyage des dents) est une pratique prophétique constante. Le lavage des articulations des doigts (barajim) et le rinçage du nez (istinshaq) font partie des ablutions. Ces dix pratiques dessinent un portrait complet de l&apos;hygiène islamique : elles touchent au soin du visage, du corps, des mains et des parties intimes. Pour approfondir les hadiths sur la barbe, consultez notre article sur les{' '}
                  <Link href='/hadith-barbe-islam' className='font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary'>
                    hadiths sur la barbe en islam
                  </Link>."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le tatouage et l&apos;apparence
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont commenté ces hadiths en détail, précisant la portée de chaque interdiction et les exceptions éventuelles. Leurs analyses permettent de distinguer entre les modifications interdites et les soins permis, voire encouragés.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;L&apos;interdiction du tatouage fait l&apos;unanimité des savants (ijma&apos;). La cause de cette interdiction est double : c&apos;est une modification permanente de la création d&apos;Allah, et c&apos;est une forme de tromperie dans l&apos;apparence. Le tatouage est un péché majeur (kabira) en raison de la malédiction prophétique qui lui est associée.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le nams (épilation des sourcils) est interdit lorsqu&apos;il vise l&apos;embellissement et l&apos;altération de la forme naturelle. Toutefois, si un poil pousse de manière anormale et cause un préjudice, il est permis de le retirer, car cela relève alors de la correction d&apos;un défaut, non de la modification de la création.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Les pratiques de la fitrah sont des actes d&apos;obéissance à Allah. Elles distinguent le musulman par sa propreté et sa dignité. Négliger ces pratiques au-delà de quarante jours est blâmable (makruh), car le Prophète ﷺ a fixé ce délai comme limite maximale.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Qudama, <em>Al-Mughni</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La règle générale en matière d&apos;apparence est la suivante : tout embellissement qui préserve la forme naturelle du corps est permis, voire recommandé (comme le henné, le soin des cheveux, le parfum). Tout embellissement qui modifie la création d&apos;Allah de manière permanente est interdit (comme le tatouage, le limage des dents, l&apos;épilation des sourcils).&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Sheikh Ibn &apos;Uthaymin, <em>Sharh Riyadh as-Salihin</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires mettent en lumière la distinction fondamentale en islam entre l&apos;embellissement naturel (tahsin) et l&apos;altération de la création (taghyir khalq Allah). Le premier est encouragé comme partie intégrante de la foi ; le second est un péché majeur. Cette distinction guide les musulmans dans leurs choix quotidiens en matière d&apos;apparence et de soin du corps.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Lecons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des principes concrets pour le musulman en matière d&apos;apparence et de soin du corps :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Respecter la création d&apos;Allah
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le corps est un dépôt (amana) confié par Allah. Le modifier de manière permanente par le tatouage, le limage des dents ou l&apos;épilation des sourcils est un acte de désobéissance qui relève de la suggestion de Shaytan (Coran 4:119).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Pratiquer les sunnas de la fitrah
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La circoncision, la taille de la moustache, la coupe des ongles, le rasage du pubis et l&apos;épilation des aisselles sont des pratiques prophétiques qui préservent la propreté et la dignité du corps. Les négliger au-delà de quarante jours est blâmable.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Prendre soin de ses cheveux et de sa barbe
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a ordonné de prendre soin de ses cheveux, d&apos;éviter le qaza&apos; (rasage partiel) et de teindre les cheveux blancs tout en évitant le noir pur. Le soin de l&apos;apparence est un acte d&apos;obéissance, pas de vanité.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Distinguer l&apos;embellissement permis de la modification interdite
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le henné, le parfum, le kohl, le siwak et les vêtements propres sont des embellissements encouragés. Le tatouage, les extensions de cheveux naturels, le limage des dents et l&apos;épilation des sourcils sont des modifications interdites car elles altèrent la création divine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se repentir en cas de tatouage existant
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Celui qui s&apos;est fait tatouer avant l&apos;islam ou par ignorance doit se repentir sincèrement. Le retrait du tatouage est recommandé si possible sans dommage pour la santé. Si le retrait est impossible ou dangereux, le repentir et l&apos;abandon de la pratique suffisent, par la miséricorde d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Accepter les exceptions médicales
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La chirurgie réparatrice pour corriger un défaut congénital, une brûlure ou une blessure est permise selon les savants. La règle d&apos;interdiction concerne la modification esthétique de convenance, non la correction d&apos;un préjudice réel.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur l&apos;apparence dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  description="Les enseignements prophétiques sur l&apos;éthique, la bienveillance et les bonnes manières selon la Sunna."
                  href="/hadith-bon-comportement-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la barbe en islam"
                  description="Les hadiths authentiques sur la barbe, sa taille et son entretien selon la Sunna du Prophète ﷺ."
                  href="/hadith-barbe-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
