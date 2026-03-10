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
    "Sahih Al-Bukhari : le recueil de hadiths le plus authentique en islam",
  description:
    "Découvrez le Sahih Al-Bukhari : biographie de l\u2019imam Al-Bukhari, méthodologie du recueil, hadiths célèbres avec texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Sahih Al-Bukhari : le recueil de hadiths le plus authentique en islam",
    description:
      "Le Sahih Al-Bukhari : biographie de l\u2019imam, méthodologie rigoureuse, hadiths authentiques avec texte arabe et explication. Le recueil le plus fiable en islam.",
    url: "https://www.islamreligion.fr/hadith-bukhari-islam",
    images: [
      {
        url: "/images/coran-ouvert-chapelet-bois-islam-versets.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-bukhari-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique" },
  { id: "biographie-bukhari", label: "Biographie de l\u2019imam Al-Bukhari" },
  { id: "methodologie-sahih", label: "La méthodologie du Sahih" },
  { id: "themes-majeurs", label: "Les thèmes majeurs du Sahih" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Qu\u2019est-ce que le Sahih Al-Bukhari et pourquoi est-il si important ?",
    answer:
      "Le Sahih Al-Bukhari est le recueil de hadiths compilé par l\u2019imam Muhammad ibn Isma\u2019il al-Bukhari (810-870). Il est considéré par la majorité des savants sunnites comme le livre le plus authentique après le Coran. Al-Bukhari a sélectionné environ 7 275 hadiths (avec répétitions) parmi 600 000 qu\u2019il avait mémorisés, en appliquant les critères d\u2019authenticité les plus stricts jamais établis dans la science du hadith.",
  },
  {
    question:
      "Combien de hadiths contient le Sahih Al-Bukhari ?",
    answer:
      "Le Sahih Al-Bukhari contient environ 7 275 hadiths avec les répétitions, et environ 2 602 hadiths sans les répétitions (selon le décompte d\u2019Ibn Hajar al-Asqalani). Le recueil est organisé en 97 livres (kutub) couvrant tous les aspects de la vie du musulman : la foi, la prière, le jeûne, le pèlerinage, les transactions commerciales, le mariage, le jihad, le tafsir et bien d\u2019autres sujets.",
  },
  {
    question:
      "Quelle est la différence entre le Sahih Al-Bukhari et le Sahih Muslim ?",
    answer:
      "Les deux recueils sont considérés comme les plus authentiques (as-Sahihayn). La majorité des savants placent le Sahih Al-Bukhari au premier rang en termes d\u2019authenticité, car Al-Bukhari exigeait que chaque transmetteur ait rencontré celui dont il rapporte le hadith (liqa\u2019), tandis que Muslim se contentait de la contemporanéité (mu\u2019asara). Cependant, certains savants, comme Abu Ali an-Naysaburi, considèrent la méthodologie de Muslim plus rigoureuse dans l\u2019organisation.",
  },
  {
    question:
      "Qui était l\u2019imam Al-Bukhari ?",
    answer:
      "Muhammad ibn Isma\u2019il al-Bukhari est né à Boukhara (actuel Ouzbékistan) en 194 H (810 ap. J.-C.). Orphelin de père très jeune, il a mémorisé le Coran et des milliers de hadiths dès l\u2019enfance. Il a voyagé pendant 16 ans à travers le monde musulman pour collecter des hadiths auprès de plus de 1 000 cheikhs. Il est décédé en 256 H (870 ap. J.-C.) à Khartank, près de Samarkand.",
  },
  {
    question:
      "Comment Al-Bukhari vérifiait-il l\u2019authenticité des hadiths ?",
    answer:
      "Al-Bukhari appliquait cinq conditions strictes : la chaîne de transmission (isnad) devait être continue, chaque transmetteur devait être juste (\u2019adl) et précis (dabt), il ne devait y avoir ni anomalie (shudhudh) ni défaut caché (\u2019illa), et surtout chaque maillon de la chaîne devait avoir personnellement rencontré le précédent. Il effectuait la prière de l\u2019istikhara avant d\u2019inclure chaque hadith et ne les inscrivait qu\u2019en état de pureté rituelle.",
  },
  {
    question:
      "Tous les hadiths du Sahih Al-Bukhari sont-ils considérés comme sahih ?",
    answer:
      "Oui, la communauté savante sunnite a accepté par consensus (ijma\u2019) que tous les hadiths contenus dans le corps principal du Sahih Al-Bukhari sont authentiques (sahih). Cependant, les commentaires suspendus (ta\u2019liqat) que l\u2019imam Al-Bukhari mentionne parfois dans les titres de chapitres n\u2019ont pas tous le même degré d\u2019authenticité et ont été étudiés séparément par Ibn Hajar dans son Taghliq at-Ta\u2019liq.",
  },
  {
    question:
      "Quel est le meilleur commentaire du Sahih Al-Bukhari ?",
    answer:
      "Le commentaire le plus célèbre et le plus complet est le Fath al-Bari fi Sharh Sahih al-Bukhari de l\u2019imam Ibn Hajar al-Asqalani (mort en 852 H). Ce commentaire en 13 volumes est considéré comme une encyclopédie du hadith et du fiqh. D\u2019autres commentaires importants incluent \u2019Umdat al-Qari de Badr ad-Din al-\u2019Ayni et Irshad as-Sari d\u2019al-Qastallani.",
  },
];

export default function HadithBukhariIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-bukhari-islam/#article",
        headline:
          "Sahih Al-Bukhari : le recueil de hadiths le plus authentique en islam",
        description:
          "Découvrez le Sahih Al-Bukhari : biographie de l\u2019imam Al-Bukhari, méthodologie du recueil, hadiths célèbres avec texte arabe, traduction et explication détaillée.",
        image: "/images/coran-ouvert-chapelet-bois-islam-versets.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-bukhari-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-bukhari-islam/#breadcrumb",
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
            name: "Sahih Al-Bukhari",
            item: "https://www.islamreligion.fr/hadith-bukhari-islam",
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
          title="Sahih Al-Bukhari : le recueil de hadiths le plus authentique en islam"
          subtitle="Découvrez la vie de l&apos;imam Al-Bukhari, sa méthodologie rigoureuse et les hadiths les plus célèbres de son recueil avec texte arabe, traduction et explication détaillée."
          imageSrc="/images/coran-ouvert-chapelet-bois-islam-versets.jpg"
          imageAlt="Sahih Al-Bukhari, recueil de hadiths authentiques en islam"
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
                  Sahih Al-Bukhari
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
                    Le Sahih Al-Bukhari est considéré par les savants sunnites comme le livre le plus authentique après le Coran.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    L&apos;imam Al-Bukhari a sélectionné environ 7 275 hadiths parmi 600 000 qu&apos;il avait mémorisés, en appliquant des critères d&apos;une rigueur inégalée.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Chaque hadith du recueil a été vérifié par une chaîne de transmission (isnad) continue et des transmetteurs reconnus pour leur probité et leur précision.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le recueil couvre tous les domaines de la vie du musulman : foi, prière, jeûne, pèlerinage, transactions, mariage et bien plus encore.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique : la préservation du savoir en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder le Sahih Al-Bukhari, il convient de rappeler que la préservation du savoir religieux est un commandement coranique. Allah a garanti la protection de Sa révélation et a exhorté les croyants à vérifier les informations, à témoigner avec exactitude et à transmettre la science avec rigueur. C&apos;est sur ces fondements que repose toute la science du hadith (<em>ulum al-hadith</em>) dont le Sahih Al-Bukhari constitue le sommet.
                </p>

                <HadithCard
                  arabic="إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ"
                  text="En vérité, c&apos;est Nous qui avons fait descendre le Rappel (le Coran), et c&apos;est Nous qui en sommes le gardien."
                  source="Coran, sourate Al-Hijr (15:9)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondamental établit le principe de la préservation divine du message. Les savants expliquent que cette préservation englobe non seulement le texte coranique, mais aussi la Sunna qui l&apos;explique et le met en pratique. Car sans la Sunna, de nombreux versets resteraient sans application concrète. C&apos;est pourquoi Allah a suscité des hommes comme l&apos;imam Al-Bukhari pour préserver les paroles du Prophète ﷺ avec une rigueur scientifique exceptionnelle.
                </p>

                <HadithCard
                  arabic="يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا أَن تُصِيبُوا قَوْمًا بِجَهَالَةٍ فَتُصْبِحُوا عَلَىٰ مَا فَعَلْتُمْ نَادِمِينَ"
                  text="Ô vous qui avez cru ! Si un pervers vous apporte une nouvelle, vérifiez-la, de crainte que vous ne portiez atteinte à des gens par ignorance et que vous ne regrettiez par la suite ce que vous avez fait."
                  source="Coran, sourate Al-Hujurat (49:6)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset pose le principe fondamental de la vérification des informations (<em>tathabbut</em>). Les savants du hadith ont bâti toute leur méthodologie sur ce commandement divin : avant d&apos;accepter un hadith, il faut examiner la probité et la fiabilité de chaque transmetteur. L&apos;imam Al-Bukhari a poussé cette exigence à son paroxysme en imposant des conditions que nul compilateur avant lui n&apos;avait établies avec une telle précision.
                </p>
              </section>

              {/* ======================================== */}
              {/* SECTION : Biographie de l'imam Bukhari  */}
              {/* ======================================== */}
              <section id="biographie-bukhari" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Biographie de l&apos;imam Al-Bukhari
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Muhammad ibn Isma&apos;il ibn Ibrahim ibn al-Mughira al-Bukhari est né le 13 Shawwal 194 de l&apos;Hégire (21 juillet 810) à Boukhara, dans l&apos;actuel Ouzbékistan. Orphelin de père dès l&apos;enfance, il fut élevé par sa mère, une femme pieuse qui l&apos;encouragea dans la quête du savoir. Dès l&apos;âge de dix ans, il commença à mémoriser les hadiths et montra des capacités de mémorisation prodigieuses que ses contemporains qualifièrent de miraculeuses.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  À seize ans, Al-Bukhari accomplit le pèlerinage à La Mecque avec sa mère et son frère, puis décida de rester dans le Hijaz pour étudier auprès des grands cheikhs de La Mecque et de Médine. Il étudia notamment auprès de l&apos;imam Malik (via ses élèves), d&apos;Ahmad ibn Hanbal et d&apos;Ali ibn al-Madini, le plus grand spécialiste de l&apos;isnad de son époque. Pendant seize années, il parcourut le monde musulman — de l&apos;Égypte au Khorassan, de la Syrie à l&apos;Irak — collectant des hadiths auprès de plus de mille cheikhs.
                </p>

                <HadithBlock
                  number={1}
                  title="Les actes ne valent que par les intentions"
                  narrator="&apos;Umar ibn al-Khattab"
                  arabic="إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوِ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ"
                  translation="Les actes ne valent que par les intentions, et chaque homme n&apos;aura que ce qu&apos;il a eu comme intention. Celui dont l&apos;émigration est pour Allah et Son Messager, son émigration est pour Allah et Son Messager. Et celui dont l&apos;émigration est pour un bien de ce monde qu&apos;il veut atteindre ou pour une femme qu&apos;il veut épouser, son émigration est pour ce vers quoi il a émigré."
                  source="Sahih Al-Bukhari, n°1"
                  grade="sahih"
                  explanation="Ce hadith est le tout premier du Sahih Al-Bukhari, et ce choix n&apos;est pas anodin. L&apos;imam Al-Bukhari a délibérément ouvert son recueil par ce hadith pour rappeler que toute science, tout acte d&apos;adoration et toute œuvre ne sont acceptés par Allah que si l&apos;intention est pure. Les savants y voient un message à l&apos;adresse de l&apos;étudiant en sciences islamiques : avant de lire ce recueil, purifie ton intention. Ce hadith est considéré comme l&apos;un des quatre hadiths sur lesquels repose l&apos;ensemble de la religion, selon l&apos;imam Ahmad ibn Hanbal."
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;imam Al-Bukhari décida de compiler son recueil après avoir entendu son cheikh Ishaq ibn Rahawayh exprimer le souhait qu&apos;un savant rassemble les hadiths authentiques dans un seul ouvrage. Al-Bukhari raconte : &laquo;&nbsp;Ce mot tomba dans mon cœur, et je commençai alors à rassembler le Jami&apos; as-Sahih.&nbsp;&raquo; Il travailla sur son recueil pendant seize ans, effectuant la prière de l&apos;istikhara et deux unités de prière avant d&apos;inscrire chaque hadith.
                </p>

                <HadithBlock
                  number={2}
                  title="Celui qui emprunte un chemin pour rechercher la science"
                  narrator="Abu Hurayra"
                  arabic="مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ"
                  translation="Celui qui emprunte un chemin pour y rechercher une science, Allah lui facilitera par cela un chemin vers le Paradis."
                  source="Sahih Al-Bukhari, n°10 (chapitre du savoir, mu&apos;allaq) — Sahih Muslim, n°2699"
                  grade="sahih"
                  explanation="Ce hadith illustre parfaitement le parcours de l&apos;imam Al-Bukhari lui-même, qui a littéralement emprunté des milliers de chemins à travers le monde musulman pour collecter les hadiths. Sa vie entière fut consacrée à la recherche du savoir prophétique. Les savants rappellent que ce hadith englobe tout type de chemin vers la science : physique (voyager pour étudier), intellectuel (mémoriser et comprendre) et spirituel (agir selon ce que l&apos;on a appris). L&apos;imam Al-Bukhari incarne ces trois dimensions."
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Al-Bukhari est décédé dans la nuit du 1er Shawwal 256 de l&apos;Hégire (31 août 870) à Khartank, un village proche de Samarkand. Il laissa derrière lui un héritage intellectuel immense, dont le Sahih est la pièce maîtresse. Les savants de toutes les époques ont unanimement reconnu sa probité, sa mémoire exceptionnelle et la rigueur sans précédent de sa méthodologie.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Méthodologie         */}
              {/* ============================== */}
              <section id="methodologie-sahih" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La méthodologie du Sahih Al-Bukhari
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce qui distingue le Sahih Al-Bukhari de tous les autres recueils est la rigueur exceptionnelle de ses critères d&apos;acceptation. L&apos;imam Al-Bukhari n&apos;a pas inventé la science du hadith, mais il l&apos;a portée à un niveau d&apos;exigence jamais atteint avant lui. Ses cinq conditions d&apos;authenticité sont devenues la référence absolue en matière de critique du hadith.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les cinq conditions du Sahih Al-Bukhari sont les suivantes : premièrement, la chaîne de transmission (<em>isnad</em>) doit être continue (<em>muttasil</em>) du début à la fin, sans interruption. Deuxièmement, chaque transmetteur doit être juste (<em>&apos;adl</em>), c&apos;est-à-dire musulman, pubère, sain d&apos;esprit, exempt de perversité et de ce qui porte atteinte à la dignité. Troisièmement, chaque transmetteur doit être précis dans sa mémorisation (<em>dabt</em>), qu&apos;il transmette de mémoire ou à partir de ses écrits. Quatrièmement, le hadith ne doit pas comporter d&apos;anomalie (<em>shudhudh</em>), c&apos;est-à-dire qu&apos;il ne doit pas contredire ce que rapportent des transmetteurs plus fiables. Cinquièmement, le hadith ne doit pas comporter de défaut caché (<em>&apos;illa</em>).
                </p>

                <HadithBlock
                  number={3}
                  title="La religion est le bon conseil"
                  narrator="Tamim ad-Dari"
                  arabic="الدِّينُ النَّصِيحَةُ قُلْنَا لِمَنْ قَالَ لِلَّهِ وَلِكِتَابِهِ وَلِرَسُولِهِ وَلِأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ"
                  translation="La religion, c&apos;est le bon conseil. Nous avons demandé : envers qui ? Il a dit : envers Allah, envers Son Livre, envers Son Messager, envers les dirigeants des musulmans et envers l&apos;ensemble des musulmans."
                  source="Sahih Al-Bukhari, n°57 (mu&apos;allaq) — Sahih Muslim, n°55"
                  grade="sahih"
                  explanation="Ce hadith résume l&apos;esprit même de la méthodologie d&apos;Al-Bukhari : la nasîha (sincérité, bon conseil) envers le Messager d&apos;Allah inclut la préservation fidèle de ses paroles. Les savants du hadith considèrent leur discipline comme la forme la plus élevée de nasîha envers le Prophète ﷺ, car elle consiste à distinguer ce qui lui est authentiquement attribué de ce qui lui est faussement imputé. Al-Bukhari a consacré sa vie à cette mission, protégeant la Sunna de toute altération."
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Mais Al-Bukhari a ajouté une condition supplémentaire qui le distingue de Muslim et de tous les autres compilateurs : il exigeait la preuve de la rencontre effective (<em>liqa&apos;</em>) entre chaque maillon de la chaîne de transmission. Là où Muslim se contentait de la contemporanéité (<em>mu&apos;asara</em>) — le fait que deux transmetteurs aient vécu à la même époque —, Al-Bukhari demandait la preuve qu&apos;ils s&apos;étaient réellement rencontrés et avaient échangé le hadith en personne. Cette condition a considérablement réduit le nombre de hadiths acceptés, mais a garanti un niveau d&apos;authenticité inégalé.
                </p>

                <HadithBlock
                  number={4}
                  title="Qu&apos;Allah fasse resplendir le visage de celui qui transmet"
                  narrator="Zayd ibn Thabit"
                  arabic="نَضَّرَ اللَّهُ امْرَأً سَمِعَ مِنَّا حَدِيثًا فَحَفِظَهُ حَتَّى يُبَلِّغَهُ، فَرُبَّ حَامِلِ فِقْهٍ إِلَى مَنْ هُوَ أَفْقَهُ مِنْهُ، وَرُبَّ حَامِلِ فِقْهٍ لَيْسَ بِفَقِيهٍ"
                  translation="Qu&apos;Allah fasse resplendir le visage de celui qui entend de nous un hadith, le mémorise puis le transmet. Car il se peut que le porteur de science le transmette à plus savant que lui, et il se peut que le porteur de science ne soit pas lui-même savant."
                  source="Sahih Al-Bukhari (cité dans les introductions) — Sunan Abu Dawud, n°3660"
                  grade="sahih"
                  explanation="Ce hadith prophétique est le fondement même de la transmission du hadith. Le Prophète ﷺ invoque la bénédiction d&apos;Allah pour celui qui préserve et transmet fidèlement ses paroles. L&apos;expression &laquo; qu&apos;Allah fasse resplendir son visage &raquo; est une invocation de lumière et de beauté pour les transmetteurs. Ce hadith reconnaît également que la transmission peut précéder la compréhension : un transmetteur peut porter un hadith dont un autre saisira mieux la portée. C&apos;est pourquoi la chaîne de transmission (isnad) est si importante."
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La méthodologie d&apos;Al-Bukhari se manifeste également dans l&apos;organisation de son recueil. Chaque chapitre (<em>bab</em>) porte un titre (<em>tarjama</em>) qui reflète la déduction juridique que l&apos;imam tire du hadith. Les savants disent : &laquo;&nbsp;Le fiqh d&apos;Al-Bukhari se trouve dans ses titres de chapitres&nbsp;&raquo; (<em>fiqh al-Bukhari fi tarajimihi</em>). Cette particularité fait du Sahih non seulement un recueil de hadiths, mais aussi un ouvrage de jurisprudence implicite.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences du hadith"
                description="Étudiez la terminologie du hadith, les critères d&apos;authenticité et les grands recueils avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Thèmes majeurs       */}
              {/* ============================== */}
              <section id="themes-majeurs" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les thèmes majeurs du Sahih Al-Bukhari
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Sahih Al-Bukhari est organisé en 97 livres (<em>kitab</em>) couvrant l&apos;ensemble des aspects de la vie du musulman. De la révélation à l&apos;unicité divine, de la prière au jeûne, des transactions commerciales au jihad, chaque domaine est illustré par des hadiths soigneusement sélectionnés. Voici quelques-uns des hadiths les plus célèbres du recueil, représentant la diversité de ses thèmes.
                </p>

                <HadithBlock
                  number={5}
                  title="L&apos;islam est bâti sur cinq piliers"
                  narrator="Ibn &apos;Umar"
                  arabic="بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَالْحَجِّ، وَصَوْمِ رَمَضَانَ"
                  translation="L&apos;islam est bâti sur cinq piliers : l&apos;attestation qu&apos;il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah et que Muhammad est le Messager d&apos;Allah, l&apos;accomplissement de la prière, l&apos;acquittement de la zakat, le pèlerinage et le jeûne du mois de Ramadan."
                  source="Sahih Al-Bukhari, n°8"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus connus de l&apos;islam. Il résume la structure fondamentale de la pratique religieuse en cinq piliers indissociables. Al-Bukhari l&apos;a placé au début de son recueil, dans le Livre de la foi (Kitab al-Iman), pour établir d&apos;emblée les fondements sur lesquels repose tout le reste. Les savants expliquent que la métaphore de la construction (bunya) indique que ces piliers sont les supports sans lesquels l&apos;édifice de l&apos;islam s&apos;effondre. Chacun des piliers fait ensuite l&apos;objet de chapitres détaillés dans le Sahih."
                />

                <HadithBlock
                  number={6}
                  title="Aucun de vous ne sera véritablement croyant"
                  narrator="Anas ibn Malik"
                  arabic="لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ"
                  translation="Aucun de vous ne sera véritablement croyant tant qu&apos;il n&apos;aimera pas pour son frère ce qu&apos;il aime pour lui-même."
                  source="Sahih Al-Bukhari, n°13"
                  grade="sahih"
                  explanation="Ce hadith, dans sa brièveté, pose un principe éthique universel : l&apos;altruisme comme mesure de la foi. Al-Bukhari l&apos;a placé dans le Livre de la foi pour montrer que la croyance n&apos;est pas seulement une affirmation théologique, mais se manifeste dans le comportement envers autrui. Les savants expliquent que la négation de la foi ici ne signifie pas la mécréance, mais l&apos;imperfection de la foi. Ce hadith est l&apos;un des quarante hadiths sélectionnés par l&apos;imam An-Nawawi, ce qui témoigne de son importance capitale dans l&apos;éthique islamique."
                />

                <HadithBlock
                  number={7}
                  title="Le musulman est celui dont les musulmans sont épargnés"
                  narrator="&apos;Abdullah ibn &apos;Amr"
                  arabic="الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ، وَالْمُهَاجِرُ مَنْ هَجَرَ مَا نَهَى اللَّهُ عَنْهُ"
                  translation="Le musulman est celui dont les musulmans sont épargnés de sa langue et de sa main. Et l&apos;émigrant (muhajir) est celui qui abandonne ce qu&apos;Allah a interdit."
                  source="Sahih Al-Bukhari, n°10"
                  grade="sahih"
                  explanation="Ce hadith redéfinit l&apos;identité musulmane non pas par l&apos;apparence ou la déclaration, mais par l&apos;impact concret sur autrui. Le vrai musulman est celui qui ne nuit à personne, ni par ses paroles (la langue) ni par ses actes (la main). De même, la vraie émigration (hijra) n&apos;est pas seulement géographique, mais spirituelle : quitter les péchés. Al-Bukhari a placé ce hadith dans les premiers chapitres de son recueil pour souligner que la foi authentique se traduit en comportement vertueux et en protection de la dignité d&apos;autrui."
                />

                <HadithBlock
                  number={8}
                  title="Celui qui jeûne le Ramadan avec foi et en espérant la récompense"
                  narrator="Abu Hurayra"
                  arabic="مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ"
                  translation="Celui qui jeûne le mois de Ramadan avec foi et en espérant la récompense d&apos;Allah, ses péchés passés lui seront pardonnés."
                  source="Sahih Al-Bukhari, n°38"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus importants du Livre du jeûne dans le Sahih Al-Bukhari. Il pose deux conditions pour que le jeûne soit source de pardon : la foi (croire que le jeûne est une obligation divine) et l&apos;ihtisab (espérer la récompense d&apos;Allah exclusivement). Les savants expliquent que jeûner par habitude culturelle ou par pression sociale, sans foi ni espérance, ne remplit pas ces conditions. Ce hadith illustre comment Al-Bukhari structure son recueil autour des actes d&apos;adoration fondamentaux."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths ne représentent qu&apos;un aperçu de la richesse du Sahih Al-Bukhari. Le recueil aborde également des thèmes comme les bonnes manières (<em>adab</em>), les invocations (<em>du&apos;a</em>), le commerce, le témoignage, les récits des prophètes, le tafsir du Coran et l&apos;eschatologie. Chaque chapitre est introduit par un titre reflétant la compréhension juridique profonde de l&apos;imam Al-Bukhari.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le Sahih Al-Bukhari
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam, toutes époques et toutes écoles confondues, ont unanimement reconnu la prééminence du Sahih Al-Bukhari. Leurs témoignages permettent de mesurer l&apos;impact de cette œuvre sur la science islamique.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le livre le plus authentique après le Livre d&apos;Allah est le Sahih d&apos;Al-Bukhari. Il n&apos;y a pas sous la voûte du ciel un livre plus authentique après le Coran que le recueil d&apos;Al-Bukhari.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>introduction au Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Al-Bukhari est le plus grand spécialiste du hadith qu&apos;Allah ait produit, et le Jami&apos; as-Sahih est un ouvrage que l&apos;islam n&apos;a jamais vu de semblable. Quant à son fiqh, il est dans les titres de ses chapitres : celui qui les médite y trouve une science immense.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;J&apos;ai présenté mon recueil à Ahmad ibn Hanbal, à Yahya ibn Ma&apos;in et à Ali ibn al-Madini, et ils l&apos;ont tous approuvé. Aucun d&apos;eux n&apos;a trouvé de hadith dont l&apos;authenticité soit contestable, si ce n&apos;est quatre hadiths, et Al-Bukhari avait raison à leur sujet.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam Al-Bukhari, <em>rapporté par al-Firabri</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Lorsque tu vois un homme critiquer Al-Bukhari, alors doute de la religion de cet homme. Car Al-Bukhari est un imam dont la grandeur fait consensus parmi les gens de science.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Abu Zayd al-Marwazi, <em>cité par as-Subki</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces témoignages illustrent le consensus des savants sur l&apos;authenticité du Sahih Al-Bukhari. Ce consensus (<em>ijma&apos;</em>) donne au recueil un statut unique dans la littérature islamique : ses hadiths sont acceptés comme preuves juridiques et théologiques par l&apos;ensemble des écoles sunnites. Le commentaire le plus célèbre du recueil, le <em>Fath al-Bari</em> d&apos;Ibn Hajar al-Asqalani, compte à lui seul 13 volumes et reste, six siècles après sa rédaction, la référence incontournable pour l&apos;explication de chaque hadith.
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
                  L&apos;étude du Sahih Al-Bukhari — sa genèse, sa méthodologie et son contenu — permet de dégager des leçons concrètes pour le musulman contemporain :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Purifier son intention dans la quête du savoir
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Al-Bukhari a ouvert son recueil par le hadith des intentions. Avant de lire, d&apos;étudier ou d&apos;enseigner les hadiths, le musulman doit s&apos;assurer que son intention est dirigée vers Allah seul, et non vers la renommée ou la polémique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Vérifier les informations avant de les transmettre
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La méthodologie d&apos;Al-Bukhari enseigne la rigueur dans la vérification. À l&apos;ère des réseaux sociaux, ce principe est plus pertinent que jamais : ne pas partager un hadith sans en avoir vérifié l&apos;authenticité auprès de sources fiables.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La persévérance dans la recherche du savoir
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Al-Bukhari a consacré seize ans à la compilation de son recueil et a voyagé dans tout le monde musulman. Son exemple enseigne que la science demande du temps, de la patience et des sacrifices. Il n&apos;y a pas de raccourci vers le savoir authentique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        L&apos;importance de la chaîne de transmission
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le système de l&apos;isnad est une spécificité de la communauté musulmane. Il enseigne que le savoir religieux ne se prend pas de n&apos;importe qui : il faut chercher des sources fiables, des enseignants qualifiés et des ouvrages reconnus par les savants.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Mettre en pratique ce que l&apos;on apprend
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Sahih Al-Bukhari n&apos;est pas un ouvrage de simple érudition : chaque hadith appelle à l&apos;action. Al-Bukhari lui-même était connu pour sa piété exemplaire, ses prières nocturnes et sa générosité. La science sans pratique est un fardeau, non une bénédiction.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Respecter les savants et leur héritage
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le consensus des savants sur l&apos;authenticité du Sahih Al-Bukhari est un rappel de l&apos;importance de respecter les autorités savantes en islam. Critiquer un ouvrage qui fait l&apos;objet d&apos;un ijma&apos; depuis plus de mille ans exige une compétence que peu possèdent.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths du Sahih Al-Bukhari dans leur langue originale et approfondissez votre connaissance des sciences islamiques."
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
                  title="Les 40 hadiths de l&apos;imam An-Nawawi : texte et explication"
                  description="Étudiez les quarante hadiths fondamentaux sélectionnés par l&apos;imam An-Nawawi avec traduction et commentaire."
                  href="/hadith-40-nawawi-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Définition et sciences du hadith en islam"
                  description="Comprendre la terminologie du hadith, les catégories d&apos;authenticité et les méthodes des savants."
                  href="/hadith-definition-sciences-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
