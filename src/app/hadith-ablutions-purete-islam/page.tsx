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
    "Hadiths sur les ablutions et la pureté rituelle en islam : wudu, tayammum et mérites",
  description:
    "Découvrez les hadiths authentiques sur les ablutions (wudu) et la pureté rituelle en islam : étapes, mérites, tayammum, expiation des péchés. Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths sur les ablutions et la pureté rituelle en islam : wudu, tayammum et mérites",
    description:
      "Les hadiths authentiques sur les ablutions et la pureté rituelle : la moitié de la foi, les étapes du wudu, le tayammum et l&apos;expiation des péchés par la purification.",
    url: "https://www.islamreligion.fr/hadith-ablutions-purete-islam",
    images: [
      {
        url: "/images/interieur-mosquee-arches-tapis-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-ablutions-purete-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique des ablutions" },
  { id: "purete-moitie-foi", label: "La pureté est la moitié de la foi" },
  { id: "etapes-wudu", label: "Les étapes des ablutions (wudu)" },
  { id: "tayammum", label: "Le tayammum et les cas particuliers" },
  { id: "merite-ablutions", label: "Le mérite des ablutions" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur les ablutions en islam ?",
    answer:
      "Les hadiths les plus importants sur les ablutions incluent celui rapporté par Abu Malik al-Ash\u2019ari sur la pureté comme moitié de la foi (Muslim 223), celui d\u2019Uthman ibn Affan décrivant les étapes du wudu du Prophète (Bukhari 159), et celui d\u2019Abu Hurayra sur l\u2019expiation des péchés par les ablutions (Muslim 244). Ces hadiths couvrent le statut spirituel de la pureté, la méthode pratique et les récompenses.",
  },
  {
    question: "Quelles sont les étapes obligatoires des ablutions (wudu) ?",
    answer:
      "Les étapes obligatoires du wudu, établies par le Coran (Al-Ma\u2019ida 5:6) et précisées par les hadiths, sont : l\u2019intention (niyya), le lavage du visage, le lavage des mains et des avant-bras jusqu\u2019aux coudes, le passage des mains mouillées sur la tête (masah) et le lavage des pieds jusqu\u2019aux chevilles. Le Prophète ajoutait des actes recommandés comme le rinçage de la bouche, l\u2019aspiration de l\u2019eau par le nez et le lavage trois fois.",
  },
  {
    question: "Qu\u2019est-ce que le tayammum et quand le pratique-t-on ?",
    answer:
      "Le tayammum est la purification sèche par la terre propre, autorisée lorsque l\u2019eau est introuvable ou que son utilisation est nuisible (maladie, blessure). Le Prophète a dit qu\u2019Allah a rendu la terre entière comme lieu de prière et moyen de purification (Bukhari 335). Le tayammum consiste à frapper la terre de ses mains puis à passer sur le visage et les mains.",
  },
  {
    question:
      "Les ablutions effacent-elles vraiment les péchés selon les hadiths ?",
    answer:
      "Oui, plusieurs hadiths sahih confirment que les ablutions faites correctement effacent les péchés mineurs. Le Prophète a dit que les péchés sortent avec l\u2019eau des ablutions (Muslim 244) et que celui qui fait ses ablutions parfaitement verra ses péchés quitter son corps, même de sous ses ongles (Muslim 245). Les savants précisent que cela concerne les péchés mineurs (sagha\u2019ir), les péchés majeurs nécessitant un repentir spécifique.",
  },
  {
    question: "La pureté est-elle vraiment la moitié de la foi en islam ?",
    answer:
      "Le Prophète a dit : \u00ab La pureté est la moitié de la foi \u00bb (Muslim 223). Les savants expliquent que cette expression souligne l\u2019importance capitale de la purification dans la pratique islamique. La pureté est la condition de validité de la prière, qui est elle-même le pilier central de l\u2019islam. Sans pureté, aucune prière n\u2019est acceptée, d\u2019où son rang éminent parmi les actes d\u2019adoration.",
  },
  {
    question:
      "Quelle est la différence entre la pureté rituelle et la propreté physique ?",
    answer:
      "La propreté physique (nazafa) consiste à éliminer les saletés visibles du corps et des vêtements. La pureté rituelle (tahara) est un acte d\u2019adoration codifié qui rend licite l\u2019accomplissement de la prière et d\u2019autres actes cultuels. Les ablutions (wudu) lèvent la petite impureté rituelle (hadath asghar), tandis que le bain rituel (ghusl) lève la grande impureté (hadath akbar). Les deux dimensions se complètent en islam.",
  },
];

export default function HadithAblutionsPureteIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-ablutions-purete-islam/#article",
        headline:
          "Hadiths sur les ablutions et la pureté rituelle en islam : wudu, tayammum et mérites",
        description:
          "Découvrez les hadiths authentiques sur les ablutions (wudu) et la pureté rituelle en islam : étapes, mérites, tayammum, expiation des péchés.",
        image: "/images/interieur-mosquee-arches-tapis-lumiere.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-ablutions-purete-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-ablutions-purete-islam/#breadcrumb",
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
            name: "Ablutions et pureté",
            item: "https://www.islamreligion.fr/hadith-ablutions-purete-islam",
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
          title="Hadiths sur les ablutions et la pureté rituelle en islam"
          subtitle="Les enseignements prophétiques sur le wudu, le tayammum, les mérites de la purification et l&apos;expiation des péchés par les ablutions selon la Sunna authentique."
          imageSrc="/images/interieur-mosquee-arches-tapis-lumiere.jpg"
          imageAlt="Hadiths sur les ablutions et la pureté rituelle en islam"
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
                  Ablutions et pureté
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
                    Le Prophète ﷺ a déclaré que la pureté est la moitié de la foi, plaçant la purification au rang des piliers fondamentaux de la pratique islamique.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les ablutions (wudu) sont la condition de validité de la prière : sans pureté rituelle, aucune salat n&apos;est acceptée par Allah.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Chaque membre lavé lors des ablutions fait tomber les péchés mineurs selon les hadiths authentiques, transformant le wudu en acte d&apos;expiation.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le tayammum (purification par la terre) témoigne de la facilité de l&apos;islam : même sans eau, le musulman peut accomplir sa prière.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique des ablutions en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths sur les ablutions, il faut rappeler que le wudu est d&apos;abord une prescription coranique. Allah a détaillé les étapes de la purification rituelle dans la sourate Al-Ma&apos;ida, posant le cadre que le Prophète ﷺ a ensuite explicité par sa pratique. La pureté (<em>tahara</em>) constitue en islam une condition préalable à la prière et à tout acte d&apos;adoration impliquant un contact avec le Coran.
                </p>

                <HadithCard
                  arabic="يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ وَامْسَحُوا بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ وَإِن كُنتُمْ جُنُبًا فَاطَّهَّرُوا"
                  text="Ô vous qui croyez ! Lorsque vous vous levez pour la prière, lavez vos visages et vos mains jusqu&apos;aux coudes, passez les mains sur vos têtes et lavez-vous les pieds jusqu&apos;aux chevilles. Et si vous êtes en état d&apos;impureté majeure, purifiez-vous."
                  source="Coran, sourate Al-Ma&apos;ida (5:6)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset est le texte fondateur de la législation sur les ablutions. Il énumère les quatre actes obligatoires du wudu : le lavage du visage, le lavage des mains et des avant-bras, le passage des mains mouillées sur la tête (<em>masah</em>) et le lavage des pieds. Les savants ont déduit de ce même verset l&apos;ordre des actes (<em>tartib</em>) et la continuité (<em>muwalat</em>), deux conditions supplémentaires selon certaines écoles de jurisprudence. Le Prophète ﷺ a complété ce cadre coranique par des actes recommandés détaillés dans les hadiths suivants.
                </p>
              </section>

              {/* ========================================= */}
              {/* SECTION : La pureté est la moitié de la foi */}
              {/* ========================================= */}
              <section id="purete-moitie-foi" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La pureté est la moitié de la foi
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a élevé la purification au rang des fondements de la foi. Les hadiths suivants montrent que la <em>tahara</em> n&apos;est pas un simple acte d&apos;hygiène, mais une dimension spirituelle à part entière. Le musulman qui accomplit ses ablutions avec conscience purifie à la fois son corps et son coeur.
                </p>

                <HadithBlock
                  number={1}
                  title="La pureté est la moitié de la foi"
                  narrator="Abu Malik al-Ash&apos;ari"
                  arabic="الطُّهُورُ شَطْرُ الْإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلَأُ الْمِيزَانَ، وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلَآنِ أَوْ تَمْلَأُ مَا بَيْنَ السَّمَاوَاتِ وَالْأَرْضِ"
                  translation="La pureté est la moitié de la foi. Al-hamdulillah (la louange est à Allah) remplit la balance. Subhan Allah wa al-hamdulillah (gloire et louange à Allah) remplissent — ou remplissent — ce qu&apos;il y a entre les cieux et la terre."
                  source="Sahih Muslim, n°223"
                  grade="sahih"
                  explanation="Ce hadith place la purification au sommet des actes d&apos;adoration. L&apos;expression &laquo; moitié de la foi &raquo; a été interprétée de plusieurs manières par les savants. L&apos;imam An-Nawawi explique que la foi se divise en deux parts : la patience et la gratitude, et que la purification relève de la patience car elle demande un effort constant. D&apos;autres savants estiment que la prière étant le pilier de la foi, et la pureté sa condition, elle en constitue naturellement la moitié. Ce hadith relie aussi la purification au dhikr (rappel d&apos;Allah), montrant que la tahara est un acte global qui associe le corps et la langue."
                />

                <HadithBlock
                  number={2}
                  title="Allah n&apos;accepte pas la prière sans purification"
                  narrator="Ibn &apos;Umar"
                  arabic="لَا تُقْبَلُ صَلَاةٌ بِغَيْرِ طُهُورٍ وَلَا صَدَقَةٌ مِنْ غُلُولٍ"
                  translation="La prière n&apos;est pas acceptée sans purification, ni l&apos;aumône provenant d&apos;un bien usurpé."
                  source="Sahih Muslim, n°224"
                  grade="sahih"
                  explanation="Ce hadith établit une règle juridique fondamentale : la pureté rituelle est une condition de validité (<em>shart</em>) de la prière, et non une simple recommandation. Toute prière accomplie sans ablutions est invalide et doit être refaite. Le Prophète ﷺ associe ici deux conditions de recevabilité : la pureté du corps pour la prière et la pureté du bien pour l&apos;aumône. Cette mise en parallèle souligne que l&apos;islam exige la pureté dans toutes les dimensions de l&apos;adoration."
                />

                <HadithBlock
                  number={3}
                  title="La clé de la prière est la purification"
                  narrator="Ali ibn Abi Talib"
                  arabic="مِفْتَاحُ الصَّلَاةِ الطُّهُورُ، وَتَحْرِيمُهَا التَّكْبِيرُ، وَتَحْلِيلُهَا التَّسْلِيمُ"
                  translation="La clé de la prière est la purification, son entrée sacrée est le takbir (Allahu Akbar), et sa sortie est le taslim (as-salamu alaykum)."
                  source="Sunan Abu Dawud, n°61 — Jami&apos; at-Tirmidhi, n°3"
                  grade="sahih"
                  explanation="Ce hadith utilise la métaphore de la clé pour illustrer le rôle de la purification. Sans clé, la porte de la prière reste fermée : le fidèle ne peut y entrer. Le takbir d&apos;ouverture (<em>takbirat al-ihram</em>) marque le passage dans l&apos;état sacré de la prière, et le salam en marque la sortie. Les trois éléments mentionnés forment la structure même de la salat : condition préalable, début et fin. Les savants s&apos;appuient sur ce hadith pour affirmer que la purification n&apos;est pas un acte annexe, mais le fondement sans lequel la prière ne peut exister."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths forment un ensemble doctrinaire sur le statut de la pureté en islam. Ils montrent que la <em>tahara</em> n&apos;est pas seulement une question d&apos;hygiène, mais un acte d&apos;adoration à part entière, indissociable de la{" "}
                  <Link href="/hadith-priere-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    prière et de ses hadiths
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Étapes du wudu       */}
              {/* ============================== */}
              <section id="etapes-wudu" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les étapes des ablutions (wudu) selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a pratiqué les ablutions devant ses Compagnons à de nombreuses reprises, et plusieurs d&apos;entre eux ont transmis une description détaillée de sa méthode. Les hadiths suivants décrivent les gestes du wudu prophétique, depuis le lavage des mains jusqu&apos;au lavage des pieds.
                </p>

                <HadithBlock
                  number={4}
                  title="La description complète du wudu du Prophète ﷺ"
                  narrator="Uthman ibn Affan"
                  arabic="دَعَا بِإِنَاءٍ فَأَفْرَغَ عَلَى كَفَّيْهِ ثَلَاثَ مِرَارٍ فَغَسَلَهُمَا ثُمَّ أَدْخَلَ يَمِينَهُ فِي الْإِنَاءِ فَمَضْمَضَ وَاسْتَنْشَقَ ثُمَّ غَسَلَ وَجْهَهُ ثَلَاثًا وَيَدَيْهِ إِلَى الْمِرْفَقَيْنِ ثَلَاثَ مِرَارٍ ثُمَّ مَسَحَ بِرَأْسِهِ ثُمَّ غَسَلَ رِجْلَيْهِ ثَلَاثَ مِرَارٍ"
                  translation="Il demanda un récipient d&apos;eau, versa sur ses mains trois fois et les lava, puis il introduisit sa main droite dans le récipient, se rinça la bouche et aspira l&apos;eau par le nez, puis il lava son visage trois fois, ses mains jusqu&apos;aux coudes trois fois, puis il passa les mains sur sa tête, puis il lava ses pieds trois fois."
                  source="Sahih Al-Bukhari, n°159 — Sahih Muslim, n°226"
                  grade="sahih"
                  explanation="Ce hadith est la référence principale sur la description pratique du wudu. Uthman ibn Affan a reproduit les gestes du Prophète ﷺ devant les Compagnons pour leur enseigner la méthode exacte. On y retrouve l&apos;ordre des étapes : les mains, la bouche et le nez, le visage, les avant-bras, la tête et les pieds. Le lavage trois fois est une sunna recommandée, le minimum étant une seule fois pour chaque membre. Ce hadith sert de base à toutes les écoles de jurisprudence pour enseigner le wudu."
                />

                <HadithBlock
                  number={5}
                  title="Commencer par la droite dans les ablutions"
                  narrator="Aisha"
                  arabic="كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يُعْجِبُهُ التَّيَمُّنُ فِي تَنَعُّلِهِ وَتَرَجُّلِهِ وَطُهُورِهِ وَفِي شَأْنِهِ كُلِّهِ"
                  translation="Le Prophète ﷺ aimait commencer par la droite en chaussant ses sandales, en se peignant, dans sa purification et dans toutes ses affaires."
                  source="Sahih Al-Bukhari, n°168 — Sahih Muslim, n°268"
                  grade="sahih"
                  explanation="Ce hadith établit le principe du <em>tayammun</em> (commencer par la droite) dans les ablutions. Laver la main droite avant la gauche, le pied droit avant le gauche : cette sunna est appliquée de manière constante par le Prophète ﷺ. Les savants considèrent que commencer par la droite est une sunna recommandée (<em>mustahabb</em>), mais non une obligation. La droite est associée en islam à l&apos;honneur et à la noblesse, d&apos;où sa priorité dans les actes positifs comme la purification."
                />

                <HadithBlock
                  number={6}
                  title="Malheur aux talons privés d&apos;eau"
                  narrator="Abu Hurayra"
                  arabic="وَيْلٌ لِلْأَعْقَابِ مِنَ النَّارِ"
                  translation="Malheur aux talons (privés d&apos;eau, qui seront touchés) par le Feu."
                  source="Sahih Al-Bukhari, n°165 — Sahih Muslim, n°242"
                  grade="sahih"
                  explanation="Ce hadith bref mais percutant met en garde contre la négligence dans le lavage des pieds. Le Prophète ﷺ a prononcé cette parole en voyant des Compagnons dont les talons n&apos;avaient pas été touchés par l&apos;eau lors des ablutions. Le &laquo; malheur &raquo; (<em>wayl</em>) est une menace sévère qui souligne la gravité de l&apos;omission. Les savants en déduisent que le lavage complet des pieds, y compris les talons et les espaces entre les orteils, est obligatoire. Ce hadith rappelle que la rigueur dans les ablutions n&apos;est pas un détail, mais une exigence religieuse."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La description du wudu prophétique révèle un équilibre entre rigueur et simplicité. Le Prophète ﷺ accomplissait ses ablutions avec soin, sans excès dans l&apos;utilisation de l&apos;eau. Pour retrouver les invocations à prononcer pendant et après les ablutions, consultez notre article sur les{" "}
                  <Link href="/doua-ablutions-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    douas des ablutions en islam
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh de la purification, les règles du wudu et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Tayammum             */}
              {/* ============================== */}
              <section id="tayammum" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le tayammum et les cas particuliers
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam est une religion de facilité (<em>yusr</em>). Lorsque l&apos;eau est introuvable ou que son utilisation est nuisible, Allah a permis la purification par la terre propre (<em>sa&apos;id tayyib</em>). Le tayammum est un acte de substitution qui manifeste la miséricorde divine envers les croyants.
                </p>

                <HadithBlock
                  number={7}
                  title="La terre entière est un lieu de prière et un moyen de purification"
                  narrator="Jabir ibn Abdillah"
                  arabic="أُعْطِيتُ خَمْسًا لَمْ يُعْطَهُنَّ أَحَدٌ قَبْلِي ... وَجُعِلَتْ لِي الْأَرْضُ مَسْجِدًا وَطَهُورًا، فَأَيُّمَا رَجُلٍ مِنْ أُمَّتِي أَدْرَكَتْهُ الصَّلَاةُ فَلْيُصَلِّ"
                  translation="Il m&apos;a été donné cinq choses qu&apos;aucun prophète avant moi n&apos;a reçues : (...) la terre entière a été rendue pour moi lieu de prière et moyen de purification. Tout homme de ma communauté que l&apos;heure de la prière atteint, qu&apos;il prie."
                  source="Sahih Al-Bukhari, n°335 — Sahih Muslim, n°521"
                  grade="sahih"
                  explanation="Ce hadith mentionne le tayammum parmi les cinq privilèges accordés exclusivement à la communauté du Prophète Muhammad ﷺ. Avant l&apos;islam, les peuples précédents devaient obligatoirement disposer d&apos;eau pour se purifier et prier dans des lieux dédiés. Allah a allégé cette charge pour les musulmans en rendant la terre elle-même un moyen de purification. Ce privilège illustre le principe coranique : &laquo; Allah veut pour vous la facilité et ne veut pas pour vous la difficulté &raquo; (Al-Baqara 2:185)."
                />

                <HadithBlock
                  number={8}
                  title="Le tayammum de &apos;Ammar ibn Yasir"
                  narrator="&apos;Ammar ibn Yasir"
                  arabic="إِنَّمَا كَانَ يَكْفِيكَ أَنْ تَضْرِبَ بِيَدَيْكَ الْأَرْضَ ثُمَّ تَنْفُخَ ثُمَّ تَمْسَحَ بِهِمَا وَجْهَكَ وَكَفَّيْكَ"
                  translation="Il t&apos;aurait suffi de frapper la terre de tes deux mains, puis de souffler, puis de passer tes mains sur ton visage et tes paumes."
                  source="Sahih Al-Bukhari, n°338 — Sahih Muslim, n°368"
                  grade="sahih"
                  explanation="&apos;Ammar ibn Yasir était en état d&apos;impureté majeure (<em>janaba</em>) et, ne trouvant pas d&apos;eau, il s&apos;est roulé dans la poussière en pensant devoir reproduire un &laquo; bain complet &raquo; de terre. Le Prophète ﷺ l&apos;a corrigé en lui montrant la méthode simplifiée : un seul coup sur la terre, un souffle pour enlever l&apos;excès de poussière, puis le passage sur le visage et les mains. Ce hadith démontre que le tayammum est un acte léger et facile, même en cas d&apos;impureté majeure. Les juristes s&apos;appuient sur ce hadith pour définir les gestes minimaux du tayammum."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Mérite des ablutions */}
              {/* ============================== */}
              <section id="merite-ablutions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le mérite des ablutions : expiation des péchés
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les ablutions ne sont pas seulement un acte préparatoire à la prière. Le Prophète ﷺ a enseigné que chaque geste du wudu efface des péchés, que l&apos;eau emporte les fautes comme elle emporte les impuretés. Cette dimension spirituelle transforme un acte quotidien en source de purification intérieure.
                </p>

                <HadithBlock
                  number={9}
                  title="Les péchés sortent avec l&apos;eau des ablutions"
                  narrator="Abu Hurayra"
                  arabic="إِذَا تَوَضَّأَ الْعَبْدُ الْمُسْلِمُ أَوِ الْمُؤْمِنُ فَغَسَلَ وَجْهَهُ خَرَجَ مِنْ وَجْهِهِ كُلُّ خَطِيئَةٍ نَظَرَ إِلَيْهَا بِعَيْنَيْهِ مَعَ الْمَاءِ أَوْ مَعَ آخِرِ قَطْرِ الْمَاءِ، فَإِذَا غَسَلَ يَدَيْهِ خَرَجَ مِنْ يَدَيْهِ كُلُّ خَطِيئَةٍ كَانَ بَطَشَتْهَا يَدَاهُ مَعَ الْمَاءِ أَوْ مَعَ آخِرِ قَطْرِ الْمَاءِ، فَإِذَا غَسَلَ رِجْلَيْهِ خَرَجَتْ كُلُّ خَطِيئَةٍ مَشَتْهَا رِجْلَاهُ مَعَ الْمَاءِ أَوْ مَعَ آخِرِ قَطْرِ الْمَاءِ حَتَّى يَخْرُجَ نَقِيًّا مِنَ الذُّنُوبِ"
                  translation="Lorsque le serviteur musulman — ou le croyant — fait ses ablutions et lave son visage, chaque péché qu&apos;il a regardé de ses yeux sort avec l&apos;eau — ou avec la dernière goutte d&apos;eau. Lorsqu&apos;il lave ses mains, chaque péché que ses mains ont commis sort avec l&apos;eau. Lorsqu&apos;il lave ses pieds, chaque péché vers lequel ses pieds l&apos;ont mené sort avec l&apos;eau, jusqu&apos;à ce qu&apos;il sorte purifié de ses péchés."
                  source="Sahih Muslim, n°244"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus détaillés sur le mérite des ablutions. Il établit une correspondance entre chaque membre lavé et les péchés commis par ce membre : les yeux et le regard, les mains et les actes, les pieds et les déplacements. L&apos;eau des ablutions devient un vecteur de purification spirituelle autant que physique. Les savants précisent que cette expiation concerne les péchés mineurs (<em>sagha&apos;ir</em>), les péchés majeurs (<em>kaba&apos;ir</em>) nécessitant un repentir sincère (<em>tawba</em>). Ce hadith incite le croyant à accomplir ses ablutions avec conscience et recueillement."
                />

                <HadithBlock
                  number={10}
                  title="Les péchés sortent de sous les ongles"
                  narrator="Uthman ibn Affan"
                  arabic="مَنْ تَوَضَّأَ فَأَحْسَنَ الْوُضُوءَ خَرَجَتْ خَطَايَاهُ مِنْ جَسَدِهِ حَتَّى تَخْرُجَ مِنْ تَحْتِ أَظْفَارِهِ"
                  translation="Celui qui fait ses ablutions et les fait bien, ses péchés sortent de son corps, jusqu&apos;à sortir de sous ses ongles."
                  source="Sahih Muslim, n°245"
                  grade="sahih"
                  explanation="Ce hadith complète le précédent en insistant sur la condition : &laquo; faire bien ses ablutions &raquo; (<em>ahsana al-wudu&apos;</em>). Les bien faire signifie respecter l&apos;ordre, laver chaque membre complètement, ne négliger aucune partie du corps concernée. La mention des ongles — la partie la plus cachée et la plus fine du corps — est une hyperbole qui signifie que la purification est totale et ne laisse aucun recoin épargné. Ce hadith motive le croyant à soigner la qualité de ses ablutions plutôt que de les expédier machinalement."
                />

                <HadithBlock
                  number={11}
                  title="La marque lumineuse des ablutions au Jour du Jugement"
                  narrator="Abu Hurayra"
                  arabic="إِنَّ أُمَّتِي يُدْعَوْنَ يَوْمَ الْقِيَامَةِ غُرًّا مُحَجَّلِينَ مِنْ آثَارِ الْوُضُوءِ، فَمَنِ اسْتَطَاعَ مِنْكُمْ أَنْ يُطِيلَ غُرَّتَهُ فَلْيَفْعَلْ"
                  translation="Ma communauté sera appelée le Jour de la Résurrection avec des marques lumineuses sur le visage, les mains et les pieds, traces des ablutions. Que celui d&apos;entre vous qui le peut allonge sa marque lumineuse, qu&apos;il le fasse."
                  source="Sahih Al-Bukhari, n°136 — Sahih Muslim, n°246"
                  grade="sahih"
                  explanation="Ce hadith annonce une récompense eschatologique propre à la communauté du Prophète Muhammad ﷺ : les croyants seront reconnus le Jour du Jugement grâce à la lumière (<em>ghurra</em> et <em>tahjil</em>) laissée par les ablutions sur leurs membres. Le Prophète ﷺ encourage à &laquo; allonger la marque &raquo;, c&apos;est-à-dire à laver au-delà du minimum obligatoire (par exemple, laver l&apos;avant-bras au-dessus du coude). Ce hadith transforme les ablutions en investissement pour l&apos;au-delà et donne au croyant une motivation supplémentaire pour soigner ce geste quotidien."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;expiation des péchés par les ablutions s&apos;inscrit dans un ensemble plus large de causes de pardon divin. Les ablutions, la prière, le{" "}
                  <Link href="/hadith-vendredi-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    vendredi et ses mérites
                  </Link>{" "}
                  et le Ramadan sont autant d&apos;occasions d&apos;effacement des péchés, comme l&apos;enseignent les hadiths authentiques.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur les ablutions et la pureté
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont consacré des chapitres entiers à la purification. Le &laquo; Livre de la pureté &raquo; (<em>Kitab at-Tahara</em>) ouvre traditionnellement tous les ouvrages de jurisprudence, témoignant de l&apos;importance de ce sujet.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La pureté est la moitié de la foi car la foi consiste en patience et gratitude. La patience dans la purification — se lever la nuit pour les ablutions en hiver, supporter le froid de l&apos;eau — est une forme éminente de patience. C&apos;est pour cela que le Prophète l&apos;a qualifiée de moitié de la foi.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Les savants sont unanimes sur le fait que la pureté est une condition de validité de la prière. Personne ne peut prier sans ablutions s&apos;il dispose d&apos;eau et qu&apos;il est en mesure de l&apos;utiliser. Le tayammum est un substitut complet lorsque l&apos;eau est absente ou nuisible, par la miséricorde d&apos;Allah envers Ses serviteurs.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Qudama, <em>Al-Mughni</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;L&apos;expiation des péchés par les ablutions concerne les péchés mineurs. Quant aux péchés majeurs, ils nécessitent un repentir sincère comportant le regret, l&apos;abandon du péché et la résolution de ne pas y revenir. Ce hadith n&apos;est donc pas un prétexte pour persister dans les péchés en comptant sur les ablutions pour les effacer.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires illustrent la profondeur du <em>fiqh at-tahara</em> (jurisprudence de la purification). Chaque hadith cité a donné lieu à des discussions minutieuses sur les conditions, les recommandations et les cas particuliers des ablutions. Cette science fait partie du socle que tout étudiant en sciences islamiques doit maîtriser.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Leçons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés permet de dégager des enseignements concrets pour la pratique quotidienne du musulman :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Accomplir les ablutions avec conscience et recueillement
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le wudu n&apos;est pas un geste mécanique. Chaque membre lavé efface des péchés : le croyant qui en a conscience transforme un acte d&apos;hygiène en moment de purification spirituelle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne négliger aucune partie du corps
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a averti du châtiment pour les talons privés d&apos;eau. Laver complètement chaque membre — y compris entre les doigts et les orteils — est une obligation qui conditionne la validité de la prière.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Économiser l&apos;eau pendant les ablutions
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ faisait ses ablutions avec un mudd d&apos;eau (environ 750 ml). Le gaspillage de l&apos;eau est blâmé même au bord d&apos;une rivière. La sunna est de se purifier correctement avec la quantité nécessaire, sans excès.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Connaître le tayammum pour les situations exceptionnelles
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Voyage, maladie, absence d&apos;eau : le tayammum est un substitut complet qui permet de ne jamais manquer une prière. Apprendre sa méthode fait partie des connaissances de base de tout musulman.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Maintenir un état de pureté constant
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ encourageait à rester en état de pureté en dehors des prières. Les ablutions sont un moyen de dhikr, de sérénité et de protection spirituelle tout au long de la journée.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Voir les ablutions comme un investissement pour l&apos;au-delà
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les marques lumineuses au Jour du Jugement, l&apos;expiation des péchés, la clé de la prière : les ablutions sont bien plus qu&apos;un rituel. Elles préparent le croyant à rencontrer son Seigneur avec un visage lumineux.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur les ablutions et la pureté dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur la prière en islam"
                  description="Les enseignements prophétiques sur la salat, ses conditions et ses mérites selon la Sunna."
                  href="/hadith-priere-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le vendredi en islam"
                  description="Les mérites du jour de Jumu&apos;a, la prière du vendredi et les recommandations prophétiques."
                  href="/hadith-vendredi-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
