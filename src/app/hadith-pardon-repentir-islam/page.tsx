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
    "Hadiths sur le pardon et le repentir en islam : miséricorde, tawba et istighfar",
  description:
    "Découvrez les hadiths authentiques sur le pardon et le repentir en islam : miséricorde divine, conditions de la tawba, pardon entre les hommes et istighfar quotidien. Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths sur le pardon et le repentir en islam : miséricorde, tawba et istighfar",
    description:
      "Les hadiths authentiques sur le pardon et le repentir : miséricorde d&apos;Allah, tawba sincère, pardon entre les hommes et demande de pardon quotidienne selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-pardon-repentir-islam",
    images: [
      {
        url: "/images/calligraphie-allah-islam-coeur-bois.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-pardon-repentir-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique du pardon" },
  { id: "misericorde-pardon", label: "La miséricorde d&apos;Allah et le pardon" },
  { id: "conditions-tawba", label: "Les conditions du repentir sincère" },
  { id: "pardon-entre-hommes", label: "Le pardon entre les hommes" },
  { id: "istighfar-quotidien", label: "L&apos;istighfar quotidien" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur le pardon en islam ?",
    answer:
      "Parmi les hadiths les plus importants sur le pardon figurent celui rapporté par Abu Hurayra o\u00f9 le Proph\u00e8te \uff61 affirme qu\u2019Allah pardonne \u00e0 celui qui se repent avant que le soleil se l\u00e8ve de l\u2019ouest (Muslim 2703), celui d\u2019Anas ibn Malik sur la joie d\u2019Allah face au repentir de Son serviteur (Bukhari 6309), et celui d\u2019Abu Musa al-Ash\u2019ari sur la main d\u2019Allah tendue de nuit et de jour pour accueillir le repentant (Muslim 2759).",
  },
  {
    question:
      "Quelles sont les conditions du repentir sincère (tawba) en islam ?",
    answer:
      "Les savants s\u2019appuient sur les hadiths et le Coran pour d\u00e9finir les conditions de la tawba : regretter sinc\u00e8rement le p\u00e9ch\u00e9 commis, cesser imm\u00e9diatement l\u2019acte r\u00e9pr\u00e9hensible, prendre la ferme r\u00e9solution de ne pas y revenir, et restituer les droits l\u00e9s\u00e9s si le p\u00e9ch\u00e9 concerne autrui. Le repentir doit \u00eatre fait avant l\u2019agonie de la mort et avant le lever du soleil de l\u2019ouest.",
  },
  {
    question: "Allah pardonne-t-Il tous les péchés ?",
    answer:
      "Le Coran affirme clairement : \u00ab Dis : \u00d4 Mes serviteurs qui avez commis des exc\u00e8s \u00e0 votre propre d\u00e9triment, ne d\u00e9sesp\u00e9rez pas de la mis\u00e9ricorde d\u2019Allah. Car Allah pardonne tous les p\u00e9ch\u00e9s \u00bb (Az-Zumar, 39:53). Les savants pr\u00e9cisent que ce verset concerne celui qui se repent sinc\u00e8rement. Le seul p\u00e9ch\u00e9 qu\u2019Allah ne pardonne pas sans repentir est le shirk (associationnisme), comme le mentionne la sourate An-Nisa (4:48).",
  },
  {
    question:
      "Combien de fois par jour le Prophète demandait-il pardon à Allah ?",
    answer:
      "Le Proph\u00e8te \uff61 demandait pardon \u00e0 Allah plus de soixante-dix fois par jour selon le hadith rapport\u00e9 par Abu Hurayra (Bukhari 6307), et dans une autre version rapport\u00e9e par al-Agharr al-Muzani, plus de cent fois par jour (Muslim 2702). Cela montre que l\u2019istighfar est une pratique constante, m\u00eame pour celui dont les p\u00e9ch\u00e9s sont pardonn\u00e9s.",
  },
  {
    question: "L&apos;islam encourage-t-il le pardon entre les hommes ?",
    answer:
      "Oui, l\u2019islam encourage fortement le pardon entre les \u00eatres humains. Le Proph\u00e8te \uff61 a enseign\u00e9 que l\u2019aum\u00f4ne n\u2019a jamais diminu\u00e9 un bien, et que quiconque pardonne, Allah augmente son honneur (Muslim 2588). Il a \u00e9galement rapport\u00e9 qu\u2019Allah ordonne \u00e0 chacun de pardonner pour obtenir le pardon divin en retour (Ahmad 6541). Pardonner aux autres est pr\u00e9sent\u00e9 comme une voie vers la grandeur et l\u2019\u00e9l\u00e9vation spirituelle.",
  },
  {
    question: "Quelle est la différence entre istighfar et tawba ?",
    answer:
      "L\u2019istighfar est la demande verbale de pardon \u00e0 Allah, souvent par la formule \u00ab Astaghfiru-Llah \u00bb. La tawba est un processus plus complet qui inclut le regret, l\u2019abandon du p\u00e9ch\u00e9 et la r\u00e9solution de ne pas r\u00e9cidiver. L\u2019istighfar peut accompagner la tawba, mais la tawba va au-del\u00e0 de la simple formule verbale. Les savants consid\u00e8rent que l\u2019istighfar le plus parfait est celui qui s\u2019accompagne d\u2019une tawba sinc\u00e8re.",
  },
];

export default function HadithPardonRepentirIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-pardon-repentir-islam/#article",
        headline:
          "Hadiths sur le pardon et le repentir en islam : miséricorde, tawba et istighfar",
        description:
          "Découvrez les hadiths authentiques sur le pardon et le repentir en islam : miséricorde divine, conditions de la tawba, pardon entre les hommes et istighfar quotidien.",
        image: "/images/calligraphie-allah-islam-coeur-bois.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-pardon-repentir-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-pardon-repentir-islam/#breadcrumb",
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
            name: "Pardon et repentir",
            item: "https://www.islamreligion.fr/hadith-pardon-repentir-islam",
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
          title="Hadiths sur le pardon et le repentir en islam"
          subtitle="Les enseignements prophétiques sur la miséricorde divine, le repentir sincère (tawba), le pardon entre les hommes et l&apos;istighfar quotidien selon la Sunna authentique."
          imageSrc="/images/calligraphie-allah-islam-coeur-bois.jpg"
          imageAlt="Hadiths sur le pardon et le repentir en islam, calligraphie islamique"
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
                  Pardon et repentir
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
                    Allah tend Sa main de nuit pour accepter le repentir du pécheur du jour, et de jour pour accepter le repentir du pécheur de la nuit.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le repentir sincère (tawba nasuh) implique le regret, l&apos;abandon du péché et la ferme résolution de ne pas y revenir.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ demandait pardon à Allah plus de soixante-dix fois par jour, bien que tous ses péchés lui fussent pardonnés.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Pardonner aux autres est une cause d&apos;élévation en honneur et en dignité auprès d&apos;Allah.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique du pardon et du repentir
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le pardon et le repentir occupent une place centrale dans le Coran. Allah s&apos;est Lui-même qualifié de <em>Al-Ghafur</em> (le Très Pardonneur), <em>At-Tawwab</em> (Celui qui accepte le repentir) et <em>Ar-Rahim</em> (le Très Miséricordieux). Ces noms divins ne sont pas de simples attributs théologiques : ils traduisent une réalité vécue par chaque croyant qui se tourne vers son Seigneur avec sincérité. Les versets suivants posent les fondements coraniques que les hadiths du Prophète ﷺ viennent ensuite détailler et illustrer.
                </p>

                <HadithCard
                  arabic="قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ"
                  text="Dis : &laquo; Ô Mes serviteurs qui avez commis des excès à votre propre détriment, ne désespérez pas de la miséricorde d&apos;Allah. Car Allah pardonne tous les péchés. Oui, c&apos;est Lui le Pardonneur, le Très Miséricordieux. &raquo;"
                  source="Coran, sourate Az-Zumar (39:53)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset est considéré par de nombreux savants comme le verset le plus porteur d&apos;espoir du Coran. Il s&apos;adresse à ceux qui ont péché de manière excessive, leur interdisant de désespérer. L&apos;expression &laquo; tous les péchés &raquo; montre l&apos;étendue infinie de la miséricorde divine. Les commentateurs précisent que ce pardon est conditionné par un repentir sincère, comme le confirment les hadiths que nous verrons plus loin.
                </p>

                <HadithCard
                  arabic="يَا أَيُّهَا الَّذِينَ آمَنُوا تُوبُوا إِلَى اللَّهِ تَوْبَةً نَّصُوحًا عَسَىٰ رَبُّكُمْ أَن يُكَفِّرَ عَنكُمْ سَيِّئَاتِكُمْ وَيُدْخِلَكُمْ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ"
                  text="Ô vous qui avez cru ! Repentez-vous à Allah d&apos;un repentir sincère (tawba nasuh). Il se peut que votre Seigneur vous efface vos méfaits et vous fasse entrer dans des Jardins sous lesquels coulent les ruisseaux."
                  source="Coran, sourate At-Tahrim (66:8)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset introduit le concept de <em>tawba nasuh</em>, le repentir sincère et résolu. Les savants définissent ce repentir comme celui qui ne laisse aucune place à la rechute volontaire. Le terme <em>nasuh</em> vient de la racine <em>nasiha</em> (conseil sincère) : le repentant se conseille lui-même avec honnêteté, reconnaît sa faute et s&apos;engage à ne plus y revenir. Ce cadre coranique éclaire les hadiths qui suivent sur les modalités pratiques du retour à Allah.
                </p>
              </section>

              {/* ========================================== */}
              {/* SECTION : La miséricorde d&apos;Allah      */}
              {/* ========================================== */}
              <section id="misericorde-pardon" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La miséricorde d&apos;Allah et le pardon
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La miséricorde d&apos;Allah est le socle sur lequel repose toute la théologie du pardon en islam. Le Prophète ﷺ a multiplié les enseignements sur ce thème, montrant que la porte du repentir est grande ouverte et que la joie divine face au retour du pécheur dépasse tout ce que l&apos;homme peut imaginer. Les hadiths suivants illustrent cette réalité avec une force remarquable.
                </p>

                <HadithBlock
                  number={1}
                  title="Allah tend Sa main de nuit et de jour"
                  narrator="Abu Musa al-Ash&apos;ari"
                  arabic="إِنَّ اللَّهَ عَزَّ وَجَلَّ يَبْسُطُ يَدَهُ بِاللَّيْلِ لِيَتُوبَ مُسِيءُ النَّهَارِ وَيَبْسُطُ يَدَهُ بِالنَّهَارِ لِيَتُوبَ مُسِيءُ اللَّيْلِ حَتَّى تَطْلُعَ الشَّمْسُ مِنْ مَغْرِبِهَا"
                  translation="Allah Tout-Puissant tend Sa main la nuit pour que le pécheur du jour se repente, et Il tend Sa main le jour pour que le pécheur de la nuit se repente, et cela jusqu&apos;à ce que le soleil se lève de l&apos;ouest."
                  source="Sahih Muslim, n°2759"
                  grade="sahih"
                  explanation="Ce hadith présente la miséricorde d&apos;Allah comme une invitation permanente et ininterrompue. L&apos;image de la main tendue traduit l&apos;accueil bienveillant du Créateur envers Ses créatures, de jour comme de nuit. Aucun moment n&apos;est inadéquat pour le repentir. La seule limite temporelle mentionnée est le lever du soleil de l&apos;ouest, un signe de la fin des temps après lequel le repentir ne sera plus accepté. Ce hadith enseigne que le croyant ne doit jamais remettre sa tawba à plus tard, car la porte est ouverte à chaque instant."
                />

                <HadithBlock
                  number={2}
                  title="La joie d&apos;Allah face au repentir de Son serviteur"
                  narrator="Anas ibn Malik"
                  arabic="لَلَّهُ أَشَدُّ فَرَحًا بِتَوْبَةِ عَبْدِهِ حِينَ يَتُوبُ إِلَيْهِ مِنْ أَحَدِكُمْ كَانَ عَلَى رَاحِلَتِهِ بِأَرْضِ فَلَاةٍ فَانْفَلَتَتْ مِنْهُ وَعَلَيْهَا طَعَامُهُ وَشَرَابُهُ فَأَيِسَ مِنْهَا فَأَتَى شَجَرَةً فَاضْطَجَعَ فِي ظِلِّهَا قَدْ أَيِسَ مِنْ رَاحِلَتِهِ فَبَيْنَا هُوَ كَذَلِكَ إِذَا هُوَ بِهَا قَائِمَةً عِنْدَهُ"
                  translation="Allah se réjouit davantage du repentir de Son serviteur, lorsque celui-ci se repent, que l&apos;un de vous qui voyageait sur sa monture en plein désert. La monture s&apos;enfuit avec sa nourriture et sa boisson. Désespéré, il s&apos;allonge à l&apos;ombre d&apos;un arbre, convaincu de sa mort. Et voilà que soudain il retrouve sa monture devant lui."
                  source="Sahih Al-Bukhari, n°6309"
                  grade="sahih"
                  explanation="Ce hadith célèbre utilise une parabole saisissante pour illustrer la joie d&apos;Allah face au repentir. Le voyageur en plein désert, privé de toute ressource, représente l&apos;état de celui qui a péché et se trouve loin de la miséricorde divine. La joie de retrouver sa monture — c&apos;est-à-dire la vie elle-même — est immense, et pourtant la joie d&apos;Allah devant le repentir de Son serviteur la surpasse. Les savants soulignent que cette comparaison a une portée pédagogique : elle aide le croyant à comprendre, à son échelle, l&apos;intensité de l&apos;accueil divin."
                />

                <HadithBlock
                  number={3}
                  title="Allah pardonne tant que le soleil ne se lève pas de l&apos;ouest"
                  narrator="Abu Hurayra"
                  arabic="مَنْ تَابَ قَبْلَ أَنْ تَطْلُعَ الشَّمْسُ مِنْ مَغْرِبِهَا تَابَ اللَّهُ عَلَيْهِ"
                  translation="Quiconque se repent avant que le soleil ne se lève de l&apos;ouest, Allah accepte son repentir."
                  source="Sahih Muslim, n°2703"
                  grade="sahih"
                  explanation="Ce hadith fixe une échéance claire : la porte du repentir reste ouverte jusqu&apos;au dernier des grands signes de l&apos;Heure. Tant que ce signe n&apos;est pas apparu, tout pécheur peut se tourner vers Allah et obtenir Son pardon. Les savants y voient un message d&apos;espoir adressé à ceux qui pensent avoir trop péché pour être pardonnés. Parallèlement, le hadith contient un avertissement : cette porte finira par se fermer, d&apos;où l&apos;urgence de ne pas reporter son repentir."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths dressent un portrait de la miséricorde divine à la fois infinie et bienveillante. Allah ne se contente pas de pardonner passivement : Il invite, Il accueille, Il se réjouit du retour de Son serviteur. Pour approfondir la dimension spirituelle de la relation avec Allah, consultez notre article sur les{" "}
                  <Link href="/hadith-qudsi-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths qudsi et les paroles divines
                  </Link>.
                </p>
              </section>

              {/* ========================================== */}
              {/* SECTION : Conditions du repentir sincère   */}
              {/* ========================================== */}
              <section id="conditions-tawba" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les conditions du repentir sincère (tawba)
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si la miséricorde d&apos;Allah est immense, le repentir ne se réduit pas à une simple formule prononcée du bout des lèvres. Les hadiths suivants détaillent les conditions et les limites temporelles de la tawba, montrant que le repentir authentique engage le coeur, la parole et l&apos;action.
                </p>

                <HadithBlock
                  number={4}
                  title="Le repentir efface ce qui le précède"
                  narrator="&apos;Amr ibn al-&apos;As"
                  arabic="أَمَا عَلِمْتَ أَنَّ الْإِسْلَامَ يَهْدِمُ مَا كَانَ قَبْلَهُ وَأَنَّ الْهِجْرَةَ تَهْدِمُ مَا كَانَ قَبْلَهَا وَأَنَّ الْحَجَّ يَهْدِمُ مَا كَانَ قَبْلَهُ"
                  translation="Ne sais-tu pas que l&apos;islam efface ce qui le précède, que l&apos;émigration (hijra) efface ce qui la précède, et que le pèlerinage (hajj) efface ce qui le précède ?"
                  source="Sahih Muslim, n°121"
                  grade="sahih"
                  explanation="Ce hadith a été prononcé par le Prophète ﷺ à &apos;Amr ibn al-&apos;As lorsque celui-ci hésitait à embrasser l&apos;islam par crainte de ses péchés passés. Le Messager d&apos;Allah l&apos;a rassuré : l&apos;entrée en islam efface intégralement le passé. De même, des actes majeurs comme la hijra et le hajj sont des formes de renouveau total. Les savants en déduisent que le repentir sincère remet les compteurs à zéro. Le pécheur qui revient à Allah est comme celui qui n&apos;a jamais péché."
                />

                <HadithBlock
                  number={5}
                  title="Le repentir est accepté tant que l&apos;agonie n&apos;a pas commencé"
                  narrator="Ibn &apos;Umar"
                  arabic="إِنَّ اللَّهَ يَقْبَلُ تَوْبَةَ الْعَبْدِ مَا لَمْ يُغَرْغِرْ"
                  translation="Allah accepte le repentir du serviteur tant que celui-ci n&apos;est pas en état d&apos;agonie (gharghara)."
                  source="Jami&apos; at-Tirmidhi, n°3537"
                  grade="hasan"
                  explanation="Ce hadith précise la limite individuelle du repentir : tant que l&apos;âme n&apos;a pas atteint la gorge, c&apos;est-à-dire tant que l&apos;agonie de la mort n&apos;a pas commencé, le repentir reste possible. Le terme <em>gharghara</em> désigne le râle de l&apos;agonie. Les savants expliquent qu&apos;à ce stade, l&apos;homme voit les anges et entre dans le monde de l&apos;au-delà : son repentir n&apos;est plus celui d&apos;un vivant libre de ses choix. Ce hadith crée une urgence : personne ne connaît l&apos;heure de sa mort, il faut donc se repentir sans attendre."
                />

                <HadithBlock
                  number={6}
                  title="Celui qui se repent du péché est comme celui qui n&apos;a pas de péché"
                  narrator="Ibn Mas&apos;ud"
                  arabic="التَّائِبُ مِنَ الذَّنْبِ كَمَنْ لَا ذَنْبَ لَهُ"
                  translation="Celui qui se repent du péché est comme celui qui n&apos;a pas de péché."
                  source="Sunan Ibn Majah, n°4250"
                  grade="hasan"
                  explanation="Ce hadith offre une promesse extraordinaire : le repentir sincère ne laisse pas de trace. Le pécheur repentant n&apos;est pas un pécheur diminué ou marqué : il retrouve un état de pureté comparable à celui qui n&apos;a jamais failli. Cette parole prophétique combat le sentiment de culpabilité paralysante qui empêche certains de revenir à Allah. Les savants insistent : ce hadith ne signifie pas qu&apos;il faut pécher pour se repentir, mais que celui qui a péché ne doit jamais perdre espoir en la miséricorde divine."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths montrent que le repentir est un processus complet : il efface le passé, il est limité dans le temps (avant l&apos;agonie et avant les signes de l&apos;Heure), et il restitue au croyant sa pureté originelle. Pour découvrir comment traverser les épreuves qui accompagnent souvent le parcours du repentant, consultez notre article sur les{" "}
                  <Link href="/hadith-patience-epreuves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la patience et les épreuves
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez la science du hadith, le repentir et la purification de l&apos;âme avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ========================================== */}
              {/* SECTION : Le pardon entre les hommes       */}
              {/* ========================================== */}
              <section id="pardon-entre-hommes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le pardon entre les hommes
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le pardon en islam ne concerne pas uniquement la relation verticale entre l&apos;homme et son Créateur. Le Prophète ﷺ a également enseigné l&apos;importance du pardon horizontal, entre les êtres humains. Pardonner à celui qui nous a fait du tort est présenté comme un acte de noblesse qui élève son auteur auprès d&apos;Allah.
                </p>

                <HadithBlock
                  number={7}
                  title="Pardonner augmente l&apos;honneur"
                  narrator="Abu Hurayra"
                  arabic="مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلَّا عِزًّا وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلَّا رَفَعَهُ اللَّهُ"
                  translation="L&apos;aumône n&apos;a jamais diminué un bien. Quiconque pardonne, Allah ne lui ajoute que de l&apos;honneur. Et quiconque fait preuve d&apos;humilité pour Allah, Allah l&apos;élève."
                  source="Sahih Muslim, n°2588"
                  grade="sahih"
                  explanation="Ce hadith réunit trois principes fondamentaux. Le pardon, loin d&apos;être un signe de faiblesse, est présenté comme une cause d&apos;élévation et de dignité. La crainte de perdre sa fierté en pardonnant est infondée : c&apos;est précisément en pardonnant que le croyant gagne en honneur auprès d&apos;Allah et des hommes. Les savants rappellent que ce hadith concerne le pardon volontaire, lorsque la personne lésée a le pouvoir de se venger mais choisit la clémence."
                />

                <HadithBlock
                  number={8}
                  title="Pardonnez et Allah vous pardonnera"
                  narrator="&apos;Abdallah ibn &apos;Amr"
                  arabic="ارْحَمُوا تُرْحَمُوا وَاغْفِرُوا يَغْفِرِ اللَّهُ لَكُمْ"
                  translation="Faites miséricorde et vous recevrez miséricorde. Pardonnez et Allah vous pardonnera."
                  source="Musnad Ahmad, n°6541"
                  grade="sahih"
                  explanation="Ce hadith établit un lien direct entre le pardon accordé aux créatures et le pardon reçu du Créateur. La réciprocité est limpide : celui qui pardonne sera pardonné. Les savants y voient un principe de rétribution divine : Allah traite Son serviteur comme celui-ci traite les autres. Ce hadith est un encouragement puissant à dépasser la rancune et le désir de vengeance, en rappelant que nous avons tous besoin du pardon d&apos;Allah."
                />

                <HadithBlock
                  number={9}
                  title="Les deux hommes qui se réconcilent"
                  narrator="Abu Hurayra"
                  arabic="تُفْتَحُ أَبْوَابُ الْجَنَّةِ يَوْمَ الِاثْنَيْنِ وَيَوْمَ الْخَمِيسِ فَيُغْفَرُ لِكُلِّ عَبْدٍ لَا يُشْرِكُ بِاللَّهِ شَيْئًا إِلَّا رَجُلًا كَانَتْ بَيْنَهُ وَبَيْنَ أَخِيهِ شَحْنَاءُ فَيُقَالُ أَنْظِرُوا هَذَيْنِ حَتَّى يَصْطَلِحَا"
                  translation="Les portes du Paradis s&apos;ouvrent le lundi et le jeudi, et il est pardonné à tout serviteur qui n&apos;associe rien à Allah, sauf un homme entre lequel et son frère il y a une rancune. On dit alors : attendez que ces deux-là se réconcilient."
                  source="Sahih Muslim, n°2565"
                  grade="sahih"
                  explanation="Ce hadith est un avertissement sévère : la rancune entre musulmans bloque le pardon divin. Même si le serviteur ne commet pas de shirk, sa querelle non résolue empêche ses oeuvres d&apos;être présentées à Allah. Les savants en déduisent que la réconciliation entre frères est une priorité spirituelle. La rancune n&apos;est pas un simple défaut de caractère : elle constitue un obstacle concret au pardon d&apos;Allah, renouvelé chaque lundi et chaque jeudi."
                />
              </section>

              {/* ========================================== */}
              {/* SECTION : L&apos;istighfar quotidien       */}
              {/* ========================================== */}
              <section id="istighfar-quotidien" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;istighfar (demande de pardon) quotidien
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;istighfar n&apos;est pas réservé aux grands pécheurs ou aux moments de crise. Le Prophète ﷺ lui-même, dont les péchés passés et futurs étaient pardonnés, pratiquait l&apos;istighfar de manière intensive et quotidienne. Les hadiths suivants montrent que demander pardon à Allah est un acte d&apos;adoration à part entière, source de bienfaits dans cette vie et dans l&apos;au-delà.
                </p>

                <HadithBlock
                  number={10}
                  title="Le Prophète ﷺ demandait pardon plus de soixante-dix fois par jour"
                  narrator="Abu Hurayra"
                  arabic="وَاللَّهِ إِنِّي لَأَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ فِي الْيَوْمِ أَكْثَرَ مِنْ سَبْعِينَ مَرَّةً"
                  translation="Par Allah, je demande pardon à Allah et je me repens à Lui plus de soixante-dix fois par jour."
                  source="Sahih Al-Bukhari, n°6307"
                  grade="sahih"
                  explanation="Ce hadith montre que l&apos;istighfar n&apos;est pas un signe de faiblesse ou de péché récurrent : c&apos;est un acte de servitude et de rapprochement d&apos;Allah. Le Prophète ﷺ, malgré son rang de meilleur des hommes et le pardon de ses péchés, ne cessait de demander pardon. Les savants y voient la preuve que l&apos;istighfar est un pilier du quotidien du croyant. Plus la connaissance d&apos;Allah augmente, plus le serviteur prend conscience de ses manquements et de la grandeur de son Seigneur."
                />

                <HadithBlock
                  number={11}
                  title="Le maître de l&apos;istighfar (sayyid al-istighfar)"
                  narrator="Shaddad ibn Aws"
                  arabic="سَيِّدُ الِاسْتِغْفَارِ أَنْ تَقُولَ اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ"
                  translation="La meilleure formule de demande de pardon est que tu dises : &laquo; Ô Allah, Tu es mon Seigneur, il n&apos;y a de divinité que Toi. Tu m&apos;as créé et je suis Ton serviteur. Je m&apos;en tiens à Ton pacte et à Ta promesse autant que je le peux. Je cherche refuge auprès de Toi contre le mal que j&apos;ai commis. Je reconnais devant Toi Tes bienfaits sur moi et je reconnais mon péché. Pardonne-moi, car nul ne pardonne les péchés si ce n&apos;est Toi. &raquo;"
                  source="Sahih Al-Bukhari, n°6306"
                  grade="sahih"
                  explanation="Ce hadith enseigne la formule la plus complète de l&apos;istighfar, appelée <em>sayyid al-istighfar</em> (le maître de la demande de pardon). Elle contient la reconnaissance de la seigneurie d&apos;Allah, l&apos;affirmation du tawhid, la reconnaissance de sa propre condition de serviteur, l&apos;engagement de respecter le pacte divin, le refuge contre le mal commis, la reconnaissance des bienfaits et du péché, et enfin la demande de pardon. Le Prophète ﷺ a dit que celui qui prononce cette invocation le matin en y croyant et meurt le jour même entrera au Paradis, de même pour celui qui la prononce le soir."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le pardon et le repentir
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont consacré des chapitres entiers au repentir et au pardon. Leurs commentaires permettent de saisir la profondeur théologique et pratique de ces enseignements prophétiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La tawba est le retour de la désobéissance vers l&apos;obéissance. Elle comporte trois piliers : le regret du passé, l&apos;abandon du péché dans le présent et la ferme résolution de ne pas y revenir à l&apos;avenir. Si le péché concerne un droit d&apos;autrui, il faut y ajouter la restitution de ce droit.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Riyad as-Salihin</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;L&apos;istighfar est le remède de l&apos;âme. Celui qui s&apos;y attache trouvera l&apos;ouverture dans ses affaires, la subsistance dans sa vie et l&apos;apaisement dans son coeur. L&apos;istighfar est la clé de la fécondité, de la richesse et de la force, comme le mentionne le Coran dans la sourate Nuh.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Taymiyya, <em>Majmu&apos; al-Fatawa</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le désespoir de la miséricorde d&apos;Allah est un péché plus grave que le péché lui-même. Car le péché peut être effacé par le repentir, mais le désespoir ferme la porte du retour à Allah. C&apos;est pourquoi Allah l&apos;a interdit dans le Coran.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Madarij as-Salikin</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces paroles de savants confirment que le repentir n&apos;est pas un simple acte émotionnel : c&apos;est une science avec ses conditions, ses piliers et ses fruits. L&apos;istighfar est à la fois un acte de purification spirituelle et une source de bienfaits concrets dans la vie du croyant.
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
                  L&apos;ensemble des hadiths présentés permet de dégager des enseignements concrets pour la vie quotidienne du musulman :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne jamais désespérer de la miséricorde d&apos;Allah
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Quel que soit le nombre ou la gravité des péchés, la porte du repentir reste ouverte. Le désespoir est lui-même un péché, car il contredit la miséricorde infinie d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se repentir immédiatement, sans remettre à plus tard
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le repentir est accepté tant que l&apos;agonie n&apos;a pas commencé. Personne ne connaît l&apos;heure de sa mort : chaque instant est une occasion de revenir à Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Pratiquer l&apos;istighfar quotidiennement
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Suivre l&apos;exemple du Prophète ﷺ en demandant pardon à Allah plusieurs dizaines de fois par jour. Le <em>sayyid al-istighfar</em> est la formule la plus complète à intégrer dans ses invocations matinales et nocturnes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Pardonner aux autres pour obtenir le pardon d&apos;Allah
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le pardon n&apos;est pas une faiblesse : il est une cause d&apos;honneur et d&apos;élévation. La rancune non résolue bloque le pardon divin, comme le montre le hadith sur les portes du Paradis.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Respecter les conditions de la tawba sincère
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le repentir authentique ne se limite pas à prononcer &laquo; astaghfiru-Llah &raquo;. Il exige le regret, l&apos;abandon du péché, la résolution de ne pas récidiver et, le cas échéant, la restitution des droits d&apos;autrui.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se réconcilier avec ses proches
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les querelles et les rancunes entre musulmans empêchent la présentation des oeuvres à Allah. La réconciliation n&apos;est pas seulement un acte social : c&apos;est une condition spirituelle pour bénéficier du pardon divin.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur le pardon et le repentir dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths qudsi : les paroles divines rapportées par le Prophète ﷺ"
                  description="Explorez les hadiths sacrés sur la miséricorde, l&apos;amour divin et la proximité avec Allah."
                  href="/hadith-qudsi-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la patience et les épreuves en islam"
                  description="Les enseignements prophétiques sur le sabr, les épreuves et la manière de les traverser avec foi."
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
