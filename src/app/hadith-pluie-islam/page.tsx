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
    "Hadiths sur la pluie en islam : invocations, prière et enseignements prophétiques",
  description:
    "Découvrez les hadiths authentiques sur la pluie en islam : du&apos;a sous la pluie, prière de l&apos;istisqa, exposer son corps à la pluie, tonnerre et miséricorde divine. Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths sur la pluie en islam : invocations, prière et enseignements prophétiques",
    description:
      "Les hadiths authentiques sur la pluie en islam : invocations prophétiques, prière de demande de pluie, miséricorde divine et enseignements de la Sunna.",
    url: "https://www.islamreligion.fr/hadith-pluie-islam",
    images: [
      {
        url: "/images/coran-ouvert-nature-coucher-soleil-islam.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-pluie-islam",
  },
};

const tocItems = [
  { id: "pluie-misericorde", label: "La pluie, miséricorde d\u2019Allah" },
  { id: "doua-pluie", label: "Invocations lors de la pluie" },
  { id: "exposer-pluie", label: "S\u2019exposer à la pluie" },
  { id: "istisqa", label: "La prière de l\u2019istisqa" },
  { id: "tonnerre-foudre", label: "Le tonnerre et la glorification d\u2019Allah" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quelle invocation faire quand il pleut en islam ?",
    answer:
      "Lorsqu\u2019il pleut, le Prophète \u2018alayhi salatu wa salam disait : \u00ab Allahumma sayyiban nafi\u2019an \u00bb, c\u2019est-à-dire \u00ab Ô Allah, fais-en une pluie bénéfique \u00bb (Bukhari 1032). Il est également recommandé de faire des invocations personnelles, car le moment de la pluie est un moment d\u2019exaucement des du\u2019as selon plusieurs hadiths.",
  },
  {
    question:
      "Est-il recommandé de s\u2019exposer à la pluie en islam ?",
    answer:
      "Oui, le Prophète \u2018alayhi salatu wa salam s\u2019exposait volontairement à la pluie lorsqu\u2019elle tombait. Anas ibn Malik rapporte qu\u2019il découvrait une partie de son corps sous la pluie en disant qu\u2019elle venait récemment de son Seigneur (Muslim 898). Cet acte est une sunna qui témoigne de la gratitude envers Allah.",
  },
  {
    question:
      "Qu\u2019est-ce que la prière de l\u2019istisqa en islam ?",
    answer:
      "La prière de l\u2019istisqa est une prière spéciale que le Prophète accomplissait pour demander la pluie à Allah en période de sécheresse. Elle se compose de deux unités de prière (rak\u2019atayn) suivies d\u2019une invocation. Le Prophète retournait son manteau lors de cette prière comme signe d\u2019espoir en le changement de situation (Bukhari 1005, Muslim 894).",
  },
  {
    question:
      "Que dit-on quand on entend le tonnerre en islam ?",
    answer:
      "Lorsqu\u2019il entendait le tonnerre, le Prophète \u2018alayhi salatu wa salam disait : \u00ab Subhan alladhi yusabbihu ar-ra\u2019du bi hamdihi wal-mala\u2019ikatu min khifatihi \u00bb, c\u2019est-à-dire : \u00ab Gloire à Celui que le tonnerre glorifie par Sa louange, ainsi que les anges, par crainte de Lui \u00bb. Le Coran confirme que le tonnerre glorifie Allah (sourate Ar-Ra\u2019d, 13:13).",
  },
  {
    question:
      "La pluie est-elle un moment d\u2019exaucement des invocations ?",
    answer:
      "Oui, plusieurs hadiths indiquent que le moment de la pluie est un moment où les invocations sont exaucées. Le hadith rapporté par Sahl ibn Sa\u2019d mentionne que la du\u2019a n\u2019est pas rejetée lors de la pluie (Al-Hakim, Sahih selon ses critères). C\u2019est pourquoi il est recommandé de multiplier les invocations dès que la pluie commence à tomber.",
  },
  {
    question:
      "Que dit-on après la pluie en islam ?",
    answer:
      "Après la pluie, le Prophète disait : \u00ab Mutirnâ bi fadlillahi wa rahmatihi \u00bb, c\u2019est-à-dire \u00ab Il a plu par la grâce d\u2019Allah et Sa miséricorde \u00bb (Bukhari 1038, Muslim 71). Il a interdit d\u2019attribuer la pluie aux astres ou aux étoiles, car cela relève de la croyance préislamique. Le musulman doit toujours reconnaître qu\u2019Allah est Celui qui envoie la pluie.",
  },
  {
    question:
      "La pluie excessive peut-elle être un châtiment en islam ?",
    answer:
      "Oui, le Coran et les hadiths mentionnent que la pluie peut être une miséricorde ou un châtiment. Lorsque la pluie devenait forte et menaçante, le Prophète invoquait Allah en disant : \u00ab Allahumma hawalayna wa la \u2018alayna \u00bb, c\u2019est-à-dire \u00ab Ô Allah, autour de nous et non sur nous \u00bb (Bukhari 1013). Cela montre que le croyant doit se tourner vers Allah dans toutes les situations météorologiques.",
  },
  {
    question:
      "Quels sont les hadiths les plus importants sur la pluie en islam ?",
    answer:
      "Les hadiths les plus importants sur la pluie incluent le du\u2019a \u00ab Allahumma sayyiban nafi\u2019an \u00bb (Bukhari 1032), le hadith d\u2019Anas sur le fait de s\u2019exposer à la pluie (Muslim 898), les hadiths sur la prière de l\u2019istisqa (Bukhari 1005), le du\u2019a après la pluie (Bukhari 1038), et le hadith sur le tonnerre qui glorifie Allah. Ces hadiths couvrent l\u2019ensemble de la relation du musulman avec la pluie : avant, pendant et après.",
  },
];

export default function HadithPluieIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-pluie-islam/#article",
        headline:
          "Hadiths sur la pluie en islam : invocations, prière et enseignements prophétiques",
        description:
          "Découvrez les hadiths authentiques sur la pluie en islam : invocations prophétiques, prière de l\u2019istisqa, miséricorde divine et enseignements de la Sunna.",
        image: "/images/coran-ouvert-nature-coucher-soleil-islam.jpg",
        datePublished: "2026-05-01",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-pluie-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-pluie-islam/#breadcrumb",
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
            name: "Hadiths sur la pluie",
            item: "https://www.islamreligion.fr/hadith-pluie-islam",
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
          title="Hadiths sur la pluie en islam"
          subtitle="Les enseignements prophétiques sur la pluie : invocations, prière de l&apos;istisqa, miséricorde divine et comportement du musulman face aux précipitations selon la Sunna authentique."
          imageSrc="/images/coran-ouvert-nature-coucher-soleil-islam.jpg"
          imageAlt="Hadiths sur la pluie en islam, invocations et enseignements prophétiques"
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
                  Hadiths sur la pluie
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
                    La pluie est décrite dans le Coran et la Sunna comme une miséricorde d&apos;Allah envoyée à Ses serviteurs.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ enseignait des invocations spécifiques avant, pendant et après la pluie.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    S&apos;exposer à la pluie est une sunna du Prophète ﷺ, qui la considérait comme un don récent de son Seigneur.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le moment de la pluie est un temps d&apos;exaucement des invocations qu&apos;il ne faut pas négliger.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : La pluie miséricorde */}
              {/* ============================== */}
              <section id="pluie-misericorde" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La pluie, miséricorde d&apos;Allah dans le Coran et la Sunna
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La pluie occupe une place singulière dans la spiritualité islamique. Le Coran la présente comme un signe de la puissance divine et une miséricorde pour les créatures. Allah envoie la pluie pour redonner vie à la terre après sa mort, et cette image est utilisée à plusieurs reprises comme preuve de la résurrection. Les hadiths du Prophète ﷺ complètent cette vision en enseignant des comportements et des invocations précises en lien avec la pluie.
                </p>

                <HadithCard
                  arabic="وَهُوَ الَّذِي يُنَزِّلُ الْغَيْثَ مِن بَعْدِ مَا قَنَطُوا وَيَنشُرُ رَحْمَتَهُ وَهُوَ الْوَلِيُّ الْحَمِيدُ"
                  text="Et c&apos;est Lui qui fait descendre la pluie après que les gens aient désespéré, et Il répand Sa miséricorde. Et c&apos;est Lui le Protecteur, le Digne de louange."
                  source="Coran, sourate Ash-Shura (42:28)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset lie explicitement la pluie à la miséricorde divine (<em>rahma</em>). Le terme <em>ghayth</em> utilisé ici désigne spécifiquement la pluie qui vient après une longue sécheresse, celle qui apporte le soulagement et la joie. Les savants notent que la pluie est mentionnée dans le Coran tantôt comme bienfait (<em>ni&apos;ma</em>), tantôt comme châtiment lorsqu&apos;elle est excessive. C&apos;est pourquoi le Prophète ﷺ avait des invocations distinctes pour chaque situation.
                </p>

                <HadithCard
                  arabic="وَأَنزَلْنَا مِنَ السَّمَاءِ مَاءً بِقَدَرٍ فَأَسْكَنَّاهُ فِي الْأَرْضِ وَإِنَّا عَلَىٰ ذَهَابٍ بِهِ لَقَادِرُونَ"
                  text="Et Nous avons fait descendre du ciel une eau en quantité mesurée, et Nous l&apos;avons maintenue dans la terre, et Nous sommes bien capable de la faire disparaître."
                  source="Coran, sourate Al-Mu&apos;minun (23:18)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah rappelle ici que la pluie descend <em>bi qadar</em>, c&apos;est-à-dire en quantité mesurée et déterminée. Rien n&apos;est laissé au hasard dans la création. Ce verset invite le croyant à la gratitude, car l&apos;eau est un don qui pourrait être retiré à tout moment. C&apos;est dans ce cadre que les hadiths suivants prennent tout leur sens : chaque goutte de pluie est une occasion de se tourner vers Allah.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Invocations          */}
              {/* ============================== */}
              <section id="doua-pluie" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations prophétiques lors de la pluie
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a enseigné à sa communauté des invocations précises à formuler lorsque la pluie tombe, après la pluie et lorsque la pluie devient excessive. Ces du&apos;as reflètent l&apos;attitude du musulman face aux phénomènes naturels : gratitude, humilité et confiance en Allah.
                </p>

                <HadithBlock
                  number={1}
                  title="L&apos;invocation au début de la pluie"
                  narrator="Aisha"
                  arabic="كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا رَأَى الْمَطَرَ قَالَ: اللَّهُمَّ صَيِّبًا نَافِعًا"
                  translation="Lorsque le Messager d&apos;Allah ﷺ voyait la pluie, il disait : &laquo; Ô Allah, fais-en une pluie bénéfique &raquo; (Allahumma sayyiban nafi&apos;an)."
                  source="Sahih Al-Bukhari, n°1032"
                  grade="sahih"
                  explanation="Cette invocation concise est la du&apos;a la plus authentique à prononcer au début de la pluie. Le terme &laquo; sayyib &raquo; désigne une pluie abondante qui tombe avec force, et &laquo; nafi&apos;an &raquo; signifie bénéfique, utile. Le Prophète ﷺ ne se contentait pas de contempler la pluie : il transformait ce moment en acte d&apos;adoration en demandant à Allah que cette pluie soit profitable. Cette du&apos;a enseigne au musulman que tout bienfait naturel nécessite une demande de bénédiction."
                />

                <HadithBlock
                  number={2}
                  title="L&apos;invocation après la pluie"
                  narrator="Zayd ibn Khalid al-Juhani"
                  arabic="صَلَّى لَنَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ صَلَاةَ الصُّبْحِ بِالْحُدَيْبِيَةِ عَلَى إِثْرِ سَمَاءٍ كَانَتْ مِنَ اللَّيْلِ فَقَالَ: أَتَدْرُونَ مَاذَا قَالَ رَبُّكُمْ؟ قَالُوا: اللَّهُ وَرَسُولُهُ أَعْلَمُ. قَالَ: قَالَ أَصْبَحَ مِنْ عِبَادِي مُؤْمِنٌ بِي وَكَافِرٌ، فَأَمَّا مَنْ قَالَ مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ فَذَلِكَ مُؤْمِنٌ بِي كَافِرٌ بِالْكَوْكَبِ"
                  translation="Le Messager d&apos;Allah ﷺ nous a dirigés pour la prière du Subh à Al-Hudaybiya après une pluie nocturne, puis il a dit : &laquo; Savez-vous ce qu&apos;a dit votre Seigneur ? &raquo; Ils dirent : &laquo; Allah et Son Messager savent mieux. &raquo; Il dit : &laquo; Il a dit : parmi Mes serviteurs, il y a ce matin un croyant en Moi et un mécréant. Celui qui a dit : il a plu par la grâce d&apos;Allah et Sa miséricorde, celui-là croit en Moi et mécroit aux astres. &raquo;"
                  source="Sahih Al-Bukhari, n°1038 — Sahih Muslim, n°71"
                  grade="sahih"
                  explanation="Ce hadith est fondamental dans la croyance islamique concernant la pluie. Le Prophète ﷺ enseigne que la formule correcte après la pluie est : &laquo; Mutirnâ bi fadlillahi wa rahmatihi &raquo; (il a plu par la grâce d&apos;Allah et Sa miséricorde). Attribuer la pluie aux étoiles ou aux phénomènes astrologiques, comme le faisaient les Arabes de l&apos;époque préislamique, est une forme de mécréance. Ce hadith purifie le tawhid du musulman en lui rappelant que toute pluie vient exclusivement d&apos;Allah."
                />

                <HadithBlock
                  number={3}
                  title="La du&apos;a n&apos;est pas rejetée lors de la pluie"
                  narrator="Sahl ibn Sa&apos;d"
                  arabic="ثِنْتَانِ لَا تُرَدَّانِ: الدُّعَاءُ عِنْدَ النِّدَاءِ وَتَحْتَ الْمَطَرِ"
                  translation="Deux invocations ne sont pas rejetées : l&apos;invocation au moment de l&apos;appel à la prière et l&apos;invocation sous la pluie."
                  source="Al-Hakim, Al-Mustadrak, n°2534 — Al-Albani l&apos;a classé hasan"
                  grade="hasan"
                  explanation="Ce hadith révèle que le moment de la pluie est un temps privilégié d&apos;exaucement des invocations. Les savants expliquent que la pluie est un moment où la miséricorde d&apos;Allah descend sur terre, et il est donc logique que les portes de l&apos;invocation soient ouvertes. Le musulman devrait donc profiter de chaque pluie pour invoquer Allah avec sincérité, que ce soit pour des besoins personnels, pour la communauté ou pour demander pardon. Ce hadith motive le croyant à ne pas laisser passer ce moment sans du&apos;a."
                />

                <HadithBlock
                  number={4}
                  title="L&apos;invocation en cas de pluie excessive"
                  narrator="Anas ibn Malik"
                  arabic="دَخَلَ رَجُلٌ الْمَسْجِدَ يَوْمَ جُمُعَةٍ وَالنَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَخْطُبُ فَقَالَ: يَا رَسُولَ اللَّهِ هَلَكَتِ الْأَمْوَالُ وَانْقَطَعَتِ السُّبُلُ فَادْعُ اللَّهَ أَنْ يُمْسِكَهَا عَنَّا. فَرَفَعَ يَدَيْهِ ثُمَّ قَالَ: اللَّهُمَّ حَوَالَيْنَا وَلَا عَلَيْنَا"
                  translation="Un homme entra dans la mosquée un vendredi tandis que le Prophète ﷺ prêchait et dit : &laquo; Ô Messager d&apos;Allah, les biens sont détruits et les chemins sont coupés, invoque Allah pour qu&apos;Il la retienne. &raquo; Le Prophète leva ses mains et dit : &laquo; Ô Allah, autour de nous et non sur nous &raquo; (Allahumma hawalayna wa la &apos;alayna)."
                  source="Sahih Al-Bukhari, n°1013 — Sahih Muslim, n°897"
                  grade="sahih"
                  explanation="Ce hadith montre l&apos;équilibre prophétique face aux phénomènes naturels. Le Prophète ﷺ n&apos;a pas demandé l&apos;arrêt total de la pluie, mais qu&apos;elle tombe là où elle est bénéfique : sur les collines, les vallées et les zones de pâturage. La formule &laquo; autour de nous et non sur nous &raquo; est un modèle d&apos;invocation sage : le croyant ne rejette pas la miséricorde, mais demande qu&apos;elle soit orientée de façon bénéfique. Anas rapporte que les nuages se sont immédiatement dispersés au-dessus de Médine."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces invocations forment un ensemble cohérent qui accompagne le musulman avant, pendant et après la pluie. Elles transforment un phénomène météorologique en une occasion d&apos;adoration et de connexion avec Allah. Pour découvrir d&apos;autres invocations prophétiques, consultez notre guide sur les{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    douas en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : S&apos;exposer       */}
              {/* ============================== */}
              <section id="exposer-pluie" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  S&apos;exposer à la pluie : une sunna oubliée
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Parmi les sunnas les moins connues du Prophète ﷺ figure celle de s&apos;exposer volontairement à la pluie. Ce geste, loin d&apos;être anodin, traduit une profonde conscience de la provenance divine de la pluie et une gratitude envers le Créateur.
                </p>

                <HadithBlock
                  number={5}
                  title="Le Prophète ﷺ s&apos;expose à la pluie"
                  narrator="Anas ibn Malik"
                  arabic="أَصَابَنَا وَنَحْنُ مَعَ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مَطَرٌ فَحَسَرَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ ثَوْبَهُ حَتَّى أَصَابَهُ مِنَ الْمَطَرِ فَقُلْنَا: يَا رَسُولَ اللَّهِ لِمَ صَنَعْتَ هَذَا؟ قَالَ: لِأَنَّهُ حَدِيثُ عَهْدٍ بِرَبِّهِ تَعَالَى"
                  translation="La pluie nous a atteints alors que nous étions avec le Messager d&apos;Allah ﷺ. Il a alors découvert son vêtement afin que la pluie l&apos;atteigne. Nous avons dit : &laquo; Ô Messager d&apos;Allah, pourquoi as-tu fait cela ? &raquo; Il a répondu : &laquo; Parce qu&apos;elle vient récemment de son Seigneur — Exalté soit-Il. &raquo;"
                  source="Sahih Muslim, n°898"
                  grade="sahih"
                  explanation="Ce hadith est remarquable par sa beauté spirituelle. Le Prophète ﷺ expose son corps à la pluie parce qu&apos;elle est &laquo; récente de son Seigneur &raquo; (hadith &apos;ahd bi Rabbihi). Cette expression signifie que la pluie vient d&apos;être créée et envoyée par Allah, elle porte encore la fraîcheur de sa provenance divine. C&apos;est un geste de tabarruk (recherche de bénédiction) et de ta&apos;dhim (glorification) d&apos;Allah. Les savants recommandent de pratiquer cette sunna en découvrant une partie du corps — comme le bras ou la tête — lorsque la pluie commence à tomber."
                />

                <HadithBlock
                  number={6}
                  title="Le visage du Prophète ﷺ changeait quand il voyait un nuage"
                  narrator="Aisha"
                  arabic="كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا رَأَى مَخِيلَةً فِي السَّمَاءِ أَقْبَلَ وَأَدْبَرَ وَدَخَلَ وَخَرَجَ وَتَغَيَّرَ وَجْهُهُ، فَإِذَا أَمْطَرَتِ السَّمَاءُ سُرِّيَ عَنْهُ"
                  translation="Lorsque le Prophète ﷺ voyait un nuage dans le ciel, il allait et venait, entrait et sortait, et son visage changeait. Puis, lorsque le ciel pleuvait, il était soulagé."
                  source="Sahih Al-Bukhari, n°4829 — Sahih Muslim, n°899"
                  grade="sahih"
                  explanation="Aisha rapporte que le Prophète ﷺ craignait, en voyant les nuages, qu&apos;ils ne portent un châtiment comme celui qui frappa le peuple de &apos;Ad. Lorsque la pluie tombait réellement, il était soulagé car cela signifiait que c&apos;était une pluie de miséricorde et non un vent de destruction. Ce hadith enseigne au musulman que les phénomènes naturels ne doivent jamais être pris à la légère : ils sont entre les mains d&apos;Allah et peuvent être miséricorde ou châtiment."
                />

                <HadithBlock
                  number={7}
                  title="L&apos;inquiétude du Prophète ﷺ face au vent"
                  narrator="Aisha"
                  arabic="اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا فِيهَا وَخَيْرَ مَا أُرْسِلَتْ بِهِ، وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا فِيهَا وَشَرِّ مَا أُرْسِلَتْ بِهِ"
                  translation="Ô Allah, je Te demande le bien de cette pluie, le bien de ce qu&apos;elle contient et le bien de ce pourquoi elle a été envoyée. Et je cherche refuge auprès de Toi contre son mal, le mal de ce qu&apos;elle contient et le mal de ce pourquoi elle a été envoyée."
                  source="Sahih Muslim, n°899"
                  grade="sahih"
                  explanation="Cette invocation montre l&apos;attitude équilibrée du Prophète ﷺ face aux intempéries. Il ne se laissait pas aller à l&apos;insouciance ni à la panique. Il demandait à Allah le bien de chaque phénomène et se réfugiait contre son mal. Les savants soulignent que cette du&apos;a est applicable à tout phénomène naturel : pluie, vent, orage, tempête. Elle enseigne au croyant de toujours se tourner vers Allah, Celui qui contrôle toute chose."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez les hadiths du Prophète ﷺ, le tafsir et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Istisqa              */}
              {/* ============================== */}
              <section id="istisqa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La prière de l&apos;istisqa : demander la pluie à Allah
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Lorsque la sécheresse frappait, le Prophète ﷺ se tournait vers Allah en accomplissant la prière de l&apos;istisqa (demande de pluie). Cette prière illustre le principe fondamental de l&apos;islam : tout bienfait vient d&apos;Allah, et c&apos;est vers Lui seul que l&apos;on se tourne en cas de besoin.
                </p>

                <HadithBlock
                  number={8}
                  title="Le Prophète ﷺ accomplit la prière de l&apos;istisqa"
                  narrator="Abdullah ibn Zayd"
                  arabic="خَرَجَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِلَى الْمُصَلَّى يَسْتَسْقِي وَاسْتَقْبَلَ الْقِبْلَةَ فَصَلَّى رَكْعَتَيْنِ وَقَلَبَ رِدَاءَهُ"
                  translation="Le Prophète ﷺ se rendit au lieu de prière pour demander la pluie. Il se dirigea vers la qibla, accomplit deux unités de prière et retourna son manteau."
                  source="Sahih Al-Bukhari, n°1005 — Sahih Muslim, n°894"
                  grade="sahih"
                  explanation="Ce hadith décrit la forme de la prière de l&apos;istisqa : elle se compose de deux rak&apos;at accomplies en plein air, face à la qibla. Le geste de retourner le manteau (<em>tahwil ar-rida&apos;</em>) est un acte symbolique : le Prophète ﷺ espérait par là qu&apos;Allah retourne la situation de sécheresse en abondance. Les savants des quatre écoles s&apos;accordent sur la légitimité de cette prière, tout en divergeant sur certains détails pratiques."
                />

                <HadithBlock
                  number={9}
                  title="L&apos;invocation du Prophète ﷺ pour la pluie"
                  narrator="Anas ibn Malik"
                  arabic="اللَّهُمَّ اسْقِنَا، اللَّهُمَّ اسْقِنَا، اللَّهُمَّ اسْقِنَا"
                  translation="Ô Allah, abreuve-nous ! Ô Allah, abreuve-nous ! Ô Allah, abreuve-nous !"
                  source="Sahih Al-Bukhari, n°1013 — Sahih Muslim, n°897"
                  grade="sahih"
                  explanation="Anas rapporte que lors d&apos;un prêche du vendredi, un homme vint se plaindre de la sécheresse. Le Prophète ﷺ leva alors les mains et répéta cette invocation trois fois. Anas ajoute que le ciel était clair et qu&apos;à peine le Prophète ﷺ avait-il fini que les nuages se sont rassemblés et qu&apos;une pluie abondante s&apos;est mise à tomber. Ce miracle illustre l&apos;exaucement immédiat de l&apos;invocation prophétique et la puissance d&apos;Allah sur les éléments."
                />

                <HadithBlock
                  number={10}
                  title="Demander pardon pour obtenir la pluie"
                  narrator="Ibn &apos;Abbas"
                  arabic="مَنْ لَزِمَ الِاسْتِغْفَارَ جَعَلَ اللَّهُ لَهُ مِنْ كُلِّ هَمٍّ فَرَجًا وَمِنْ كُلِّ ضِيقٍ مَخْرَجًا وَرَزَقَهُ مِنْ حَيْثُ لَا يَحْتَسِبُ"
                  translation="Celui qui s&apos;attache à la demande de pardon (istighfar), Allah lui accordera une issue à chaque souci, une sortie de chaque difficulté, et lui donnera sa subsistance d&apos;où il ne s&apos;y attend pas."
                  source="Sunan Abu Dawud, n°1518 — Ibn Majah, n°3819"
                  grade="hasan"
                  explanation="Ce hadith est lié au thème de la pluie car le Coran associe explicitement l&apos;istighfar à l&apos;envoi de la pluie. Dans la sourate Nuh (71:10-12), le prophète Nuh dit à son peuple : &laquo; Demandez pardon à votre Seigneur, Il vous enverra du ciel une pluie abondante. &raquo; Les savants enseignent que les péchés collectifs sont une cause de sécheresse, et que le retour sincère à Allah est un moyen d&apos;obtenir Sa pluie et Sa miséricorde."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Tonnerre             */}
              {/* ============================== */}
              <section id="tonnerre-foudre" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le tonnerre et la glorification d&apos;Allah
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le tonnerre et la foudre accompagnent souvent la pluie. Loin d&apos;être de simples phénomènes physiques, le Coran et la Sunna leur confèrent une dimension spirituelle profonde. Le tonnerre glorifie Allah, et les anges tremblent par crainte de Lui.
                </p>

                <HadithBlock
                  number={11}
                  title="Ce que disait le Prophète ﷺ en entendant le tonnerre"
                  narrator="Abdullah ibn az-Zubayr"
                  arabic="كَانَ إِذَا سَمِعَ الرَّعْدَ تَرَكَ الْحَدِيثَ وَقَالَ: سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ"
                  translation="Lorsqu&apos;il entendait le tonnerre, il cessait de parler et disait : &laquo; Gloire à Celui que le tonnerre glorifie par Sa louange, ainsi que les anges, par crainte de Lui. &raquo;"
                  source="Al-Adab Al-Mufrad d&apos;Al-Bukhari, n°723 — Al-Albani l&apos;a classé sahih"
                  grade="sahih"
                  explanation="Ce hadith enseigne l&apos;adab (comportement) du musulman face au tonnerre. Le Prophète ﷺ interrompait sa conversation pour glorifier Allah, montrant que le tonnerre est un rappel divin qui mérite l&apos;attention. L&apos;invocation reprend le sens du verset coranique de la sourate Ar-Ra&apos;d (13:13) : &laquo; Le tonnerre Le glorifie par Sa louange, ainsi que les anges, par crainte de Lui. &raquo; Ce geste prophétique transforme un moment de frayeur naturelle en un acte d&apos;adoration."
                />

                <HadithCard
                  arabic="وَيُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ وَيُرْسِلُ الصَّوَاعِقَ فَيُصِيبُ بِهَا مَن يَشَاءُ"
                  text="Et le tonnerre Le glorifie par Sa louange, ainsi que les anges, par crainte de Lui. Et Il envoie les foudres dont Il atteint qui Il veut."
                  source="Coran, sourate Ar-Ra&apos;d (13:13)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset confirme que le tonnerre n&apos;est pas un simple bruit : il est une créature qui glorifie Allah à sa manière. Les savants du tafsir, dont Ibn Kathir, expliquent que le tonnerre est un ange chargé de conduire les nuages. Que cette interprétation soit littérale ou métaphorique, le message est clair : tout dans la création glorifie Allah, et le croyant doit s&apos;associer à cette glorification. Pour approfondir les enseignements sur la patience face aux épreuves naturelles, consultez notre article sur les{" "}
                  <Link href="/hadith-patience-epreuves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la patience et les épreuves
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur la pluie et les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont commenté les hadiths sur la pluie en les reliant au tawhid, à la jurisprudence et à la spiritualité. Leurs explications enrichissent notre compréhension de ces enseignements prophétiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith d&apos;Anas sur le fait de s&apos;exposer à la pluie montre que le Prophète ﷺ cherchait la baraka (bénédiction) dans ce qui vient directement d&apos;Allah. La pluie est &laquo; récente de son Seigneur &raquo; car elle vient d&apos;être créée et envoyée. C&apos;est un acte de ta&apos;dhim (glorification) et de shukr (gratitude).&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La prière de l&apos;istisqa est une sunna confirmée par la pratique constante du Prophète ﷺ et de ses Compagnons. Elle témoigne du lien direct entre le serviteur et son Seigneur : c&apos;est Allah seul qui fait descendre la pluie, et c&apos;est vers Lui seul que l&apos;on se tourne en cas de sécheresse.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith qui interdit d&apos;attribuer la pluie aux astres est un fondement du tawhid ar-rububiyya. Les Arabes préislamiques croyaient que certaines étoiles apportaient la pluie. L&apos;islam a purifié cette croyance en rappelant que seul Allah est le Pourvoyeur de la pluie, et que les causes naturelles ne sont que des moyens entre Ses mains.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Qudama, <em>Al-Mughni</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que les hadiths sur la pluie ne sont pas de simples conseils météorologiques : ils touchent au cœur du tawhid, à la purification de la croyance et à l&apos;éducation spirituelle du musulman. Chaque goutte de pluie est une occasion de renforcer sa foi et sa connexion avec le Créateur.
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
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour le musulman face à la pluie :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Dire &laquo; Allahumma sayyiban nafi&apos;an &raquo; dès le début de la pluie
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Cette du&apos;a simple et authentique transforme la contemplation de la pluie en un acte d&apos;adoration. Mémorisez-la et enseignez-la à vos enfants.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Multiplier les invocations sous la pluie
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le moment de la pluie est un temps d&apos;exaucement. Profitez-en pour invoquer Allah avec sincérité : demandes personnelles, pardon, bien pour la communauté.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        S&apos;exposer à la pluie en suivant la sunna
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Découvrez une partie de votre corps — bras, tête — lorsque la pluie tombe. Ce geste est une sunna oubliée qui témoigne de la gratitude envers Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Attribuer la pluie à Allah seul
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Après la pluie, dites : &laquo; Mutirnâ bi fadlillahi wa rahmatihi &raquo;. N&apos;attribuez jamais la pluie aux astres ou au hasard : c&apos;est une question de tawhid.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Glorifier Allah en entendant le tonnerre
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le tonnerre est un rappel divin. Interrompez vos activités un instant pour dire : &laquo; Subhan alladhi yusabbihu ar-ra&apos;du bi hamdihi. &raquo;
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Lier l&apos;istighfar à la demande de pluie
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Coran enseigne que l&apos;istighfar collectif attire la pluie et les bénédictions. En période de sécheresse, multipliez la demande de pardon à Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      7
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Invoquer en cas de pluie excessive
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Si la pluie devient menaçante, dites : &laquo; Allahumma hawalayna wa la &apos;alayna &raquo;. Ne rejetez pas la miséricorde, mais demandez qu&apos;elle soit orientée de façon bénéfique.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths et les invocations sur la pluie dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur la prière en islam"
                  description="Découvrez les hadiths authentiques sur la prière, pilier fondamental de l&apos;islam."
                  href="/hadith-priere-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la patience et les épreuves"
                  description="Les enseignements prophétiques sur la patience face aux difficultés et aux épreuves de la vie."
                  href="/hadith-patience-epreuves-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les douas en islam : invocations authentiques"
                  description="Retrouvez les invocations prophétiques pour toutes les occasions, y compris les invocations liées à la pluie."
                  href="/doua-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
