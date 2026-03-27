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
    "Hadiths sur la vie et conseils prophétiques en islam",
  description:
    "Découvrez les hadiths authentiques sur la vie et les conseils prophétiques : profite de cinq avant cinq, simplicité, détachement, clés du bonheur et paroles concises (jawami&apos; al-kalim).",
  openGraph: {
    title:
      "Hadiths sur la vie et conseils prophétiques en islam",
    description:
      "Les enseignements prophétiques sur la vie quotidienne : sagesse, simplicité, détachement et bonheur selon la Sunna authentique.",
    url: "https://www.islamreligion.fr/hadith-vie-conseils-islam",
    images: [
      {
        url: "/images/islam-science-savoir-connaissance-livre.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-vie-conseils-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique" },
  { id: "cinq-avant-cinq", label: "Profite de cinq avant cinq" },
  { id: "simplicite-detachement", label: "La simplicité et le détachement" },
  { id: "cles-bonheur", label: "Les clés du bonheur" },
  { id: "jawami-kalim", label: "Les paroles concises (jawami&apos; al-kalim)" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur les conseils de vie en islam ?",
    answer:
      "Parmi les hadiths les plus importants, on trouve le hadith de « profite de cinq avant cinq » rapporté par Ibn Abbas (Al-Hakim 7846), le hadith « sois dans ce monde comme un étranger » rapporté par Ibn \u2019Umar (Bukhari 6416), et le hadith sur les deux bienfaits dont les gens sont dupés : la santé et le temps libre (Bukhari 6412). Ces hadiths couvrent les fondements de la sagesse prophétique au quotidien.",
  },
  {
    question:
      "Que signifie le hadith « sois dans ce monde comme un étranger » ?",
    answer:
      "Ce hadith, rapporté par Ibn \u2019Umar dans Sahih Al-Bukhari (6416), invite le croyant à ne pas s\u2019attacher excessivement à la vie d\u2019ici-bas. Comme un voyageur de passage, il doit profiter de ce monde sans en faire sa finalité. Les savants expliquent que cela ne signifie pas abandonner le monde, mais le traverser avec conscience, en préparant l\u2019au-delà tout en accomplissant ses devoirs terrestres.",
  },
  {
    question:
      "Que sont les jawami\u2019 al-kalim du Prophète Muhammad ?",
    answer:
      "Les jawami\u2019 al-kalim désignent les paroles concises et riches de sens du Prophète \u2018alayhi salatu wa salam. Ce sont des expressions courtes qui contiennent une sagesse profonde et des enseignements multiples. Le Prophète ﷺ a lui-même mentionné avoir reçu cette faculté (Bukhari 2977). Des exemples incluent « la religion, c\u2019est le bon conseil » (Muslim 55) et « ne te mets pas en colère » (Bukhari 6116).",
  },
  {
    question:
      "Comment appliquer les conseils prophétiques au quotidien ?",
    answer:
      "L\u2019application passe par la prise de conscience du temps qui passe, la simplicité dans le mode de vie, la recherche du contentement (qana\u2019a) plutôt que de l\u2019accumulation, le bon comportement envers les autres et la maîtrise de soi face à la colère. Les savants recommandent de choisir un hadith par semaine et de s\u2019efforcer de le mettre en pratique concrètement.",
  },
  {
    question:
      "Le détachement du monde signifie-t-il renoncer aux biens matériels ?",
    answer:
      "Non. Le détachement (zuhd) en islam ne signifie pas le monachisme ou l\u2019abandon total des biens. L\u2019imam Ahmad définit le zuhd comme le fait de ne pas se réjouir excessivement de ce qu\u2019on possède et de ne pas s\u2019attrister excessivement de ce qu\u2019on perd. Le croyant peut posséder des biens tout en gardant son cœur attaché à Allah, en utilisant la richesse comme un moyen et non comme une fin.",
  },
  {
    question:
      "Ces hadiths sur la vie sont-ils applicables à l\u2019époque actuelle ?",
    answer:
      "Oui, ces enseignements sont intemporels. La course effrénée vers la consommation, le stress lié au temps et la recherche constante du bonheur matériel rendent ces conseils prophétiques encore plus pertinents aujourd\u2019hui. Les savants contemporains s\u2019appuient sur ces mêmes hadiths pour guider les musulmans face aux défis modernes.",
  },
];

export default function HadithVieConseilsIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-vie-conseils-islam/#article",
        headline:
          "Hadiths sur la vie et conseils prophétiques en islam",
        description:
          "Découvrez les hadiths authentiques sur la vie et les conseils prophétiques : simplicité, détachement, bonheur et paroles concises.",
        image: "/images/islam-science-savoir-connaissance-livre.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-vie-conseils-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-vie-conseils-islam/#breadcrumb",
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
            name: "Conseils prophétiques",
            item: "https://www.islamreligion.fr/hadith-vie-conseils-islam",
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
          title="Hadiths sur la vie et conseils prophétiques en islam"
          subtitle="Les enseignements du Prophète ﷺ sur la sagesse quotidienne, la simplicité, le détachement et les clés du bonheur selon la Sunna authentique."
          imageSrc="/images/islam-science-savoir-connaissance-livre.jpg"
          imageAlt="Hadiths sur la vie et conseils prophétiques en islam"
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
                  Conseils prophétiques
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
                    Le Prophète ﷺ a exhorté à profiter de cinq choses avant cinq autres : la jeunesse, la santé, la richesse, le temps libre et la vie.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La simplicité et le détachement du monde (zuhd) sont des vertus prophétiques majeures, sans pour autant signifier le renoncement total.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ a reçu le don des paroles concises (jawami&apos; al-kalim) : des formules courtes contenant une sagesse immense.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le véritable bonheur réside dans le contentement (qana&apos;a) et la richesse intérieure, non dans l&apos;accumulation des biens.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique des conseils de vie en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths, il convient de rappeler que le Coran pose les fondements de la sagesse et du bon comportement dans la vie d&apos;ici-bas. Allah invite les croyants à ne pas se laisser séduire par les attraits éphémères de ce monde, tout en y accomplissant leurs devoirs avec excellence. Plusieurs versets éclairent la vision coranique de la vie terrestre et préparent le terrain aux enseignements détaillés du Prophète ﷺ.
                </p>

                <HadithCard
                  arabic="اعْلَمُوا أَنَّمَا الْحَيَاةُ الدُّنْيَا لَعِبٌ وَلَهْوٌ وَزِينَةٌ وَتَفَاخُرٌ بَيْنَكُمْ وَتَكَاثُرٌ فِي الْأَمْوَالِ وَالْأَوْلَادِ"
                  text="Sachez que la vie d&apos;ici-bas n&apos;est que jeu, amusement, vaine parure, une course à l&apos;orgueil entre vous et une rivalité dans l&apos;acquisition des richesses et des enfants."
                  source="Coran, sourate Al-Hadid (57:20)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset décrit avec une précision saisissante les étapes de l&apos;attachement au monde : le divertissement, la parure, la compétition sociale et l&apos;accumulation. Allah ne condamne pas ces réalités en soi, mais met en garde contre le fait d&apos;en faire la finalité de l&apos;existence. Les savants soulignent que ce verset prépare le croyant à recevoir les conseils prophétiques sur le détachement et la simplicité.
                </p>

                <HadithCard
                  arabic="وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا وَأَحْسِن كَمَا أَحْسَنَ اللَّهُ إِلَيْكَ"
                  text="Et recherche, à travers ce qu&apos;Allah t&apos;a donné, la demeure dernière. Et n&apos;oublie pas ta part en cette vie. Et sois bienfaisant comme Allah a été bienfaisant envers toi."
                  source="Coran, sourate Al-Qasas (28:77)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset établit l&apos;équilibre fondamental de l&apos;islam face à la vie : rechercher l&apos;au-delà sans négliger les besoins légitimes d&apos;ici-bas. L&apos;expression &laquo;&nbsp;n&apos;oublie pas ta part&nbsp;&raquo; montre que l&apos;islam rejette le monachisme et l&apos;ascétisme excessif. C&apos;est sur cette base que le Prophète ﷺ a formulé ses conseils pratiques sur la vie quotidienne, alliant spiritualité et réalisme.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Cinq avant cinq      */}
              {/* ============================== */}
              <section id="cinq-avant-cinq" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Profite de cinq avant cinq
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Parmi les conseils les plus célèbres du Prophète ﷺ figure l&apos;exhortation à saisir les opportunités avant qu&apos;elles ne disparaissent. Ces hadiths rappellent que le temps, la santé et la jeunesse sont des bénédictions provisoires dont le croyant doit tirer le meilleur parti. Le Prophète ﷺ a formulé cette sagesse avec une concision remarquable, en opposant systématiquement un état favorable à son contraire inévitable.
                </p>

                <HadithBlock
                  number={1}
                  title="Profite de cinq choses avant cinq autres"
                  narrator="Ibn &apos;Abbas"
                  arabic="اغْتَنِمْ خَمْسًا قَبْلَ خَمْسٍ: شَبَابَكَ قَبْلَ هَرَمِكَ، وَصِحَّتَكَ قَبْلَ سَقَمِكَ، وَغِنَاكَ قَبْلَ فَقْرِكَ، وَفَرَاغَكَ قَبْلَ شُغْلِكَ، وَحَيَاتَكَ قَبْلَ مَوْتِكَ"
                  translation="Profite de cinq choses avant cinq autres : ta jeunesse avant ta vieillesse, ta santé avant ta maladie, ta richesse avant ta pauvreté, ton temps libre avant tes occupations, et ta vie avant ta mort."
                  source="Mustadrak Al-Hakim, n°7846"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des conseils les plus synthétiques du Prophète ﷺ. Chaque paire oppose un bienfait à son contraire, rappelant au croyant que rien ne dure. La jeunesse est le moment de l&apos;énergie et de la détermination, la santé permet l&apos;adoration et le service, la richesse ouvre la porte de la générosité, le temps libre est une fenêtre pour l&apos;apprentissage, et la vie elle-même est le capital à investir pour l&apos;au-delà. Les savants ont vu dans ce hadith un programme de vie complet, applicable à chaque étape de l&apos;existence."
                />

                <HadithBlock
                  number={2}
                  title="Deux bienfaits dont les gens sont dupés"
                  narrator="Ibn &apos;Abbas"
                  arabic="نِعْمَتَانِ مَغْبُونٌ فِيهِمَا كَثِيرٌ مِنَ النَّاسِ: الصِّحَّةُ وَالْفَرَاغُ"
                  translation="Deux bienfaits dont beaucoup de gens sont dupés : la santé et le temps libre."
                  source="Sahih Al-Bukhari, n°6412"
                  grade="sahih"
                  explanation="Le terme &laquo;&nbsp;maghbun&nbsp;&raquo; (dupé, lésé) est emprunté au vocabulaire commercial : c&apos;est celui qui fait une mauvaise affaire sans s&apos;en rendre compte. Le Prophète ﷺ compare la vie à un marché où la santé et le temps libre sont un capital précieux. La plupart des gens gaspillent ces deux trésors sans en percevoir la valeur, jusqu&apos;à les perdre. Ce hadith est un appel à la vigilance : chaque jour de bonne santé et chaque heure libre sont des occasions d&apos;adoration, d&apos;apprentissage et de bonnes actions."
                />

                <HadithBlock
                  number={3}
                  title="Hâte-toi de faire les bonnes actions"
                  narrator="Abu Hurayra"
                  arabic="بَادِرُوا بِالْأَعْمَالِ فِتَنًا كَقِطَعِ اللَّيْلِ الْمُظْلِمِ، يُصْبِحُ الرَّجُلُ مُؤْمِنًا وَيُمْسِي كَافِرًا، أَوْ يُمْسِي مُؤْمِنًا وَيُصْبِحُ كَافِرًا، يَبِيعُ دِينَهُ بِعَرَضٍ مِنَ الدُّنْيَا"
                  translation="Hâtez-vous de faire les bonnes actions avant des épreuves semblables aux morceaux d&apos;une nuit obscure : l&apos;homme se réveille croyant et se couche mécréant, ou se couche croyant et se réveille mécréant, vendant sa religion pour un bien de ce monde."
                  source="Sahih Muslim, n°118"
                  grade="sahih"
                  explanation="Ce hadith souligne l&apos;urgence d&apos;agir. Le Prophète ﷺ compare les épreuves futures à des fragments de nuit noire : elles arrivent sans prévenir et plongent le croyant dans la confusion. L&apos;image de celui qui vend sa religion pour un bien matériel illustre le danger de la procrastination spirituelle. Les savants y voient un avertissement contre la complaisance : la foi n&apos;est jamais acquise définitivement, elle se nourrit par l&apos;action constante."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Pour approfondir la notion de patience face aux épreuves, consultez notre article sur les{" "}
                  <Link href="/hadith-patience-epreuves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la patience et les épreuves en islam
                  </Link>.
                </p>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths forment un triptyque cohérent autour du temps et de l&apos;action. Ils invitent le croyant à une prise de conscience : la vie est brève, les bienfaits sont provisoires et l&apos;action vertueuse ne souffre aucun délai. Cette urgence n&apos;engendre pas l&apos;angoisse mais une vigilance lucide, car le croyant sait que chaque instant bien utilisé est une provision pour l&apos;au-delà.
                </p>
              </section>

              {/* ============================================= */}
              {/* SECTION : La simplicité et le détachement     */}
              {/* ============================================= */}
              <section id="simplicite-detachement" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La simplicité et le détachement du monde
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a vécu dans une simplicité remarquable, non par contrainte mais par choix. Il a enseigné que le véritable détachement (<em>zuhd</em>) ne consiste pas à tout abandonner, mais à ne pas laisser les biens matériels dominer le cœur. Les hadiths suivants illustrent cette sagesse prophétique qui invite à traverser ce monde avec légèreté, comme un voyageur conscient de la brièveté de son passage.
                </p>

                <HadithBlock
                  number={4}
                  title="Sois dans ce monde comme un étranger"
                  narrator="Ibn &apos;Umar"
                  arabic="كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ"
                  translation="Sois dans ce monde comme si tu étais un étranger ou un voyageur de passage."
                  source="Sahih Al-Bukhari, n°6416"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;une des paroles les plus profondes du Prophète ﷺ. L&apos;étranger ne s&apos;installe pas définitivement, ne s&apos;encombre pas de superflu et reste toujours prêt à partir. Le voyageur de passage est encore plus détaché : il ne prend que le strict nécessaire pour sa route. Ibn &apos;Umar ajoutait : &laquo;&nbsp;Si tu arrives au soir, n&apos;attends pas le matin, et si tu arrives au matin, n&apos;attends pas le soir&nbsp;&raquo;. Ce conseil ne prône pas l&apos;inaction mais une conscience aiguë de la précarité de la vie, qui pousse à l&apos;excellence dans chaque instant."
                />

                <HadithBlock
                  number={5}
                  title="La richesse n&apos;est pas dans l&apos;abondance des biens"
                  narrator="Abu Hurayra"
                  arabic="لَيْسَ الْغِنَى عَنْ كَثْرَةِ الْعَرَضِ وَلَكِنَّ الْغِنَى غِنَى النَّفْسِ"
                  translation="La richesse ne réside pas dans l&apos;abondance des biens, mais la véritable richesse est la richesse de l&apos;âme."
                  source="Sahih Al-Bukhari, n°6446 — Sahih Muslim, n°1051"
                  grade="sahih"
                  explanation="Ce hadith redéfinit la notion de richesse. Le mot &laquo;&nbsp;ghina&nbsp;&raquo; (richesse) est utilisé deux fois avec deux sens différents : la richesse matérielle et la richesse intérieure. Le Prophète ﷺ enseigne que la vraie aisance est le contentement du cœur (<em>qana&apos;a</em>). Celui qui possède peu mais se satisfait de ce qu&apos;Allah lui a donné est plus riche que celui qui accumule sans jamais être rassasié. Ce hadith est un remède contre la course effrénée à la consommation et l&apos;envie qui ronge les sociétés."
                />

                <HadithBlock
                  number={6}
                  title="Ce monde est la prison du croyant"
                  narrator="Abu Hurayra"
                  arabic="الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ"
                  translation="Ce monde est la prison du croyant et le paradis du mécréant."
                  source="Sahih Muslim, n°2956"
                  grade="sahih"
                  explanation="Ce hadith ne signifie pas que le croyant vit dans la souffrance perpétuelle. Les savants, dont l&apos;imam An-Nawawi, expliquent que par rapport aux délices du Paradis qui l&apos;attendent, ce monde est comme une prison pour le croyant, aussi agréable soit-il. Inversement, pour celui qui ne croit pas en l&apos;au-delà, ce monde est son seul &laquo;&nbsp;paradis&nbsp;&raquo;. Ce hadith invite le musulman à relativiser les difficultés terrestres en les comparant aux récompenses éternelles, et à ne pas envier ceux qui jouissent d&apos;un confort matériel sans guidance spirituelle."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths dessinent une éthique de vie fondée sur la modération et la conscience. Le détachement prophétique n&apos;est ni austérité ni privation : c&apos;est une liberté intérieure qui permet au croyant de jouir des bienfaits d&apos;Allah sans en devenir esclave. Pour découvrir comment le bon comportement complète cette sagesse, consultez notre article sur les{" "}
                  <Link href="/hadith-bon-comportement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le bon comportement en islam
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez les hadiths, la sagesse prophétique et les fondements de la Sunna avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Les clés du bonheur  */}
              {/* ============================== */}
              <section id="cles-bonheur" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les clés du bonheur selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ n&apos;a pas seulement enseigné le détachement : il a aussi identifié les sources concrètes du bonheur terrestre. Loin d&apos;un discours purement ascétique, ces hadiths montrent que l&apos;islam reconnaît les besoins fondamentaux de l&apos;être humain et oriente vers les moyens légitimes de les satisfaire, tout en rappelant que le bonheur ultime se trouve dans la relation avec Allah.
                </p>

                <HadithBlock
                  number={7}
                  title="Celui qui se réveille en sécurité"
                  narrator="&apos;Ubayd Allah ibn Mihsan"
                  arabic="مَنْ أَصْبَحَ مِنْكُمْ آمِنًا فِي سِرْبِهِ، مُعَافًى فِي جَسَدِهِ، عِنْدَهُ قُوتُ يَوْمِهِ، فَكَأَنَّمَا حِيزَتْ لَهُ الدُّنْيَا بِحَذَافِيرِهَا"
                  translation="Celui d&apos;entre vous qui se réveille en sécurité parmi les siens, en bonne santé dans son corps, ayant la nourriture de sa journée, c&apos;est comme si le monde entier lui avait été rassemblé."
                  source="Jami&apos; at-Tirmidhi, n°2346"
                  grade="hasan"
                  explanation="Ce hadith identifie trois piliers du bien-être : la sécurité, la santé et la subsistance quotidienne. Celui qui possède ces trois éléments a tout ce dont il a besoin, même s&apos;il ne possède rien d&apos;autre. Le Prophète ﷺ ramène ainsi les attentes à l&apos;essentiel, invitant le croyant à reconnaître les bienfaits qu&apos;il tient souvent pour acquis. Ce hadith est un puissant antidote à l&apos;ingratitude et à l&apos;insatisfaction chronique."
                />

                <HadithBlock
                  number={8}
                  title="Regardez celui qui est en dessous de vous"
                  narrator="Abu Hurayra"
                  arabic="انْظُرُوا إِلَى مَنْ أَسْفَلَ مِنْكُمْ، وَلَا تَنْظُرُوا إِلَى مَنْ هُوَ فَوْقَكُمْ، فَهُوَ أَجْدَرُ أَنْ لَا تَزْدَرُوا نِعْمَةَ اللَّهِ عَلَيْكُمْ"
                  translation="Regardez celui qui est en dessous de vous et ne regardez pas celui qui est au-dessus de vous, car cela est plus à même de vous faire apprécier les bienfaits d&apos;Allah sur vous."
                  source="Sahih Muslim, n°2963"
                  grade="sahih"
                  explanation="Ce hadith offre une méthode pratique pour cultiver la gratitude. La comparaison avec ceux qui ont moins que nous nourrit la reconnaissance, tandis que la comparaison avec ceux qui ont plus engendre l&apos;envie et l&apos;insatisfaction. Les savants précisent que cette règle s&apos;applique aux biens matériels ; en matière de religion, c&apos;est l&apos;inverse : il faut regarder ceux qui sont au-dessus pour s&apos;élever. Cette distinction montre la finesse de la psychologie prophétique."
                />

                <HadithBlock
                  number={9}
                  title="Le bonheur du fils d&apos;Adam"
                  narrator="Sa&apos;d ibn Abi Waqqas"
                  arabic="مِنْ سَعَادَةِ ابْنِ آدَمَ رِضَاهُ بِمَا قَضَى اللَّهُ لَهُ، وَمِنْ شَقَاوَةِ ابْنِ آدَمَ تَرْكُهُ اسْتِخَارَةَ اللَّهِ"
                  translation="Le bonheur du fils d&apos;Adam réside dans sa satisfaction de ce qu&apos;Allah a décrété pour lui, et le malheur du fils d&apos;Adam réside dans le fait qu&apos;il délaisse la consultation d&apos;Allah (istikhara)."
                  source="Musnad Ahmad, n°1567 — Jami&apos; at-Tirmidhi, n°2151"
                  grade="hasan"
                  explanation="Ce hadith lie directement le bonheur à l&apos;acceptation du décret divin (<em>rida bil-qada</em>). Le croyant qui accepte ce qu&apos;Allah a choisi pour lui, après avoir fait les causes et consulté Allah par l&apos;istikhara, trouve la sérénité même dans les situations difficiles. À l&apos;inverse, celui qui refuse de s&apos;en remettre à Allah et agit selon ses seuls désirs s&apos;expose au malheur. Les savants soulignent que le <em>rida</em> ne signifie pas la passivité, mais la paix intérieure après l&apos;effort."
                />
              </section>

              {/* ========================================= */}
              {/* SECTION : Les paroles concises            */}
              {/* ========================================= */}
              <section id="jawami-kalim" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les paroles concises du Prophète ﷺ (jawami&apos; al-kalim)
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a déclaré avoir reçu le don des &laquo;&nbsp;jawami&apos; al-kalim&nbsp;&raquo; : des paroles brèves mais d&apos;une profondeur immense. Chaque mot est pesé, chaque formule contient des enseignements multiples que les savants n&apos;ont cessé de commenter à travers les siècles. Ces paroles concises sont parmi les trésors les plus précieux de la tradition prophétique, accessibles à tous et applicables en toute circonstance.
                </p>

                <HadithBlock
                  number={10}
                  title="Ne te mets pas en colère"
                  narrator="Abu Hurayra"
                  arabic="أَنَّ رَجُلًا قَالَ لِلنَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: أَوْصِنِي، قَالَ: لَا تَغْضَبْ، فَرَدَّدَ مِرَارًا، قَالَ: لَا تَغْضَبْ"
                  translation="Un homme dit au Prophète ﷺ : &laquo;&nbsp;Conseille-moi.&nbsp;&raquo; Il répondit : &laquo;&nbsp;Ne te mets pas en colère.&nbsp;&raquo; L&apos;homme répéta sa demande plusieurs fois, et le Prophète ﷺ répondit à chaque fois : &laquo;&nbsp;Ne te mets pas en colère.&nbsp;&raquo;"
                  source="Sahih Al-Bukhari, n°6116"
                  grade="sahih"
                  explanation="Ce hadith est un exemple parfait des jawami&apos; al-kalim. En trois mots arabes (&laquo;&nbsp;la taghdab&nbsp;&raquo;), le Prophète ﷺ résume un programme comportemental complet. La colère est la racine de nombreux péchés : l&apos;injustice, la violence, les paroles blessantes, la rupture des liens. En la maîtrisant, le croyant prévient une cascade de maux. La répétition du conseil, malgré l&apos;insistance de l&apos;homme, montre que le Prophète ﷺ estimait cette recommandation suffisante pour couvrir toutes les situations de la vie. Les savants y voient la preuve que la maîtrise de soi est la clé de la réussite dans les relations humaines et dans la pratique religieuse."
                />

                <HadithBlock
                  number={11}
                  title="La religion, c&apos;est le bon conseil (nasiha)"
                  narrator="Tamim ad-Dari"
                  arabic="الدِّينُ النَّصِيحَةُ، قُلْنَا: لِمَنْ؟ قَالَ: لِلَّهِ وَلِكِتَابِهِ وَلِرَسُولِهِ وَلِأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ"
                  translation="La religion, c&apos;est le bon conseil (nasiha). Nous avons demandé : envers qui ? Il a répondu : envers Allah, envers Son Livre, envers Son Messager, envers les dirigeants des musulmans et envers l&apos;ensemble des musulmans."
                  source="Sahih Muslim, n°55"
                  grade="sahih"
                  explanation="Ce hadith condense la totalité de la religion en un seul mot : la nasiha. Le terme arabe est plus riche que le simple &laquo;&nbsp;conseil&nbsp;&raquo; : il implique la sincérité, la bienveillance et le désir du bien pour l&apos;autre. La nasiha envers Allah, c&apos;est la sincérité dans l&apos;adoration ; envers Son Livre, c&apos;est le suivre et le méditer ; envers le Messager, c&apos;est appliquer sa Sunna ; envers les dirigeants, c&apos;est leur rappeler la vérité avec sagesse ; et envers les musulmans, c&apos;est vouloir pour eux ce qu&apos;on veut pour soi-même. L&apos;imam An-Nawawi a classé ce hadith parmi les hadiths sur lesquels repose toute la religion."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Pour découvrir d&apos;autres paroles fondatrices, consultez notre article sur les{" "}
                  <Link href="/hadith-prophete-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths du Prophète en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur les conseils prophétiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont consacré des ouvrages entiers à l&apos;explication des conseils de vie du Prophète ﷺ. Leurs commentaires enrichissent la compréhension de ces hadiths et montrent comment les générations successives les ont mis en pratique.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith &laquo;&nbsp;sois dans ce monde comme un étranger&nbsp;&raquo; est le fondement du détachement (zuhd) dans l&apos;islam. Il ne s&apos;agit pas de quitter le monde mais de ne pas laisser le monde entrer dans le cœur. Le corps peut être dans le monde, pourvu que le cœur soit avec Allah.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Rajab al-Hanbali, <em>Jami&apos; al-&apos;Ulum wal-Hikam</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le zuhd n&apos;est pas de rendre illicite ce qui est licite ni de gaspiller les biens. Le zuhd, c&apos;est que tu aies plus confiance en ce qui est dans la Main d&apos;Allah qu&apos;en ce qui est dans ta propre main.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Al-Hasan al-Basri, rapporté dans <em>Hilyat al-Awliya</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La parole du Prophète ﷺ &laquo;&nbsp;ne te mets pas en colère&nbsp;&raquo; rassemble le bien de ce monde et de l&apos;au-delà. Car la colère conduit à la rupture des liens, à l&apos;injustice et parfois au sang versé. Celui qui maîtrise sa colère a maîtrisé son ennemi le plus redoutable : lui-même.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que les conseils prophétiques ne sont pas de simples maximes morales : ils constituent un système de vie complet, articulant la dimension spirituelle et la dimension pratique. Les savants ont tiré de ces hadiths des règles de comportement, des priorités existentielles et un art de vivre qui reste pleinement pertinent à notre époque.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Lecons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques des conseils prophétiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés permet de dégager des enseignements concrets pour la vie quotidienne du musulman :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Investir le temps avec conscience
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La jeunesse, la santé et le temps libre sont des capitaux à fructifier. Chaque journée est une occasion de se rapprocher d&apos;Allah par l&apos;apprentissage, l&apos;adoration et le service aux autres.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Cultiver le contentement intérieur
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La vraie richesse est celle de l&apos;âme. Se satisfaire de ce qu&apos;Allah a donné libère de l&apos;envie et de la course sans fin à l&apos;accumulation. La gratitude transforme le peu en abondance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Traverser le monde sans s&apos;y attacher
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le croyant profite des bienfaits d&apos;Allah avec reconnaissance, sans en faire l&apos;objectif de sa vie. Le détachement prophétique est une liberté qui protège le cœur des déceptions et de l&apos;angoisse.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Maîtriser la colère
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La colère est la source de nombreux péchés et conflits. Le Prophète ﷺ en a fait le conseil unique et suffisant pour celui qui cherche une règle de vie. La maîtrise de soi est la clé de relations saines et d&apos;une pratique religieuse sereine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Pratiquer la nasiha au quotidien
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La religion est sincérité et bienveillance envers tous : Allah, Son Livre, Son Messager, les dirigeants et l&apos;ensemble des musulmans. Chaque interaction est une occasion de nasiha, pourvu qu&apos;elle soit empreinte de sagesse et de douceur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se comparer vers le bas pour cultiver la gratitude
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        En matière de biens matériels, regarder ceux qui ont moins nourrit la reconnaissance. En matière de religion, regarder ceux qui font mieux stimule l&apos;effort. Cette double règle est un outil psychologique prophétique d&apos;une efficacité remarquable.
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
                  description="Comprenez les hadiths et les conseils prophétiques dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  description="Les enseignements prophétiques sur les bonnes manières, la douceur et les relations humaines."
                  href="/hadith-bon-comportement-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la patience et les épreuves en islam"
                  description="Les paroles du Prophète ﷺ sur l&apos;endurance face aux difficultés et la récompense de la patience."
                  href="/hadith-patience-epreuves-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
