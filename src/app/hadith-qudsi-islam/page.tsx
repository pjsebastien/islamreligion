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
    "Hadiths qudsi : paroles divines rapportées par le Prophète ﷺ en islam",
  description:
    "Découvrez les hadiths qudsi (sacrés) en islam : définition, différence avec le Coran, exemples authentiques sur la miséricorde, le repentir et l&apos;amour d&apos;Allah. Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths qudsi : paroles divines rapportées par le Prophète ﷺ en islam",
    description:
      "Les hadiths qudsi authentiques : paroles d&apos;Allah rapportées par le Prophète ﷺ sur la miséricorde, le pardon, le repentir et l&apos;amour divin.",
    url: "https://www.islamreligion.fr/hadith-qudsi-islam",
    images: [
      {
        url: "/images/calligraphie-allah-islam-coeur-bois.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-qudsi-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique" },
  { id: "definition-hadith-qudsi", label: "Définition du hadith qudsi" },
  { id: "misericorde", label: "La miséricorde d&apos;Allah" },
  { id: "repentir-pardon", label: "Le repentir et le pardon" },
  { id: "amour-allah", label: "L&apos;amour d&apos;Allah pour Son serviteur" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Qu&apos;est-ce qu&apos;un hadith qudsi en islam ?",
    answer:
      "Un hadith qudsi (aussi appelé hadith sacré ou divin) est une parole dont le sens provient d&apos;Allah et dont la formulation est celle du Prophète Muhammad ﷺ. Contrairement au Coran, le hadith qudsi n&apos;est pas considéré comme la parole littérale d&apos;Allah en termes de formulation, il ne fait pas partie du mushaf et sa récitation ne constitue pas un acte d&apos;adoration rituelle comme la récitation coranique.",
  },
  {
    question:
      "Quelle est la différence entre un hadith qudsi et le Coran ?",
    answer:
      "Le Coran est la parole d&apos;Allah dans son sens ET sa formulation, transmis par l&apos;ange Jibril, inimitable (i&apos;jaz), dont la récitation est un acte d&apos;adoration et qui est compilé dans le mushaf. Le hadith qudsi, lui, est un sens inspiré par Allah mais formulé par le Prophète ﷺ, transmis par des chaînes de narration classiques, et il peut être sahih, hasan ou daif selon l&apos;analyse des savants du hadith.",
  },
  {
    question:
      "Combien existe-t-il de hadiths qudsi ?",
    answer:
      "Les savants ont recensé environ 800 à 1000 hadiths qudsi, bien que ce nombre varie selon les compilations. L&apos;imam An-Nawawi en a rassemblé 40 dans son célèbre recueil &laquo; Al-Arba&apos;in an-Nawawiyya &raquo;, et Ibn &apos;Arabi al-Maliki en a compilé davantage. Parmi eux, un nombre significatif sont classés sahih ou hasan, tandis que d&apos;autres sont considérés comme faibles.",
  },
  {
    question:
      "Les hadiths qudsi sont-ils tous authentiques ?",
    answer:
      "Non, les hadiths qudsi sont soumis aux mêmes critères de vérification que les hadiths prophétiques ordinaires. Ils peuvent être classés sahih (authentique), hasan (bon) ou daif (faible) selon l&apos;analyse de la chaîne de transmission (isnad) et du contenu (matn). Les savants du hadith comme Al-Bukhari, Muslim et At-Tirmidhi ont inclus certains hadiths qudsi dans leurs recueils après vérification rigoureuse.",
  },
  {
    question:
      "Peut-on réciter un hadith qudsi dans la prière ?",
    answer:
      "Non, contrairement au Coran, le hadith qudsi ne peut pas être récité dans la prière rituelle (salat). La récitation dans la prière est réservée exclusivement aux versets du Coran. Cependant, les hadiths qudsi peuvent être médités, enseignés, rapportés et utilisés dans les invocations (douas) en dehors de la prière.",
  },
  {
    question:
      "Quel est le hadith qudsi le plus célèbre ?",
    answer:
      "Parmi les hadiths qudsi les plus célèbres figure celui rapporté par Abu Hurayra dans lequel Allah dit : &laquo; Je suis tel que Mon serviteur pense de Moi, et Je suis avec lui lorsqu&apos;il Me mentionne &raquo; (Bukhari 7405, Muslim 2675). Ce hadith est considéré comme l&apos;un des plus importants car il établit le principe de la bonne opinion envers Allah et l&apos;espérance en Sa miséricorde.",
  },
  {
    question:
      "Quels sont les thèmes principaux des hadiths qudsi ?",
    answer:
      "Les hadiths qudsi abordent principalement les thèmes suivants : la miséricorde d&apos;Allah, le repentir et le pardon, l&apos;amour d&apos;Allah pour Ses serviteurs, la récompense des bonnes actions, l&apos;interdiction de l&apos;associationnisme (shirk), la relation directe entre Allah et Son serviteur, et les bienfaits du dhikr (évocation d&apos;Allah). Ils se distinguent par un ton intime et personnel, Allah s&apos;adressant directement à Ses serviteurs.",
  },
];

export default function HadithQudsiIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-qudsi-islam/#article",
        headline:
          "Hadiths qudsi : paroles divines rapportées par le Prophète ﷺ en islam",
        description:
          "Découvrez les hadiths qudsi (sacrés) en islam : définition, différence avec le Coran, exemples authentiques sur la miséricorde, le repentir et l&apos;amour d&apos;Allah.",
        image: "/images/calligraphie-allah-islam-coeur-bois.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-qudsi-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-qudsi-islam/#breadcrumb",
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
            name: "Hadiths qudsi",
            item: "https://www.islamreligion.fr/hadith-qudsi-islam",
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
          title="Hadiths qudsi : paroles divines en islam"
          subtitle="Les hadiths qudsi (sacrés) sont des paroles dont le sens provient d&apos;Allah, rapportées par le Prophète Muhammad ﷺ. Découvrez ces textes sur la miséricorde, le repentir et l&apos;amour divin."
          imageSrc="/images/calligraphie-allah-islam-coeur-bois.jpg"
          imageAlt="Hadiths qudsi en islam, paroles divines rapportées par le Prophète"
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
                  Hadiths qudsi
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
                    Les hadiths qudsi sont des paroles dont le sens vient d&apos;Allah, formulées par le Prophète ﷺ, à distinguer du Coran qui est la parole littérale d&apos;Allah.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Ils révèlent la miséricorde immense d&apos;Allah envers Ses serviteurs : &laquo; Ma miséricorde précède Ma colère &raquo; (Bukhari 7404).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le repentir sincère est toujours accepté par Allah, quel que soit le nombre de péchés, tant que le serviteur revient à Lui avec sincérité.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Allah aime Ses serviteurs pieux et les rapproche de Lui par les actes surérogatoires après les obligations.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique des hadiths qudsi
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;explorer les hadiths qudsi, il est essentiel de comprendre le cadre coranique dans lequel s&apos;inscrit la communication divine. Allah s&apos;adresse aux hommes de plusieurs manières : par le Coran (Sa parole littérale), par l&apos;inspiration faite au Prophète ﷺ, et par les hadiths qudsi où Il parle à la première personne à travers Son Messager. Le Coran lui-même évoque cette communication directe entre Allah et Ses serviteurs, établissant les fondements théologiques de la parole divine.
                </p>

                <HadithCard
                  arabic="وَمَا كَانَ لِبَشَرٍ أَن يُكَلِّمَهُ اللَّهُ إِلَّا وَحْيًا أَوْ مِن وَرَاءِ حِجَابٍ أَوْ يُرْسِلَ رَسُولًا فَيُوحِيَ بِإِذْنِهِ مَا يَشَاءُ"
                  text="Il n&apos;a pas été donné à un mortel qu&apos;Allah lui parle autrement que par révélation, ou de derrière un voile, ou qu&apos;Il envoie un messager qui révèle, par Sa permission, ce qu&apos;Il veut."
                  source="Coran, sourate Ash-Shura (42:51)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondateur décrit les trois modes de communication divine : la révélation directe (<em>wahy</em>), la parole de derrière un voile (comme Allah parla à Musa), et l&apos;envoi d&apos;un ange messager. Les hadiths qudsi relèvent de la première catégorie : une inspiration divine dont le sens est attribué à Allah, mais dont la formulation passe par le Prophète ﷺ. Comprendre cette distinction est essentiel pour saisir le statut unique des hadiths qudsi dans les sciences islamiques. Pour approfondir la relation entre le Coran et la Sunna, consultez notre article sur{" "}
                  <Link href="/hadith-coran-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    le lien entre hadith et Coran en islam
                  </Link>.
                </p>
              </section>

              {/* ============================================= */}
              {/* SECTION : Définition du hadith qudsi          */}
              {/* ============================================= */}
              <section id="definition-hadith-qudsi" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Qu&apos;est-ce qu&apos;un hadith qudsi ? Définition et différence avec le Coran
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le terme <em>qudsi</em> vient de la racine arabe <em>qudus</em> qui signifie &laquo; sacré &raquo; ou &laquo; saint &raquo;. Un hadith qudsi est donc un &laquo; hadith sacré &raquo; : une parole que le Prophète ﷺ rapporte en l&apos;attribuant directement à Allah. La formule d&apos;introduction typique est : &laquo; Allah — Exalté soit-Il — a dit &raquo; (<em>qala Allahu ta&apos;ala</em>), suivie de la parole divine à la première personne. Contrairement au Coran, le hadith qudsi n&apos;est pas inimitable (<em>mu&apos;jiz</em>), n&apos;est pas récité dans la prière et n&apos;est pas compilé dans le mushaf. Sa chaîne de transmission (<em>isnad</em>) est évaluée selon les mêmes critères que les hadiths prophétiques classiques, ce qui signifie qu&apos;un hadith qudsi peut être sahih, hasan ou daif. Pour mieux comprendre les sciences du hadith et les critères d&apos;authenticité, consultez notre article sur{" "}
                  <Link href="/hadith-definition-sciences-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    la définition et les sciences du hadith en islam
                  </Link>.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants distinguent ainsi trois catégories de paroles attribuées à Allah : le Coran (parole d&apos;Allah en sens et en formulation, transmis par Jibril, inimitable et récité dans la prière), le hadith qudsi (sens d&apos;Allah, formulation du Prophète ﷺ, non récité dans la prière) et le hadith nabawi (parole du Prophète ﷺ issue de son ijtihad inspiré). Voici deux exemples fondateurs de hadiths qudsi :
                </p>

                <HadithBlock
                  number={1}
                  title="Allah a prescrit la bienfaisance en toute chose"
                  narrator="Shaddad ibn Aws"
                  arabic="إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ فَإِذَا قَتَلْتُمْ فَأَحْسِنُوا الْقِتْلَةَ وَإِذَا ذَبَحْتُمْ فَأَحْسِنُوا الذَّبْحَ وَلْيُحِدَّ أَحَدُكُمْ شَفْرَتَهُ وَلْيُرِحْ ذَبِيحَتَهُ"
                  translation="Certes, Allah a prescrit l&apos;excellence (ihsan) en toute chose. Lorsque vous tuez, faites-le de la meilleure manière, et lorsque vous égorgez, faites-le de la meilleure manière. Que chacun de vous aiguise sa lame et qu&apos;il soulage sa bête."
                  source="Sahih Muslim, n°1955"
                  grade="sahih"
                  explanation="Ce hadith qudsi établit un principe universel : l&apos;ihsan (excellence) doit s&apos;appliquer en toute circonstance, même dans les actes les plus difficiles. Allah a prescrit la bienfaisance comme une loi divine englobante. Le Prophète ﷺ illustre ce principe avec l&apos;exemple de l&apos;abattage rituel, montrant que la miséricorde islamique s&apos;étend même aux animaux. Ce hadith est fondamental dans la compréhension de l&apos;éthique islamique."
                />

                <HadithBlock
                  number={2}
                  title="Je suis tel que Mon serviteur pense de Moi"
                  narrator="Abu Hurayra"
                  arabic="أَنَا عِنْدَ ظَنِّ عَبْدِي بِي وَأَنَا مَعَهُ إِذَا ذَكَرَنِي فَإِنْ ذَكَرَنِي فِي نَفْسِهِ ذَكَرْتُهُ فِي نَفْسِي وَإِنْ ذَكَرَنِي فِي مَلَإٍ ذَكَرْتُهُ فِي مَلَإٍ خَيْرٍ مِنْهُمْ"
                  translation="Je suis tel que Mon serviteur pense de Moi, et Je suis avec lui lorsqu&apos;il Me mentionne. S&apos;il Me mentionne en lui-même, Je le mentionne en Moi-même. Et s&apos;il Me mentionne dans une assemblée, Je le mentionne dans une assemblée meilleure."
                  source="Sahih Al-Bukhari, n°7405 — Sahih Muslim, n°2675"
                  grade="sahih"
                  explanation="Ce hadith qudsi, parmi les plus célèbres, révèle la proximité d&apos;Allah avec Son serviteur. Le &laquo; bon soupçon &raquo; (husn al-dhann) envers Allah est un pilier de la foi : celui qui espère la miséricorde d&apos;Allah la trouvera. La réciprocité du dhikr est extraordinaire : Allah mentionne le croyant qui Le mentionne, et dans une assemblée supérieure (celle des anges). Ce hadith encourage le croyant à entretenir une relation intime et confiante avec son Seigneur."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Miséricorde          */}
              {/* ============================== */}
              <section id="misericorde" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La miséricorde d&apos;Allah dans les hadiths qudsi
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La miséricorde (<em>rahma</em>) est le thème le plus récurrent dans les hadiths qudsi. Allah y dévoile l&apos;étendue immense de Sa clémence, dépassant de loin l&apos;imagination humaine. Ces paroles divines montrent que la miséricorde d&apos;Allah n&apos;est pas un attribut passif, mais une réalité active qui précède Sa colère et enveloppe toute la création. Le Prophète ﷺ rapportait ces hadiths pour raviver l&apos;espérance dans le cœur des croyants.
                </p>

                <HadithBlock
                  number={3}
                  title="Ma miséricorde précède Ma colère"
                  narrator="Abu Hurayra"
                  arabic="لَمَّا قَضَى اللَّهُ الْخَلْقَ كَتَبَ فِي كِتَابِهِ فَهُوَ عِنْدَهُ فَوْقَ الْعَرْشِ إِنَّ رَحْمَتِي سَبَقَتْ غَضَبِي"
                  translation="Lorsqu&apos;Allah a achevé la création, Il a écrit dans Son Livre — qui est auprès de Lui au-dessus du Trône — : &laquo; Ma miséricorde précède (l&apos;emporte sur) Ma colère. &raquo;"
                  source="Sahih Al-Bukhari, n°7404 — Sahih Muslim, n°2751"
                  grade="sahih"
                  explanation="Ce hadith qudsi est l&apos;un des plus importants sur la nature d&apos;Allah. La miséricorde n&apos;est pas simplement un attribut parmi d&apos;autres : elle précède et domine la colère. Allah a inscrit cela dans un Livre avant même la création, comme un engagement divin envers Ses créatures. Les savants expliquent que ce hadith est la source de l&apos;espérance (raja&apos;) dans le cœur du croyant, qui ne doit jamais désespérer de la miséricorde d&apos;Allah, tout en ne négligeant pas Sa crainte."
                />

                <HadithBlock
                  number={4}
                  title="Allah a divisé la miséricorde en cent parts"
                  narrator="Abu Hurayra"
                  arabic="إِنَّ اللَّهَ خَلَقَ الرَّحْمَةَ يَوْمَ خَلَقَهَا مِائَةَ رَحْمَةٍ فَأَمْسَكَ عِنْدَهُ تِسْعًا وَتِسْعِينَ رَحْمَةً وَأَرْسَلَ فِي خَلْقِهِ كُلِّهِمْ رَحْمَةً وَاحِدَةً"
                  translation="Allah a créé la miséricorde en cent parts le jour où Il l&apos;a créée. Il en a retenu auprès de Lui quatre-vingt-dix-neuf parts et en a envoyé une seule part dans toute Sa création."
                  source="Sahih Muslim, n°2752"
                  grade="sahih"
                  explanation="Ce hadith met en perspective la miséricorde divine d&apos;une manière saisissante. Toute la compassion qui existe sur terre — la tendresse d&apos;une mère pour son enfant, la pitié entre les créatures, la solidarité entre les êtres — ne représente qu&apos;un centième de la miséricorde d&apos;Allah. Les quatre-vingt-dix-neuf parts restantes sont réservées pour le Jour de la Résurrection, lorsque les serviteurs en auront le plus besoin. Ce hadith enseigne au croyant de ne jamais désespérer, car la miséricorde d&apos;Allah dépasse infiniment ce qu&apos;il peut imaginer."
                />

                <HadithBlock
                  number={5}
                  title="Allah se réjouit du repentir de Son serviteur"
                  narrator="Anas ibn Malik"
                  arabic="لَلَّهُ أَشَدُّ فَرَحًا بِتَوْبَةِ عَبْدِهِ حِينَ يَتُوبُ إِلَيْهِ مِنْ أَحَدِكُمْ كَانَ عَلَى رَاحِلَتِهِ بِأَرْضِ فَلَاةٍ فَانْفَلَتَتْ مِنْهُ وَعَلَيْهَا طَعَامُهُ وَشَرَابُهُ فَأَيِسَ مِنْهَا"
                  translation="Allah se réjouit davantage du repentir de Son serviteur lorsqu&apos;il se repent vers Lui, que l&apos;un de vous qui était sur sa monture dans une terre désertique, et elle lui a échappé alors qu&apos;elle portait sa nourriture et sa boisson, et il en a désespéré."
                  source="Sahih Muslim, n°2747"
                  grade="sahih"
                  explanation="Ce hadith utilise une image puissante pour illustrer la joie d&apos;Allah lorsqu&apos;un serviteur se repent. Imaginez un voyageur dans le désert qui perd sa monture avec toutes ses provisions et se prépare à mourir : lorsqu&apos;il la retrouve, sa joie est indescriptible. Allah se réjouit davantage encore du repentir de Son serviteur. Cette comparaison montre qu&apos;Allah n&apos;est pas un Seigneur distant qui attend de punir, mais un Seigneur miséricordieux qui accueille le retour de Son serviteur avec une joie immense."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths qudsi sur la miséricorde forment un ensemble cohérent. Ils révèlent qu&apos;Allah a fait de la miséricorde un attribut dominant, qu&apos;Il l&apos;a répandue dans la création et qu&apos;Il accueille avec joie le retour de Son serviteur. Pour découvrir d&apos;autres hadiths prophétiques, consultez notre page{" "}
                  <Link href="/hadith-du-jour" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadith du jour
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez les sciences du hadith, la théologie islamique et la spiritualité avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Repentir et pardon   */}
              {/* ============================== */}
              <section id="repentir-pardon" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le repentir et le pardon dans les hadiths qudsi
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le repentir (<em>tawba</em>) occupe une place centrale dans les hadiths qudsi. Allah y invite Ses serviteurs à revenir vers Lui, quel que soit le poids de leurs péchés. Ces paroles divines brisent le désespoir et ouvrent la porte de l&apos;espérance, montrant qu&apos;aucun péché n&apos;est trop grand pour être pardonné lorsque le repentir est sincère. Le pardon d&apos;Allah dans les hadiths qudsi n&apos;est conditionné que par la sincérité du cœur et l&apos;abandon du péché.
                </p>

                <HadithBlock
                  number={6}
                  title="Ô fils d&apos;Adam, si tes péchés atteignaient les nuages du ciel"
                  narrator="Anas ibn Malik"
                  arabic="يَا ابْنَ آدَمَ إِنَّكَ مَا دَعَوْتَنِي وَرَجَوْتَنِي غَفَرْتُ لَكَ عَلَى مَا كَانَ فِيكَ وَلَا أُبَالِي يَا ابْنَ آدَمَ لَوْ بَلَغَتْ ذُنُوبُكَ عَنَانَ السَّمَاءِ ثُمَّ اسْتَغْفَرْتَنِي غَفَرْتُ لَكَ"
                  translation="Ô fils d&apos;Adam, tant que tu M&apos;invoques et que tu espères en Moi, Je te pardonnerai ce que tu as fait, et Je ne M&apos;en soucie pas. Ô fils d&apos;Adam, si tes péchés atteignaient les nuages du ciel puis que tu Me demandais pardon, Je te pardonnerais."
                  source="Jami&apos; at-Tirmidhi, n°3540"
                  grade="hasan"
                  explanation="Ce hadith qudsi est d&apos;une portée immense : Allah promet le pardon à quiconque L&apos;invoque avec espérance, même si ses péchés remplissaient l&apos;espace entre la terre et le ciel. La condition est double : l&apos;invocation (doua) et l&apos;espérance (raja&apos;). Ce hadith combat le désespoir que Shaytan tente d&apos;insuffler dans le cœur du pécheur. Les savants précisent que ce pardon est conditionné par le repentir sincère et l&apos;abandon du shirk (associationnisme)."
                />

                <HadithBlock
                  number={7}
                  title="Mon serviteur a commis un péché et a su qu&apos;il a un Seigneur"
                  narrator="Abu Hurayra"
                  arabic="أَذْنَبَ عَبْدٌ ذَنْبًا فَقَالَ اللَّهُمَّ اغْفِرْ لِي ذَنْبِي فَقَالَ تَبَارَكَ وَتَعَالَى أَذْنَبَ عَبْدِي ذَنْبًا فَعَلِمَ أَنَّ لَهُ رَبًّا يَغْفِرُ الذَّنْبَ وَيَأْخُذُ بِالذَّنْبِ"
                  translation="Un serviteur a commis un péché et a dit : &laquo; Ô Allah, pardonne-moi mon péché. &raquo; Allah — Béni et Exalté — a dit : &laquo; Mon serviteur a commis un péché et a su qu&apos;il a un Seigneur qui pardonne le péché et qui punit pour le péché. &raquo;"
                  source="Sahih Al-Bukhari, n°7507 — Sahih Muslim, n°2758"
                  grade="sahih"
                  explanation="Ce hadith qudsi raconte l&apos;histoire d&apos;un serviteur qui pèche, se repent, pèche à nouveau, se repent encore, et ainsi de suite. À chaque fois, Allah le pardonne en disant : &laquo; Mon serviteur sait qu&apos;il a un Seigneur qui pardonne. &raquo; L&apos;enseignement est profond : ce n&apos;est pas la rechute qui éloigne d&apos;Allah, mais l&apos;abandon du repentir. Tant que le serviteur revient à Allah après chaque péché, reconnaissant sa faute et la grandeur de son Seigneur, la porte du pardon reste ouverte."
                />

                <HadithBlock
                  number={8}
                  title="Ô Mes serviteurs, vous péchez de nuit et de jour"
                  narrator="Abu Dharr"
                  arabic="يَا عِبَادِي إِنَّكُمْ تُخْطِئُونَ بِاللَّيْلِ وَالنَّهَارِ وَأَنَا أَغْفِرُ الذُّنُوبَ جَمِيعًا فَاسْتَغْفِرُونِي أَغْفِرْ لَكُمْ"
                  translation="Ô Mes serviteurs, vous péchez de nuit et de jour, et Je pardonne tous les péchés. Demandez-Moi donc pardon, Je vous pardonnerai."
                  source="Sahih Muslim, n°2577"
                  grade="sahih"
                  explanation="Ce passage fait partie du long hadith qudsi rapporté par Abu Dharr, l&apos;un des plus complets sur la relation entre Allah et Ses serviteurs. Allah y reconnaît la faiblesse humaine — les hommes pèchent constamment — mais Il offre le remède : l&apos;istighfar (demande de pardon). La formule est simple et directe : demandez pardon, et vous serez pardonnés. Les savants soulignent que ce hadith prouve que le pardon d&apos;Allah n&apos;a pas de limite quantitative, tant que le serviteur revient sincèrement vers Lui."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Amour d&apos;Allah   */}
              {/* ============================== */}
              <section id="amour-allah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;amour d&apos;Allah pour Son serviteur dans les hadiths qudsi
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les hadiths qudsi ne parlent pas seulement de miséricorde et de pardon : ils révèlent aussi l&apos;amour (<em>mahabbah</em>) d&apos;Allah pour Ses serviteurs pieux. Cet amour divin n&apos;est pas une métaphore, mais une réalité affirmée par Allah Lui-même. Les hadiths suivants montrent comment le serviteur peut atteindre cet amour et quelles en sont les conséquences extraordinaires.
                </p>

                <HadithBlock
                  number={9}
                  title="Le hadith des awliya : Mon serviteur ne cesse de se rapprocher de Moi"
                  narrator="Abu Hurayra"
                  arabic="مَنْ عَادَى لِي وَلِيًّا فَقَدْ آذَنْتُهُ بِالْحَرْبِ وَمَا تَقَرَّبَ إِلَيَّ عَبْدِي بِشَيْءٍ أَحَبَّ إِلَيَّ مِمَّا افْتَرَضْتُ عَلَيْهِ وَمَا يَزَالُ عَبْدِي يَتَقَرَّبُ إِلَيَّ بِالنَّوَافِلِ حَتَّى أُحِبَّهُ فَإِذَا أَحْبَبْتُهُ كُنْتُ سَمْعَهُ الَّذِي يَسْمَعُ بِهِ وَبَصَرَهُ الَّذِي يُبْصِرُ بِهِ"
                  translation="Quiconque montre de l&apos;hostilité à l&apos;un de Mes alliés (wali), Je lui déclare la guerre. Mon serviteur ne se rapproche pas de Moi par quelque chose de plus aimé de Moi que ce que Je lui ai prescrit. Et Mon serviteur ne cesse de se rapprocher de Moi par les actes surérogatoires jusqu&apos;à ce que Je l&apos;aime. Et lorsque Je l&apos;aime, Je deviens son ouïe par laquelle il entend, sa vue par laquelle il voit."
                  source="Sahih Al-Bukhari, n°6502"
                  grade="sahih"
                  explanation="Ce hadith qudsi, connu comme le &laquo; hadith des awliya &raquo;, est considéré par les savants comme l&apos;un des hadiths les plus importants de l&apos;islam. Il décrit le cheminement spirituel : d&apos;abord les obligations (fara&apos;id), puis les actes surérogatoires (nawafil) qui rapprochent progressivement le serviteur d&apos;Allah jusqu&apos;à obtenir Son amour. Lorsqu&apos;Allah aime un serviteur, Il guide ses sens et ses actes. Les savants expliquent que cela ne signifie pas l&apos;incarnation divine, mais que le serviteur n&apos;agit plus que selon ce qui plaît à Allah."
                />

                <HadithBlock
                  number={10}
                  title="Lorsqu&apos;Allah aime un serviteur, Il appelle Jibril"
                  narrator="Abu Hurayra"
                  arabic="إِنَّ اللَّهَ إِذَا أَحَبَّ عَبْدًا دَعَا جِبْرِيلَ فَقَالَ إِنِّي أُحِبُّ فُلَانًا فَأَحِبَّهُ فَيُحِبُّهُ جِبْرِيلُ ثُمَّ يُنَادِي فِي السَّمَاءِ فَيَقُولُ إِنَّ اللَّهَ يُحِبُّ فُلَانًا فَأَحِبُّوهُ فَيُحِبُّهُ أَهْلُ السَّمَاءِ ثُمَّ يُوضَعُ لَهُ الْقَبُولُ فِي الْأَرْضِ"
                  translation="Lorsqu&apos;Allah aime un serviteur, Il appelle Jibril et dit : &laquo; J&apos;aime untel, aime-le donc. &raquo; Jibril l&apos;aime, puis il proclame dans le ciel : &laquo; Allah aime untel, aimez-le donc. &raquo; Les habitants du ciel l&apos;aiment, puis l&apos;acceptation est placée pour lui sur terre."
                  source="Sahih Al-Bukhari, n°3209 — Sahih Muslim, n°2637"
                  grade="sahih"
                  explanation="Ce hadith qudsi révèle la conséquence concrète de l&apos;amour divin : lorsqu&apos;Allah aime un serviteur, cet amour se propage dans les cieux par l&apos;intermédiaire de Jibril et des anges, puis se manifeste sur terre par &laquo; l&apos;acceptation &raquo; (al-qabul). Les gens ressentent naturellement de l&apos;affection et du respect pour cette personne, sans savoir pourquoi. Ce hadith montre que la véritable popularité et l&apos;estime des gens ne s&apos;obtiennent pas par les moyens mondains, mais par la proximité avec Allah."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces deux hadiths qudsi sur l&apos;amour d&apos;Allah montrent que la spiritualité islamique n&apos;est pas une démarche abstraite : elle a des effets concrets dans la vie du croyant. Le serviteur aimé d&apos;Allah est guidé dans ses choix et accepté parmi les hommes. Pour découvrir d&apos;autres enseignements du Prophète ﷺ, consultez notre article sur{" "}
                  <Link href="/hadith-prophete-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    les hadiths du Prophète Muhammad ﷺ
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur les hadiths qudsi
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont analysé les hadiths qudsi sous les angles théologique, juridique et spirituel. Leurs commentaires éclairent la portée de ces paroles divines et leur place dans les sciences islamiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith qudsi se distingue du Coran en ce que le Coran est la parole d&apos;Allah dans son sens et dans sa lettre, transmis par voie de tawatur, dont la récitation est un acte d&apos;adoration. Le hadith qudsi, lui, est un sens attribué à Allah dont la formulation appartient au Prophète ﷺ. Il n&apos;est ni inimitable ni récité dans la prière.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam As-Suyuti, <em>Al-Itqan fi &apos;Ulum al-Qur&apos;an</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith des awliya (Bukhari 6502) est l&apos;un des hadiths les plus nobles. Il montre que le chemin vers Allah commence par les obligations, puis se parfait par les actes surérogatoires. Les obligations sont comme le fondement, et les nawafil sont comme l&apos;édifice qui s&apos;élève dessus. Celui qui néglige les fondations ne peut prétendre à l&apos;édifice.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Rajab al-Hanbali, <em>Jami&apos; al-&apos;Ulum wa al-Hikam</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La parole d&apos;Allah &laquo; Ma miséricorde précède Ma colère &raquo; est un principe fondateur de la relation entre Allah et Ses créatures. Elle signifie que la miséricorde est l&apos;attribut premier dans le traitement divin des serviteurs. Le châtiment n&apos;intervient qu&apos;après épuisement des excuses et persistance dans la désobéissance.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires savants montrent que les hadiths qudsi occupent une place unique dans les sciences islamiques. Ils ne sont ni du Coran ni de simples hadiths prophétiques : ils constituent une catégorie à part, où Allah s&apos;adresse directement à Ses serviteurs à travers la voix du Prophète ﷺ.
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
                  L&apos;ensemble des hadiths qudsi présentés dans cet article permet de dégager des leçons concrètes pour la vie spirituelle du musulman :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Avoir une bonne opinion d&apos;Allah en toute circonstance
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Allah est tel que Son serviteur pense de Lui. Celui qui espère en Sa miséricorde la trouvera. La bonne opinion envers Allah est un fondement de la foi qui influence toute la vie spirituelle du croyant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne jamais désespérer de la miséricorde d&apos;Allah
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Même si les péchés atteignent les nuages du ciel, la porte du pardon reste ouverte. Le désespoir de la miséricorde d&apos;Allah est lui-même un péché majeur que les hadiths qudsi viennent combattre.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Pratiquer l&apos;istighfar régulièrement
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La demande de pardon (istighfar) est le remède prescrit par Allah dans les hadiths qudsi. Le Prophète ﷺ lui-même demandait pardon à Allah plus de soixante-dix fois par jour, bien qu&apos;il fût préservé du péché.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Commencer par les obligations avant les actes surérogatoires
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le hadith des awliya enseigne que les fara&apos;id (obligations) sont plus aimées d&apos;Allah que les nawafil. Le cheminement spirituel commence par l&apos;accomplissement rigoureux des cinq piliers avant de se tourner vers les actes volontaires.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Multiplier le dhikr pour se rapprocher d&apos;Allah
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Allah mentionne celui qui Le mentionne. Le dhikr (évocation d&apos;Allah) est un moyen direct et accessible de proximité divine, que ce soit en soi-même ou dans une assemblée. Les hadiths qudsi montrent qu&apos;Allah répond au dhikr par un dhikr supérieur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Rechercher l&apos;amour d&apos;Allah par la constance
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        L&apos;amour d&apos;Allah ne s&apos;obtient pas par un acte unique mais par la persévérance : &laquo; Mon serviteur ne cesse de se rapprocher de Moi. &raquo; La régularité dans les bonnes actions, même modestes, est plus aimée d&apos;Allah que les grands actes sporadiques.
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
                  description="Comprenez les hadiths qudsi dans leur langue originale et approfondissez votre connaissance des sciences islamiques."
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
                  title="Définition et sciences du hadith en islam"
                  description="Comprendre les sciences du hadith : isnad, matn, classification et méthodologie des savants."
                  href="/hadith-definition-sciences-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le lien entre hadith et Coran en islam"
                  description="Comment le hadith explique, complète et précise les enseignements du Coran."
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